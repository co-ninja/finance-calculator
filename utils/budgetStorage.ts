import { BudgetInput } from "@/types/finance"

const STORAGE_KEY = "budget_records"

export interface BudgetRecord extends BudgetInput {
  month: number
  year: number
}

function getKey(month: number, year: number): string {
  return `${year}-${String(month).padStart(2, "0")}`
}

function loadAll(): Record<string, BudgetRecord> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveBudget(record: BudgetRecord): void {
  const all = loadAll()
  all[getKey(record.month, record.year)] = record
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
}

export function loadBudget(month: number, year: number): BudgetRecord | null {
  const all = loadAll()
  return all[getKey(month, year)] ?? null
}
