# Purple Patch Partners - Frontend Design Guidelines

## Design Principles
**Approach:** Accessibility-first design system for families, carers, and social workers supporting people with learning disabilities and autism.

**Core Values:**
- Clarity over creativity
- Accessibility as foundation
- Cognitive load reduction
- Consistent, predictable patterns
- Professional warmth

---

## Typography

**Fonts:**
- Body/UI: Inter (humanist sans-serif)
- Headings: Poppins (geometric sans-serif)
- Easy Read: Comic Sans MS / OpenDyslexic

**Scale (Desktop / Mobile):**
- Hero (H1): 48-60px / 32-40px, bold
- Page (H1): 36-48px / 28-32px, semibold
- Section (H2): 24-32px / 20-24px, semibold
- Subsection (H3): 20-24px / 18-20px, medium
- Body: 16-18px minimum, regular
- Easy Read: All sizes × 1.25

**Spacing:**
- Line height: 1.6-1.7 body, 1.3-1.4 headings (Easy Read: 1.8)
- Letter spacing: Normal body, -0.02em large headings

---

## Layout & Spacing

**Tailwind Scale:**
- Micro: 2-3 (0.5-0.75rem)
- Component: 4-8 (1-2rem)
- Section: 12-20 (3-5rem)
- Large: 24-32 (6-8rem)

**Max Widths:**
- Grid: 7xl (1280px)
- Content: 6xl (1152px)
- Prose: 4xl (896px)
- Easy Read: 3xl (768px)
- Forms: 2xl (672px)

**Viewport:**
- Hero: 70-80vh (not 100vh)
- Content sections: py-16 to py-24
- 12-column grid desktop, stack mobile

---

## Components

### Navigation
**Desktop:** Sticky header, logo left, horizontal menu (px-6 spacing), "Refer Someone" CTA, accessibility toolbar
**Mobile:** Hamburger → full-screen overlay
**Touch targets:** 48×48px mobile, 44×44px desktop
**Accessibility toolbar:** Fixed position with Easy Read, High Contrast, Text Size toggles + aria-live announcements

### Hero (Homepage)
**Layout:** 60/40 split (content/image), stack mobile with image first
**Content:** H1 headline, 1-2 sentence subheading, dual CTAs (primary "Refer Someone", secondary "Learn Services"), trust indicator
**Image:** 800×600px min desktop, 375×300px mobile - diverse group, joyful, inclusive
**Background:** Subtle purple gradient

### Cards
**Service Cards (3-col → stack):**
- Icon top (64×64px, 96×96px Easy Read)
- H3 title
- 2-3 sentence description
- "Learn More" link
- p-6/p-8, rounded-xl, subtle shadow with hover elevation

**Success Story Cards (2-col → stack):**
- Square/4:3 photo thumbnail
- Name or "Anonymous"
- Quote (2-3 lines max)
- "Read Full Story" link

### Forms (Referral)
**Structure:** Single column, max-w-2xl, centered
**Fields:**
- Labels: font-semibold, mb-2
- Inputs: min-height 48px, px-4 py-3, rounded
- Help text: text-sm, muted
- Required: asterisk + SR text
- Errors: inline below field, icon + red
- Easy Read: icon labels, single-field focus

**Groups:**
1. Contact (Name, Email, Phone)
2. Needs (textarea 6-8 rows)
3. Referral Source (dropdown/radio)
4. Additional Notes (optional)

**Submit:** Large button (full-width mobile), privacy link, full-page success message

### Gallery
**Layout:** 3-col desktop / 2 tablet / 1 mobile masonry grid
**Features:** Filter tabs (All/Photos/Videos/Activities), hover overlay, lightbox with nav arrows
**Future:** Instagram feed placeholder bottom

### Information Pages
**Structure:**
- H1 + decorative icon
- Lead paragraph (larger)
- TOC sidebar (desktop, sticky)
- H2 sections
- Breakout boxes (bordered, bg differentiation, icon)
- Bullet lists with icons
- Easy Read: icon headings, shorter paragraphs, visual separators

---

## Accessibility Requirements

### Keyboard
- Skip links: "Skip to main content", "Skip to navigation"
- Focus indicators: 2-3px outline, high contrast
- Logical tab order
- All interactive elements: Tab to focus, Enter/Space to activate

### Screen Readers
- Semantic HTML5 landmarks
- ARIA labels for icon-only buttons
- ARIA-live for dynamic content
- Descriptive link text (no "click here")

### Visual
**High Contrast Mode:** Enhanced borders, stronger text contrast, no subtle grays
**Color:** Never sole indicator (use icons + text)
**Alt text:** Descriptive for informative images, empty alt="" for decorative

### Easy Read Mode
- Simplified vocabulary
- Sentences max 15-20 words
- Icon support for key concepts
- Increased spacing throughout
- Remove decorative elements
- One idea per paragraph

---

## Page Templates

### Homepage
1. Nav → 2. Hero (split) → 3. Services (3-card) → 4. Mission (centered, max-w-4xl) → 5. Stories preview (2-card) → 6. Referral CTA → 7. News (2-col) → 8. Footer

### Mission & Values
1. Hero (image + title) → 2. Mission (large, centered) → 3. Values cards (4-col: Inclusion, Empowerment, Respect, Quality) → 4. Team approach → 5. Timeline

### What We Offer
1. Title + intro → 2. Daily activities grid → 3. Life skills (2-col) → 4. Community programs → 5. Technology feature → 6. Contact CTA

### Referrals
1. Title → 2. Introduction → 3. Form → 4. Sidebar/below: Contact, FAQs, Next steps

### Gallery
1. Title → 2. Filter tabs → 3. Masonry grid → 4. Load more → 5. Instagram placeholder

### Stories of Progress
1. Hero: "Hitting Their Purple Patch" → 2. Featured story (full-width) → 3. Story grid (2-3 col) → 4. Individual story: hero image, narrative, embedded media

### Footer (4-col → stack)
**Col 1:** Logo, tagline, social
**Col 2:** Quick links (Services, Referrals, Gallery, Stories)
**Col 3:** Info (About, Contact, Privacy)
**Col 4:** Contact details, hours
**Bottom:** Copyright, accessibility statement

---

## Animation & Interaction

**Allowed:**
- Page transitions: 200-300ms smooth
- Button hover: subtle background shift
- Card hover: slight shadow elevation
- Form focus: border color transition
- Loading: skeleton screens (gallery), spinner (forms), progress indicators

**Restrictions:**
- Easy Read Mode: NO animations/transitions
- High Contrast Mode: Reduced motion

---

## Image Requirements

**Formats & Optimization:** Web-optimized, compressed without quality loss, descriptive alt text mandatory

**Specifications:**
- **Homepage hero:** Diverse group, joyful activities, landscape, 800×600px+ desktop / 375×300px mobile
- **Mission page:** Team photo or activity collage
- **Services:** Individual activity photos per card (art, cooking, tech, outdoor)
- **Gallery:** 20-30 photos of daily activities, achievements, events, facilities
- **Stories:** Portrait-style individual photos + activity photos
- **Info pages:** Illustrative icons or simplified diagrams (not photos)

---

**Token Budget:** ~1,950 tokens | **Complete:** All critical guidelines preserved with actionable specificity for developers.