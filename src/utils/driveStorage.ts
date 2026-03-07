import { BudgetRecord } from "./budgetStorage"

async function loadAllFromDrive(): Promise<Record<string, BudgetRecord>> {
  const res = await fetch("/api/drive/budget")
  if (!res.ok) return {}
  return res.json()
}

export async function loadBudgetFromDrive(month: number, year: number): Promise<BudgetRecord | null> {
  const all = await loadAllFromDrive()
  const key = `${year}-${String(month).padStart(2, "0")}`
  return all[key] ?? null
}

export async function saveBudgetToDrive(record: BudgetRecord): Promise<void> {
  const all = await loadAllFromDrive()
  const key = `${record.year}-${String(record.month).padStart(2, "0")}`
  all[key] = record
  await fetch("/api/drive/budget", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(all),
  })
}
