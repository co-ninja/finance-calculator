# AI Prompt Library

This file contains reusable prompts for working with AI assistants (Claude, Cursor, etc.) when developing this project.

These prompts help ensure generated code follows the project architecture and coding rules.

When using tools like Claude or ChatGPT, always ask the AI to read the project documentation first.

When using Cursor, the project rules are automatically loaded through `.cursor/rules`.

---

# Cursor Commands

If you are using Cursor, you can run predefined commands instead of writing prompts manually.

Examples:

/create-feature auth  
/create-component Button  
/create-hook useAuth  
/create-service authService  

These commands automatically follow the project architecture and coding rules.

You can still use the prompts below if needed.

---

# Standard Setup Prompt

Use this before generating code.

Read the following project documentation:

docs/ARCHITECTURE.md  
docs/PROJECT_CONTEXT.md  
docs/AI_RULES.md  

Follow the architecture and rules when generating code.

---

# Create Initial Folder Structure

Follow the architecture defined in docs/ARCHITECTURE.md.

Create the initial folder structure inside `src/`.

Do not create extra folders outside the architecture.

---

# Create New Feature Module

Read:

docs/ARCHITECTURE.md  
docs/PROJECT_CONTEXT.md  
docs/AI_RULES.md  

Create a new feature module called **[feature-name]**.

Follow the feature module structure defined in docs/ARCHITECTURE.md.

The feature module should contain:

components/  
hooks/  
services/  
utils/  
types.ts  

Place it inside:

src/features/[feature-name]/

---

# Generate Full Feature Module

Read:

docs/ARCHITECTURE.md  
docs/PROJECT_CONTEXT.md  
docs/AI_RULES.md  

Create a complete feature module called **[feature-name]**.

Place it inside:

src/features/[feature-name]/

Generate the following files:

components/[FeatureName]Page.tsx  
hooks/use[FeatureName].ts  
services/[featureName]Service.ts  
utils/[featureName]Utils.ts  
types.ts  

Requirements:

* TypeScript
* Follow the architecture rules
* Separate UI from business logic
* Use hooks for business logic
* Use services for API communication
* Keep code simple and readable

Include basic starter implementations for each file.

---

# Create UI Component

Read:

docs/ARCHITECTURE.md  
docs/AI_RULES.md  

Create a reusable React UI component called **[ComponentName]**.

Requirements:

* TypeScript
* TailwindCSS styling
* Functional component
* Clean and simple implementation

Place it inside:

src/components/ui/

---

# Create Feature Component

Create a React component called **[ComponentName]** for feature **[feature-name]**.

Place it inside:

src/features/[feature-name]/components/

Follow the architecture rules.

---

# Create Hook

Create a custom React hook called **use[FeatureName]**.

Requirements:

* TypeScript
* Contains business logic
* No UI code

Place it inside:

src/features/[feature-name]/hooks/

---

# Create Service

Create a service called **[featureName]Service.ts**.

Responsibilities:

* Handle API communication
* Use infrastructure from `src/lib/`
* Return structured data

Place it inside:

src/features/[feature-name]/services/

---

# Create Utility Function

Create a utility function called **[functionName]**.

Requirements:

* Pure function
* No React imports
* Reusable

Place it inside:

src/utils/

---

# Create Types

Create TypeScript interfaces for **[feature-name]**.

Place them inside:

src/features/[feature-name]/types.ts

---

# Refactor Component

Refactor the following component.

Goals:

* Improve readability
* Reduce complexity
* Follow the rules in docs/AI_RULES.md
* Keep functionality unchanged

---

# Debug Code

The following code has an issue.

Analyze the problem and propose a fix.

Follow the architecture and coding rules.

---

# Add New Page

Create a new page in the Next.js app router.

Place the page inside:

src/app/[route]/page.tsx

Follow the architecture defined in docs/ARCHITECTURE.md.

---

# General Prompt Template

Use this template for most AI requests:

Read:

docs/ARCHITECTURE.md  
docs/PROJECT_CONTEXT.md  
docs/AI_RULES.md  

Follow the architecture and rules.

Now implement the requested feature.