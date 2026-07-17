## 2024-05-18 - Accessibility Improvements
**Learning:** Adding keyboard accessibility (`role="button"`, `tabIndex`, `onKeyDown`) to interactive `div` elements like `ArtifactCard` and `sexy-card` makes them usable for keyboard-only users, which is critical for inclusive design.
**Action:** Always ensure that custom interactive components constructed using non-interactive HTML tags (`div`, `span`) have appropriate ARIA roles and keyboard event handlers.

## 2024-05-19 - Explaining Disabled States
**Learning:** Users often get confused when buttons are disabled without explanation. Adding a `title` attribute that conditionally explains why an element is disabled (e.g., "Wait for current generation to finish") provides an immediate UX improvement without requiring custom tooltip components or extra CSS.
**Action:** Always add a `title` attribute to disabled interactive elements explaining the disabled state condition.
