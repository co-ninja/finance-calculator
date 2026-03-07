# Architecture

## Tech Stack
- Next.js 16, React 19, TypeScript, Tailwind CSS v4
- No UI library — custom components with Tailwind
- No auth or backend — localStorage for persistence

## File Structure
- `app/page.tsx` — entry point, renders BudgetCalculator
- `src/components/BudgetCalculator.tsx` — main component, orchestrates state + save/load
- `src/components/InputField.tsx` — reusable number input with label
- `src/components/ResultCard.tsx` — displays a result metric (title + value)
- `src/components/MonthPicker.tsx` — month/year dropdown selectors
- `utils/calculateBudget.ts` — pure function to compute totals and savings rate
- `utils/budgetStorage.ts` — localStorage helpers: saveBudget, loadBudget
- `types/finance.ts` — shared TypeScript interfaces: BudgetInput, BudgetResult

## Conventions
- Components in `src/components/`, one per file
- Shared types in `types/` as TypeScript interfaces
- Pure utility functions in `utils/` (no side effects, fully typed)
- Full dark mode via Tailwind `dark:` classes — no inline styles
