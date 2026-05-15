# Simpli Production vs Dev Environment Audit
**Date:** April 12, 2026
**Production:** app.simpli.supply (READ ONLY per Tommy)
**Dev:** dev.simpli.supply
**Account:** vanderbilt@simpli.supply | v4.12.7 (same version on both)

---

## Dashboard

| Metric | Production | Dev |
|---|---|---|
| Total Value | $15,176,116 ($6.4M pending) | $7.9B (test data) |
| People Helped | 3,701,431 (2.67M pending) | 171K |
| Tons Diverted | 593 (102 pending) | 468 |
| MTCO2e Prevented | 32,976 | 3.3M |
| Total Donations | 60 | Not visible |

**Key takeaway:** Dev had massively inflated test data ($7.9B vs $15.2M real). Production numbers are the only reliable source.

---

## MissionControl

### Platform Metrics (All Time)

| Metric | Production | Dev |
|---|---|---|
| Charities Invited | 83 | N/A |
| Charities Onboarded | 86 | N/A |
| Orders Created | 60 | N/A |
| Companies Onboarded | 22 | N/A |

### Platform Metrics (This Month, April 2026)

| Metric | Production |
|---|---|
| Charities Invited | 15 |
| Charities Onboarded | 18 |
| Orders Created | 6 |
| Companies Onboarded | 1 |

### Charity Onboarding Funnel

| Status | Production | Dev |
|---|---|---|
| Total | 181 | 181 (dev showed same total) |
| Onboarded | 86 (47.5%) | 44.1% |
| Pending (Invited) | 83 (45.9%) | 48.5% |
| Claimed | 12 (6.6%) | 7.4% |
| Pending charities count | 83 | 33 |

**Key takeaway:** Funnel percentages are similar between prod and dev, but the absolute numbers differ significantly (83 pending in prod vs 33 in dev). The ~46% pending rate is confirmed as real.

### SimpliSecure Vetting

| Status | Production | Dev |
|---|---|---|
| Vetted | 60% | 30% |
| Not Vetted | 36 (40.4%) | 70% pending |

**Key takeaway:** Production shows significantly better vetting completion (60%) than dev indicated (30%).

### Charity Onboarding Source

| Source | Production | Dev |
|---|---|---|
| Claim Charity Route | 96.1% (174) | 89.7% |
| Self Sign Up Route | 3.9% (7) | 10.3% |

**Key takeaway:** Even higher concentration of Simpli invites vs self signup on production.

### Charity Acquisition Source

| Source | Production | Dev |
|---|---|---|
| Unknown / Pre-tracking | 99.4% (180) | 92.6% |
| Organic | 0.6% (1) | N/A |
| Charity Referral | 0 | 5.9% |
| Search Directory | 0 | 1.5% |

**Key takeaway:** Almost zero tracking on production. 99.4% unknown means there is no way to measure what acquisition channels work. The referral data visible in dev does not appear in production.

### Active Orders
10 in progress orders on production:
1. Cardinal Health Syringe Donation Phase 1 April 2026 (Awaiting Client Approval)
2. Bunzl Minneapolis 2026 (Awaiting Quote)
3. March 2025 New Jersey / Glow Recipe (Delivered, Awaiting Documents)
4. March 2026 Edison NJ / Sol de Janeiro (Delivered, Awaiting Documents)
5. February 2026 Elm NJ / Smashbox (Delivered, Awaiting Documents)
6. April 2026 Chandler AZ / Cargill (Ready to send to client)
7. January 2026 Las Vegas NV / Wella (Logistics in Progress)
8. Bunzl Chemical Cleaning Supplies March 2026 (Awaiting Quote)
9. January 2026 NYX / L'Oréal (Awaiting Client Approval)
10. January 2026 ESSIE / L'Oréal (Awaiting Client Approval)

### Top Referrers
Nicole Beremovica: 22 referrals (1st place, all time)

### Companies on Platform
37 total (production) including: Cardinal Health, L'Oréal, QuickBox, DribbleUp, Sunday Riley, Smashbox, Glow Recipe, Simpli, Sol de Janeiro, Wella, BUNZL, Cargill, and others.

---

## Simpli Charities (Explore Charities)

| Metric | Production | Dev |
|---|---|---|
| Total Partners | 181 | 68 |
| Currently Open | **0** | N/A |
| Currently Closed | **181 (100%)** | Most closed per Anikait |

**Filters available (prod):** Status (All/Currently Open/Currently Closed), State, Onboarding Status, Vetting Status, Equipment Requirements (Loading Dock, Lift Gate, Pallet Jack, Appointment), Pallet Capacity (0 to 200)

**Key takeaway:** ALL 181 charity partners on production are "Currently Closed." Zero are currently open. This is a critical finding for the activation layer thesis: charities go through onboarding but do not remain actively engaged.

---

## Charity Directory

| Metric | Production | Dev |
|---|---|---|
| Total Charities | 1,543,527 | 1,543,527 |

Same IRS nonprofit registry, same NTEE category filters (25 categories), same card layout (NTEE code, EIN, Revenue, Assets, Income, View Profile). No differences.

---

## Manage Orders

| Metric | Production | Dev |
|---|---|---|
| Total Orders | 60 | 229 |
| Pending | 10 | 69 |
| Completed | 50 | 160 |

**Companies with orders (prod):** BUNZL, Cardinal Health, Sol de Janeiro, Smashbox, L'Oréal, Simpli, QuickBox, Glow Recipe, Wella, Cargill, Ritual, CFS Brands, DribbleUp

---

## Restriction Groups

| | Production | Dev |
|---|---|---|
| Status | Empty ("No restriction groups yet") | Not explored |

