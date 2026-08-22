# Cube Burger

An art-directed restaurant landing page that keeps its bold, layered composition across phones, tablets, short laptops, desktops, and ultrawide screens.

**[View the live website →](https://malikahed.github.io/cube-burger-site/)**

## Highlights

- Responsive center-stage hero with height- and aspect-ratio-aware layouts
- Accessible semantic content, visible focus states, and reduced-motion support
- Interactive menu, story, and ordering sections built with progressive enhancement
- Optimized responsive image assets and locally hosted variable typography
- Automated GitHub Pages deployment from `main`

## Built with

- Vite
- Modern JavaScript
- CSS Grid, fluid type, container-aware composition, and responsive media
- Playwright-based viewport validation

## Run locally

```bash
npm ci
npm run dev
```

Create a production build with `npm run build`. To run the visual checks, start the preview server with `npm run preview`, then run `node tests/visual-check.mjs` in a second terminal.

## Responsive validation

The visual check covers ten viewport states from `360 × 640` through `2560 × 1080`, plus reduced-motion and RTL overflow checks. It verifies that key sections remain visible and that the page has no horizontal overflow.
