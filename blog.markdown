---
layout: page
title: Blog
permalink: /blog/
---

{%- comment -%}
Skupi SVE slugove iz postova (categories, tags, bucket), unikatno i sortirano
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

  {%- comment -%} data-cats za klijentsko filtriranje (slugovi) {%- endcomment -%}
    {% assign data_cats = "" %}
    {% if post.categories %}
    {% for c in post.categories %}
        {% if c != blank %}
        {% assign data_cats = data_cats | append: c | slugify | append: " " %}
        {% endif %}
    {% endfor %}
    {% endif %}
    {% if post.tags %}
    {% for t in post.tags %}
        {% if t != blank %}
        {% assign data_cats = data_cats | append: t | slugify | append: " " %}
        {% endif %}
    {% endfor %}
    {% endif %}
    {% if post.bucket and post.bucket != blank %}
    {% assign data_cats = data_cats | append: post.bucket | slugify %}
    {% endif %}


  <article class="post-card" data-cats="{{ data_cats | downcase | strip }}">
    {% if post.image %}
      <div class="post-card-media">
        <img src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}">
      </div>
    {% endif %}

    <div class="post-card-body">
      <header>
        <h2 class="post-card-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
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
    </div>
  </article>
{% endfor %}
</div>

<!-- ====== Tiny JS: filtering po kliknutom chipu (radi sa href="#slug") ====== -->
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