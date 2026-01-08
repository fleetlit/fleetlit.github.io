# Fleetlit GitHub Pages Site

This is the official GitHub Pages website for [Fleetlit](https://github.com/fleetlit/fleetlit) - Supabase alternative in AI Era.

## 🌐 Visit the Site

- **Live Site**: [https://fleetlit.github.io](https://fleetlit.github.io)
- **GitHub Repository**: [https://github.com/fleetlit/fleetlit](https://github.com/fleetlit/fleetlit)

## 📚 Documentation Structure

- **Homepage** (`/`) - Overview, features, and quick start
- **Features** (`/features`) - Detailed feature list
- **API** (`/api`) - Complete API reference
- **Docs** (`/docs/`) - Documentation and guides
  - Getting Started
  - API Reference
  - Architecture Guide
  - Deployment Guide
- **Roadmap** (`/roadmap`) - Product roadmap and timeline

## 🛠️ Local Development

### Prerequisites

- Ruby 3.0+
- Bundler
- Jekyll

### Installation

```bash
# Clone the repository
git clone https://github.com/fleetlit/fleetlit.github.io.git
cd fleetlit.github.io

# Install dependencies
bundle install
```

### Run Locally

```bash
# Start Jekyll server
bundle exec jekyll serve

# Or with live reload
bundle exec jekyll serve --livereload
```

Visit [http://localhost:4000](http://localhost:4000) in your browser.

### Build for Production

```bash
# Build the site
bundle exec jekyll build

# Output will be in _site/ directory
```

## 📁 Project Structure

```
fleetlit.github.io/
├── _includes/          # Reusable includes (header, footer)
├── _layouts/           # Page layouts
├── _config.yml         # Jekyll configuration
├── assets/             # CSS, JS, images
│   ├── css/
│   └── js/
├── docs/               # Documentation pages
├── index.md            # Homepage
├── features.md         # Features page
├── api.md              # API documentation
├── roadmap.md          # Roadmap page
└── README.md           # This file
```

## 🎨 Customization

### Theme

The site uses custom CSS with a modern, gradient-based design. Main styles are in:
- `assets/css/styles.css` - Main stylesheet
- `assets/js/main.js` - JavaScript for interactions

### Configuration

Edit `_config.yml` to customize:
- Site title and description
- Navigation links
- Social links
- Build settings

## 📝 Content Management

### Adding New Pages

1. Create a new Markdown file in the root directory or `docs/` folder
2. Add front matter:

```yaml
---
layout: page  # or 'doc' for documentation pages
title: Page Title
subtitle: Optional subtitle
---
```

3. Add content using Markdown

### Modifying Navigation

Edit navigation links in `_config.yml`:

```yaml
nav:
  - title: Page Title
    url: /page-url
```

## 🚀 Deployment

This site is automatically deployed by GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
# Build the site
bundle exec jekyll build

# Deploy to GitHub Pages
bundle exec jekyll deploy
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [fleetlit](https://github.com/fleetlit/fleetlit) repository for details.

## 🔗 Links

- **Fleetlit**: [https://github.com/fleetlit/fleetlit](https://github.com/fleetlit/fleetlit)
- **Documentation**: [https://fleetlit.github.io/docs/](https://fleetlit.github.io/docs/)
- **Issues**: [https://github.com/fleetlit/fleetlit/issues](https://github.com/fleetlit/fleetlit/issues)

---

Built with ❤️ using [Jekyll](https://jekyllrb.com/) and [GitHub Pages](https://pages.github.com/)
