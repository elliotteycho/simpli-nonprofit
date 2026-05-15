# Design Rationale

Why the prototype is five screens, what each one does in the activation funnel, and how the flow maps onto the three phase onboarding rebuild Joseph Oliver was already building on the Simpli side.

## The funnel the prototype is trying to fix

The April 20 production audit established three compounding drop offs:

- 55 percent of charities never complete onboarding
- Even among the 45 percent that do, only about half ever receive a donation
- The onboarded base needs to roughly double to absorb projected corporate supply

The activation layer is not a single feature. It is a five screen sequence that attacks each drop off at the moment it happens. Each screen has a single funnel job.

## Mapping to Joseph's three phase rebuild

Joseph was already restructuring intake into three phases when scope was locked: an intro call, a simplified on platform step, and a donation match step. The prototype layers an engagement and retention surface on top of those phases rather than replacing them.

| Phase (Joseph) | Prototype screens | What the activation layer adds |
|----------------|-------------------|--------------------------------|
| Intro call | Screen 1 | A post call landing page that shows what completion unlocks, replacing the generic "fill out your profile" email |
| Simplified on platform step | Screens 2 and 3 | A document upload step framed as unlocking premium donations, and a dashboard with a match readiness score that turns the thirteen section profile into a legible path |
| Donation match | Screens 4 and 5 | A frictionless match acceptance flow that collects warehouse and logistics fields just in time, followed by a shareable impact report that closes the loop |

## Screen by screen

### Screen 1: Post call landing

**Funnel job:** convert the 55 percent who never complete onboarding.

The single biggest leak is between Invited and Onboarded. The lever is value first sequencing. Before the charity is asked to fill out a form, the screen shows four concrete numbers based on its location: estimated nearby donation value ($47,500 in the prototype), number of active donors in the area, pallets available this month, and families it could serve. The "Get started in 5 minutes" checklist anchors the completion arc against a small, legible time commitment.

The two completed items at the top of the checklist ("Intro call with Simpli team" and "Basic organization info collected") are deliberate. They give the charity the momentum signal of having already crossed the starting line before being asked for anything else.

### Screen 2: Document upload

**Funnel job:** keep the charity moving through verification without reverting to the thirteen section form pattern.

Verification is a documented compliance step, not a place to innovate, so the screen does the minimum necessary: three documents (IRS 990, Certificate of Insurance, W-9), each with a one line description, with the framing "this unlocks premium corporate donations" to keep the value lens active. The step indicator and progress bar at the top exist to make the remaining work feel finite. The same form fields exist in production today; what changes is the framing and the sequencing.

### Screen 3: Charity dashboard

**Funnel job:** attack the second drop off, the 77 percent who never receive a donation, by keeping the charity engaged across the roughly 90 day order cycle.

Three pieces of the dashboard do specific work:

- **Match readiness score.** Profile completeness, mapped against the thirteen sections, expressed as one number with a target. This converts a long form into a legible progress signal that ties directly back to receiving donations. It is the answer to the "what do I get for filling this out" question that GuideStar and Charity Navigator profiles fail to answer.
- **One donation available.** The screen surfaces real match opportunities. This is the smart notification logic from the original Direction A, embedded into the dashboard instead of a separate email or SMS channel.
- **Activity near you.** Social proof from other charities in the area receiving donations, which directly counters the "is this real" question that drives drop off after the intro call.

### Screen 4: Donation match

**Funnel job:** make the donation match moment frictionless by collecting warehouse and logistics fields just in time.

This is where the activation layer makes its strongest argument against upfront onboarding. Pallet capacity, delivery address, and a receiving contact are exactly the fields charities leave blank during initial onboarding. They are also the fields actually needed to fulfill a donation. The screen requests them at the moment they are concretely needed (a Fortune 500 brand has a donation ready, here is what we need from you to accept it) rather than abstractly as part of a setup form. Accept and Decline are equal weight buttons.

### Screen 5: Impact report

**Funnel job:** close the loop and convert one activated charity into a retention and referral surface.

Secondary research found that foundations explicitly give repeatedly to organizations that send them reports, but only 78 percent of donors know matching exists at all. Charities have a reporting burden and a low baseline of impact storytelling. The impact report screen does three things: shows total impact since onboarding, offers a one tap shareable summary the charity can use with its own funders, and surfaces a "Ready for more" prompt that loops back to the dashboard. Each retained charity becomes a story Simpli can use to attract the next one.

## What the prototype is deliberately not

It is not a redesign of the onboarding form. Joseph owns that. It is not a CRM, not a volunteer management tool, and not a competitor to Galaxy Digital or Bloomerang. It is also not pretending to be a polished consumer mobile app; the canvas framing in the prototype shell is intentional, because the production version will live inside the existing Simpli admin and on SearchCharities.org pages, not in a standalone iOS app.

## Heuristics that drove the visual choices

- **One headline number per screen.** Each screen leads with a single concrete figure ($47,500 nearby, step 2 of 3, match readiness percent, one donation available, total impact). Charities decide whether to keep reading based on that number.
- **Time anchoring on the longest screens.** "Average completion: 5 minutes" on Screen 1 and the explicit step indicator on Screen 2 exist because secondary research found that uncertainty about time commitment is what causes nonprofits to abandon any new tool.
- **Just in time data capture.** No field is asked for before the screen where it is concretely useful. Pallet capacity appears on the donation match screen, not on the onboarding form.
- **Default to value framing.** The word "unlock" appears in every screen that asks for data. Form fields without a value framing are the production baseline; this is what the activation layer is trying to differentiate against.
