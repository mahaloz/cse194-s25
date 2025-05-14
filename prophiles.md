---
layout: default
title: Pro-Philes
---

<div class="prophiles-container">
  <h1>Pro-Philes</h1>
  <div class="prophiles-list">
    {% for prophile in site.prophiles %}
    <div class="prophile-item">
      <a href="{{ prophile.url }}" class="prophile-title">{{ prophile.title }}</a>
      <span class="prophile-author">{{ prophile.author }}</span>
    </div>
    {% endfor %}
  </div>
</div>

<style>
.prophiles-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.prophiles-list {
  margin-top: 2rem;
}

.prophile-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #333;
}

.prophile-title {
  color: #00ff00;
  text-decoration: none;
  font-family: monospace;
  font-size: 1.1em;
}

.prophile-title:hover {
  text-decoration: underline;
}

.prophile-author {
  color: #888;
  font-family: monospace;
  font-size: 0.9em;
}

h1 {
  margin-bottom: 2rem;
  font-family: monospace;
}
</style> 