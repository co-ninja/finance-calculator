# AI Coding Guide

This guide explains how to work with AI assistants (Claude, Cursor, etc.) using this project template.

The goal is to keep the project:

* consistent
* scalable
* maintainable
* AI-friendly

---

# Cursor AI Integration

This template includes built-in Cursor AI configuration.

.cursor/rules  
Defines global AI rules that Cursor automatically loads.

.cursor/commands/  
Provides custom AI commands for common development tasks.

Examples:

/create-feature auth  
/create-component Button  
/create-hook useAuth  
/create-service authService  

These commands help generate code that follows the project architecture automatically.

When using Cursor, you typically do **not need to manually instruct the AI to read the documentation**, because the rules are already loaded.

However, referencing documentation in prompts can still improve results.

---

# Project Documentation

Before generating or modifying code, AI assistants should read the following files:

docs/ARCHITECTURE.md  
docs/PROJECT_CONTEXT.md  
docs/AI_RULES.md  

These files define the architecture, project context, and coding rules.

They act as the **source of truth for the project structure**.

---

# AI Prompting Workflow

When asking the AI to generate code, follow this pattern.

Step 1 — Ask the AI to read the documentation.

Example prompt:

Read the following project documentation:

docs/ARCHITECTURE.md  
docs/PROJECT_CONTEXT.md  
docs/AI_RULES.md  

Follow the architecture and rules when generating code.

---

Step 2 — Request the task.

Example:

Create a new feature module called "budget".

Follow the architecture defined in docs/ARCHITECTURE.md.

---

# Creating the Initial Folder Structure

When starting a new project, run a prompt like:

Follow the architecture defined in docs/ARCHITECTURE.md.

Create the initial folder structure inside src.

---

# Creating a New Feature

Example prompt:

Read:

docs/ARCHITECTURE.md  
docs/PROJECT_CONTEXT.md  
docs/AI_RULES.md  

Create a new feature module called "auth".

Follow the feature module structure defined in docs/ARCHITECTURE.md.

---

# Generating Components

Example prompt:

Create a reusable UI component called Button.

Place it inside:

src/components/ui/

Follow the rules in docs/AI_RULES.md.

---

# Generating Hooks

Example prompt:

Create a hook called useAuth.

Place it inside:

features/auth/hooks/

Follow the architecture and AI rules.

---

# Generating Services

Example prompt:

Create an authentication service called authService.ts.

Place it inside:

features/auth/services/

Use the API client from:

src/lib/apiClient.ts

---

# Using Cursor Commands

If you are using Cursor, you can use built-in commands instead of writing prompts manually.

Examples:

/create-feature auth  
/create-component Button  
/create-hook useAuth  
/create-service authService  

These commands automatically follow the project architecture and AI rules.

---

# Recommended Cursor Workflow

When working with Cursor, the recommended workflow is:

1. Use Cursor commands to scaffold features and components
2. Let the AI generate code following the architecture
3. Review and refine the generated code
4. Commit changes regularly

Example workflow:

/create-feature auth  
/create-component LoginForm  
/create-hook useAuth  

This keeps the project structure consistent.

---

# General Best Practices

When working with AI:

Always reference the documentation.

Example prompt:

Follow the architecture defined in docs/ARCHITECTURE.md  
Follow the rules defined in docs/AI_RULES.md  

Avoid generating code outside the defined structure.

---

# Recommended Prompt Template

Use this template when working with AI:

Read:

docs/ARCHITECTURE.md  
docs/PROJECT_CONTEXT.md  
docs/AI_RULES.md  

Follow the architecture and rules.

Now implement the requested feature.

---

# Goal

This workflow ensures that AI-generated code:

* follows the project architecture
* remains consistent
* avoids messy folder structures
* scales well as the project grows