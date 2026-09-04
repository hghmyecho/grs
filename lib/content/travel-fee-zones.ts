// Travel Fee Calculator zone tables — reverse-engineered from the live
// grs.health calculator widget (grs-live.joidea.com/grs/calculator),
// specifically its `w1B9` data module and `fetchGoogleDistance` model
// effect, Aug 2026. See components/TravelFeeCalculator.tsx for how this
// is used.
//
// How the live site resolves a zone: Google's Distance Matrix returns a
// driving distance in metres between the selected clinic and the
// visitor's address; that's rounded to 1 decimal km, then matched
// against a zone's (minDistance, maxDistance] range — i.e. distance must
// be STRICTLY GREATER than min and LESS THAN OR EQUAL TO max. The fee
// itself is never a dollar figure — it's a labour-time allowance (in
// minutes) that feeds into GRS's NDIS-approved Pricing Arrangement; a
// real dollar quote is only given at the Service Agreement stage.
//
// Deliberate deviation from the live site: grs-live.joidea.com only
// surfaces this Zone/minutes table for Silverwater (Sydney) — Southport
// and Moorooka have the identical zone shape but the live UI instead
// shows a coarser client-computed "Metro Area" bucket (0-10/10-30/30-45/
// 45+ km) and hides the real minutes entirely. Per the user (Aug 19
// 2026), this rebuild shows real Zone + minutes for all three locations
// instead of reproducing that inconsistency.
export interface FeeZone {
  name: string;
  minDistance: number;
  maxDistance: number;
  travelFee: string; // e.g. "15 mins", or "Individual arrangement" for the open-ended NSW tiers
}

export interface TravelFeeLocation {
  key: string;
  label: string;
  state: string;
  address: string;
  placeId: string;
  /** Silverwater-only: suburbs forced into NSW Zone 3 regardless of computed distance. */
  inclusiveLocations?: string[];
  /** Silverwater-only: suburbs forced into "Outside of NSW Zone" regardless of computed distance. */
  exclusiveLocations?: string[];
  zones: FeeZone[];
}

export const TRAVEL_FEE_LOCATIONS: TravelFeeLocation[] = [
  {
    key: "silverwater",
    label: "Silverwater - Sydney",
    state: "NSW",
    address:
      "Suite 102, Level 1, Small Tower, Gateway Business Park, 63-79 Parramatta Road, Silverwater NSW 2128",
    placeId: "ChIJaxsi7VSjEmsRIoVR1rX9GlE",
    inclusiveLocations: [
      "Werrington",
      "Cranebrook",
      "Kingswood",
      "Caddens",
      "Penrith",
      "Jamisontown",
      "Glenmore Park",
    ],
    exclusiveLocations: [
      "Kurnell",
      "Terrey Hills",
      "Duffys Forest",
      "Mount Colah",
      "Mount Kuring-gai",
      "Dural",
      "Kenthurst",
      "Annangrove",
      "Glaston",
      "Arcadia",
    ],
    zones: [
      { name: "NSW Zone 1", minDistance: 0, maxDistance: 8, travelFee: "15 mins" },
      { name: "NSW Zone 2", minDistance: 8, maxDistance: 30, travelFee: "30 mins" },
      {
        name: "NSW Zone 3",
        minDistance: 30,
        maxDistance: Number.MAX_VALUE,
        travelFee: "Individual arrangement",
      },
      {
        name: "Outside of NSW Zone",
        minDistance: 30,
        maxDistance: Number.MAX_VALUE,
        travelFee: "Individual arrangement",
      },
    ],
  },
  {
    key: "southport",
    label: "Southport - Gold Coast",
    state: "QLD",
    address: "1203/56 Scarborough Street, Southport QLD",
    placeId: "ChIJWY4g2fIPkWsRk5l9wlleuWw",
    zones: [
      { name: "QLD Zone 1", minDistance: 0, maxDistance: 15, travelFee: "15 mins" },
      { name: "QLD Zone 2", minDistance: 15, maxDistance: 25, travelFee: "22.50 mins" },
      { name: "QLD Zone 3", minDistance: 25, maxDistance: 35, travelFee: "30 mins" },
      { name: "QLD Zone 4", minDistance: 35, maxDistance: 45, travelFee: "45 mins" },
      { name: "QLD Zone 5", minDistance: 45, maxDistance: Number.MAX_VALUE, travelFee: "60 mins" },
    ],
  },
  {
    key: "moorooka",
    label: "Moorooka - Brisbane",
    state: "QLD",
    address: "8 Mayfield Road, Moorooka QLD",
    placeId:
      "Eis4IE1heWZpZWxkIFJkLCBNb29yb29rYSBRTEQgNDEwNSwgQXVzdHJhbGlhIlASTgo0CjIJYVcVOKNakWsRXa3DS31uvTkaHgsQ7sHuoQEaFAoSCRdM4DRzWpFrESA31ydeowIcDBAIKhQKEgnLSQbvvlqRaxFsg-DWn_1row",
    zones: [
      { name: "QLD Zone 1", minDistance: 0, maxDistance: 15, travelFee: "15 mins" },
      { name: "QLD Zone 2", minDistance: 15, maxDistance: 25, travelFee: "22.50 mins" },
      { name: "QLD Zone 3", minDistance: 25, maxDistance: 35, travelFee: "30 mins" },
      { name: "QLD Zone 4", minDistance: 35, maxDistance: 45, travelFee: "45 mins" },
      { name: "QLD Zone 5", minDistance: 45, maxDistance: Number.MAX_VALUE, travelFee: "60 mins" },
    ],
  },
];

export function getTravelFeeLocation(key: string) {
  return TRAVEL_FEE_LOCATIONS.find((l) => l.key === key);
}

export interface ZoneResult {
  distanceKm: number;
  zoneName: string;
  travelFee: string;
}

/**
 * Resolves a zone for a given driving distance, mirroring the live site's
 * `T(distanceMeters, zones, suburb)` logic exactly — including the
 * Silverwater-only suburb overrides. Guards against the live site's own
 * edge-case bug: at distance exactly 0 (or any distance outside every
 * zone's (min, max] range) it falls back to the nearest zone instead of
 * returning null/crashing.
 */
export function resolveZone(
  distanceMeters: number,
  location: TravelFeeLocation,
  suburb?: string,
): ZoneResult | null {
  const distanceKm = parseFloat((distanceMeters / 1000).toFixed(1));

  let zone = location.zones.find((z) => distanceKm > z.minDistance && distanceKm <= z.maxDistance);

  if (location.key === "silverwater") {
    const silverwater = getTravelFeeLocation("silverwater");
    if (suburb && silverwater?.inclusiveLocations?.includes(suburb)) {
      zone = location.zones.find((z) => z.name === "NSW Zone 3");
    } else if (suburb && silverwater?.exclusiveLocations?.includes(suburb)) {
      zone = location.zones.find((z) => z.name === "Outside of NSW Zone");
    }
  }

  // Fallback for distances the live site's own (min, max] ranges miss
  // entirely (distanceKm === 0 falls through every zone since minDistance
  // starts at 0 with a strict `>` test) — use the first zone instead of
  // crashing.
  if (!zone) {
    zone = location.zones.find((z) => distanceKm <= z.maxDistance) ?? location.zones[0];
  }

  if (!zone) return null;
  return { distanceKm, zoneName: zone.name, travelFee: zone.travelFee };
}
