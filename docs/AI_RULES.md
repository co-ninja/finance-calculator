# AI Coding Rules

This file defines strict guidelines for AI-generated code in this project.

AI assistants must follow these rules when generating code.

---

# Architecture Source of Truth

The project structure is defined in:

ARCHITECTURE.md

AI assistants must always follow the structure defined there.

If there is any conflict between this file and ARCHITECTURE.md,
follow ARCHITECTURE.md.

---

# Architecture Rules

Always follow the structure defined in:

ARCHITECTURE.md

Do NOT create new folders unless absolutely necessary.

All new code must fit into the existing architecture.

---

# File Placement Rules

Use the correct folder for each type of code.

UI Components → components/ui
Feature UI → features/[feature-name]/components

Business logic → hooks, services, or utils

API communication → services

External integrations → lib

Authentication logic → auth

Theme configuration → theme

React providers → providers

Shared types → types

---

# Code Quality Rules

Generated code must:

* use TypeScript
* be simple and readable
* avoid unnecessary abstraction
* avoid over-engineering
* avoid large files (>200 lines)

Prefer small modular functions.

---

# UI Component Rules

Components should:

* be functional React components
* use TailwindCSS for styling
* avoid inline styles
* avoid complex business logic
* be reusable where possible

---

# Hook Rules

Hooks should:

* contain business logic
* start with `use`
* not contain UI code

Example:

useAuth.ts
useBudget.ts

---

# Utility Rules

Utilities must:

* be pure functions
* not depend on React
* not produce side effects

Example:

formatCurrency.ts
calculatePercentage.ts

---

# Service Rules

Services should:

* handle API communication
* call infrastructure from `lib`
* return structured data

Example:

userService.ts
paymentService.ts

---

# Infrastructure Rules

The `lib` folder contains infrastructure integrations.

Examples:

apiClient.ts
prisma.ts
supabase.ts
analytics.ts

Rules:

* wrap external libraries
* do not contain business logic

---

# Feature Module Rules

Each feature should follow this structure:

features/[feature-name]/

components/
hooks/
services/
utils/
types.ts

Do not mix feature code into global folders.

Feature-specific code must remain inside its feature module.

---

# Naming Conventions

Use clear descriptive names.

Components:

LoginForm.tsx
BudgetCalculator.tsx

Hooks:

useAuth.ts
useBudget.ts

Utilities:

formatCurrency.ts
calculatePercentage.ts

---

# Import Rules

Prefer absolute imports instead of long relative paths.

Example:

import Button from "@/components/ui/Button"
import useAuth from "@/features/auth/hooks/useAuth"

Avoid imports like:

../../../components/ui/Button

---

# Dependencies

Avoid adding new dependencies unless necessary.

Prefer built-in browser APIs and existing project libraries.

---

# AI Behavior Rules

When generating code:

1. Follow ARCHITECTURE.md
2. Follow PROJECT_CONTEXT.md
3. Follow these AI_RULES.md rules
4. Keep code simple
5. Avoid inventing unnecessary patterns
6. Prefer maintainability over cleverness
