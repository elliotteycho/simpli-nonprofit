# Simpli Production Platform Audit
**Date:** April 20, 2026  
**Platform:** app.simpli.supply (Production)  
**Version:** v4.12.7  
**Auditor:** Elliott Cho (elliott.e.cho@vanderbilt.edu)

---

## 1. Platform Navigation Structure

The production platform has three main navigation groups:

**Application:** Dashboard, Reports

**Team:** My Team, My Profile, My Locations

**Administration:** MissionControl, Charity Directory, Simpli Charities, Manage Orders, Restriction Groups, MissionMatch, Company Pilots, Sales Leads, Media Gallery

---

## 2. Dashboard (app.simpli.supply/dashboard)

Four headline KPI cards:

| Metric | Value | Pending |
|--------|-------|---------|
| Total Value | $15,150,500 | $6,366,791 pending |
| People Helped | 3,700,650 | 2,667,658 pending |
| Tons Diverted | 593 | 99 pending |
| CO₂ Prevented (BETA) | 32,976 MTCO₂e | 8 in-progress donations |

**Key insight:** 42% of total donation value ($6.4M) is still in "pending" status. This means nearly half of all tracked value has not yet been confirmed/completed. Similarly, 72% of people helped are pending. This suggests significant fulfillment lag or tracking incompleteness.

**Recent Media** section shows photos/videos from donation events (most recent: THE MIDNIGHT MISSION, 3/13/2026).

**Carbon Impact** section visible at bottom (BETA feature).

**Donation search** with status filter at bottom right.

---

## 3. Simpli Charities (app.simpli.supply/explore-charities)

### 3.1 Overview

**Total charities in system: 198**

Two view modes: Cards (visual) and Table (data). Table view reveals critical columns not visible in Cards.

### 3.2 Table Columns

| Column | Description |
|--------|-------------|
| Name | Charity name |
| Location | City, State, ZIP |
| Open/Closed | Operating hours status (NOT activation — confirmed by Tommy) |
| Contact | Email address |
| Charity Status | Onboarding stage: Invited, Claimed, or Onboarded |
| SimpliSecure | Vetting level: Unvetted, Vetted, or SimpliSecure |
| Received Donation? | Yes/No |
| Actions | Three dot menu |

### 3.3 Charity Status Breakdown (Full 198)

| Status | Count | % of Total |
|--------|-------|------------|
| **Onboarded** | 89 | 45.0% |
| **Invited** | 97 | 49.0% |
| **Claimed** | 12 | 6.1% |

**The real funnel:** 198 total → 101 engaged (Claimed + Onboarded, 51%) → 89 Onboarded (45%) → 45 received donation (22.7%)

**Critical finding:** 97 charities (49%) are still at "Invited" status. They received an invitation but never completed onboarding. Another 12 (6.1%) claimed their profile but did not finish onboarding. Combined, **109 charities (55.1%) have NOT completed onboarding.**

### 3.4 Open/Closed Status

| Status | Count | % |
|--------|-------|---|
| Open | 123 | 62.1% |
| Closed | 75 | 37.9% |

**IMPORTANT:** Tommy confirmed (April 20, 2026) that Open/Closed refers to operating hours, NOT activation or engagement status. "Currently Closed" means the charity is outside their posted business hours at the time of viewing. This was previously misinterpreted as an activation indicator.

### 3.5 SimpliSecure Vetting

| Level | Count | % |
|-------|-------|---|
| Unvetted | 132 | 66.7% |
| Vetted | 36 | 18.2% |
| SimpliSecure | 30 | 15.2% |

**Finding:** Two thirds of charities are completely unvetted. Only 15.2% have achieved the highest SimpliSecure certification. For Simpli to scale to $150M+ in donations, the vetting pipeline needs to keep pace with charity acquisition.

### 3.6 Received Donation

| Status | Count | % |
|--------|-------|---|
| No | 153 | 77.3% |
| Yes | 45 | 22.7% |

**Finding:** Only 45 out of 198 charities (22.7%) have ever received a donation through the platform. Even among Onboarded charities, only about half have received donations.

### 3.7 Cross Tabulation: Status × Donation (Page 1/100)

| Combination | Count |
|-------------|-------|
| Onboarded + Yes | 15 |
| Onboarded + No | 25 |
| Invited + Yes | 10 |
| Invited + No | 43 |
| Claimed + No | 7 |

**Anomaly:** 10 charities show "Invited" status but "Yes" for received donation. This could mean they received a donation before completing full onboarding (donations may not require full onboarding), or the status tracking has gaps. Worth confirming with Joseph.

