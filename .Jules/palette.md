## 2024-05-18 - Accessibility Improvements
**Learning:** Adding keyboard accessibility (`role="button"`, `tabIndex`, `onKeyDown`) to interactive `div` elements like `ArtifactCard` and `sexy-card` makes them usable for keyboard-only users, which is critical for inclusive design.
**Action:** Always ensure that custom interactive components constructed using non-interactive HTML tags (`div`, `span`) have appropriate ARIA roles and keyboard event handlers.
## 2026-06-22 - Native Tooltips for Disabled States and Icons
**Learning:** Using the native `title` attribute provides essential context for sighted users when encountering icon-only buttons or dynamically disabled elements (like a "Send" button during loading or empty input states). It acts as a lightweight, no-dependency tooltip that improves usability significantly without cluttering the UI.
**Action:** Always add `title` attributes to icon-only buttons and dynamically update them to explain disabled states when context isn't visually obvious.

## 2026-06-24 - Animated vs Accessible Transparent Placeholder
**Learning:** Animated, visual placeholders are great for sighted users but terrible for screen readers, which announce every animation tick as plain text. Furthermore, using a CSS-hidden input placeholder (`::placeholder { color: transparent }`) enables an accessible fallback natively.
**Action:** When creating visually animated typing effects or cyclic placeholders in inputs, always apply `aria-hidden="true"` to the animated visual element, and rely on the native `<input placeholder="...">` combined with transparent `::placeholder` styling so screen readers receive a static, descriptive instruction without double-announcing.

## 2024-05-19 - iframe Focus Trap with pointer-events: none
**Learning:** Using `pointer-events: none` on an `iframe` prevents mouse interaction but does not remove its contents from the keyboard tab sequence. This creates a focus trap for keyboard users where focus disappears into the iframe without any visual indication or way to interact.
**Action:** Always add `tabIndex={-1}` to `iframe` elements that are meant to be purely visual previews (like unfocused artifact cards or side drawer previews) to properly remove them from the accessibility tree's focus order.

## 2024-10-24 - Modal Focus Trapping with inert
**Learning:** To create an effective focus trap for modals or drawers, it is much easier and more robust to use the native HTML `inert` attribute on all background sibling elements rather than manually managing focus boundaries. This ensures both keyboard and screen reader accessibility are handled natively by the browser.
**Action:** When creating modals or drawers, apply `inert={isOpen ? true : undefined}` to the main application container and any other background elements to natively prevent interaction outside the active dialog.

## 2024-11-20 - Modal Focus Restoration
**Learning:** When a dialog or modal opens and background elements are set to `inert`, screen reader and keyboard users can lose their place in the UI if focus isn't explicitly managed. Simply preventing access to the background isn't enough; we must also direct focus into the new context.
**Action:** Always move focus to an interactive element inside the modal (like a close button) using a `ref` and `.focus()` when it opens, and restore focus to the previously active element when it closes, to maintain a seamless keyboard/screen reader experience.
