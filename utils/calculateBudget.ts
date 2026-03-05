import { BudgetInput, BudgetResult } from "@/types/finance"

export function calculateBudget(data: BudgetInput): BudgetResult {

  const totalExpenses =
    data.rent +
    data.food +
    data.transport +
    data.entertainment

  const remaining = data.income - totalExpenses

  const savingsRate =
    data.income > 0
      ? (remaining / data.income) * 100
      : 0

  return {
    totalExpenses,
    remaining,
    savingsRate
  }
}