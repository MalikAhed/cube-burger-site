# Cube Burger responsive composition brief

- Archetypes: center-stage opening, split-editorial story, content-led menu and process sections.
- Hierarchy: oversized cream `CUBE BURGER` title, central burger subject, persistent golden Order CTA.
- Layers: red photographic hero plate, ingredient overlay on wider screens, transparent hero burger, live navigation and title.
- Story stage: live white copy on the red root background; one transparent food object enters from the inline end at a time in a six-second loop.
- Wide state: full navigation, center-stage hero, two-column menu and story, three-column process cards.
- Tablet state: compact hero, hidden navigation links, stacked menu, split story, stacked process cards.
- Portrait state: compact header, portrait hero composition, stacked sections, story copy above the rotating food stage.
- Short-height state: reduced hero title and subject scale while retaining a scrollable minimum height.
- Motion: 2D CSS transforms and opacity only; no Three.js because the scene uses flat product cutouts and does not require a real camera or geometry.
- Reduced motion: stable burger image replaces the rotating sequence; hero reveals are disabled.
- Assets: all project imagery is stored in `public/assets` and served locally.
