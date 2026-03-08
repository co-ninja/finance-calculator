# Project Architecture

This document defines the folder structure and coding rules for this project.

Tech Stack:

- Next.js (App Router)
- React
- TypeScript
- TailwindCSS
- ESLint

The goal of this architecture is to keep the codebase:

- scalable
- easy to maintain
- easy to understand
- AI-friendly

---

# Folder Structure

src/

  app/  
  # Next.js routing system.
  # Each folder here represents a route in the application.
  # Example:
  # app/page.tsx        -> homepage
  # app/dashboard/page.tsx -> /dashboard route
  #
  # This folder should mainly contain:
  # - pages
  # - layouts
  # - route handlers
  #
  # Avoid placing business logic here.

---

  features/[feature-name]/  
  # Each business feature lives in its own module.
  #
  # Examples:
  # features/auth
  # features/budget
  # features/dashboard
  #
  # Each feature contains everything related to that feature:
  # UI components, hooks, services, utilities, and types.

    components/  
    # UI components specific to this feature.
    # Example:
    # LoginForm.tsx
    # BudgetCalculator.tsx

    hooks/  
    # React hooks that contain business logic for this feature.
    # Example:
    # useAuth.ts
    # useBudget.ts

    services/  
    # API calls or external data fetching for this feature.
    # Example:
    # authService.ts
    # budgetService.ts

    utils/  
    # Helper functions used only by this feature.
    # Example:
    # calculateBudget.ts

    types.ts  
    # TypeScript interfaces and types related to this feature.

---

  components/ui/  
  # Reusable UI components used across the whole application.
  #
  # Examples:
  # Button.tsx
  # Card.tsx
  # Input.tsx
  # Modal.tsx
  #
  # These components should be generic and not tied to any feature.

---

  hooks/  
  # Global reusable React hooks that can be used across multiple features.
  #
  # Examples:
  # useDebounce.ts
  # useLocalStorage.ts
  # useWindowSize.ts

---

  services/  
  # Global API services or API clients.
  #
  # Examples:
  # apiClient.ts
  # userService.ts
  #
  # These files handle communication with backend APIs.

---

  utils/  
  # Generic helper functions used across the application.
  #
  # Examples:
  # formatCurrency.ts
  # formatDate.ts
  # calculatePercentage.ts
  #
  # Rules:
  # - No React code
  # - Pure functions only

---

  types/  
  # Global TypeScript interfaces shared across features.
  #
  # Examples:
  # user.ts
  # api.ts
  # common.ts

---

  constants/  
  # Static constants used across the project.
  #
  # Examples:
  # routes.ts
  # roles.ts
  # appSettings.ts

---

  config/  
  # Application configuration files.
  #
  # Examples:
  # siteConfig.ts
  # authConfig.ts
  # themeConfig.ts

---

# Architectural Rules

1. UI components should not contain complex business logic.

2. Business logic should live in:
   - hooks
   - utils

3. API calls should be placed in:
   - services

4. Shared UI components belong in:
   components/ui

5. Feature-specific logic belongs inside:
   features/[feature-name]

---

# Data Flow Pattern

Typical flow of data in this project:

UI Component  
↓  
Hook (business logic)  
↓  
Service (API calls)  
↓  
Backend API

Example:

LoginForm.tsx  
↓  
useAuth.ts  
↓  
authService.ts  
↓  
API

---

# Development Order (Recommended)

When implementing a new feature, follow this order:

1. Define types
2. Create utilities
3. Create services
4. Create hooks
5. Create components
6. Connect to page

This ensures dependencies are created before they are used.

---

# Goals of This Architecture

This architecture helps:

- keep the code modular
- simplify debugging
- support team collaboration
- improve AI-generated code quality