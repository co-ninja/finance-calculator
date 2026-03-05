# Finance Calculator — Project Context

## What this app is
A Next.js 16 + TypeScript + Tailwind CSS finance budget calculator.

## Current features
- Budget inputs: Income, Rent, Food, Transport, Entertainment
- Results: Total Expenses, Remaining, Savings Rate
- Month/Year picker to track budget per month
- Save button — stores budget data in localStorage keyed by `year-month`
- Full dark mode support across all components

## File structure
- `app/page.tsx` — entry point, renders BudgetCalculator
- `src/components/BudgetCalculator.tsx` — main component, orchestrates state + save/load
- `src/components/InputField.tsx` — reusable number input with label
- `src/components/ResultCard.tsx` — displays a result metric (title + value)
- `src/components/MonthPicker.tsx` — month/year dropdown selectors
- `utils/calculateBudget.ts` — pure function to compute totals and savings rate
- `utils/budgetStorage.ts` — localStorage helpers: saveBudget, loadBudget
- `types/finance.ts` — shared TypeScript interfaces: BudgetInput, BudgetResult

## Planned next feature: Google OAuth + Google Drive storage
- Replace localStorage with Google Drive per-user storage
- User visits the hosted app → signs in with their own Google account
- Budget data saved as JSON in the user's own Google Drive
- Tech plan: NextAuth.js (Google provider) + googleapis npm package
- Requires one-time Google Cloud Console setup by the developer
- No database needed — each user's data lives in their own Drive

## Tech stack
- Next.js 16, React 19, TypeScript, Tailwind CSS v4
- No UI library — custom components with Tailwind
- Currently no auth or backend
