"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  TRAVEL_FEE_LOCATIONS,
  getTravelFeeLocation,
  resolveZone,
  type ZoneResult,
} from "@/lib/content/travel-fee-zones";

// Reimplementation of the live grs.health calculator (grs-live.joidea.com/
// grs/calculator) — see lib/content/travel-fee-zones.ts for the
// reverse-engineered zone tables and how this deliberately differs from
// the live site (real Zone + minutes for every location, not just Sydney).
//
// The live site routes the Google Distance Matrix lookup through its own
// backend (bn.grs-live.joidea.com/data) using the same publicly-exposed
// Maps API key it hands to the browser for Places Autocomplete anyway —
// there's no secret being protected. This rebuild calls
// google.maps.DistanceMatrixService directly from the browser via the
// Maps JavaScript API (no separate backend route needed) using the same
// key, temporarily borrowed from the live bundle — see
// NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local for the swap-before-launch
// note.

const inputStyles =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/15 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";

let mapsScriptPromise: Promise<void> | null = null;

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.google?.maps?.places) return Promise.resolve();
  if (mapsScriptPromise) return mapsScriptPromise;

  mapsScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });

  return mapsScriptPromise;
}

interface SelectedAddress {
  placeId: string;
  suburb?: string;
}

export default function TravelFeeCalculator() {
  const addressInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const [scriptReady, setScriptReady] = useState(false);
  const [locationKey, setLocationKey] = useState("");
  const [address, setAddress] = useState<SelectedAddress | null>(null);
  const [result, setResult] = useState<ZoneResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      setError("The travel fee calculator isn't configured yet — please contact us directly for a quote.");
      return;
    }
    loadGoogleMapsScript(apiKey)
      .then(() => setScriptReady(true))
      .catch(() => setError("Couldn't load the address lookup. Please try again later."));
  }, []);

  useEffect(() => {
    if (!scriptReady || !addressInputRef.current || autocompleteRef.current || !window.google) return;

    const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
      types: ["address"],
      componentRestrictions: { country: "au" },
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.place_id) {
        setAddress(null);
        return;
      }
      const suburb = place.address_components?.find((c) => c.types.includes("locality"))?.long_name;
      setAddress({ placeId: place.place_id, suburb });
      setResult(null);
      setError(null);
    });

    autocompleteRef.current = autocomplete;
  }, [scriptReady]);

  const handleCalculate = () => {
    const location = getTravelFeeLocation(locationKey);
    if (!location || !address || !window.google) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [{ placeId: location.placeId }],
        destinations: [{ placeId: address.placeId }],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        setLoading(false);
        const element = response?.rows?.[0]?.elements?.[0];
        if (status !== "OK" || !element || element.status !== "OK") {
          setError("Couldn't calculate a distance for that address — please try again.");
          return;
        }
        setResult(resolveZone(element.distance.value, location, address.suburb));
      },
    );
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
      <label className="block text-sm font-medium text-navy-900">
        Service Location <span className="text-orange-600">*</span>
        <select
          value={locationKey}
          onChange={(event) => {
            setLocationKey(event.target.value);
            setResult(null);
          }}
          className={`mt-2 ${inputStyles}`}
        >
          <option value="" disabled>
            Select Location
          </option>
          {TRAVEL_FEE_LOCATIONS.map((location) => (
            <option key={location.key} value={location.key}>
              {location.label}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-6 block text-sm font-medium text-navy-900">
        Your Address
        <input
          ref={addressInputRef}
          type="text"
          placeholder={scriptReady ? "Enter a location" : "Loading address lookup…"}
          disabled={!scriptReady}
          className={`mt-2 ${inputStyles}`}
        />
      </label>

      <button
        type="button"
        onClick={handleCalculate}
        disabled={!locationKey || !address || loading}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-orange-800 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Calculating…
          </>
        ) : (
          <>
            Calculate
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {result && (
        <div className="mt-8 border-t border-slate-200 pt-6">
          <h2 className="font-display text-lg font-bold text-navy-950">Distance and Fee</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Distance</dt>
              <dd className="font-semibold text-navy-950">{result.distanceKm} km</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Zone</dt>
              <dd className="text-right font-semibold text-navy-950">{result.zoneName}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Travel Fee (labour based travel time)</dt>
              <dd className="text-right font-semibold text-navy-950">{result.travelFee}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            At GRS, we follow the Pricing Arrangement approved by the NDIS to determine travel
            fees you are charged. These may include a combination of labour based fees for the
            clinician&apos;s time spent travelling to you + a kilometre allowance to cover
            vehicle running costs. You will be provided with a quote for travel when your
            Service Agreement is sent.
          </p>
        </div>
      )}
    </div>
  );
}
