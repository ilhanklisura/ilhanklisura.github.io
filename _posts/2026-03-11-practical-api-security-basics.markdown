---
layout: post
title: "Practical API security basics (checklist)"
date: 2025-12-24 14:00:00 +0100
categories: [tutorials, backend]
tags: [security, jwt, rbac]
bucket: Security
excerpt: "A quick checklist for securing typical REST APIs: auth, RBAC, validation, rate limits, logging, and safe error responses."
---

Security becomes manageable when it’s a checklist and a habit.

## Authentication and authorization

- **Authenticate** users (JWT/session) and validate tokens properly.
- **Authorize** with roles/permissions (RBAC) at the endpoint boundary.
- Keep **least privilege** as the default.

## Input validation (always)

- Validate and normalize inputs (query/body/path).
- Reject unexpected fields on sensitive endpoints.
- Protect against over-posting / mass assignment.

## Safe error handling

- Return user-friendly messages.
- Log the detailed error internally (correlation IDs help a lot).
- Avoid leaking stack traces or DB details.

## Operational controls

- Rate limiting / throttling on public endpoints.
- Audit logs for admin actions.
- Alerting for repeated failures and suspicious patterns.

## The “boring” wins

- HTTPS everywhere
- secure headers
- dependency updates
- secrets management

If you want, I can add a companion post for “JWT + refresh tokens” with concrete implementation details.

