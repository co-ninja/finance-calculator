export interface BudgetInput {
    income: number
    rent: number
    food: number
    transport: number
    entertainment: number
  }
  
  export interface BudgetResult {
    totalExpenses: number
    remaining: number
    savingsRate: number
  }