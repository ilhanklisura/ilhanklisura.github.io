---
layout: post
title: "How I built this portfolio: Jekyll + Minima tweaks"
date: 2025-09-09 10:00:00 +0200
categories: [Tutorials]
tags: [jekyll, minima, scss, liquid, dark-mode]
bucket: Meta
excerpt: "Dark/light theme, wide blog cards, and an auto filter bar with a few lines of Liquid and SCSS."
---

I wanted a clean portfolio + blog that I can push from Git and forget about.  
This post is a small tour of what I changed on top of **Jekyll + Minima**: color tokens for light/dark mode, a sticky header, **wide (horizontal) blog cards** with optional thumbnails, and an **auto-generated filter bar** built with Liquid.

---

## Goals

- Keep Minima, but make it *mine* (colors, typography, gentle hover states).
- Single source of truth for theme (CSS variables) → easy light/dark.
- Blog page that filters by category/tag without building extra pages.
- Posts stay in Markdown; drafts don’t ship to production.

---

## Folder structure (relevant parts)

```
.
├── \_config.yml
├── \_posts/
│   └── 2025-09-09-building-this-portfolio-jekyll-minima-tweaks.md   ← this post
├── \_drafts/                                                          ← drafts live here (optional)
├── assets/
│   ├── main.scss                                                     ← styles (overrides + custom)
│   └── images/
│       ├── avatar.jpg
│       └── posts/
│           └── portfolio-build.jpg                                   ← post thumbnail (optional)
├── blog.md                                                           ← blog index with filter bar
└── index.md                                                          ← centered hero + recent posts
````


---

## Theme tokens + Minima overrides (SCSS)

I override Minima variables *before* importing the theme, then expose **CSS variables** for light/dark.

```scss
/* assets/main.scss (excerpt) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

/* Minima variable overrides */
$brand-color: #7c3aed;
$link-base-color: $brand-color;
$link-hover-color: darken($brand-color, 10%);
$base-font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* import Minima after overrides */
@import "minima";

/* CSS variables (light) */
:root {
  --bg:#fff; --text:#111827; --muted:#6b7280;
  --card:#fff; --border:#e5e7eb; --brand:#{$brand-color};
  --header-bg:#fff; --header-text:#111827; --header-border:#e5e7eb;
  color-scheme: light;
}

/* CSS variables (dark) */
[data-theme="dark"] {
  --bg:#0b1020; --text:#e5e7eb; --muted:#9aa4b2;
  --card:#12172a; --border:#243049; --brand:#a78bfa;
  --header-bg:#0b1020; --header-text:#fff; --header-border:#243049;
  color-scheme: dark;
}

html,body { background:var(--bg); color:var(--text); }
.wrapper { max-width: 1024px; }
a, a:visited { color:var(--brand); text-decoration:none; }
a:hover { text-decoration: underline; }
````

### Sticky header + subtle underline

```scss
/* Header / navbar */
.site-header{
  position: sticky; top:0; z-index:50;
  background:var(--header-bg);
  border-bottom:1px solid var(--header-border);
}
.site-header .site-title,
.site-header .page-link { color:var(--header-text); text-decoration:none; }

/* underline on hover using brand color */
.site-nav .page-link { position:relative; padding:.25rem .45rem; font-weight:600; }
.site-nav .page-link::after{
  content:""; position:absolute; left:0; bottom:-6px; height:2px; width:0; background:var(--brand);
  transition: width .2s ease;
}
.site-nav .page-link:hover::after,
.site-nav .page-link.active::after { width:100%; }
```

> If you want a visible light shadow under the header only in light mode, add:
>
> ```scss
> @media (prefers-color-scheme: light) {
>   :root:not([data-theme="dark"]) .site-header { box-shadow:0 2px 8px rgba(0,0,0,.04); }
> }
> ```

---

## Home (centered hero)

`index.md` keeps a centered avatar, name and role, and a small row of “pill” links that **don’t change color when visited**:

```html
<!-- index.md (hero excerpt) -->
<div class="hero">
  <img class="hero-avatar" src="{{ '/assets/images/avatar.jpg' | relative_url }}" alt="Ilhan Klisura">
  <h1 class="hero-title">Klisura Ilhan</h1>
  <p class="hero-subtitle">Software Engineer</p>

  <p class="hero-socials">
    <a class="icon-link" href="mailto:work@ilhanklisura.com">Email</a>
    <a class="icon-link" href="https://github.com/ilhanklisura" target="_blank" rel="noopener">GitHub</a>
    <a class="icon-link" href="https://www.linkedin.com/in/ilhanklisura/" target="_blank" rel="noopener">LinkedIn</a>
    <a class="icon-link" href="{{ '/resume/' | relative_url }}">Resume</a>
  </p>
</div>
```

