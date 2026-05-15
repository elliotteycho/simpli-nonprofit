# Simpli Nonprofit

Product repository for the Simpli charity activation layer, an eight week Product Space x Simpli project. It holds the full body of work: discovery research, the platform audits that reframed the problem, the product narrative, and the interactive prototype.

## The short version

Simpli is a platform that helps large corporations donate excess inventory to charities. It has facilitated roughly $70M in donations and is targeting $150M or more this year. The bottleneck is the charity side. A production audit of 198 charities found that 55 percent never finish onboarding, 77 percent have never received a donation, and Simpli needs to roughly double its onboarded charity base to absorb incoming corporate supply. This project designs an activation layer that wraps Simpli's onboarding: it leads with value before asking for data, gamifies profile completion, and makes the donation match moment frictionless.

## How to navigate this repo

| Folder | What is in it |
|--------|---------------|
| `docs/` | The product narrative: project overview, problem statement, decision log, the PRD, and the presentation deck |
| `research/` | The evidence base: secondary research brief and the two production platform audits |
| `prototype/` | The current interactive prototype, a React and Vite app covering the five screen activation flow |
| `design/` | The interim microsite blueprint that preceded the activation layer direction |
| `archive/` | Superseded iterations: early wireframe, mockup, and standalone prototype versions, kept for history |

## Prototype screens

The activation flow is a five screen sequence. Static captures below; the full interactive version is in `prototype/`.

| Screen | |
|--------|--|
| 1. Post call landing | ![Screen 1](docs/screenshots/simpli-1.png) |
| 2. Document upload | ![Screen 2](docs/screenshots/simpli-2.png) |
| 3. Charity dashboard | ![Screen 3](docs/screenshots/simpli-3.png) |
| 4. Donation match | ![Screen 4](docs/screenshots/simpli-4.png) |
| 5. Impact report | ![Screen 5](docs/screenshots/simpli-5.png) |

## Running the prototype

```
cd prototype
npm install
npm run dev
```

Full instructions are in `prototype/README.md`.

## Status

Discovery and PRD complete. Prototype built and mapped onto Simpli's three phase onboarding rebuild. Presented to Simpli leadership in April 2026.

## Team

Elliott Cho, project lead. PM team: Anikait Rawat, Vyom Mishra. Simpli stakeholders: Tommy (CEO and product), Joseph Oliver (engineer).
