# Plan: Desktop Polish, Mobile Landscape Support, and Orientation Reminder

## Overview

Fix desktop issues, polish the desktop experience, and create a mobile view that works specifically in landscape/horizontal orientation with a cool reminder to rotate the device when in portrait mode.

## 1. Desktop Fixes and Polish

- **Fix AI chat panel z-index conflicts** with other overlapping controls (tour, audio, fullscreen buttons stacking on the right side)
- **Fix potential panel overlap** - the right-side controls (Sound, Tour, Fullscreen, Settings, AI Guide) are all positioned at `right: 20px` and may overlap on smaller desktop screens
- **Ensure loading screen properly hides** after animation completes (add `pointer-events: none` after fade-out)
- **Fix copyright positioning** - currently overlaps with keyboard hint at bottom-left
- **Clean up unused CSS** - remove dead `.mobile-disclaimer` styles and any leftover social-related CSS

## 2. Mobile Landscape-Only Experience

Modify `mobile.html` to:

- **Lock the experience to landscape/horizontal orientation** - the full mobile page content only displays when the device is in landscape mode
- **Show a cool "Rotate Your Device" overlay** when the phone is in portrait mode:
  - Animated phone icon rotating from portrait to landscape
  - Message like "Rotate your phone for the best experience"
  - Starfield background with space theme matching the site
  - Smooth animation with a rotating phone SVG/CSS graphic
- **Optimize mobile layout for landscape**:
  - Adjust carousel cards to use landscape-friendly proportions (side-by-side layout instead of vertical scroll)
  - Reduce padding and font sizes to fit landscape viewport height
  - Make planet cards wider but shorter to maximize horizontal space
  - Adjust quiz, size comparison, and fun facts sections for landscape

## 3. Portrait Mode Overlay ("Cool Reminder")

- Full-screen overlay with `position: fixed` covering the entire viewport
- Animated CSS phone icon that rotates 90 degrees repeatedly
- Pulsing glow effect matching the orange (#f39041) brand color
- Text: "Turn Your Phone Sideways" with subtitle "For the best space exploration experience"
- Stars background animation for immersion
- Uses CSS `@media (orientation: portrait)` to show/hide automatically
- No JavaScript dependency for the detection - pure CSS media query

## Technical Details

### Files to modify:

1. `**public/orbit-world/mobile.html**` - Add portrait overlay HTML, landscape-optimized CSS, orientation media queries
2. `**public/orbit-world/style.css**` - Minor desktop fixes (z-index, positioning cleanup, loading screen pointer-events)
3. `**public/orbit-world/index.html**` - Minor desktop bug fixes

### Key CSS approach for orientation:

```text
@media (orientation: portrait) {
  .rotate-overlay { display: flex; }  /* Show rotate reminder */
  .main-content { display: none; }     /* Hide content */
}

@media (orientation: landscape) {
  .rotate-overlay { display: none; }   /* Hide overlay */
  .main-content { display: block; }    /* Show content */
}
```

### Landscape layout adjustments:

- Planet carousel cards: horizontal scroll with wider, shorter cards
- Stats grid: single row instead of 2x2
- Sections stack horizontally where possible
- Reduced vertical spacing throughout
- Fix ,improve and add new animation and transitions 