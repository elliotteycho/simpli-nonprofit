# Success Metrics

What "the activation layer worked" means in numbers, tied directly to the three layered gap in `02-problem-statement.md`. These are the metrics Simpli should instrument when the production version of the activation layer ships.

## Baseline

All baselines come from the April 20, 2026 production audit (`research/production-audit-apr20.md`).

| Metric | April 20 baseline | Target |
|--------|-------------------|--------|
| Total charities on platform | 198 | 200 plus, with a meaningful share of large absorption charities |
| Onboarding completion rate (Invited or Claimed to Onboarded) | 45 percent (89 of 198) | 70 percent or higher |
| Activation rate (Onboarded to first donation received) | About 50 percent within the Onboarded cohort | 75 percent or higher |
| Activation rate across the full base (any charity to first donation) | 22.7 percent (45 of 198) | 50 percent or higher |
| Donated pallets per active charity per month | Not currently surfaced as a platform metric | At least 1.5 to 2 pallets per active charity per month to clear projected supply |
| Average time from order created to completed | 90 days | Hold or reduce; the activation layer is not the primary lever here, but a more engaged charity base should shorten the tail |
| Profile completeness on critical matching fields (pallet capacity, distribution centers, accepted items) | Poor even among active charities; Midwest Food Bank had an empty pallet capacity field | 95 percent of Onboarded charities have all three critical fields populated |

## Primary funnel metrics

Three numbers, one per layer of the gap.

### 1. Onboarding completion rate

The percent of charities that move from Invited or Claimed to Onboarded within a defined window (suggested: 30 days from invitation).

This is the headline metric for whether value first sequencing on Screen 1 is working. The activation layer's first job is to take a charity that would have abandoned the thirteen section form and get it to finish. A jump from 45 percent to 70 percent on a base of 200 charities means roughly 50 additional onboarded charities, which moves the doubling target meaningfully closer.

Instrumentation: status timestamp at invitation and at onboarding completion. Likely already in the data model via the existing Charity Status field (Invited, Claimed, Onboarded).

### 2. Activation rate

The percent of Onboarded charities that receive their first donation within a defined window (suggested: 60 days from onboarding completion, given the 90 day average order cycle).

This is the headline metric for the dashboard and match readiness score on Screen 3. Onboarding completion does not equal activation today, which is the strongest single data point in the audit. Lifting this from roughly 50 percent to 75 percent within the Onboarded cohort, combined with a larger Onboarded base, is what closes the supply demand gap.

Instrumentation: first donation timestamp per charity, joined against onboarding completion timestamp. The current data model has Received Donation as a yes or no flag; this metric needs a date.

### 3. Pallets absorbed per active charity per month

The throughput metric. Counting charity activations alone does not solve the supply demand math if those charities each absorb half a pallet a month. Cardinal Health alone has 221 pallets in a single pilot.

Instrumentation: monthly aggregation of pallet count on completed orders, divided by the count of charities that received at least one donation that month.

## Secondary metrics

These are diagnostic, not headline.

| Metric | What it tells us |
|--------|------------------|
| Screen 1 to Screen 2 conversion | Whether value first framing is enough to start the form, or whether the gap is at the verification step |
| Time spent on Screen 3 (dashboard) per session | Whether the dashboard is an engagement surface or a one time hit |
| Match readiness score distribution across the base | Whether the score is meaningfully moving profile completeness, or whether charities ignore it |
| Donation accept rate on Screen 4 | Whether just in time logistics capture is causing match rejections, and whether the warehouse and pallet capacity fields need defaults or smart fills |
| Impact report shares (Screen 5) | Whether the retention loop is producing referral surface, indirect evidence of charity satisfaction |
| Decline reasons on Screen 4 | Pattern of why charities reject otherwise eligible matches, feeds back into supply allocation |

## What the activation layer does not move

The activation layer is scoped to engagement and retention. Several adjacent metrics matter to Simpli but are not its job to fix:

- **Charity acquisition source attribution.** The April 12 audit found that 99.4 percent of charity acquisition source is tracked as Unknown. Fixing this requires platform instrumentation, not a charity facing feature.
- **SimpliSecure vetting rate.** Two thirds of charities are unvetted. The activation layer should work regardless of vetting status, but improving the vetting pipeline is a separate workstream.
- **Geographic distribution of the charity base.** 32 percent of charities are in California. Diversification is a supply side and outreach problem; the activation layer can support targeted outreach but does not drive it alone.
- **Sales pipeline conversion.** 13 active sales leads worth $7.3M plus are stalled at quote stage. That bottleneck is operational, not charity facing.

## Reporting cadence

Two cadences are appropriate.

- **Weekly:** onboarding completion rate and activation rate, with the cohort defined by invitation date for completion and onboarding date for activation. Trends matter more than single week values given the 30 to 60 day windows.
- **Monthly:** pallets absorbed per active charity, profile completeness on critical matching fields, and the impact report share rate. These move slowly enough that weekly readings are noisy.
