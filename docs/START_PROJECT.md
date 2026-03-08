# Starting a New Project

This guide explains how to start a new project using the AI coding template.

---

# Step 1 — Create a New Project Folder

Open Cursor.

Menu:

File → Open Folder

Create a new empty folder for your project.

Example:

my-new-project

---

# Step 2 — Copy Template Files

Copy the following from the template:

README.md  
docs/  
src/

Your new project should now contain:

README.md  
docs/  
src/

---

# Step 3 — Initialize the Project

Open the terminal inside Cursor.

Run:

npx create-next-app@latest .

Choose the following options:

✔ TypeScript  
✔ TailwindCSS  
✔ ESLint  
✔ App Router  
✔ src directory  

This will install the base Next.js project.

---

# Step 4 — Install Dependencies

Run:

npm install

---

# Step 5 — Start the Development Server

Run the development server:

npm run dev

Your application should now be running locally.

---

# Step 6 — Read Project Documentation

Before generating code, the AI assistant must read the project documentation.

Read the following files:

docs/ARCHITECTURE.md  
docs/PROJECT_CONTEXT.md  
docs/AI_RULES.md  

These documents define the project structure and coding rules.

---

# Step 7 — Start AI Development

Use prompts like:

Read:

docs/ARCHITECTURE.md  
docs/PROJECT_CONTEXT.md  
docs/AI_RULES.md  

Follow the architecture and rules.

Now implement the requested feature.

---

# Prompt Library

For common development prompts, see:

docs/PROMPTS.md

This file contains reusable prompts for generating:

- feature modules
- components
- hooks
- services
- utilities
- pages

---

# Example: Create First Feature

Prompt:

Create a new feature module called "auth".

Follow the structure defined in docs/ARCHITECTURE.md.

---

# Development Workflow

Typical workflow when implementing a feature:

1. Create feature module
2. Define types
3. Create utilities
4. Create services
5. Create hooks
6. Create components
7. Connect the page

---

# Goal

This workflow ensures:

- consistent architecture
- maintainable code
- predictable folder structure
- high quality AI-generated code