```scss
/* hero bits (assets/main.scss excerpt) */
.hero { text-align:center; padding:3.25rem 0 1.25rem; }
.hero-avatar{ width:180px;height:180px;border-radius:50%;object-fit:cover;border:3px solid var(--border); }
.hero-title{ font-size:2.6rem;font-weight:800;margin:0 0 .2rem; }
.hero-subtitle{ font-size:1.15rem;color:var(--muted);margin:0 0 .9rem; }
.icon-link, .icon-link:visited { color:var(--text)!important; }
.icon-link{ display:inline-flex;gap:.4rem;align-items:center;padding:.35rem .6rem;border:1px solid var(--border);border-radius:999px;background:var(--card);font-weight:600; }
.icon-link:hover{ border-color:var(--brand); }
```

---

## Blog page with **wide cards** + **auto filter bar**

The blog index is just a page (`/blog/`) that lists posts in **horizontal cards**.
Each card can show a left thumbnail if the post front-matter has `image:`.

### 1) The page

Save this as `blog.md`:

{% raw %}

```liquid
---
layout: page
title: Blog
permalink: /blog/
---

# Blog

{%- comment -%}
Collect ALL unique slugs from categories, tags, and optional `bucket`,
so the filter bar builds itself (no manual upkeep).
{%- endcomment -%}
{% assign raw = "" %}
{% for post in site.posts %}
  {% if post.categories %}
    {% for c in post.categories %}
      {% if c != blank %}
        {% assign s = c | strip | slugify %}
        {% capture token %},{{ s }},{% endcapture %}
        {% unless raw contains token %}{% assign raw = raw | append: token %}{% endunless %}
      {% endif %}
    {% endfor %}
  {% endif %}

  {% if post.tags %}
    {% for t in post.tags %}
      {% if t != blank %}
        {% assign s = t | strip | slugify %}
        {% capture token %},{{ s }},{% endcapture %}
        {% unless raw contains token %}{% assign raw = raw | append: token %}{% endunless %}
      {% endif %}
    {% endfor %}
  {% endif %}

  {% if post.bucket and post.bucket != blank %}
    {% assign s = post.bucket | strip | slugify %}
    {% capture token %},{{ s }},{% endcapture %}
    {% unless raw contains token %}{% assign raw = raw | append: token %}{% endunless %}
  {% endif %}
{% endfor %}
{% assign filters = raw | split: "," | uniq | sort_natural %}

<p class="filter-bar">
  <a class="filter-chip active" data-filter="all" href="#all">All</a>
  {% for f in filters %}
    {% assign f = f | strip %}
    {% if f != "" %}
      {% assign label = f | replace: "-", " " | capitalize %}
      {% if f == "dotnet" %}{% assign label = ".NET" %}{% endif %}
      {% if f == "sql-server" %}{% assign label = "SQL Server" %}{% endif %}
      <a class="filter-chip" data-filter="{{ f }}" href="#{{ f }}">{{ label }}</a>
    {% endif %}
  {% endfor %}
</p>

<div class="post-grid">
{% for post in site.posts %}
  {% assign data_cats = "" %}
  {% if post.categories %}{% for c in post.categories %}{% if c != blank %}{% assign data_cats = data_cats | append: c | slugify | append: " " %}{% endif %}{% endfor %}{% endif %}
  {% if post.tags %}{% for t in post.tags %}{% if t != blank %}{% assign data_cats = data_cats | append: t | slugify | append: " " %}{% endif %}{% endfor %}{% endif %}
  {% if post.bucket and post.bucket != blank %}{% assign data_cats = data_cats | append: post.bucket | slugify %}{% endif %}

  <article class="post-card" data-cats="{{ data_cats | downcase | strip }}">
    {% if post.image %}
      <div class="post-card-media">
        <img src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}">
      </div>
    {% endif %}

    <div class="post-card-body">
      <header>
        <h2 class="post-card-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="post-card-meta">
          {{ post.date | date: "%Y-%m-%d" }}
          {% assign has_any = false %}
          {% if post.categories and post.categories.size > 0 %}{% assign has_any = true %}{% endif %}
          {% if post.tags and post.tags.size > 0 %}{% assign has_any = true %}{% endif %}
          {% if post.bucket %}{% assign has_any = true %}{% endif %}
          {% if has_any %} · {% endif %}

          {% if post.categories %}
            {% for c in post.categories %}
              {% assign s = c | slugify %}
              {% assign label = s | replace: "-", " " | capitalize %}
              {% if s == "dotnet" %}{% assign label = ".NET" %}{% endif %}
              {% if s == "sql-server" %}{% assign label = "SQL Server" %}{% endif %}
              <span class="category-chip">{{ label }}</span>
            {% endfor %}
          {% endif %}
          {% if post.tags %}
            {% for t in post.tags %}
              {% assign s = t | slugify %}
              {% assign label = s | replace: "-", " " | capitalize %}
              {% if s == "dotnet" %}{% assign label = ".NET" %}{% endif %}
              {% if s == "sql-server" %}{% assign label = "SQL Server" %}{% endif %}
              <span class="category-chip">{{ label }}</span>
            {% endfor %}
          {% endif %}
          {% if post.bucket %}<span class="category-chip">{{ post.bucket }}</span>{% endif %}
        </p>
      </header>

      <p class="post-card-excerpt">
        {% if post.excerpt %}
          {{ post.excerpt | strip_html | truncate: 180 }}
        {% else %}
          {{ post.content | strip_html | truncate: 180 }}
        {% endif %}
      </p>

      <p class="post-card-actions">
        <a class="btn ghost" href="{{ post.url | relative_url }}">Read more →</a>
      </p>
    </div>
  </article>
{% endfor %}
</div>

<script>
(function () {
  function normalize(s){ return (s || "").toLowerCase(); }
  function applyFilter(key) {
    var cards = document.querySelectorAll(".post-card");
    cards.forEach(function(card){
      var cats = normalize(card.getAttribute("data-cats"));
      var show = !key || key === "all" || cats.indexOf(key) !== -1;
      card.style.display = show ? "" : "none";
    });
    var chips = document.querySelectorAll(".filter-chip");
    chips.forEach(function(ch){
      ch.classList.toggle("active", ch.dataset.filter === key || (!key && ch.dataset.filter === "all"));
    });
  }
  document.addEventListener("click", function(e){
    var a = e.target.closest(".filter-chip");
    if (!a) return;
    e.preventDefault();
    var key = normalize(a.dataset.filter);
    if (key) history.replaceState(null, "", "#" + key);
    applyFilter(key);
  });
  var initial = normalize((location.hash || "#all").slice(1));
  applyFilter(initial);
})();
</script>
```

