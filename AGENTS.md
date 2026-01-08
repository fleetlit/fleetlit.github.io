# Fleetlit GitHub Pages - Agent Guidelines

This file provides conventions and patterns for agentic coding agents working on this Jekyll-based documentation site.

## Build Commands

```bash
# Development
bundle exec jekyll serve                    # Start dev server on localhost:4000
bundle exec jekyll serve --livereload       # Start with live reload

# Production
bundle exec jekyll build                     # Build site to _site/
bundle exec jekyll deploy                    # Deploy to GitHub Pages

# Dependencies
bundle install                              # Install Ruby dependencies
bundle update                               # Update dependencies
```

## Project Structure

```
fleetlit.github.io/
├── _includes/          # Reusable partials (header, footer, head)
├── _layouts/           # Page layouts (default, page, doc)
├── _config.yml         # Jekyll configuration
├── assets/
│   ├── css/styles.css  # Main stylesheet
│   └── js/main.js      # Interactive features
├── docs/              # Documentation pages (collection)
└── *.md              # Root pages (index, features, roadmap, etc.)
```

## Code Style Guidelines

### Front Matter (Markdown Files)

All markdown pages must include front matter at the top:

```yaml
---
layout: page          # Required: default, page, or doc
title: Page Title    # Required: Display title
subtitle: Optional   # Optional: Page subtitle/description
---
```

For pages in `/docs/` collection, layout defaults to `doc` via `_config.yml` defaults.

### CSS Conventions

**Naming**: Use flat kebab-case classes (e.g., `.site-header`, `.feature-card`, `.hero-content`)
- NOT BEM: No `block__element--modifier` pattern
- Semantic names: `.nav-link`, `.code-block`, `.step-number`
- Modifier suffixes: `.btn-primary`, `.btn-secondary`, `.api-badge.public`

**Organization**: Use section delimiter comments:
```css
/* ===================================
   Section Name
   =================================== */
```

**Theming**: Use CSS custom properties (variables) defined in `:root`:
- Colors: `--primary-color`, `--text-primary`, `--bg-primary`
- AI palette: `--ai-purple`, `--ai-blue`, `--ai-cyan`, `--ai-pink`, `--ai-violet`
- Spacing: Define consistent spacing scales
- Gradients: `--gradient-ai`, `--gradient-dark`, `--gradient-card`
- Effects: `--glow-purple`, `--glow-blue`, `--glow-cyan`, `--shadow-glow`

**Design System**:
- Dark theme by default
- AI-inspired color palette (purple, blue, cyan gradients)
- Smooth transitions: `transition: all 0.3s ease`
- Glassmorphism: `backdrop-filter: blur()` for translucent effects
- Card-based design with hover lift effects and glow shadows
- Responsive breakpoints: 768px (tablet), 480px (mobile)

**What NOT to use**:
- No BEM methodology
- No utility-first CSS (like Tailwind)
- No CSS-in-JS
- No CSS preprocessors (SASS/LESS)

### JavaScript Conventions

**Pattern**: Single file (`assets/js/main.js`), module pattern not required

**Event Handling**: Use `DOMContentLoaded` listener:
```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Your code here
});
```

**DOM Selection**: Use `querySelector` and `querySelectorAll`

**Functions**: Arrow functions preferred for callbacks
```javascript
const handleClick = async () => { /* ... */ }
```

**Async Operations**: Use `async/await` for clipboard, API calls with try-catch:
```javascript
try {
  await navigator.clipboard.writeText(text);
} catch (err) {
  console.error('Operation failed:', err);
}
```

**State Management**: Use class-based state toggling (`.active` class)

**Performance**:
- Cache selector results in variables
- Event delegation for outside clicks
- CSS transitions instead of JS animations

**What NOT to use**:
- No JavaScript frameworks
- No TypeScript
- No JSDoc comments

### HTML/Liquid Templates

**Variables**: Use Jekyll Liquid syntax
- Site config: `{{ site.title }}`, `{{ site.url }}`
- Page data: `{{ page.title }}`, `{{ page.subtitle }}`
- Filters: `{{ '/path' | relative_url }}`
- Conditionals: `{% if condition %}...{% endif %}`
- Loops: `{% for item in site.nav %}...{% endfor %}`

**Layouts**:
- `default.html` - Base layout with header/footer
- `page.html` - Standard page with page header
- `doc.html` - Documentation with sidebar navigation

**Includes**: Reusable components in `_includes/`:
- `head.html` - Meta tags, CSS links
- `header.html` - Navigation header
- `footer.html` - Site footer

### Markdown Formatting

**Section Separators**: Use horizontal rules `---` between major sections

**Headings**:
- H1: Page title (from front matter)
- H2: Major sections (`## Section Name`)
- H3: Subsections (`### Subsection`)
- H4: Sub-subsections (rare)

**Code Blocks**: Use fenced code blocks with language specifiers
```bash
command here
```

```yaml
key: value
```

```javascript
// code here
```

```go
// Go code
```

```json
{
  "key": "value"
}
```

**Links**: Use relative URLs for internal links
```markdown
[Link text](/docs/getting-started)
```

**Lists**: Use `-` for unordered, numbered for sequential steps

**Emojis**: Use emojis in headings and lists for visual interest
```markdown
## 🚀 Features
### 🔐 Security
- ✅ Completed
- 🟡 In Progress
```

**Status Indicators**: Use colored badges for status
```markdown
**Status:** Planned | **Effort:** 3-4 weeks
```

**Closing Signature**: End documentation with call-to-action
```markdown
---

Happy building! 🚀
```

**Last Updated**: Optional timestamp at end
```markdown
---

**Last Updated:** 2025-01-08
```

## Navigation

Update `_config.yml` to add/remove navigation items:
```yaml
nav:
  - title: Page Title
    url: /page-url
```

## File Naming

- Pages: `kebab-case.md` (e.g., `getting-started.md`)
- Assets: `kebab-case.js`, `kebab-case.css`
- Layouts: Lowercase (e.g., `default.html`, `page.html`, `doc.html`)

## Common Patterns

**New Documentation Page**:
1. Create file in `/docs/` directory (or root for top-level pages)
2. Add front matter with layout, title, subtitle
3. Add sidebar link in `_layouts/doc.html` if needed
4. Update `_config.yml` nav if root-level page

**CSS Class Naming**:
- Container: `.container`
- Grid: `.grid-name`, `.grid-item`
- Components: `.component-name`, `.component-name-sub`
- Modifiers: `.btn-primary`, `.btn-secondary`

**Interactive Features**:
- Mobile menu toggle with `active` class
- Smooth scroll for anchor links
- Active state highlighting for navigation
- Copy-to-clipboard for code blocks (auto-added via JS)

## Deployment

- GitHub Pages auto-deploys from `main` branch
- No CI/CD configuration needed
- Site builds automatically on push
- Check `_config.yml` for `baseurl` if deploying to subdirectory

## Testing

- Run `bundle exec jekyll serve` locally to verify changes
- Test on mobile (viewport `< 480px`) and tablet (`< 768px`)
- Check navigation links work
- Verify code blocks render correctly
- Test interactive features (mobile menu, smooth scroll, copy buttons)
