# Roadmap

What ships first, what ships next, and what is out of scope. The activation layer is not a single feature. It is a sequence of surfaces, each tied to a layer of the gap in `02-problem-statement.md`. This document is the recommended order of operations if Simpli takes the work to production.

## Phasing principle

Ship the highest leverage surface first, then layer in retention, then expand to adjacent populations. Concretely, that means leading with the screens that touch the largest population (Invited charities that never finish onboarding), then the dashboard and match flow for the Onboarded base, then the impact and referral loop.

## Phase 1: Convert the Invited bucket

**Target:** the 109 charities (55 percent of the production base) sitting at Invited or Claimed who never complete onboarding.
**Metric to move:** onboarding completion rate from 45 percent toward 70 percent.
**Surfaces:** Screen 1 (post call landing), Screen 2 (document upload).
**Why first:** this is the single largest leak and the screens are the simplest to instrument and ship. Screen 1 also has the cleanest read on whether value first sequencing actually works.

**What needs to be true to ship:**
- The match data shown on Screen 1 (estimated nearby donation value, active donors in the area, pallets available, families served) is generated from real platform data, not mocked. The production platform has the underlying data; it is a query problem, not a content problem.
- The intro call status and basic information collection states from Screen 1 are wired to the existing Charity Status field so the screen reflects real progress.
- Verification documents on Screen 2 match whatever Joseph's simplified on platform step is asking for in the new three phase intake flow.

**Dependencies:**
- Coordinate with Joseph on what fields move out of the thirteen section onboarding form and into the just in time donation match step. Phase 1 only works if onboarding is genuinely shorter than thirteen sections.

## Phase 2: Activate the Onboarded base

**Target:** the 44 charities currently Onboarded that have never received a donation (49 percent of the Onboarded cohort).
**Metric to move:** activation rate within the Onboarded cohort from about 50 percent to 75 percent.
**Surfaces:** Screen 3 (dashboard), Screen 4 (donation match).
**Why second:** the dashboard depends on the data being captured during Phase 1, and the match flow depends on Simpli's existing matching workflows being mature enough to surface a real donation through it. Both became possible once Joseph's three phase intake is live.

**What needs to be true to ship:**
- The match readiness score has weights agreed with the Simpli team. The score must reward populating the matching critical fields (pallet capacity, distribution centers, accepted items, operating hours) more than the cosmetic ones (brand assets, thank you letter templates).
- A real time match availability signal feeds Screen 3. The April 12 audit showed MissionMatch had zero active workflows on production at audit time; that needs to change before the dashboard does its primary job.
- The decline path on Screen 4 captures structured reasons that feed back into supply allocation.

**Dependencies:**
- MissionMatch and the Charity Approval workflow need to be running reliably on production.

## Phase 3: Close the loop

**Target:** every charity that has received a donation. Roughly 45 today, growing as Phase 1 and 2 land.
**Metric to move:** repeat activation (a charity receives a second and third donation), and impact report share rate as a leading indicator of charity satisfaction.
**Surfaces:** Screen 5 (impact report) and the "Ready for more" loop back to Screen 3.
**Why third:** Phase 3 only has volume to work with once Phase 1 and 2 are running. Until then, impact reports would feel sparse and the social sharing loop would not generate meaningful referral surface.

**What needs to be true to ship:**
- Impact data per charity is reliable enough to share publicly. The Media Gallery section in production already holds the photographic side of this; the numeric side needs the same maturity.
- The share targets are decided (LinkedIn, email to existing donors, embed on the charity's own site). Each target has a different format and tracking implication.

## Phase 4 and beyond: explicitly out of scope for this project

These are real opportunities surfaced during discovery that the team chose not to pursue. They are listed so that future scope conversations have a record of what was considered and deferred.

| Area | Why deferred |
|------|--------------|
| Volunteer management | Crowded category (Galaxy Digital, VolunteerHub). Any thin Simpli product would face steep adoption resistance and dilute focus from the activation gap. |
| Profile auto population from IRS filings and website data | Strong opportunity flagged in the secondary research (charities complain that GuideStar requires manual entry rather than scraping). Adjacent to the activation layer rather than part of it. Reasonable as a follow on. |
| Partial pallet or shared pallet matching | Would unlock the small or volunteer run charity archetype. Requires changes to Simpli's supply side and matching engine, not just charity facing surfaces. |
| Smart notifications as a separate email or SMS channel | The original Direction A. The activation layer absorbed the strongest parts of this into Screen 3 and Screen 4. A separate channel would compete with what is already on those screens. |
| Donation intake QR scanner | The original Direction C. Validated as a real pain (charities tracking in kind donations on paper and spreadsheets) but high adoption risk and not closest to the activation drop off. |

## What the team is not yet sure about

A few decisions that should be made before Phase 1 ships:

- **Where exactly does the activation layer live?** Inside the existing app.simpli.supply admin, on top of SearchCharities.org pages, or both? The PRD points at SearchCharities.org as the primary surface, with the admin as a fallback. Joseph and Tommy should confirm which environment Phase 1 ships into first.
- **What is the trigger for Screen 1?** Is it the post intro call email, a link in the existing Simpli invitation, both? This is a small decision with large downstream implications for instrumentation.
- **How does the match readiness score handle SimpliSecure vetting?** Two thirds of charities are unvetted. The score should probably surface vetting status as a separate axis rather than fold it into completeness, but the team has not formally decided.

These are the right questions to take into the first stakeholder review after Phase 1 design freezes.
