---
layout: page
permalink: /
---

<section class="home-hero">
  <div class="home-hero-left">
    <p class="kicker">Software Engineer | .NET • Golang • Azure • AI Integrations</p>
    <h1 class="home-title">Ilhan Klisura</h1>
    <p class="home-lead">
      Passionate Software Engineer building scalable, secure, and high-performance web applications with
      React.js, Vue.js + TypeScript, C#/.NET Core, and SQL Server/PostgreSQL — plus AI model integrations.
    </p>

    <div class="cta-row">
      <a class="btn ghost" href="{{ '/projects/' | relative_url }}">View projects</a>
      <a class="btn ghost" href="{{ '/resume/' | relative_url }}">Resume</a>
      <a class="btn ghost" href="{{ '/blog/' | relative_url }}">Blog</a>
    </div>

    <div class="link-row">
      <a class="icon-link" href="mailto:{{ site.email }}">Email</a>
      <a class="icon-link" href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">GitHub</a>
      <a class="icon-link" href="https://www.linkedin.com/in/{{ site.linkedin_username }}/" target="_blank" rel="noopener">LinkedIn</a>
      <a class="icon-link" href="https://x.com/IlhanKlisura" target="_blank" rel="noopener">X</a>
    </div>
  </div>

  <div class="home-hero-right">
    <img class="hero-avatar" src="{{ '/assets/images/avatar.jpg' | relative_url }}" alt="Ilhan Klisura">
    <div class="mini-card">
      <p class="mini-card-title">Current focus</p>
      <p class="mini-card-body">
        Enterprise systems + AI integrations — .NET, Vue + TypeScript, SQL Server/PostgreSQL, CI/CD, and reporting.
      </p>
    </div>
  </div>
</section>

<section class="home-section">
  <header class="section-head">
    <h2>Featured projects</h2>
    <a class="muted" href="{{ '/projects/' | relative_url }}">See all →</a>
  </header>

  <div class="project-grid">
    {% assign featured = site.data.projects | slice: 0, 3 %}
    {% for p in featured %}
      <article class="project-card">
        <header class="project-card-head">
          <h3 class="project-title">{{ p.name }}</h3>
          {% if p.links.github %}
            <a class="btn ghost" href="{{ p.links.github }}" target="_blank" rel="noopener">GitHub</a>
          {% endif %}
        </header>
        {% if p.tagline %}<p class="project-tagline">{{ p.tagline }}</p>{% endif %}
        {% if p.stack %}
          <p class="stack">
            {% for s in p.stack limit: 8 %}
              <span class="category-chip">{{ s }}</span>
            {% endfor %}
          </p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-section">
  <header class="section-head">
    <h2>Latest writing</h2>
    <a class="muted" href="{{ '/blog/' | relative_url }}">All posts →</a>
  </header>

  <div class="post-grid">
    {% assign recent = site.posts | slice: 0, 4 %}
    {% for post in recent %}
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
            <h3 class="post-card-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p class="post-card-meta">{{ post.date | date: "%Y-%m-%d" }}</p>
          </header>
          <p class="post-card-excerpt">
            {% if post.excerpt %}
              {{ post.excerpt | strip_html | truncate: 160 }}
            {% else %}
              {{ post.content | strip_html | truncate: 160 }}
            {% endif %}
          </p>
          <p class="post-card-actions">
            <a class="btn ghost" href="{{ post.url | relative_url }}">Read →</a>
          </p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>