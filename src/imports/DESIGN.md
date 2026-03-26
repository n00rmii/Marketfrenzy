# Design System: Market Frenzy - The Chợ Edition

## 1. Overview & Creative North Star: "The Digital Artisan Market"
This design system moves away from the sterile, "app-store-standard" interface. Our Creative North Star is **The Digital Artisan Market**. We aim to capture the organized chaos of a Vietnamese *Chợ*—where vibrant tradition meets modern energy. 

The system rejects rigid, boxed grids in favor of **Organic Layering**. By using overlapping elements, staggered spacing, and high-contrast color shifts, we simulate the physical depth of a bustling market stall. We are not building a dashboard; we are curating an experience that feels tactile, weathered, and alive.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
Our palette is rooted in the soul of Hoi An and the intensity of Lacquerware. 

### The Palette
*   **Primary (Hoi An Yellow - `#725800`):** The glow of a lantern. Used for primary actions and energetic focus points.
*   **Secondary (Lacquer Red - `#b02317`):** The depth of tradition. Used for high-stakes gamification moments and urgency.
*   **Tertiary (Bamboo Green - `#006a3b`):** The freshness of produce. Used for success states and growth-related progress.
*   **Surface (Rice Cream - `#fff6dc`):** Our foundational canvas, providing a warm, organic alternative to pure white.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or subtle tonal transitions.
*   *Implementation:* To separate a sidebar from a main feed, transition from `surface` to `surface-container-low`.
*   *Signature Texture:* Use a subtle linear gradient transitioning from `primary` to `primary-container` on hero CTA buttons to provide a "hand-painted" depth that flat hex codes cannot achieve.

### Glass & Nesting
Use `surface-container` tiers (Lowest to Highest) to create nested depth. Floating elements (like Lantern-inspired pop-ups) should utilize **Glassmorphism**: 
*   **Token:** `surface_variant` at 80% opacity.
*   **Effect:** `backdrop-blur: 12px`. This allows the vibrant "Market" background to bleed through, softening the interface.

---

## 3. Typography: The Editorial Voice
We pair the structured precision of **Be Vietnam Pro** with the human touch of **Plus Jakarta Sans**, mimicking the contrast between official market signage and handwritten chalkboard specials.

*   **Display & Headline (Be Vietnam Pro):** High-impact, authoritative, and unapologetically bold. 
    *   *Usage:* Use `display-lg` (3.5rem) for gamified scores and "Market Wins."
*   **Body & Title (Plus Jakarta Sans):** Modern, legible, and friendly. 
    *   *Usage:* Use `body-lg` (1rem) for instructions.
*   **The Chalkboard Accent:** For specific callouts (e.g., "Daily Special" or "Quick Buy"), utilize a handwritten-style font variant. This should be treated as an illustrative element rather than a functional text block.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to "lift" objects; we use color to "place" them.

*   **The Layering Principle:** Depth is achieved by "stacking" the `surface-container` tiers. 
    *   Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
*   **Ambient Shadows:** If an element must float (e.g., a modal), use a shadow tinted with `on-surface` (Yellow-Dark) at 6% opacity with a blur of 32px. Never use pure grey.
*   **The Ghost Border:** If a boundary is required for accessibility, use the `outline-variant` token at **15% opacity**. A 100% opaque border is a failure of the system.

---

## 5. Components: The Market Toolkit

### Buttons: The "Pillars"
*   **Primary:** `primary` background with `on-primary` text. Use `xl` roundedness (1.5rem) to mimic the smooth edges of a lacquered bowl.
*   **Secondary:** `secondary_container` background. For high-energy "Challenge" or "Battle" modes.
*   **Interactive State:** On hover, shift from the base color to its `_dim` variant (e.g., `primary` to `primary_dim`).

### Cards: The "Produce Crates"
*   **Rule:** Forbid the use of divider lines. 
*   **Layout:** Use `spacing-6` (2rem) as a vertical gutter between content blocks.
*   **Visuals:** Each card should feature a `surface-container` background that is one step higher than its parent container. Use a subtle Woven Rattan texture overlay at 5% opacity for cards containing "Fresh Market" content.

### Lantern Icons & Chips
*   **Icons:** All iconography must be enclosed in a lantern-inspired frame or use the Lantern shape as a silhouette.
*   **Filter Chips:** Use `tertiary_fixed` for active states. The roundedness should be `full` to maintain a friendly, gamified feel.

### Input Fields: The "Market Slates"
*   **Design:** Avoid the "four-sided box." Use a bottom-heavy `surface-container-high` background with a slightly thicker `outline` token on the bottom edge only, mimicking a chalkboard sitting on a ledge.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use intentional asymmetry. Shift a card 5-10px off-center to create a dynamic, "hand-placed" market feel.
*   **DO** use the Spacing Scale rigorously. Use `24` (8.5rem) for major section breathing room to allow the "Premium" editorial feel to shine.
*   **DO** lean into "Bamboo Green" for all success states to reinforce the "Freshness" of the brand.

### Don’t:
*   **DON'T** use 1px black or grey borders. This instantly kills the organic, high-end aesthetic.
*   **DON'T** use standard Material or FontAwesome icons. If it doesn't feel like it was found in a Chợ (Garlic, Rice, Lanterns), it doesn't belong.
*   **DON'T** crowd the UI. The energy comes from the color and type scale, not from the density of information.