# Decision Log

A record of how the product direction evolved and why. Useful for understanding why the repo looks the way it does and why earlier artifacts sit in `archive/`.

## April 1: PRD v0.1, three candidate directions

The first PRD framed three solution directions:

- Direction A, Smart Notifications Layer: push donation match alerts by email and SMS
- Direction B, Profile Health Score: score charity profiles and nudge improvements
- Direction C, Donation Intake Tracker: a QR scan intake flow

Direction A ranked highest on impact and friction at this stage.

## April 7: Pivot away from notifications

A dev environment audit revealed that Joseph Oliver was already building SMS flows for allocation acceptance. Building a notifications layer would have duplicated in flight engineering work. The direction shifted toward a charity facing microsite, a standalone Linktree style page. The interim blueprint for that idea is preserved in `design/microsite-blueprint.html`.

## April 12: Pivot from standalone microsite to activation layer

Team research reshaped the direction again. SearchCharities.org already had detailed charity profiles, so a new public microsite would have overlapped with an existing product. The framing changed from "build a new microsite" to "add an activation layer on top of existing SearchCharities.org pages." Joseph described the concept as a modified view of a SearchCharities.org page in Linktree format with an outbound hook, which aligned with the team's thinking.

## April 12: Deprioritize volunteer management

Volunteer management was the pain point Simpli's CEO cited most often, but the team chose not to pursue it. The tool space is crowded with established players such as Galaxy Digital and VolunteerHub, and secondary research showed that any new tool requiring a separate login faces steep adoption resistance. The decision was to stay focused on the donation activation flow rather than build a thin competitor in a saturated category.

## April 20: Production audit correction

An earlier audit had reported that all charity partners were "Currently Closed," which was read as evidence that none were active. Tommy confirmed that Open and Closed refer only to posted operating hours, not engagement. The earlier audit had simply run outside business hours. The problem framing was corrected to the three layered gap described in `problem-statement.md`, which is less dramatic but defensible in front of stakeholders.

## April 20: Scope locked to activation and retention

A stakeholder call clarified that Joseph was rebuilding onboarding into three phases on his own: an intro call, a simplified on platform step, and a donation match step. Onboarding simplification was therefore already being handled. The team's contribution was scoped to the activation and retention experience that wraps those phases: showing value before asking for data, keeping charities engaged through the roughly 90 day order cycle, and making the donation match moment frictionless. Tommy's guidance was to design the better end state rather than over index to the current platform.
