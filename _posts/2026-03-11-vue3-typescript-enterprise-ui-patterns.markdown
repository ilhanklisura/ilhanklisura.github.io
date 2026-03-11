---
layout: post
title: "Vue 3 + TypeScript patterns for enterprise UIs"
date: 2025-12-18 12:30:00 +0100
categories: [notes, frontend]
tags: [vue, typescript, architecture]
bucket: Frontend
excerpt: "A set of patterns that keep Vue 3 codebases maintainable: typed API clients, composables, feature folders, and predictable state."
---

Enterprise UIs usually fail for boring reasons: inconsistent API calls, duplicated logic, and “where does this state live?”. These patterns help me keep things predictable.

## Typed API boundary

- Keep **one API client** (fetch/axios wrapper).
- Define **DTOs** and map them to UI models where needed.
- Normalize server errors into a **single error shape** for toasts/forms.

## Feature folders over “type folders”

Prefer:

```
features/
  users/
    api/
    components/
    routes/
    types.ts
    index.ts
```

Over `components/`, `views/`, `services/` spread everywhere.

## Composables as the default abstraction

- Put reusable async flows into `useSomething()` composables.
- Keep them **small** and return a stable contract:
  - `state`
  - `actions`
  - `status` flags

## Make forms boring

- Use a single pattern for validation and submit.
- Handle loading/error at the same layer every time.
- Keep the submit side-effect in one place (no hidden watchers).

## State: pick one strategy, document it

- **Local component state** for UI details.
- **Global store** only for truly shared state (auth, feature flags, cached lookups).
- **Route query params** for shareable filters (so refresh/back works).

The goal is not clever code — it’s the ability to change things safely in 6 months.