{% endraw %}

### 2) The card styles

```scss
/* assets/main.scss (excerpt) */
.post-grid { display:grid; grid-template-columns:1fr; gap:1rem; }
.post-card{
  display:flex; align-items:stretch; gap:1rem;
  border:1px solid var(--border); background:var(--card); color:var(--text);
  border-radius:14px; padding:1rem 1.25rem; min-height:150px;
  transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
}
.post-card:hover { transform:translateY(-2px); border-color:var(--brand); box-shadow:0 8px 26px rgba(0,0,0,.08); }
.post-card-media{ flex:0 0 160px; height:120px; border-radius:12px; overflow:hidden; background:var(--border); }
.post-card-media img{ width:100%; height:100%; object-fit:cover; transition: transform .2s ease; }
.post-card:hover .post-card-media img{ transform:scale(1.03); }
.post-card-title{ font-size:1.35rem; margin:0 0 .35rem 0; }
.post-card-title a{ color:var(--text); text-decoration:none; }
.post-card-title a:hover{ color:var(--brand); text-decoration:underline; }
.post-card-meta{ margin:0 0 .5rem 0; font-size:.9rem; color:var(--muted); }
.post-card-excerpt{ margin:0; font-size:1rem; line-height:1.7; }
```

### 3) Thumbnails via front-matter

In any post add:

```yaml
image: /assets/images/posts/portfolio-build.jpg
```

If `image` is missing, the card renders without a left thumbnail (still looks good).

---

## Metadata that powers the filters

Each post can have any combination of:

```yaml
categories: [tutorials, dotnet]     # broader buckets
tags: [sql-server, performance]     # more specific tech/keywords
bucket: Backend                      # your custom single label (optional)
```

The filter bar collects **all** unique slugs from `categories + tags + bucket`.
**Avoid empty values** like `tags:` with no values → they produce blank chips. If you’ve ever had a mysterious empty pill, that was it. 🙂

---

## Drafts, publishing, and permalinks

* Drafts live in `/_drafts/` and build only locally with `--drafts`.
* You can also keep a post in `_posts/` with `published: false` and preview with `--unpublished`.
* If you prefer nicer URLs (no date), add to `_config.yml`:

```yml
permalink: /blog/:title/
```
