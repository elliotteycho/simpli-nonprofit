# Discovery Insights

The synthesis layer between raw research and the activation layer concept. The research folder holds the source material. This document pulls out the four insights that did the most work in shaping the product direction.

## Insight 1: Charities are not short on tools. They are short on attention.

Secondary research across the Momentive 2025 report, the Sage 2025 Nonprofit Tech Impact Report, and four full-text reads of r/nonprofit threads pointed at the same root cause. The average nonprofit operates across 3 to 10 disconnected platforms. The dominant frustration is not that any single tool is broken. It is that nobody surfaces the right information at the right time inside whatever tools the charity already uses.

The matching gift gap is the cleanest example. Only 1.31 percent of eligible matched giving is actually captured. 78 percent of donors do not know matching exists at all. The leading purpose built matching gift platform, Double the Donation, had a top voted Reddit comment from a three year customer reporting zero ROI. The tool was not absent. The push was.

The implication for Simpli was that any feature requiring a new login, new dashboard, or new platform faces deep adoption resistance. The activation layer leans hard into this. It lives on top of pages charities are already touching rather than introducing a new product surface.

## Insight 2: Onboarding completion is Simpli's biggest leak, and the leak is in the experience, not the data model.

The April 20 production audit of 198 charities found that 109 of them, 55 percent of the base, received an invitation and never finished onboarding. 97 are still at Invited. 12 Claimed a profile and stopped.

The onboarding flow is a thirteen section profile form sent through a generic invitation email. A charity is asked to provide brand assets, programs, NTEE categories, pallet capacity, distribution centers, accepted item types, operating hours, thank you letter templates, and SimpliSecure verification before it has seen anything concrete in return. Even Midwest Food Bank, an Onboarded charity that has received donations, had a completely empty Pallet Capacity field. If a large, well resourced food bank does not finish the form, smaller charities are almost certainly worse.

This reframed the problem from "build a better intake form" to "give the charity a reason to want to fill the form out." Value first sequencing came directly from this. Show match data, local impact estimates, and a five minute completion arc before asking for the form fields.

## Insight 3: Onboarding completion does not equal activation. There is a second drop off after the form.

The same audit found that across all 198 charities, only 45 (22.7 percent) have ever received a donation. Even among the 89 charities that finished onboarding, roughly half have never been matched to a donation. Completing the form is necessary but nowhere near sufficient.

This insight is what made an onboarding focused product the wrong answer. Joseph Oliver, the Simpli engineer, was already rebuilding intake into a three phase flow: intro call, simplified on platform step, and donation match. Doubling down on the form would have duplicated his work. The PM team's contribution had to be the engagement and retention experience that wraps those phases. Concretely, that meant a match readiness score that keeps profile completion legible and rewarding through the roughly 90 day order cycle, and a frictionless donation match moment that captures warehouse and logistics details just in time.

## Insight 4: The supply demand math forces a doubling. Activation speed is as important as activation count.

Simpli is targeting $150M or more in donations this year, which translates to roughly 1,500 to 3,000 pallets and about 150 pallets per month of charity absorption capacity. That requires 200 plus charities, including large ones that can each absorb dozens of pallets per month. Today the platform has 89 onboarded charities and 45 that have ever received a donation. The base needs to roughly double, and per charity throughput needs to rise at the same time.

This insight made the case that the activation layer is a strategic priority, not a polish item. The supply side is healthy. Cardinal Health alone has 221 pallets in a single active pilot. Six active pilots represent more than $4.57M in known value and 297 plus pallets. If the charity network does not grow and mobilize quickly, the corporate supply Simpli has spent two years cultivating sits idle. Activation is the rate limit on the whole business.

## How these insights shaped the solution

| Insight | Where it shows up in the activation layer |
|---------|--------------------------------------------|
| Charities are short on attention | Activation lives on top of SearchCharities.org pages instead of introducing a new tool to log into. |
| Onboarding leak is experience driven | Screen 1 leads with potential impact, local donor count, and a five minute completion arc before asking for any new data. |
| Activation is a separate drop off | Screen 3 is a match readiness score and dashboard that keeps the charity engaged through the order cycle, not just the form. |
| Supply demand math forces a doubling | Screens 4 and 5 collapse the donation match moment into a few just in time fields and follow it with a shareable impact report, so each activated charity also becomes a referral surface. |
