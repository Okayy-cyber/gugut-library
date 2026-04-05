# Gugut Design: Copy-Paste Code Snippets
## Ready-to-implement CSS and HTML patterns

---

## 1. ICON SYSTEM

### Semi-Flat Icon Base Styling
```css
/* Apply to all icons */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 32px;
  height: 32px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.12));
  transition: transform 0.2s ease, filter 0.2s ease;
  user-select: none;
}

.icon:hover,
.icon:active {
  transform: scale(1.1);
  filter: drop-shadow(0 3px 8px rgba(0,0,0,0.18));
}

/* Large icons */
.icon.lg {
  font-size: 40px;
  width: 48px;
  height: 48px;
}

/* Small icons */
.icon.sm {
  font-size: 16px;
  width: 24px;
  height: 24px;
}

/* Animated pulse for loading/new items */
.icon.animate-pulse {
  animation: gentle-pulse 2s ease-in-out infinite;
}

@keyframes gentle-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}
```

### Icon Implementations
```html
<!-- Navigation Icons -->
<span class="icon">🏠</span> <!-- Home -->
<span class="icon">📚</span> <!-- Library -->
<span class="icon">🌍</span> <!-- Explore -->
<span class="icon">📖</span> <!-- Reader -->

<!-- Feature Icons -->
<span class="icon">🔊</span> <!-- Read Aloud -->
<span class="icon">♡</span> <!-- Favorite (hollow) -->
<span class="icon">♥</span> <!-- Favorite (filled) -->
<span class="icon">🏆</span> <!-- Achievement -->
<span class="icon">⚙️</span> <!-- Settings -->
<span class="icon">🔍</span> <!-- Search -->

<!-- Mascot -->
<span class="icon lg">🦉</span> <!-- Owl (large) -->
```

---

## 2. TYPOGRAPHY SYSTEM

### CSS Variables for Typography
```css
:root {
  /* Font sizes */
  --text-xs: 12px;
  --text-sm: 13px;
  --text-base: 14px;
  --text-md: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 28px;
  --text-4xl: 32px;

  /* Font weights */
  --weight-regular: 400;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-black: 800;

  /* Line heights */
  --line-tight: 1.2;
  --line-normal: 1.5;
  --line-relaxed: 1.6;
  --line-loose: 1.8;

  /* Letter spacing */
  --tracking-normal: 0;
  --tracking-wide: 0.5px;
  --tracking-widest: 1px;
}

/* Typography Classes */
.text-xs {
  font-size: var(--text-xs);
  font-weight: var(--weight-regular);
  line-height: var(--line-normal);
}

.text-sm {
  font-size: var(--text-sm);
  font-weight: var(--weight-regular);
  line-height: var(--line-normal);
}

.text-base {
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  line-height: var(--line-relaxed);
}

.text-lg {
  font-size: var(--text-lg);
  font-weight: var(--weight-regular);
  line-height: var(--line-relaxed);
}

/* Heading Classes */
h1, .h1 {
  font-size: var(--text-4xl);
  font-weight: var(--weight-black);
  line-height: var(--line-tight);
  letter-spacing: -0.5px;
}

h2, .h2 {
  font-size: var(--text-2xl);
  font-weight: var(--weight-bold);
  line-height: var(--line-tight);
  letter-spacing: -0.3px;
}

h3, .h3 {
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  line-height: var(--line-normal);
}

h4, .h4 {
  font-size: var(--text-md);
  font-weight: var(--weight-bold);
  line-height: var(--line-normal);
}

/* Body text (default) */
body, .body {
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  line-height: var(--line-relaxed);
}

/* Label/small text */
.label, label {
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

/* Button text */
.btn-text {
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  line-height: var(--line-tight);
  letter-spacing: var(--tracking-wide);
}
```

### Typography HTML
```html
<h1>Main Title</h1>           <!-- 32px, 800 weight -->
<h2>Section Heading</h2>      <!-- 24px, 700 weight -->
<h3>Card Title</h3>           <!-- 20px, 700 weight -->
<h4>Label</h4>                <!-- 16px, 700 weight -->
<p>Body text goes here</p>    <!-- 14px, 400 weight -->
<span class="label">BADGE</span> <!-- 12px, 800 weight, uppercase -->
```

---

## 3. BOOK CARD COMPLETE COMPONENT

