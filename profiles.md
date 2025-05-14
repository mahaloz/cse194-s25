---
layout: default
title: profiles
---

<div class="profiles-container">
  <h1>profiles</h1>
  <div class="profiles-list">
    {% for profile in site.profiles %}
    <div class="profile-item">
      <a href="{{ profile.url }}" class="profile-title">{{ profile.title }}</a>
      <span class="profile-author">{{ profile.author }}</span>
    </div>
    {% endfor %}
  </div>
</div>

<style>
.profiles-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.profiles-list {
  margin-top: 2rem;
}

.profile-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #333;
}

.profile-title {
  color: #00ff00;
  text-decoration: none;
  font-family: monospace;
  font-size: 1.1em;
}

.profile-title:hover {
  text-decoration: underline;
}

.profile-author {
  color: #888;
  font-family: monospace;
  font-size: 0.9em;
}

h1 {
  margin-bottom: 2rem;
  font-family: monospace;
}
</style> 