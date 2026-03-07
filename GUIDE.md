# Beginner's Guide: Build a Next.js App with Cursor + Claude

This guide walks you through building the finance-calculator app (or any similar project) from scratch using **Cursor** as your IDE and **Claude** as your AI assistant. It covers setup, project structure, how to prompt effectively, and how to reuse this template for future projects.

---

## Table of Contents

1. [Tools Overview: Cursor vs Claude API vs Claude Code](#1-tools-overview)
2. [Prerequisites](#2-prerequisites)
3. [Step 1 — Set Up Cursor with Claude](#3-step-1--set-up-cursor-with-claude)
4. [Step 2 — Scaffold the Project](#4-step-2--scaffold-the-project)
5. [Step 3 — Define the Architecture First](#5-step-3--define-the-architecture-first)
6. [Step 4 — Build Feature by Feature with Prompts](#6-step-4--build-feature-by-feature-with-prompts)
7. [Step 5 — The Folder Structure as a Reusable Template](#7-step-5--the-folder-structure-as-a-reusable-template)
8. [Prompting Strategy: How to Get Good Results](#8-prompting-strategy)
9. [Common Mistakes to Avoid](#9-common-mistakes-to-avoid)
10. [Adapting This Template to Other Projects](#10-adapting-this-template)

---

## 1. Tools Overview

Understanding which tool does what is the most important thing before you start.

### Cursor
Cursor is a code editor (fork of VS Code) with AI built in. You write and edit code here. It connects to AI models — including Claude — to help you write, explain, and fix code.

### Claude API (claude.ai chat or API)
This is the raw Claude chat interface or programmatic API. You use it to:
- Plan your app before writing any code
- Ask architectural questions
- Generate boilerplate you paste into Cursor
- Debug concepts or logic

Use claude.ai (the website) for free planning. Use the API directly if you're building an app that calls Claude programmatically.

### Claude Code (the CLI tool)
Claude Code is Anthropic's official CLI that runs in your terminal. It can read your files, run commands, and edit code directly. It's a step above the chat — it acts like an AI pair programmer with access to your codebase.

You used Claude Code to build this project (you're reading this guide from inside that session).

### When to use what:

| Task | Tool |
|---|---|
| Planning the app, architecture decisions | claude.ai chat |
| Writing/editing code files | Cursor (with Claude model selected) |
| Refactoring across many files | Claude Code (CLI) |
| Building an app that uses AI | Claude API (programmatic) |
| Quick one-off questions | claude.ai chat |

---

## 2. Prerequisites

Install these before starting:

```bash
# Node.js 20+ (check with: node --version)
# Install from: https://nodejs.org

# Cursor IDE
# Download from: https://cursor.sh

# Git
git --version

# Optional: Claude Code CLI
npm install -g @anthropic-ai/claude-code
```

You'll need:
- A **Cursor account** (free tier works)
- An **Anthropic account** to get an API key (for Claude Code or programmatic use)
- Basic familiarity with the terminal

---

## 3. Step 1 — Set Up Cursor with Claude

1. Open Cursor. Go to **Settings → Models**.
2. Select `claude-sonnet-4-5` or `claude-opus-4-5` as your model (latest and most capable).
3. Enter your Anthropic API key if prompted (or use Cursor's built-in subscription).
4. Open a new project folder.

**Key Cursor shortcuts:**
- `Cmd+K` — inline edit (select code, then describe what to change)
- `Cmd+L` — open chat panel (ask questions, generate full files)
- `Cmd+Shift+L` — add selected code to chat context
- `Tab` — accept autocomplete suggestion

---

## 4. Step 2 — Scaffold the Project

Run this in your terminal to create a new Next.js project:

```bash
npx create-next-app@latest my-app \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --no-import-alias
cd my-app
```

What each flag does:
- `--typescript` — TypeScript instead of plain JavaScript (catches errors early)
- `--tailwind` — Tailwind CSS for styling
- `--app` — use the App Router (Next.js 13+ style)
- `--src-dir` — puts code in `src/` folder (cleaner structure)
- `--no-import-alias` — skip `@/` alias for simplicity

Open the project in Cursor:

```bash
cursor .
```

---

## 5. Step 3 — Define the Architecture First

**Do this before writing any code.** Open claude.ai chat and send this prompt:

```
I want to build a [describe your app in 2-3 sentences].

Tech stack: Next.js 16, TypeScript, Tailwind CSS, no UI library.

Help me define:
1. A clean folder structure inside src/
2. What each file/component is responsible for
3. What shared TypeScript types I need
4. What utility functions I need (pure, no side effects)

Keep it simple. No over-engineering.
```

For this finance calculator, the response became `ARCHITECTURE.md` — a reference document you check before every coding session.

**Save the architecture as a file in your project:**

```
src/
  app/
    layout.tsx          # Root layout, fonts, metadata
    page.tsx            # Entry point — renders main component
    api/                # API routes (if needed)
  components/
    BudgetCalculator.tsx  # Main orchestrator component
    InputField.tsx        # Reusable input with label
    ResultCard.tsx        # Display a result metric
    MonthPicker.tsx       # Month/year selector
  utils/
    calculateBudget.ts    # Pure calculation logic
    budgetStorage.ts      # localStorage read/write
  types/
    finance.ts            # TypeScript interfaces
  styles/
    globals.css           # Global styles + Tailwind imports
```

This structure separates concerns cleanly:
- `components/` — UI only, no business logic
- `utils/` — logic only, no UI
- `types/` — shared data shapes, imported everywhere
- `app/` — routing and page entry points

---

## 6. Step 4 — Build Feature by Feature with Prompts

Build one piece at a time. The order matters: **types first, then utils, then components, then pages**.

### Phase 1: Types

In Cursor, open a new file `src/types/finance.ts` and press `Cmd+L` to open chat. Prompt:

```
Create TypeScript interfaces for a budget calculator app.

I need:
- BudgetInput: fields for income, rent, food, transport, entertainment (all numbers)
- BudgetResult: total expenses, remaining amount, savings rate (percentage)
- A BudgetEntry that combines input + result + a month/year string key

Put all interfaces in a single file with named exports.
```

Review the output. Accept it with `Cmd+K` → "Apply to file" or paste manually.

### Phase 2: Utility Functions

Open `src/utils/calculateBudget.ts`. Prompt:

```
Write a pure TypeScript function calculateBudget(input: BudgetInput): BudgetResult.

Import the types from ../types/finance.

Rules:
- Total expenses = sum of all non-income fields
- Remaining = income - total expenses
- Savings rate = (remaining / income) * 100, rounded to 1 decimal
- Return 0 for savings rate if income is 0
- No side effects, no imports besides the types
```

### Phase 3: Components (smallest first)

Build the smallest, most reusable components first. Prompt for `InputField.tsx`:

```
Create a React component InputField for a Next.js app with TypeScript and Tailwind CSS.

Props:
- label: string
- value: number
- onChange: (value: number) => void
- placeholder?: string

Requirements:
- Show the label above the input
- Input type is "number", min 0
- Full dark mode support using Tailwind dark: classes
- No inline styles
- Clean, minimal design
```

Then build `ResultCard.tsx`, then `MonthPicker.tsx`, and finally `BudgetCalculator.tsx` (which uses all of them).

### Phase 4: Main Component

This is the most complex piece. Prompt:

```
Create BudgetCalculator.tsx — the main React component.

It should:
- Manage state for BudgetInput (all fields), selected month/year
- Call calculateBudget() on every change and show results
- Have a Save button that calls saveBudget() from budgetStorage
- On mount, try to loadBudget() for the current month/year
- Use InputField for each input, ResultCard for each result, MonthPicker for month selection
- Full dark mode, Tailwind only, no UI libraries

Import types from ../types/finance
Import utils from ../utils/calculateBudget and ../utils/budgetStorage
Import components from ./InputField, ./ResultCard, ./MonthPicker
```

### Phase 5: Wire up the page

In `src/app/page.tsx`:

```
Update page.tsx to import and render BudgetCalculator.
Add 'use client' at the top since BudgetCalculator uses state.
Center the content on the page.
```

---

## 7. Step 5 — The Folder Structure as a Reusable Template

This structure works for almost any Next.js app. Here's how to extract it as a template:

### Option A: Git-based template

```bash
# After building your app, strip out the app-specific code:
# - Clear src/components/ (keep file structure, delete contents)
# - Clear src/utils/
# - Clear src/types/
# - Keep app/layout.tsx, globals.css, config files

# Then create a GitHub repo named "nextjs-template"
git init
git add .
git commit -m "Initial template"
gh repo create nextjs-template --public --source=. --push

# Reuse later:
git clone https://github.com/yourname/nextjs-template my-new-app
cd my-new-app
npm install
```

### Option B: Keep a CLAUDE.md and ARCHITECTURE.md

The most valuable part of this template is the **documentation**, not the code. Copy these two files into every new project:

**CLAUDE.md** — tells Claude (and you) the rules:
```markdown
# My App — Project Context

[One paragraph: what the app does]

See ARCHITECTURE.md for file structure and tech stack.

## Conventions
- Components in src/components/, one per file
- Shared types in src/types/ as TypeScript interfaces
- Pure utility functions in src/utils/ (no side effects, fully typed)
- Full dark mode via Tailwind dark: classes — no inline styles
- No UI libraries — custom components only
```

**ARCHITECTURE.md** — the file map:
```markdown
# Architecture

## Tech Stack
- Next.js 16, React 19, TypeScript, Tailwind CSS v4
- [Add/remove based on your project]

## File Structure
- app/page.tsx — entry point
- src/components/[MainComponent].tsx — main orchestrator
- [list every file and its single responsibility]

## Conventions
[Same as CLAUDE.md or link to it]
```

When you start a new Cursor session or Claude Code session, these files give Claude full context immediately. Claude reads them and knows exactly how your project is structured.

---

## 8. Prompting Strategy

### The Golden Rule
**Be specific about constraints, not just requirements.**

Bad prompt:
```
Make a form for budget inputs
```

Good prompt:
```
Create an InputField component in src/components/InputField.tsx.
TypeScript + Tailwind only, no UI libraries.
Props: label (string), value (number), onChange((n: number) => void).
Full dark mode. No inline styles. Min value 0.
```

### Prompt Structure Template

Use this format for any coding task:

```
[What to create/change]: [file path or component name]

[Context]: Brief description of what it's part of

[Requirements] (bullet points):
- [specific behavior]
- [TypeScript types to use]
- [imports to use]
- [styling rules]
- [constraints: what NOT to do]

[Example input/output if helpful]
```

### Types of Prompts to Use

**1. Generation prompt** — create something new:
```
Create [file] that does [X].
Import from [these paths].
Follow these rules: [constraints].
```

**2. Fix prompt** — fix a specific bug:
```
In [file], the [function/component] is doing [wrong behavior].
It should [correct behavior].
Here is the relevant code: [paste snippet]
Do not change anything else.
```

**3. Explain prompt** — understand existing code:
```
Explain what this function does and why it's written this way:
[paste code]
```

**4. Refactor prompt** — improve code without changing behavior:
```
Refactor this component to [goal: reduce duplication / split into smaller parts / etc].
Do not change the props interface or visible behavior.
[paste code]
```

### Chat vs Inline Edit (Cmd+L vs Cmd+K)

- **Cmd+L (Chat)**: Use for generating new files, asking questions, multi-step tasks
- **Cmd+K (Inline)**: Use when you've selected specific code and want a targeted change

Example `Cmd+K` prompts (short and direct):
- "Extract this into a separate function"
- "Add TypeScript types to this"
- "Convert to dark mode using Tailwind dark: classes"
- "Rename variable `x` to `totalExpenses`"

### Using Claude Code (CLI) for Larger Tasks

When you need changes across multiple files, use Claude Code in your terminal:

```bash
claude
```

Then describe what you want in natural language. Claude Code will:
- Read relevant files automatically
- Make changes across multiple files at once
- Run commands (npm install, etc.)
- Show you exactly what it changed

Example Claude Code prompts:
```
Refactor the project to move all components from the root into src/components/

Add a MonthPicker component and wire it into BudgetCalculator so users can
select which month's budget to view and edit.

The save button should store data keyed by "YYYY-MM" in localStorage.
```

---

## 9. Common Mistakes to Avoid

### Mistake 1: Prompting for the whole app at once
Claude will generate something, but it won't match your conventions and you won't understand it well enough to maintain it.

**Fix**: Build one file at a time, in dependency order (types → utils → components → pages).

### Mistake 2: Accepting code without reviewing it
AI makes mistakes. Always read what was generated before running it.

**Fix**: After each generation, ask "Does this match what I asked for? Does it import from the right paths? Are the types correct?"

### Mistake 3: No context files (CLAUDE.md / ARCHITECTURE.md)
Without these, Claude has to guess your conventions. You'll get inconsistent code across sessions.

**Fix**: Create CLAUDE.md and ARCHITECTURE.md at the start of every project. Reference them in every prompt: "Follow the conventions in ARCHITECTURE.md."

### Mistake 4: Asking Claude to fix things without showing the error
"It's not working" is not useful. Claude can't see your terminal or browser.

**Fix**: Always paste the exact error message:
```
I'm getting this error:
TypeError: Cannot read properties of undefined (reading 'income')
  at calculateBudget (utils/calculateBudget.ts:4:20)

Here is calculateBudget:
[paste code]
```

### Mistake 5: Letting Claude over-engineer
Claude tends to add extra abstractions, error handling, and configurability you don't need.

**Fix**: Add "Keep it simple. No over-engineering. No extra abstractions." to your prompts. If Claude adds things you didn't ask for, prompt: "Remove everything that isn't needed for what I asked."

---

## 10. Adapting This Template

To use this structure for a different app, change just three things:

### 1. Update CLAUDE.md
Replace the app description. The conventions section stays the same.

### 2. Update ARCHITECTURE.md
Replace the file list with your app's files. Keep the same categories (components, utils, types).

### 3. Replace the types file
`src/types/finance.ts` → `src/types/[your-domain].ts`

Define your app's core data shapes. Everything else follows from types.

**Example: Todo app**
```typescript
// src/types/todo.ts
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface TodoFilter {
  status: 'all' | 'active' | 'completed';
}
```

**Example: Recipe app**
```typescript
// src/types/recipe.ts
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  steps: string[];
  servings: number;
}

export interface RecipeFilter {
  query: string;
  maxIngredients: number;
}
```

The components, utils, and pages follow naturally once you have the types defined.

---

## Quick Reference: The Build Order

Every time you start a new app:

```
1. Plan (claude.ai chat)
   → ARCHITECTURE.md + CLAUDE.md

2. Scaffold
   → npx create-next-app

3. Types
   → src/types/[domain].ts

4. Utils (pure functions)
   → src/utils/calculate[X].ts
   → src/utils/[x]Storage.ts

5. Small components
   → src/components/[Reusable].tsx

6. Main component
   → src/components/[MainFeature].tsx

7. Page
   → src/app/page.tsx

8. Test manually in browser
   → npm run dev

9. Iterate with Cursor
   → Cmd+K for small fixes
   → Cmd+L for larger changes
```

This order ensures every file you create has its dependencies already available, and Claude always has the full context it needs.