### HTML Structure
```html
<div class="book-card">
  <!-- Image Container -->
  <div class="book-card-image">
    <img src="book-cover.jpg" alt="Book title" loading="lazy">

    <!-- Play Button Overlay (appears on hover) -->
    <button class="card-play-btn" aria-label="Read this book">
      <span class="play-icon">▶</span>
    </button>

    <!-- Badges (top-right) -->
    <div class="card-badges">
      <span class="badge badge-aloud">🔊 Read Aloud</span>
      <span class="badge badge-new">NEW</span>
    </div>
  </div>

  <!-- Meta Information -->
  <div class="book-card-content">
    <h3 class="book-title">Book Title Here</h3>
    <p class="book-author">Author Name</p>

    <!-- Footer -->
    <div class="card-footer">
      <span class="level-badge">Level 2</span>
      <button class="favorite-btn" aria-label="Add to favorites">
        <span class="icon">♡</span>
      </button>
    </div>
  </div>
</div>
```

### CSS Styling
```css
.book-card {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.book-card:hover {
  box-shadow: 0 12px 28px rgba(0,0,0,0.18);
  transform: translateY(-4px);
}

/* Image container */
.book-card-image {
  position: relative;
  aspect-ratio: 3/4;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.book-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.book-card:hover .book-card-image img {
  transform: scale(1.05);
}

/* Play button overlay */
.card-play-btn {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 0;
}

.book-card:hover .card-play-btn {
  opacity: 1;
}

.play-icon {
  width: 56px;
  height: 56px;
  background: var(--amber);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green-dark);
  font-size: 22px;
  font-weight: bold;
  box-shadow: 0 4px 16px rgba(0,0,0,0.25);
  transition: transform 0.3s;
}

.card-play-btn:hover .play-icon {
  transform: scale(1.15);
}

/* Badges */
.card-badges {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: rgba(255,255,255,0.95);
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.badge-aloud {
  background: var(--amber);
  color: var(--green-dark);
}

.badge-new {
  background: var(--green);
  color: white;
}

/* Content section */
.book-card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
}

.book-title {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

.book-author {
  font-size: 13px;
  color: var(--text-light);
  margin: 0;
  font-weight: 500;
}

/* Footer with level and favorite */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.level-badge {
  font-size: 11px;
  font-weight: 700;
  color: var(--green);
  text-transform: uppercase;
  background: var(--green-pale);
  padding: 4px 8px;
  border-radius: 6px;
}

.favorite-btn {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 18px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.favorite-btn:hover {
  transform: scale(1.2);
}

.favorite-btn.active {
  color: #FF6B6B;
  animation: heart-pop 0.4s ease-out;
}

@keyframes heart-pop {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1.2);
  }
}

/* Grid layout */
.book-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  width: 100%;
}

@media (max-width: 1024px) {
  .book-cards-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 640px) {
  .book-cards-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 12px;
  }
}
```

---

## 4. BADGE SYSTEM

### Badge HTML
```html
<!-- Achievement badges -->
<div class="badge-display">
  <span class="badge level-1">🦉 Fluent Hooting</span>
  <span class="badge level-2">🦉 Wise Owl</span>
  <span class="badge level-3">🦉 Guardian of Stories</span>
  <span class="badge streak">🔥 7-Day Streak</span>
  <span class="badge special">✨ Diverse Reader</span>
</div>

<!-- Badge unlock animation -->
<div class="badge-unlock-modal">
  <div class="unlock-content">
    <span class="unlock-emoji">🎉</span>
    <h2>Achievement Unlocked!</h2>
    <div class="badge-preview badge-level-2">🦉 Wise Owl</div>
    <p>You've read 15 books!</p>
    <button class="btn btn-primary">Next Book</button>
  </div>
</div>
```

### CSS
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  background: var(--amber);
  color: var(--green-dark);
  box-shadow: 0 2px 8px rgba(245, 166, 35, 0.3);
  white-space: nowrap;
}

.badge.level-1 {
  background: #A89968;
  color: white;
}

.badge.level-2 {
  background: #2E7FD9;
  color: white;
}

.badge.level-3 {
  background: #9B59B6;
  color: white;
}

.badge.streak {
  background: linear-gradient(135deg, #FF6B6B, #FF8E6B);
  color: white;
  animation: streak-glow 2s ease-in-out infinite;
}

@keyframes streak-glow {
  0%, 100% {
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
  }
  50% {
    box-shadow: 0 4px 16px rgba(255, 107, 107, 0.5);
  }
}

/* Badge unlock modal */
.badge-unlock-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: modal-appear 0.4s ease-out;
}

