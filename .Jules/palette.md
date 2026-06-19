## 2024-05-18 - Accessibility Improvements
**Learning:** Adding keyboard accessibility (`role="button"`, `tabIndex`, `onKeyDown`) to interactive `div` elements like `ArtifactCard` and `sexy-card` makes them usable for keyboard-only users, which is critical for inclusive design.
**Action:** Always ensure that custom interactive components constructed using non-interactive HTML tags (`div`, `span`) have appropriate ARIA roles and keyboard event handlers.

## 2026-06-17 - Keyboard Accessibility on Interactive Cards
**Learning:** Discovered a recurring pattern where interactive, non-button elements (like `div.artifact-card` and `div.sexy-card`) act as buttons but lack inherent keyboard accessibility, creating a barrier for keyboard users.
**Action:** When creating custom interactive components (cards, tiles), consistently apply `role="button"`, `tabIndex={0}`, and `onKeyDown` event handlers for 'Enter' and 'Space' to mimic native button behavior.
