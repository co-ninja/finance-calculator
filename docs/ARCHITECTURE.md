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

# Project Structure Overview

src/

  app/
  features/

  components/
    ui/
    layout/

  hooks/
  services/
  utils/
  types/
  constants/
  config/

  lib/
  providers/
  auth/
  theme/

  store/
  schemas/
  styles/
  assets/

This structure separates UI, business logic, and infrastructure so the project remains modular and scalable.

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

  components/layout/
  # Layout components shared across pages or sections of the application.
  #
  # Examples:
  # Header.tsx
  # Footer.tsx
  # Sidebar.tsx

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
  # Global application services.
  #
  # These contain business-level API communication and operations.
  #
  # Examples:
  # userService.ts
  # paymentService.ts

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

  lib/  
  # Infrastructure layer for external libraries and system integrations.
  #
  # This folder wraps third-party tools so the rest of the application
  # does not depend directly on external libraries.
  #
  # Examples:
  # apiClient.ts    -> HTTP request wrapper
  # prisma.ts       -> database connection
  # supabase.ts     -> Supabase client setup
  # analytics.ts    -> analytics SDK integration
  #
  # Rules:
  # - Only infrastructure logic
  # - No business logic
  # - Used by services or features

---

  providers/  
  # React context providers used globally across the application.
  #
  # These wrap the application in layout.tsx to provide global functionality.
  #
  # Examples:
  # ThemeProvider.tsx
  # AuthProvider.tsx
  # QueryProvider.tsx
  #
  # Example usage in app/layout.tsx:
  #
  # <ThemeProvider>
  #   <AuthProvider>
  #     {children}
  #   </AuthProvider>
  # </ThemeProvider>

---

  auth/  
  # Authentication configuration and helpers.
  #
  # This folder centralizes authentication logic and session management.
  #
  # Examples:
  # authConfig.ts
  # authMiddleware.ts
  # session.ts
  #
  # Responsibilities:
  # - login
  # - logout
  # - session validation
  # - access control

---

  theme/  
  # Application design system and theme configuration.
  #
  # Used to define global design tokens such as:
  #
  # - color palette
  # - typography
  # - spacing
  # - UI theme settings
  #
  # Examples:
  # colors.ts
  # typography.ts
  # themeConfig.ts

---

  store/
  # Global state management.
  #
  # Used when application state needs to be shared across multiple features.
  #
  # Examples:
  # authStore.ts
  # uiStore.ts
  #
  # Common libraries:
  # Zustand
  # Redux
  # Jotai

---

  schemas/
  # Validation schemas for forms and API data.
  #
  # Examples:
  # loginSchema.ts
  # userSchema.ts
  #
  # Common libraries:
  # Zod
  # Yup

---

  styles/
  # Global styles used across the application.
  #
  # Examples:
  # globals.css
  # tailwind.css

---

  assets/
  # Static assets such as images, icons, and fonts.
  #
  # Examples:
  # assets/images/
  # assets/icons/
  # assets/fonts/

---

# Naming Conventions

# Components should use PascalCase.
# Example:
# Button.tsx
# LoginForm.tsx

# Hooks should start with "use".
# Example:
# useAuth.ts
# useBudget.ts

# Utilities should use camelCase.
# Example:
# formatCurrency.ts
# calculatePercentage.ts

# Services should follow featureNameService.ts pattern.
# Example:
# authService.ts
# userService.ts

---

# Import Strategy

# Prefer absolute imports instead of long relative paths.
#
# Example:
# import Button from "@/components/ui/Button"
# import useAuth from "@/features/auth/hooks/useAuth"
#
# Avoid:
# ../../../components/ui/Button

---

# Architectural Rules

1. UI components should not contain complex business logic.

2. Business logic should live in:
   - hooks
   - utils

3. API calls should be placed in:
   - services

4. External integrations should be placed in:
   - lib

5. Shared UI components belong in:
   components/ui

6. Feature-specific logic belongs inside:
   features/[feature-name]

7. Global providers belong in:
   providers/

8. Global state belongs in:
   store/

9. Validation schemas belong in:
   schemas/

---

# Data Flow Pattern

Typical flow of data in this project:

UI Component  
↓  
Hook (business logic)  
↓  
Service (API calls)  
↓  
Infrastructure (lib)  
↓  
Backend API

Example:

LoginForm.tsx  
↓  
useAuth.ts  
↓  
authService.ts  
↓  
apiClient.ts (lib)  
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

# Testing Strategy

# Tests should be placed close to the code they test.
#
# Example:
# features/auth/components/
#
# LoginForm.tsx
# LoginForm.test.tsx
#
# Common testing tools:
# Vitest
# Jest
# Playwright
# Cypress

---

# Goals of This Architecture

This architecture helps:

- keep the code modular
- simplify debugging
- support team collaboration
- improve AI-generated code quality