# Performance Rules

## Strategy

- Mobile first. Ship the smallest useful version.
- No blocking assets above the fold.

## Assets

- Lazy load non-critical images with loading="lazy".
- Use width and height attributes to prevent layout shift.
- No unneeded web fonts. If used, preload and set font-display: swap.

## CSS and JS

- Keep CSS lean. Prefer utility classes you control.
- Defer non-critical JS. Avoid heavy libraries.

## Build hygiene

- Ignore node_modules, dist, logs, large binaries in index.
- Add a .cursorignore to keep AI context clean.
