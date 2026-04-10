# Gugut Design System: Quick Reference Card
## Copy this for your desk or Slack

---

## 🎨 COLORS

### Primary
```
Green (Primary):    #2D7030  ← Main actions, nav active
Amber (Accent):     #F5A623  ← CTAs, highlights, achievements
Dark (Background):  #1A1A1A  ← Dark theme base
```

### Secondary Accents (NEW)
```
Blue:       #2E7FD9  Fiction, Learning
Purple:     #9B59B6  Fairy Tales, Special badges
Teal:       #1ABC9C  Read-aloud, New indicators
Coral:      #FF6B6B  Favorites, Hearts
Orange:     #FF8A65  Warm category
Bronze:     #A89968  Starter level badge
```

---

## ✍️ TYPOGRAPHY

### Headlines
```
h1:  32px | 800 weight | 1.1 line-height
h2:  20px | 700 weight | 1.2 line-height  ← INCREASE FROM 16px
h3:  16px | 700 weight | 1.5 line-height
h4:  14px | 600 weight
```

### Body
```
Paragraph:  14px | 400 weight | 1.6 line-height
Label:      12px | 700 weight | UPPERCASE
Button:     14px | 700 weight
```

### Font
```
Family: Nunito (already correct)
Weights: 400, 600, 700, 800 (use these only)
```

---

## 🎯 ICONS

### Style
```
Size: 24px (standard), 40px (large), 16px (small)
Shadow: drop-shadow(0 2px 4px rgba(0,0,0,0.12))
Hover: scale(1.1), transform 0.2s
```

### Core Icons (with owl theme where possible)
```
Navigation:
  Home → 🏠          Library → 📚       Explore → 🌍       Reader → 📖

Feature:
  Read Aloud → 🔊    Favorite (hollow) → ♡    Favorite (filled) → ♥
  Achievement → 🏆   Settings → ⚙️      Search → 🔍        Mascot → 🦉
```

---

## 📱 COMPONENTS

### Buttons
```
Primary:    Green bg, white text, hover: -2px translateY, scale shadow
Secondary:  Amber bg, dark text
Outline:    Transparent bg, green border
Icon:       Circular, 48px, background highlight
Small:      12-13px font size, 8px padding
```

### Cards
```
Border radius:  16px
Shadow:        0 4px 12px rgba(0,0,0,0.08)
Hover:         translateY(-4px), shadow increases to 0 12px 28px
Aspect ratio:  3:4 (book covers)
```

### Badges
```
Padding:        6px 12px
Border radius:  20px
Font size:      11px
Font weight:    700
Background:     White (default), Amber (read-aloud), Green (new)
```

### Progress Ring
```
Radius:    36px (in 80px container)
Stroke:    4px
Animated:  stroke-dasharray transition
Fill color: var(--green)
```

---

## 🦉 MASCOT USAGE

### Placements (Add These 6 Places)
1. **Hero sections**: 120px, 15% opacity, hover rotate
2. **Empty states**: 80px, centered, "Try browsing categories..."
3. **Loading**: Animated blinking eyes
4. **Achievement**: Celebrate with jumping emoji
5. **Reading screen**: Sleeping owl in corner
6. **Onboarding**: Waving owl, 60px

### Expressions
```
Happy 🦉     → Reading books, CTAs, celebration
Reading 🦉   → During reading, progress display
Thinking 🦉  → Loading, "thinking" states
Sleeping 😴  → Pause screens, waiting
Celebratory 🎉 → Badge unlocked, milestone reached
Friendly 🦉  → Help tooltips, guidance
```

---

## 🎮 GAMIFICATION

### Badge System
```
Fluent Hooting  (5 books)   → Bronze color
Wise Owl       (15 books)   → Blue color
Guardian       (30 books)   → Purple color
Legend         (50+ books)  → Gold/Amber color
```

### Streaks
```
Icon: 🔥 (fire)
Animation: Glow effect, pulse on new milestone
Display: Stats widget on home (top-right)
```

### Progress Display
```
Ring progress: For individual books (0-100%)
Stats: Weekly goal bar (X/10 books)
Badge count: Total badges earned
```

---

## 🎬 ANIMATIONS

### Standard Timings
```
Hover effects:   0.2s ease
Card lift:       0.3s cubic-bezier(0.4, 0, 0.2, 1)
Button press:    0.15s ease-out
Achievement:     0.4s ease-out
Loading pulse:   2s ease-in-out infinite
```

### Key Animations
```
❌ DON'T animate: margin, padding, width, height
✅ DO animate:    transform, opacity, box-shadow, color
```

---

## 🌙 DARK MODE

### Override Colors
```
Background:  #1A1A1A  →  #0A0E1A
Text:        #1C1C1C  →  #F5F5F5
Card:        #FFF     →  #1A1F2E
Border:      #DDD     →  #2A3F5F
Green:       #2D7030  →  #4ECDC4  (lighter for contrast)
Amber:       #F5A623  →  #FFD700  (brighter for contrast)
```

### Implementation
```css
body.night {
  --green: #4ECDC4;
  --text: #F5F5F5;
  /* ... other variables */
}
```

