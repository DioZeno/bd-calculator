# Brown Dust II Gear Calculator

Static GitHub Pages port inspired by the layout of the DNA Wedge Tracker.

## What it includes

- Character lookup from the source Brown Dust II Gear Calculator Google Sheet
- Five gear slots with tier, two basic stats, three refinement grades, and three substats
- Exclusive gear stat handling
- Level scaling, collection bonuses, external buffs, crit calculations
- Element advantage, enemy DEF/MRES, multi-hit and chain damage estimation
- Responsive dark/light UI
- GitHub Pages deployment workflow

The site attempts to load `Base Stats` and `Gear Stats` directly from the public source Sheet through the Google Visualization endpoint. A small fallback dataset is bundled for offline/error cases.

## Live site

https://diozeno.github.io/bd-calculator/

## Deploy

Changes to `site/**` or `.github/workflows/deploy.yml` on `main` automatically deploy `site/` to GitHub Pages.
