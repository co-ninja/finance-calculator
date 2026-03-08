# Project Context

This project is built using a modern frontend architecture designed for scalable applications and AI-assisted development.

The structure follows the architecture defined in **ARCHITECTURE.md**.

This template is designed to be reused for multiple projects.

---

# Cursor AI Integration

This template includes built-in Cursor AI configuration.

.cursor/rules  
Defines global AI rules automatically loaded by Cursor.

.cursor/commands/  
Provides reusable commands for common development tasks.

Examples:

/create-feature auth  
/create-component Button  
/create-hook useAuth  
/create-service authService  

These commands help generate code that follows the project architecture automatically.

---

# Tech Stack

Primary technologies used in this project:

- Next.js (App Router)
- React
- TypeScript
- TailwindCSS
- ESLint

Optional integrations may include:

- Prisma
- Supabase
- Auth.js / NextAuth
- Zustand
- React Query / TanStack Query
- Zod (validation)

---

# Project Goals

The goal of this template is to create applications that are:

- modular
- scalable
- maintainable
- AI-friendly
- easy for teams to collaborate on

---

# Development Philosophy

This project follows these key principles:

1. **Separation of concerns**

UI, business logic, and infrastructure should be separated.

2. **Feature-based architecture**

Business features are organized inside:

features/[feature-name]

3. **Reusable components**

Generic UI components belong in:

components/ui

4. **Pure utility functions**

Reusable helpers belong in:

utils

5. **Infrastructure isolation**

External libraries should be wrapped inside:

lib

6. **Global state management**

Shared application state should be placed in:

store/

7. **Validation schemas**

Form and API validation should be implemented in:

schemas/

---

# Architecture Layers

This project follows a layered architecture.

UI Layer  
Contains React components responsible for rendering the interface.

Logic Layer  
Contains hooks and utilities responsible for business logic.

Service Layer  
Contains services responsible for API communication.

Infrastructure Layer  
Contains external integrations such as API clients and database connectors.

Typical dependency direction:

UI → Hooks → Services → Infrastructure

Higher layers should not depend on lower layers in reverse.

---

# Folder Responsibilities

High level overview of major folders:

app/  
Next.js routing and layout system.

features/  
Feature modules containing components, hooks, services, utilities, and types.

components/ui/  
Reusable UI components shared across the application.

components/layout/  
Layout components used across multiple pages.

hooks/  
Reusable React hooks shared across features.

services/  
Business-level services and API communication.

lib/  
Infrastructure integrations such as API clients, databases, and SDKs.

providers/  
Global React providers used in layout.tsx.

auth/  
Authentication logic and configuration.

theme/  
Global design tokens and theme configuration.

store/  
Global state management.

schemas/  
Validation schemas used for forms and API validation.

utils/  
Reusable helper functions.

types/  
Global TypeScript types.

constants/  
Application constants.

config/  
Configuration files.

styles/  
Global styles used across the application.

assets/  
Static assets such as images, icons, and fonts.

---

# Data Flow

Typical data flow inside the application:

UI Component  
↓  
Hook (business logic)  
↓  
Service (API communication)  
↓  
Infrastructure (lib)  
↓  
Backend API

---

# AI Instructions

When generating code:

1. Follow the architecture defined in **ARCHITECTURE.md**
2. Place files in the correct folder
3. Avoid creating new folders unless necessary
4. Prefer simple and readable implementations
5. Keep components small and modular
6. Separate UI from business logic
7. Do not invent new architectural patterns unless explicitly requested

When using Cursor, these rules are automatically applied through:

.cursor/rules

---

# Project Flexibility

This template supports multiple project types:

- SaaS platforms
- dashboards
- AI tools
- internal business apps
- startup MVPs
- enterprise React applications

The architecture should remain stable across projects.