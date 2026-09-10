# Figma → Site Coverage

Tracking which pages in the [GRS-to-send Figma file](https://www.figma.com/design/xzRPUESqw7KPsh8ucXkhxn/GRS-to-send) have been matched against the live Next.js implementation. Updated as pages are checked — see git log for commit-level detail on each.

## Status

| Figma page | Status | Notes |
|---|---|---|
| Home | ✅ Done | Done prior to this tracking pass. |
| Disciplinary Summary | ✅ Done | Restyled as a color-coded photo card grid (`bd7b7f0`). |
| Funding Stream | ✅ Done | Per-scheme accent colors, renamed "Private Health Fund Clients", CTA → Contact Us (`63a53f9`). |
| Join Us | ✅ Done | Staggered card wall via CSS multi-column (`d2ae23c`). |
| Our Governance | ✅ Done | Honey-bordered pillar cards, rust committee badges (`b6cbd56`). |
| Our Story | ✅ Done | Alternating photo/text timeline + real connecting "path" layer (`03af374`, `583fd65`). |
| Our Team | ✅ Done | Card grid for all 4 groups, not just Leadership (`3a7d0bf`). |
| Footer | ✅ Done | Locations + Contact Us columns replacing the old nav-link grid (`b8ad252`). |
| Psychology | ✅ Done | Turned out to be the shared `DisciplinePage` template — redesigned for **all 8 discipline pages** (OT, Physio, Speech Pathology, Psychology, Dietetics, Music Therapy, Art Therapy, Specialist Behaviour Support) (`eb31a27`). |
| Specialist Behaviour Support | ✅ N/A | Unfinished duplicate of the Psychology frame in Figma (still titled "Psychology" inside) — nothing to build, already covered by the discipline template above. |
| Sydney | ✅ Done | Turned out to be the shared `LocationPage` template — redesigned for **all 3 location pages** (Sydney, Brisbane, Gold Coast): full-bleed photo hero, consolidated 3-card info row (`2cc85e4`). |
| Brisbane | ✅ Done | Covered by the Sydney/LocationPage template work above. |
| Gold Coast | ✅ Done | Covered by the Sydney/LocationPage template work above. |
| Career Path | ✅ Done | Turned out to be the shared `CareerPage` template — restyled for **all 5 career sub-pages** (Career Path, Clinical Rotations, Clinical Supervision, Continued Professional Development, Current Advertised Positions): inline dot-separated section rows, optional "Our Approach" highlight cards on Career Path only (`520cf2f`). |
| Staff Profile Template | ✅ N/A | Re-checked node 450-622 — turned out to be an `html.to.design` snapshot of our own live `/bronwyn-wright` page (frame literally named `https://grs-nu.vercel.app/...`), not a fresh design spec. Same pattern as the Specialist Behaviour Support / Our Team snapshots above — nothing to build. |

**All pages in the GRS-to-send Figma file are now accounted for.** No open items remain from this coverage pass.

## Patterns established along the way

- **Shared templates**: several "pages" in Figma turned out to be one shared React template used by multiple site pages (disciplines, locations, careers). Always check whether a page is templated before treating a Figma page as a one-off.
- **Placeholder content**: Figma sometimes shows real-looking mockup content that's explicitly unfinished — labelled "Photography placeholder", a testimonial attributed to literal `"[Clinician name]"`, or a frame that's just a duplicate of another page never customized. Don't reproduce these as if real; skip them (or use a gradient placeholder for images, consistent with the team/location card pattern) and note it in the commit.
- **New content gaps**: when Figma introduces a new section with no matching field in `lib/content/*.ts` (e.g. the "What We Offer" 3-card summary), add a new optional field, write grounded copy from that entry's own overview/approach text, and confirm scope with the user before generating it wholesale.
- **Same word, different meaning**: a sitewide terminology change (e.g. "Streams" → "Specialities") can hide multiple distinct senses of the same word in the same file — read full sentence context per occurrence, don't blind find-replace.
- **Deploy step**: every change here needs `vercel alias set <new-deployment-url> grs-nu.vercel.app` after push — the alias doesn't auto-follow deploys. Always curl-verify live before calling something shipped.
