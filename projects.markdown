---
layout: page
title: Projects
permalink: /projects/
---

## Featured work

<p class="muted">
  A selection of public projects from my GitHub. For more, see
  <a href="https://github.com/ilhanklisura" target="_blank" rel="noopener">github.com/ilhanklisura</a>.
</p>

<div class="project-grid">
  {% for p in site.data.projects %}
    <article class="project-card">
      <header class="project-card-head">
        <h3 class="project-title">{{ p.name }}</h3>
        {% if p.links.github %}
          <a class="btn ghost" href="{{ p.links.github }}" target="_blank" rel="noopener">GitHub</a>
        {% endif %}
      </header>

      {% if p.tagline %}
        <p class="project-tagline">{{ p.tagline }}</p>
      {% endif %}

      {% if p.stack %}
        <p class="stack">
          {% for s in p.stack %}
            <span class="category-chip">{{ s }}</span>
          {% endfor %}
        </p>
      {% endif %}
    </article>
  {% endfor %}
</div>

