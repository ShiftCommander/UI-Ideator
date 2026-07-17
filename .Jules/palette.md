## 2024-05-18 - Accessibility Improvements
**Learning:** Adding keyboard accessibility (`role="button"`, `tabIndex`, `onKeyDown`) to interactive `div` elements like `ArtifactCard` and `sexy-card` makes them usable for keyboard-only users, which is critical for inclusive design.
**Action:** Always ensure that custom interactive components constructed using non-interactive HTML tags (`div`, `span`) have appropriate ARIA roles and keyboard event handlers.
## 2024-05-24 - Contextual Tooltips for Disabled States
**Learning:** Users often encounter disabled buttons (e.g., during loading or when input is empty) but lack context on *why* the button is disabled. Adding a dynamic `title` attribute provides an immediate native tooltip explaining the state (e.g., "Enter a prompt first" vs. "Designing..."), which significantly improves clarity without requiring complex custom tooltip components.
**Action:** Always include a `title` attribute on disabled interactive elements to explain the disabled state dynamically based on the application context.
