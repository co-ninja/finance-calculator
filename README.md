# AI Coding Template (Next.js + Cursor + Claude)

A reusable template for building modern **Next.js applications with AI-assisted development**.

This template provides a structured architecture and documentation that helps AI tools (Claude, Cursor, etc.) generate consistent, maintainable code.

---

# Summary

This template includes documentation that guides AI assistants when generating code.

ARCHITECTURE.md  
→ Defines the project folder structure and architectural rules.

PROJECT_CONTEXT.md  
→ Explains the project environment, technology stack, and development philosophy.

AI_RULES.md  
→ Strict coding rules that AI must follow when generating code.

GUIDE.md  
→ Instructions and example prompts for working with AI assistants.

PROMPTS.md  
→ A reusable library of prompts for common development tasks.

START_PROJECT.md  
→ Step-by-step guide for starting a new project using this template.

---

# Architecture Overview

This template follows a modular architecture where responsibilities are separated into clear layers.

UI Layer  
Contains React components responsible for rendering the interface.

Logic Layer  
Contains hooks and utilities responsible for business logic.

Service Layer  
Contains services responsible for API communication.

Infrastructure Layer  
Contains integrations with external systems.

Typical dependency direction:

UI → Hooks → Services → Infrastructure

---

# Template Structure

    README.md

    docs/
      ARCHITECTURE.md
      PROJECT_CONTEXT.md
      AI_RULES.md
      GUIDE.md
      PROMPTS.md
      START_PROJECT.md

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

---

# Purpose

This template helps developers:

- maintain a consistent architecture
- reduce AI-generated code errors
- avoid messy folder structures
- scale projects easily
- collaborate effectively with AI tools

---

# How It Works

AI assistants read the documentation inside the `docs/` folder before generating code.

When prompting AI, use instructions like:

    Read:

    docs/ARCHITECTURE.md
    docs/PROJECT_CONTEXT.md
    docs/AI_RULES.md

    Follow the architecture and rules when generating code.

This ensures generated code follows the correct project structure.

---

# AI Development Workflow

Typical workflow when using AI assistants:

1. Ask AI to read the project documentation
2. Generate a feature module
3. Implement hooks and services
4. Build UI components
5. Connect the page

AI should always follow:

ARCHITECTURE.md  
AI_RULES.md  
PROJECT_CONTEXT.md  

---

# Starting a New Project

Follow the instructions in:

docs/START_PROJECT.md

This guide explains how to:

1. Create a new project workspace
2. Copy the template
3. Initialize the Next.js project
4. Start working with AI-assisted development

---

# Quick Start

Example quick setup:

    npx create-next-app@latest .

Choose:

- TypeScript
- TailwindCSS
- ESLint
- App Router
- src directory

Then follow the full setup guide:

docs/START_PROJECT.md

---

# Prompt Library

Common prompts for AI development are stored in:

docs/PROMPTS.md

These prompts help quickly generate:

- feature modules
- UI components
- hooks
- services
- utilities
- pages
- refactors

---

# Recommended Development Workflow

Typical workflow when building features:

1. Create feature module
2. Define types
3. Implement utilities
4. Implement services
5. Create hooks
6. Build UI components
7. Connect the page

---

# Ideal Use Cases

This template works well for:

- SaaS applications
- dashboards
- AI tools
- startup MVPs
- internal tools
- enterprise React applications

---

# Philosophy

This template follows these principles:

- **Separation of concerns**
- **Feature-based architecture**
- **Modular design**
- **AI-friendly structure**

---

# License

Use freely for personal or commercial projects.