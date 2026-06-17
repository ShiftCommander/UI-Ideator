## 2026-06-17 - Keyboard Accessibility on Interactive Cards
**Learning:** Discovered a recurring pattern where interactive, non-button elements (like `div.artifact-card` and `div.sexy-card`) act as buttons but lack inherent keyboard accessibility, creating a barrier for keyboard users.
**Action:** When creating custom interactive components (cards, tiles), consistently apply `role="button"`, `tabIndex={0}`, and `onKeyDown` event handlers for 'Enter' and 'Space' to mimic native button behavior.