### 3.8 Cross Tabulation: Status × SimpliSecure (Page 1/100)

| Combination | Count |
|-------------|-------|
| Onboarded + Unvetted | 17 |
| Onboarded + Vetted | 15 |
| Onboarded + SimpliSecure | 8 |
| Invited + Unvetted | 45 |
| Invited + SimpliSecure | 8 |
| Claimed + Unvetted | 7 |

**Finding:** 17 Onboarded charities are still Unvetted. Vetting and onboarding appear to be independent processes rather than sequential gates.

### 3.9 Geographic Distribution (Top States)

CA (32), TX (12), NY (8), FL (6), PA (4), MA (3), OK (3), AL (3), AZ (3), UT (2), OH (2), NJ (2), NH (2), MO (2), NC (2)

**Finding:** Heavy California concentration (32%). Combined CA/TX/NY/FL = 58 charities (29.3%). Geographic diversity is limited; Midwest and Southeast are underrepresented relative to where excess inventory typically originates.

---

## 4. Charity Profile Detail (Charity Settings)

URL pattern: app.simpli.supply/charity-settings/{uuid}

Examined: MIDWEST FOOD BANK NFP INC (Onboarded, Unvetted, Received Donation: Yes)

### 4.1 Onboarding Data Model (13 Sections)

Each charity profile consists of 13 settings sections that must be completed:

1. **General** — Charity Name*, EIN*, Description*, Annual Population Served*
2. **Brand Assets** — Logo and brand materials
3. **Profile Gallery** — Photos for public profile
4. **Location & Contact** — Physical address, contact info
5. **Accepted Items** — What types of donations they can receive
6. **Causes & Impact Areas** — NTEE categories / mission areas
7. **Programs** — Active programs the charity runs
8. **Operating Hours** — Business hours (this is what drives Open/Closed status)
9. **Pallet Capacity** — How many pallets they can receive per period
10. **Thank You Letter** — Donor acknowledgment template
11. **Post-Event Message** — Follow up messaging after donation events
12. **Distribution Centers** — Physical locations for receiving goods
13. **SimpliSecure** — Verification and security certification

**CRITICAL FINDING:** Even MIDWEST FOOD BANK — an Onboarded charity that has received donations — had a completely empty Pallet Capacity section. If even successful charities leave critical fields blank, the onboarding completion rate for individual sections may be very low across the board. This is exactly the problem the activation layer should solve: making it clear which fields matter most and incentivizing completion.

---

## 5. Company Pilots (app.simpli.supply/admin/company-pilots)

### 5.1 Suggested Companies (Not Yet Piloted)

| Company | Joined | Orders |
|---------|--------|--------|
| Sunday Riley | Dec 3, 2025 | No orders yet |
| Estée Lauder | Dec 1, 2025 | No orders yet |
| Turner | Oct 31, 2025 | No orders yet |
| HydroPeptide | Sep 10, 2025 | No orders yet |
| Wander Beauty | Jul 11, 2025 | No orders yet |

**Finding:** 5 companies have joined the platform (some as far back as July 2025) but have zero orders. That is 5+ months of inactivity for some. This is the corporate side of the same activation problem.

### 5.2 Active Pilots (6 Total)

| Pilot | Company | Status | Charity Approval | Value | Pallets | Stage 1/2 Views | Created |
|-------|---------|--------|-----------------|-------|---------|-----------------|---------|
| Pilot Campaign | Cargill | Active | Approved | $942,855.93 | 32 | 6 / 1 | Apr 14, 2026 |
| BUNZL Pilot Campaign | BUNZL | Active | Pending | $19,151.47 | 5 | 3 / 0 | Apr 14, 2026 |
| Cardinal Health Phase 1 | Cardinal Health | Active | Approved | TBD | 221 | 4 / 2 | Apr 9, 2026 |
| Smashbox Campaign | Smashbox | Active | Approved | TBD | TBD | 1 / 1 | Mar 30, 2026 |
| Glow Recipe Campaign | Glow Recipe | Active | Approved | $3,604,329.98 | 19 | 0 / 1 | Mar 16, 2026 |
| L'Oréal Campaign | L'Oréal | Active | [visible] | [visible] | 20 | 0 / 0 | Feb 13, 2026 |

**Key numbers:**
- Total known pilot value: ~$4.57M across 3 pilots with disclosed values
- Total pallets across pilots: 297+ (32 + 5 + 221 + 19 + 20 = 297, plus Smashbox TBD)
- Cardinal Health alone: 221 pallets — this is massive and aligns with Tommy's supply target
- Glow Recipe: $3.6M in value from a single pilot

