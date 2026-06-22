## 2024-05-18 - Accessibility Improvements
**Learning:** Adding keyboard accessibility (`role="button"`, `tabIndex`, `onKeyDown`) to interactive `div` elements like `ArtifactCard` and `sexy-card` makes them usable for keyboard-only users, which is critical for inclusive design.
**Action:** Always ensure that custom interactive components constructed using non-interactive HTML tags (`div`, `span`) have appropriate ARIA roles and keyboard event handlers.
## 2026-06-22 - Native Tooltips for Disabled States and Icons
**Learning:** Using the native `title` attribute provides essential context for sighted users when encountering icon-only buttons or dynamically disabled elements (like a "Send" button during loading or empty input states). It acts as a lightweight, no-dependency tooltip that improves usability significantly without cluttering the UI.
**Action:** Always add `title` attributes to icon-only buttons and dynamically update them to explain disabled states when context isn't visually obvious.
