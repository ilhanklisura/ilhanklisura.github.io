---
layout: page
permalink: /
---

<div class="hero">
  <img class="hero-avatar" src="{{ '/assets/images/avatar.jpg' | relative_url }}" alt="Ilhan Klisura">
  <h1 class="hero-title">Klisura Ilhan</h1>
  <p class="hero-subtitle">Software Engineer</p>

  <p class="hero-socials">
    <a class="icon-link" href="mailto:work@ilhanklisura.com">
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
    </a>
    <a class="icon-link" href="https://github.com/ilhanklisura" target="_blank" rel="noopener">
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.78-1.35-1.78-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.27 1.86 1.27 1.08 1.85 2.83 1.32 3.52 1.01.11-.8.42-1.32.77-1.62-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.96.12 3.27.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5Z"/></svg>
    </a>
    <a class="icon-link" href="https://www.linkedin.com/in/ilhanklisura/" target="_blank" rel="noopener">
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.85 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7.5 0h3.8v2h.05c.53-1 1.85-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.15V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.45V23h-4V8.5Z"/></svg>
    </a>
  </p>
</div>

## Recent Blog Posts
<ul class="recent-posts">
{% assign recent = site.posts | slice: 0, 5 %}
{% for post in recent %}
  <li>
    <a href="{{ post.url | relative_url }}">
      <strong>{{ post.title }}</strong><br>
      <small>{{ post.date | date: "%Y-%m-%d" }}
        {% if post.categories and post.categories.size > 0 %} — {{ post.categories | join: ', ' }}{% endif %}
      </small>
    </a>
  </li>
{% endfor %}
</ul>