**Stage Views insight:** Very low Stage 1 and Stage 2 view counts across all pilots suggest the charity matching/selection process is still nascent. Most pilots have under 5 Stage 1 views and 0 or 1 Stage 2 views. This is a bottleneck for the supply/demand matching that the activation layer could help solve.

**Buttons available:** Test Charity Dialog, Test Quote Dialog, + Create Pilot

---

## 6. MissionControl (app.simpli.supply/admin/mission-control)

"Platform-wide analytics and operational metrics"

Two tabs: **Main Control** and **Call Center Control**

**Platform Metrics** section with time filters (Today, This Week, This Month, All Time).

"Charities Invited" metric visible: 29 (in the default time view). Other metrics were loading/faded.

**Charity Activity** section with timeline chart showing New Pending, New Deliveries, and other categories over time.

---

## 7. Key Corrected Data Points

### Previously Misinterpreted
- "Currently Closed" = operating hours clock, NOT engagement/activation indicator
- The original "0 out of 181 active" headline stat was based on a misreading of this field
- Production has 198 charities (up from 181 previously counted on dev)

### Corrected Funnel (for deck and PRD)

**Charity Acquisition Funnel:**
198 total → 12 Claimed (6.1%) → 89 Onboarded (45.0%) → 45 Received Donation (22.7%)

**Drop-off points:**
- Invited → Claimed/Onboarded: 55.1% never complete onboarding (109 charities stuck)
- Onboarded → Donation: Even among the 89 onboarded, ~50% never receive a donation
- Profile Completeness: Even successful charities leave critical fields (e.g., Pallet Capacity) empty

### Supply/Demand Gap (from Tommy, April 20)
- Target: $150M+ in donations this year
- That translates to 1,500 to 3,000 pallets per year
- Need ~150 pallets/month of charity absorption capacity
- Need 200+ charities, including large ones that can handle dozens of pallets monthly
- Current: 89 onboarded charities, 45 have ever received a donation
- **Gap: Need to at least double the onboarded count AND dramatically increase per-charity throughput**

---

## 8. Implications for Activation Layer

The data strongly supports the activation layer thesis. The core problems are:

**1. Onboarding completion is the biggest leak.** 55% of charities never make it past "Invited." The 13-section onboarding form is likely too long/complex for an initial engagement. Value-first sequencing (show match data before asking for data) could dramatically improve this.

**2. Profile completeness is poor even among "Onboarded" charities.** If Midwest Food Bank — a large, well-resourced food bank that has received donations — has an empty Pallet Capacity field, smaller charities almost certainly have worse completion rates. The activation layer should surface which fields actually matter for matching and prioritize those.

**3. The vetting pipeline is independent of onboarding.** 66.7% of charities are Unvetted. This isn't a problem for the activation layer to solve directly, but it means the activation layer should work regardless of vetting status.

**4. Corporate pilots need charity depth.** With 297+ pallets across 6 active pilots (and Cardinal Health alone at 221), Simpli needs a large, responsive charity network. The activation layer's job is to make that network bigger and faster to mobilize.

**5. Geographic concentration is a risk.** 32% of charities are in California. If corporate supply comes from the Midwest or East Coast, there may not be enough local charity capacity. The activation layer should help with geographic diversification through targeted outreach.

---

## 9. Sections Not Fully Audited (Access Verified)

The following sections were confirmed accessible but not deeply explored in this pass:

- **Charity Directory** — Separate from Simpli Charities; appears to be the SearchCharities.org backend
- **Manage Orders** — Order management for donations
- **Restriction Groups** — Item restriction configurations
- **MissionMatch** — Charity-company matching engine
- **Sales Leads** — Lead tracking for corporate partnerships
- **Media Gallery** — Photos/videos from donation events
- **Reports** — Analytics and reporting
- **My Team / My Profile / My Locations** — Team and location management

---

## 10. Audit Metadata

- **Data source:** app.simpli.supply (Production, v4.12.7)
- **Total charities:** 198 (extracted via table view, paginated 100+98)
- **Data extraction method:** JavaScript DOM queries on table rows for aggregate counts
- **Time of audit:** April 20, 2026 (Sunday afternoon — Open/Closed reflects weekend hours)
- **Note on Open/Closed:** Audit conducted on a Sunday, so many charities showing "Closed" are likely just closed for the weekend, consistent with Tommy's explanation