@keyframes modal-appear {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.unlock-content {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  max-width: 320px;
}

.unlock-emoji {
  font-size: 48px;
  display: block;
  margin-bottom: 12px;
  animation: emoji-bounce 0.6s ease-out;
}

@keyframes emoji-bounce {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.unlock-content h2 {
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 16px;
  color: var(--green-dark);
}

.badge-preview {
  font-size: 16px;
  padding: 12px 20px;
  display: inline-block;
  margin: 16px 0;
}

.unlock-content p {
  font-size: 14px;
  color: var(--text-light);
  margin: 12px 0;
}
```

---

## 5. PROGRESS TRACKING UI

### Progress Ring Component
```html
<div class="progress-ring-container">
  <svg class="progress-ring-svg" width="80" height="80">
    <circle class="progress-ring-bg" cx="40" cy="40" r="36"/>
    <circle class="progress-ring-fill" cx="40" cy="40" r="36" style="--progress: 65"/>
  </svg>
  <div class="progress-text">
    <span class="progress-number">65%</span>
    <span class="progress-label">Chapter 3</span>
  </div>
</div>
```

### Progress CSS
```css
.progress-ring-svg {
  transform: rotate(-90deg);
}

.progress-ring-bg {
  fill: none;
  stroke: var(--border);
  stroke-width: 4;
}

.progress-ring-fill {
  fill: none;
  stroke: var(--green);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 226.195;
  stroke-dashoffset: calc(226.195 * (1 - var(--progress) / 100));
  transition: stroke-dashoffset 0.5s ease;
}

.progress-ring-container {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-text {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.progress-number {
  font-size: 18px;
  font-weight: 700;
  color: var(--green-dark);
}

.progress-label {
  font-size: 10px;
  color: var(--text-light);
  text-transform: uppercase;
}

/* Reading stats bar */
.reading-stats {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: var(--green-pale);
  border-radius: 12px;
  margin-bottom: 16px;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 20px;
  font-weight: 800;
  color: var(--green-dark);
}

.stat-label {
  display: block;
  font-size: 11px;
  color: var(--text-light);
  text-transform: uppercase;
  margin-top: 4px;
}
```

---

## 6. BUTTON STYLES

### Button HTML
```html
<button class="btn btn-primary">Read Book</button>
<button class="btn btn-secondary">Learn More</button>
<button class="btn btn-outline">Browse Library</button>
<button class="btn btn-icon">
  <span class="icon">🔊</span>
</button>
<button class="btn btn-small">Start</button>
```

### Button CSS
```css
.btn {
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.btn:focus-visible {
  outline-color: var(--amber);
}

/* Primary (Green) */
.btn-primary {
  background: var(--green);
  color: white;
  box-shadow: 0 4px 12px rgba(45, 112, 48, 0.25);
}

.btn-primary:hover {
  background: var(--green-mid);
  box-shadow: 0 6px 20px rgba(45, 112, 48, 0.35);
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Secondary (Amber) */
.btn-secondary {
  background: var(--amber);
  color: var(--green-dark);
  box-shadow: 0 4px 12px rgba(245, 166, 35, 0.25);
}

.btn-secondary:hover {
  background: var(--amber-dark);
  box-shadow: 0 6px 20px rgba(245, 166, 35, 0.35);
  transform: translateY(-2px);
}

/* Outline (no fill) */
.btn-outline {
  background: transparent;
  color: var(--green);
  border: 2px solid var(--green);
}

.btn-outline:hover {
  background: var(--green-pale);
  border-color: var(--green-mid);
}

/* Icon button */
.btn-icon {
  padding: 12px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--green-pale);
  color: var(--green);
}

.btn-icon:hover {
  background: var(--green);
  color: white;
}

/* Small button */
.btn-small {
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
}

/* Disabled state */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

.btn:disabled:hover {
  transform: none;
}
```

---

## 7. HERO SECTION

### Hero HTML
```html
<div class="hero">
  <div class="hero-content">
    <h2>📚 Ready for an adventure?</h2>
    <p>Discover stories from across Africa in your own language.</p>
    <button class="btn btn-secondary">Start Reading →</button>
  </div>
  <div class="hero-mascot">
    <span class="mascot-emoji">🦉</span>
  </div>
</div>
```

### Hero CSS
```css
.hero {
  background: linear-gradient(135deg, #3D9040 0%, var(--green) 45%, var(--green-dark) 100%);
  border-radius: 20px;
  color: white;
  padding: 40px 32px;
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(20, 43, 26, 0.3);
}

.hero-content {
  max-width: 60%;
  z-index: 2;
}

.hero h2 {
  font-size: 28px;
  font-weight: 800;
  margin: 0 0 12px;
  line-height: 1.2;
}

.hero p {
  font-size: 16px;
  opacity: 0.9;
  margin: 0 0 20px;
  line-height: 1.5;
}

.hero-mascot {
  position: relative;
  z-index: 1;
}

.mascot-emoji {
  font-size: 120px;
  display: block;
  opacity: 0.15;
  transition: transform 0.3s ease;
}

.hero:hover .mascot-emoji {
  transform: rotate(10deg) scale(1.1);
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .mascot-emoji {
    font-size: 80px;
  }
}
```

---

## 8. TOAST NOTIFICATIONS

### Toast HTML
```html
<div class="toast toast-success">
  <span class="toast-icon">✅</span>
  <span class="toast-text">Book added to favorites!</span>
  <button class="toast-close">✕</button>
</div>

<div class="toast toast-info">
  <span class="toast-icon">ℹ️</span>
  <span class="toast-text">New book available</span>
</div>

<div class="toast toast-error">
  <span class="toast-icon">⚠️</span>
  <span class="toast-text">Could not load book</span>
</div>
```

### Toast CSS
```css
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--card-bg);
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  z-index: 1000;
  animation: toast-slide-in 0.3s ease-out;
  max-width: 320px;
}

@keyframes toast-slide-in {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.toast-text {
  font-size: 14px;
  color: var(--text);
  flex: 1;
}

.toast-close {
  background: none;
  border: none;
  color: var(--text-light);
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  display: flex;
  align-items: center;
}

.toast-success {
  border-left: 4px solid #10B981;
}

.toast-info {
  border-left: 4px solid var(--green);
}

.toast-error {
  border-left: 4px solid #EF4444;
}

/* Auto-dismiss */
.toast.auto-dismiss {
  animation: toast-slide-in 0.3s ease-out, toast-slide-out 0.3s ease-out 4.7s forwards;
}

@keyframes toast-slide-out {
  to {
    transform: translateX(400px);
    opacity: 0;
  }
}
```

---

## 9. QUICK-ADD COLOR ACCENTS

### New Color Variables
```css
:root {
  /* Existing */
  --green-dark: #142B1A;
  --green: #2D7030;
  --amber: #F5A623;

  /* NEW Secondary Accents */
  --blue-accent: #2E7FD9;
  --purple-accent: #9B59B6;
  --teal-accent: #1ABC9C;
  --coral-accent: #FF6B6B;
  --orange-accent: #FF8A65;
  --bronze-accent: #A89968;
}

/* Usage examples */
.category-fiction { background: var(--blue-accent); }
.category-fairytale { background: var(--purple-accent); }
.category-adventure { background: var(--teal-accent); }
.category-special { background: var(--coral-accent); }

.level-gold { color: var(--amber); }
.level-silver { color: #C0C0C0; }
.level-bronze { color: var(--bronze-accent); }
```

---

## 10. DARK THEME ENHANCEMENTS

### Dark Mode Variables
```css
body.night {
  --green-dark: #0F1117;
  --green: #4ECDC4;  /* Lighter green for dark mode */
  --amber: #FFD700;  /* Brighter gold for dark mode */
  --text: #F5F5F5;
  --text-mid: #B0B0B0;
  --text-light: #808080;
  --bg: #0A0E1A;
  --card-bg: #1A1F2E;
  --border: #2A3F5F;
  --green-pale: rgba(78, 205, 196, 0.15);
}

/* Card shadows in dark mode (more visible) */
body.night .book-card {
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}

body.night .book-card:hover {
  box-shadow: 0 12px 40px rgba(0,0,0,0.6);
}

/* Button styling in dark mode */
body.night .btn-primary {
  background: #4ECDC4;
  color: #0A0E1A;
}

body.night .btn-secondary {
  background: #FFD700;
  color: #0A0E1A;
}
```

---

## IMPLEMENTATION CHECKLIST

- [ ] Copy typography variables into your `:root`
- [ ] Update h1, h2, h3 sizing (h2: 20px, h3: 16px)
- [ ] Add icon drop-shadow filter to all icons
- [ ] Implement book card hover states (play button)
- [ ] Add badge system (read aloud, new)
- [ ] Create progress ring component
- [ ] Style buttons with primary/secondary variants
- [ ] Add hero section styling
- [ ] Implement toast notifications
- [ ] Add dark mode color overrides
- [ ] Create owl mascot placement styles
- [ ] Test on mobile (responsive grid)

---

## QUICK WIN: 1-Hour Upgrade

Copy and paste these into your main CSS file:

```css
/* Make h2 bigger and bolder */
h2 { font-size: 20px; font-weight: 700; }

/* Add icon shadows */
.icon { filter: drop-shadow(0 2px 4px rgba(0,0,0,0.12)); }

/* Card hover lift */
.book-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.18); }

/* Button hover */
.btn-primary:hover { transform: translateY(-2px); }

/* Badge styling */
.badge { padding: 6px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; }

/* Dark mode */
body.night { --green: #4ECDC4; --text: #F5F5F5; }
```

That's it! These 6 CSS rules will immediately improve your design quality.

---

