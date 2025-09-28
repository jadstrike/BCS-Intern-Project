# Accessibility Rules (WCAG 2.2 AA)

## Keyboard and focus

- All interactions work by keyboard only.
- Provide a skip link to #main as the first focusable element.
- Focus ring must be clearly visible on all interactive controls.

## Semantics

- Use native elements before ARIA.
- All images have alt. Decorative images have empty alt.
- Form inputs always have <label for="...">.

## Color and motion

- Text contrast at least 4.5:1. Large text 3:1.
- Do not use color alone to convey meaning.
- Respect prefers-reduced-motion and prefers-color-scheme.

## Live regions and errors

- Announce validation with aria-live. Provide helpful messages.
- Associate per-field errors with aria-describedby.

## Testing

- Tab through every page before shipping.
- Use Lighthouse and WAVE. Fix critical issues first.