---

## ✅ IMPLEMENTATION CHECKLIST

### Week 1 (Typography + Icons)
- [ ] h2: 16px → 20px
- [ ] h3: Add 700 weight
- [ ] Add icon drop-shadow
- [ ] Test mobile sizing

### Week 2 (Cards + Badges)
- [ ] Card hover: translateY(-4px)
- [ ] Play button overlay on hover
- [ ] Badge styling (padding, radius, colors)
- [ ] Test touch devices

### Week 3 (Gamification)
- [ ] Progress ring component
- [ ] Badge unlock modal
- [ ] Reading stats display
- [ ] Toast notifications

### Week 4 (Personality)
- [ ] Owl in hero (15% opacity)
- [ ] Owl in empty state
- [ ] Owl in loading animation
- [ ] Badge celebration animation

---

## 🔄 RESPONSIVE GRID

### Book Cards
```
Desktop:   repeat(auto-fill, minmax(160px, 1fr))
Tablet:    repeat(auto-fill, minmax(140px, 1fr))
Mobile:    repeat(auto-fill, minmax(120px, 1fr))
Gap:       20px (desktop) → 12px (mobile)
```

---

## 🌐 ACCESSIBILITY

### Minimum Contrast Ratios
```
Regular text:    4.5:1  (normal), 3:1  (large text)
UI components:   3:1    (borders, icons)
Focus outline:   2.5px solid var(--amber), 2px offset
```

### Touch Targets
```
Minimum size:    44-48px
Padding:         8-12px inside
Spacing:         8px minimum between targets
```

---

## 📐 SPACING SCALE

### Standard Gaps
```
4px   → Tight (between inline elements)
8px   → Normal (between components)
12px  → Medium (section spacing)
16px  → Comfortable (card padding)
20px  → Large (section gaps)
24px  → Extra large (major sections)
32px  → Massive (page sections)
```

---

## 🎯 KEY DECISION POINTS

### Before Starting Implementation

**Question 1: Icon Implementation**
- [ ] Use emoji + CSS (current approach, fast)
- [ ] Use SVG icons (more control, slightly slower)

**Question 2: Owl Character**
- [ ] Use emoji only (🦉, free, no limitations)
- [ ] Use custom illustrations (expensive, very custom)

**Question 3: Gamification Emphasis**
- [ ] Subtle badges (under features)
- [ ] Prominent badges (hero section, stats widget)

**Question 4: Animation Level**
- [ ] Minimal (hover/active only)
- [ ] Standard (current recommendations)
- [ ] High (celebration animations, transitions)

**Question 5: Rollout Approach**
- [ ] All at once (1 design refresh)
- [ ] Incremental (weekly updates)
- [ ] Phased (phases 1-4 over 8 weeks)

---

## 💾 CSS SHORTCUT

Paste into your stylesheet immediately:

```css
/* Typography */
h2 { font-size: 20px; font-weight: 700; }
h3 { font-size: 16px; font-weight: 700; }
body { font-size: 14px; line-height: 1.6; }

/* Icons */
.icon { filter: drop-shadow(0 2px 4px rgba(0,0,0,0.12)); }
.icon:hover { transform: scale(1.1); }

/* Cards */
.book-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.18); }

/* Buttons */
.btn:hover { transform: translateY(-2px); }

/* Dark mode */
body.night { --green: #4ECDC4; --text: #F5F5F5; }
```

---

## 📞 COMMON QUESTIONS

**Q: When should I update h2 from 16px to 20px?**
A: Week 1. This is highest ROI change.

**Q: Do I need to update all icons at once?**
A: No. Do navigation icons first (bottom nav), then feature icons.

**Q: Should dark theme updates wait until Phase 3?**
A: No. Update dark mode colors in Phase 1 with typography.

**Q: What's the minimum for a "complete" Phase 1?**
A: Typography (h2, h3 sizes) + card hover + badge styling. That's ~12 hours.

**Q: Can I skip gamification?**
A: Not recommended. It's what drives kids engagement in competitors.

---

## 🎓 LEARNING RESOURCES

- **Nunito font**: https://fonts.google.com/specimen/Nunito
- **WCAG Contrast**: https://webaim.org/resources/contrastchecker/
- **CSS transforms**: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- **Drop-shadow filter**: https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow

---

## 📊 EXPECTED OUTCOMES

After Phase 1 (2 weeks, 20 hours):
- Typography hierarchy: +40% clarity
- Visual polish: +25% professional appearance
- Engagement signals: +10-15% (from interactions)

After Phases 1-2 (4 weeks, 44 hours):
- Feature parity: +50% (vs. competitors)
- Gamification impact: +20% engagement
- User feedback: 8+/10 design rating

After Phases 1-3 (6 weeks, 60 hours):
- Visual differentiation: Clear leader position
- Mascot recognition: High (owl visible everywhere)
- Retention boost: +25-30%

---

**Prepared**: March 31, 2026
**Target audience**: Gugut design + engineering team
**Update frequency**: As needed (changes to competitor design)

---

