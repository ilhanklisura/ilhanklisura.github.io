---
layout: post
title: "Clean architecture for small teams (without overengineering)"
date: 2025-12-22 13:30:00 +0100
categories: [notes, backend]
tags: [architecture, clean-code]
bucket: Engineering
excerpt: "A lightweight approach to clean boundaries and maintainable code that doesn’t turn into a folder maze."
---

Clean architecture is useful when it reduces coupling and makes change safer. It’s not useful when it becomes ceremony.

## The version I like

- **Domain rules** are isolated from frameworks.
- **Use cases** are explicit (the “verbs” of the system).
- **Infrastructure** is swappable (DB, external services, file storage).
- **UI/API** stays thin (validation, mapping, auth).

## What I avoid

- Creating 12 projects/modules before there’s a second feature.
- Abstractions that hide simple code.
- “Generic repositories” that fight the ORM.

## A good heuristic

Start simple, but enforce **direction of dependencies**:

- API depends on application
- application depends on domain
- infrastructure depends on application (interfaces) and domain (models)

If a new feature takes longer because the architecture “demands” it, you’re doing it wrong.

