---
layout: post
title: "CI/CD notes: Jenkins vs GitHub Actions (what I actually use)"
date: 2025-12-20 13:00:00 +0100
categories: [notes, devops]
tags: [cicd, jenkins, github-actions]
bucket: DevOps
excerpt: "A pragmatic comparison and a few patterns: build once, test in parallel, ship with confidence, and keep pipelines readable."
---

I like CI/CD when it’s boring: predictable, fast, and easy to debug.

## What Jenkins is great at

- Existing enterprise setups (agents, on-prem access, internal networks).
- Complex pipelines that evolved over years.
- Centralized control when repos are spread across platforms.

## What GitHub Actions is great at

- Fast onboarding, repo-local workflows.
- Great integration with PRs, checks, and code owners.
- Reusable workflows for consistent standards across projects.

## Patterns I try to keep everywhere

- **Build once, test in parallel** (unit/integration/lint).
- **Cache dependencies** (but don’t hide flaky builds behind caches).
- **Artifacts are a contract** (store build outputs, test reports).
- **Secrets and environments** are explicit.
- **Fail fast** and surface the *real* error (logs, exit codes, summaries).

If you’re choosing today for a small-to-medium team, Actions is usually the simplest path — unless you need the network realities Jenkins already solves.

