# Yatori Pitch Deck

A modern, responsive HTML pitch deck for Yatori.

## 🚀 Quick Start

1. **Open in browser:**
   ```bash
   open index.html
   # or
   start index.html  # Windows
   ```

2. **Navigate slides:**
   - `←` / `→` arrows or on-screen buttons
   - `Space` / `Page Down` to advance
   - `Home` / `End` for first/last slide
   - `F` for fullscreen
   - `P` to print/save as PDF

## 📄 Export to PDF

**Option 1: Browser Print (Recommended)**
1. Press `P` or `Ctrl/Cmd + P`
2. Select "Save as PDF"
3. Choose layout: **Landscape**
4. Margins: **None**
5. Save

**Option 2: Command Line**
```bash
# Using Chrome/Chromium
chrome --headless --print-to-pdf=yatori-pitch.pdf index.html
```

## 🎨 Customization

### Edit Content
Open `index.html` and modify the placeholder text marked with `[X]` brackets.

### Change Colors
Edit `css/styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary: #6366f1;      /* Main brand color */
    --secondary: #06b6d4;    /* Accent color */
    --bg-dark: #0f172a;      /* Background */
    /* ... */
}
```

### Add Images
Place images in `assets/` folder and reference them in the HTML.

## 📱 Features

- ✅ Keyboard navigation
- ✅ Touch/swipe support (mobile)
- ✅ Fullscreen mode
- ✅ Progress indicator
- ✅ Print-optimized for PDF export
- ✅ Responsive design
- ✅ Smooth animations

## 🛠️ Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript
- No dependencies

---

Built for Yatori | March 2026
