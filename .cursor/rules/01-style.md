# Project Style Rules

## Language and stack

- HTML5, CSS3, JavaScript ES6+ only. No frameworks.
- Keep JS modular and scoped. No globals.

## Semantics and structure

- Use landmarks: header, nav, main, aside, footer.
- Headings follow logical order. One h1 per page.

## Naming

- Files: kebab-case. Variables and functions: camelCase.
- CSS classes: kebab-case and meaningful.

## CSS rules

- Mobile first. Use Flexbox and Grid.
- Use CSS custom properties for colors and spacing.
- Visible focus styles using :focus-visible.
- No !important unless documented.

## JS rules

- Small pure functions. Single responsibility.
- Use const by default. Use let only when reassigned.
- Handle errors. No silent catches.

## Comments

- Comment non-obvious code. Explain why, not what.
- Document public functions with short JSDoc.

## Lint-like conventions

- Max line length target 100 characters.
- Prefer early returns to reduce nesting.
