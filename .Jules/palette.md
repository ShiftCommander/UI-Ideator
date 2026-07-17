## 2024-05-18 - Accessibility Improvements
**Learning:** Adding keyboard accessibility (`role="button"`, `tabIndex`, `onKeyDown`) to interactive `div` elements like `ArtifactCard` and `sexy-card` makes them usable for keyboard-only users, which is critical for inclusive design.
**Action:** Always ensure that custom interactive components constructed using non-interactive HTML tags (`div`, `span`) have appropriate ARIA roles and keyboard event handlers.
## 2026-06-22 - Native Tooltips for Disabled States and Icons
**Learning:** Using the native `title` attribute provides essential context for sighted users when encountering icon-only buttons or dynamically disabled elements (like a "Send" button during loading or empty input states). It acts as a lightweight, no-dependency tooltip that improves usability significantly without cluttering the UI.
**Action:** Always add `title` attributes to icon-only buttons and dynamically update them to explain disabled states when context isn't visually obvious.
## 2026-07-17 - Adding async spinner and keyboard shortcuts to interactions
**Learning:** Providing immediate visual feedback directly inside async submit buttons (e.g., spinning icon) keeps users informed of background tasks without shifting their visual focus. Additionally, providing global keyboard navigation (like Escape to close drawers/modals, or arrow keys to browse) significantly enhances power-user experience and overall accessibility.
**Action:** Add visual loading feedback within the context of the action taken. Implement global keyboard listeners for common navigational paradigms like 'Esc' to exit, providing hints in UI.
