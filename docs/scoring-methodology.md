# Scoring Methodology

This document is the contract for how indicator values become neighborhood scores. Version any material change and retain the methodology version with every published result.

## Proposed scoring pipeline
1. Select source observations for a declared neighborhood and reference period.
2. Validate units, ranges, timestamps, and geographic coverage.
3. Transform each indicator to a common 0–100 scale, accounting for directionality and documented caps.
4. Aggregate indicators into domain scores using published weights.
5. Aggregate domain scores into the overall score using published weights.
6. Report coverage/confidence alongside the score; do not imply precision beyond input data.

## Decisions required before production
- Geographic unit and boundary vintage
- Normalization method and reference population/period
- Indicator and domain weights
- Outlier and winsorization policy
- Missing, stale, and suppressed value policy
- Minimum coverage required to publish a score
- Rounding and score display rules

## Transparency requirements
Show component scores, indicator values, reference periods, sources, data coverage, and methodology version. Preserve enough input and configuration data to reproduce each result.
