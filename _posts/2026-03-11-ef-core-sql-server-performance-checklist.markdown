---
layout: post
title: "EF Core + SQL Server performance checklist (practical)"
date: 2025-12-15 12:00:00 +0100
categories: [tutorials, dotnet]
tags: [ef-core, sql-server, performance]
bucket: Backend
excerpt: "A pragmatic checklist I use when an EF Core + SQL Server endpoint becomes slow: query shape, tracking, indexes, pagination, and observability."
---

When an endpoint goes from “fine” to “why is this 2 seconds?”, I usually walk through the same sequence. This is the short version.

## 1) Confirm what is actually slow

- **Measure server time vs DB time** (logs + APM if you have it).
- **Capture the SQL** EF Core generates.
- **Compare cold vs warm** runs (plan cache, buffers, first-request cost).

## 2) Fix the query shape first

- **Select only what you need** (projection to DTOs).
- **Avoid accidental Cartesian explosions** (multiple includes + collections).
- **Prefer explicit joins/projections** over deep graphs for list endpoints.
- **Use `AsNoTracking()`** for read-only queries; add `AsNoTrackingWithIdentityResolution()` only if you truly need it.

## 3) Pagination that scales

Offset pagination (`Skip/Take`) can get expensive on large tables.

- **Keyset pagination** (a stable “seek” key like `CreatedAt`, `Id`) often scales better.
- **Always define a stable order**.

## 4) Indexes: align them with filters and sorting

If your API filters by `TenantId` + `Status` and sorts by `CreatedAt`, your index strategy should reflect that.

- **Composite indexes** for common filter patterns.
- **Covering indexes** if the same endpoint is hit constantly and you can afford it.
- **Check actual execution plans** (don’t guess).

## 5) Split queries when includes get heavy

If you need related data for a list endpoint:

- Try **two queries** (IDs first, details second).
- Or use EF Core’s **split query** option if it’s appropriate for the shape.

## 6) Observability makes this repeatable

- Log **duration + row counts + “payload size”**.
- Keep an eye on **timeouts**, **deadlocks**, and **blocked sessions**.
- Store slow queries and fix them with intent, not guesswork.

If you want, I can turn this into a “before/after” post with a real example (EF query + generated SQL + indexes + plan).

