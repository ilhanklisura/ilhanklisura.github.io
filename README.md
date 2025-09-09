# Portfolio Website

Personal portfolio & blog built with **Jekyll**. I write about software engineering, side projects, and notes.

**Live:** https://ilhanklisura.com

## Local Development
```bash
bundle install
bundle exec jekyll serve
# with drafts:
bundle exec jekyll serve --drafts
```

## Deploy

Deployed via **GitHub Pages + Actions** (`.github/workflows/jekyll.yml`).
Prod build uses `_prod.config.yml` (compressed CSS).

## Content

* Posts: `_posts/` (YAML front matter supports `categories`, `tags`, `image`)
* Drafts: `_drafts/` (not published)
* Pages: `index.markdown`, `about.markdown`, `resume.markdown`, `blog.markdown`
* Styles: `assets/css/main.scss` (light/dark theme + components)