Purpose: "Organize and manage item restriction groups for charity campaigns" with quantity limits for donation campaigns.

---

## MissionMatch

| | Production | Dev |
|---|---|---|
| Active Workflows | 0 ("No workflows found") | 1 ("test for catalog" by Joseph Oliver) |

The dev workflow was a test. Production has zero active matching workflows.

---

## Company Pilots

| Metric | Production | Dev |
|---|---|---|
| Total Pilots | 4 | 3 |
| All Active/Approved | Yes (all 4) | No (all 3 pending charity approval) |

**Production Pilots:**
1. **Cardinal Health Pilot Campaign Phase 1** — Active/Approved — TBD value — 221 pallets — 6 Stage 1 Views, 4 Stage 2 Views — Apr 9, 2026
2. **Smashbox Pilot Campaign** — Active/Approved — TBD value — TBD pallets — Mar 30, 2026
3. **Glow Recipe Pilot Campaign** — Active/Approved — **$3,604,329.98** — 19 pallets — Mar 16, 2026
4. **L'Oréal Pilot Campaign** — Active/Approved — **$1,701,830.50** — 20 pallets — Feb 13, 2026

**Suggested Companies for Pilots:** Sunday Riley, Estée Lauder, Turner, HydroPeptide, Sol de Janeiro

**Key takeaway:** Dev showed all pilots as pending charity approval. Production shows all 4 are active and approved. This means the charity approval workflow IS functioning for some charities. Glow Recipe alone represents $3.6M in pilot value. The "suggested companies" list reveals the sales pipeline.

---

## Sales Leads

| | Production | Dev |
|---|---|---|
| Active Leads | 13 | Not explored |

**Notable leads (prod):**
- Goldstar: $5,000,000 (face masks, hand sanitizer, 200 pallets) — Awaiting Quick Quote
- Winzer: $1,000,000 (expired TPV gloves, 100 pallets) — Awaiting Quick Quote
- Kamedis: $509,902 (shampoo, eczema products) — Complete
- DribbleUp: $250,000 (KettleBells, 100 pallets) — Awaiting Client Accept
- goop: $361,932 (beauty products, 50 pallets) — Awaiting Quick Quote
- Kalustyan: $130,000 (bulk oils) — Awaiting Quick Quote

**Key takeaway:** Active sales pipeline exists with ~$7.3M+ in potential deal value. Multiple leads stalled at "Awaiting Quick Quote" for 7+ months, suggesting operational bottleneck.

---

## Media Gallery

| | Production | Dev |
|---|---|---|
| Content | Real photos from charity deliveries | Not explored |

Has actual donation photos (e.g., Christians Concerned charity receiving pallets). Most marked "Approved." Upload Media functionality available. This is where charities and Simpli upload proof of impact.

---

## Reports (Donation Reports)

**Last 6 Months (production):**
- Total Donations: 10 (+1 this month)
- Total Value: $1,119,608.12 ($111,960.81 avg per donation)
- Est. Tax Savings: $335,882.44
- Est. People Helped: 36,038 (29M total items)
- Total Weight: 220,315 lbs (239 pallets)
- Average Time to Complete: **90 days**
- Monthly Trend: down 75.0% from last month
- Average Monthly Value: $279,902.03
- Donation Strategy: All "Standard" (10/10)

**Top Companies by Completed Donations:**
- Ritual: 2 donations
- Smashbox: 2 donations
- CFS Brands: 1
- Wella: 1
- Simpli: 1

**Completed Orders (51 total all time, top recent):**
- DribbleUp Dec 2025 West Coast: $529,900 (73,200 lbs, 1M items)
- Wella Dec Etna OH: $199,757
- Smashbox Feb Blaine MN: $180,413
- Ritual Nov Berlin CT: $73,975
- QuickBox Jan Denver: $59,022

**Key takeaway:** 90 day average completion time is a critical metric. It means from order creation to completion, the average cycle is 3 months. This affects how quickly new charity activations translate to realized impact.

---

## Team Settings

### My Team
- **224 users** total across all roles
- Roles: Charity User, Simpli Admin, Company Admin
- Mix of active and pending statuses
- Tabs: Team Members, Companies, Onboarding Requests

### My Locations
- **187 distribution centers**
- Types: Company and Charity
- "In House" flag (Yes/No) per location
- Mix of company warehouses and charity receiving locations

---

## Critical Production Findings for PRD

1. **ALL 181 charity partners are Currently Closed.** Zero are actively open on production. This is the strongest evidence that onboarding alone does not equal activation.

2. **The ~46% pending rate is confirmed real** (83 of 181 never complete onboarding). Not a dev artifact.

3. **4 company pilots are active and approved** with real dollar values ($3.6M Glow Recipe, $1.7M L'Oréal). The platform IS generating real revenue.

4. **90 day average order completion time** means activated charities need to stay engaged for months, not days.

5. **99.4% acquisition source is "Unknown"** meaning Simpli has almost no visibility into what drives charity sign ups.

6. **13 active sales leads worth $7.3M+** are in pipeline, many stalled 7+ months at quote stage. More charities are needed to fulfill incoming corporate donations.

7. **Dev data was wildly misleading:** $7.9B vs $15.2M real value, 229 vs 60 real orders, 33 vs 83 real pending charities.

8. **Nicole Beremovica has 22 referrals** as top referrer, confirming a referral mechanism exists but is concentrated in one person.

9. **60% vetting rate** (not 30% as dev suggested). Better than expected but still 40% unvetted.

10. **Media Gallery has real impact photos** from charities, suggesting the proof of impact loop exists but may not be surfaced to charity partners as motivation.
