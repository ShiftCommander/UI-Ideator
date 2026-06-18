## 2024-05-24 - Custom Component Accessibility
**Learning:** Custom interactive UI components like complex grid cards often lack the base accessibility traits of standard buttons. Users relying on keyboard navigation cannot access or interact with them.
**Action:** Always verify keyboard accessibility for non-button interactive elements. Ensure they have `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler listening for `Enter` and `Space` key presses. Include appropriate `aria-label` or `aria-expanded` attributes to convey their purpose and state.
