## 2024-05-18 - Accessibility Improvements
**Learning:** Adding keyboard accessibility (`role="button"`, `tabIndex`, `onKeyDown`) to interactive `div` elements like `ArtifactCard` and `sexy-card` makes them usable for keyboard-only users, which is critical for inclusive design.
**Action:** Always ensure that custom interactive components constructed using non-interactive HTML tags (`div`, `span`) have appropriate ARIA roles and keyboard event handlers.
