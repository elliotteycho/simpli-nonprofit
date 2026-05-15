# Personas

Three charity archetypes that came out of the audits, the secondary research, and the SearchCharities.org profile data. They exist to make scope and design tradeoffs concrete. Not every charity on Simpli fits one of these cleanly, but most of the patterns the activation layer is trying to fix sit in the gaps between them.

The archetypes are not based on primary interviews. They are inferred from the production audit of 198 charities, the IRS filing data behind SearchCharities.org, and the community thread analysis in `research/secondary-research-brief.md`. Primary interviews would sharpen them and the team should treat that as the next discovery step before the activation layer ships in production.

## Archetype 1: The high capacity food bank

**Example in production:** Midwest Food Bank NFP Inc.
**Onboarding status:** Onboarded but profile incomplete (empty Pallet Capacity field).
**Has received donations:** Yes.

A regional or national food bank with paid staff, a warehouse, an existing logistics operation, and an annual budget in the high single digit millions or above. It already moves serious volume. It is the kind of charity Simpli most needs more of, because it can absorb dozens of pallets per month and unblock the supply demand math.

**What they care about:**
- Predictability. They plan donations against a distribution calendar weeks or months out.
- Throughput. They want to know how much volume they can plan against, not how to log in to one more dashboard.
- Existing tools. They are probably running PantrySoft, Link2Feed, or a custom system, plus a CRM. They will not adopt a new login.

**Where the activation layer helps them:**
- Screen 3 surfaces match availability without requiring a new place to check.
- Screen 4 captures warehouse and pallet capacity exactly when it matters, rather than as part of a thirteen section setup form they will leave blank.

**Where the activation layer cannot help:**
- Their bottleneck is rarely awareness. It is logistics capacity. The activation layer should not assume that surfacing more matches automatically lifts throughput; supply allocation also needs to respect their stated cadence.

## Archetype 2: The mid sized service charity

**Example:** A regional charity with revenue between $300K and $5M, focused on a specific cause (housing, beauty and dignity, family support, disaster relief).
**Onboarding status:** Mixed. Many are Invited but never finish. Some Claim a profile and abandon partway. A subset finish onboarding and never get matched.
**Has received donations:** Roughly 50 percent of those that complete onboarding.

This is the modal Simpli charity and the population the activation layer is most squarely designed for. Small enough to feel the overhead of a thirteen section profile form, large enough that an extra donation match a quarter is meaningful, and resource constrained in exactly the ways the secondary research describes. One or two paid staff, no dedicated technology owner, often running on a small CRM (Bloomerang, Neon, DonorPerfect), Google Drive, and email.

**What they care about:**
- Specificity. They want to know if a donation will actually fit what they distribute, not see generic "we can help" messaging.
- Time. The "average completion: 5 minutes" anchor on Screen 1 is aimed directly at them.
- Proof. The "Activity Near You" section on Screen 3 and the impact report on Screen 5 matter because they are deciding whether Simpli is real.

**Where the activation layer helps them:**
- Screen 1 replaces a generic invitation email with concrete local potential value before asking for any new data.
- Screens 2 and 3 turn a thirteen section form into a legible match readiness arc.
- Screen 5 hands them a shareable impact summary they can put in their own annual report or grant applications.

**Where they can fall through the cracks:**
- If the match readiness score is too easy to hit, the charity reaches a high score without populating the critical matching fields (pallet capacity, distribution centers, accepted items). The score weighting matters.

## Archetype 3: The small or volunteer run charity

**Example:** A community organization with revenue under $300K, often volunteer led, no warehouse, distributing donations into a network of partner organizations or directly to recipients.
**Onboarding status:** Often Invited and stuck. Occasionally Claimed and abandoned. Rare to fully Onboard.
**Has received donations:** Almost never.

This archetype is overrepresented in the Invited bucket. They have intermittent capacity, no dedicated person managing the relationship with Simpli, and limited storage. A pallet of corporate excess inventory may genuinely be too much to handle without help. The honest answer is that the activation layer can only do so much for them.

**What they care about:**
- Surprise free experience. They cannot react quickly to a match that requires same week pickup.
- Right sized matches. They need partial pallets, frequently. Simpli's current model is pallet level.
- Light lift. Every additional field is a barrier.

**Where the activation layer helps them:**
- Screen 1's value first framing gives them a reason to complete the profile at all, which at least puts them in the discoverable pool.
- Screen 4's "Decline" option is a real option, weighted equally with Accept. They should not feel like declining is a failure state.

**Where the activation layer does not solve their problem:**
- The platform's pallet level granularity is the deeper issue. A partial pallet or shared pallet feature is a separate workstream. Until then, this archetype is likely to remain low activation, and that is acceptable as long as the platform does not pretend otherwise.

## How the archetypes shaped scope decisions

- **Activation layer is built around archetype 2.** It is the largest population and the one where every screen does real work. Archetype 1 benefits from the dashboard and the just in time match flow. Archetype 3 is honestly served by giving them a clean way to decline.
- **No persona is asked to learn a new tool.** Both Insight 1 from `03-discovery-insights.md` (charities are short on attention, not tools) and the Reddit thread evidence pointed at this.
- **Volunteer management is out of scope.** It is the pain point Simpli's CEO heard most, but it is the wrong job for any of these archetypes to solve through Simpli. The decision log captures this.
