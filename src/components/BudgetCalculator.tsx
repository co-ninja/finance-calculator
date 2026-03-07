"use client"

import { useState, useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import InputField from "./InputField"
import ResultCard from "./ResultCard"
import MonthPicker from "./MonthPicker"
import { calculateBudget } from "@/src/utils/calculateBudget"
import { saveBudgetToDrive, loadBudgetFromDrive } from "@/src/utils/driveStorage"

export default function BudgetCalculator() {
  const { data: session, status } = useSession()
  const isLoggedIn = !!session

  const now = new Date()
  const [month, setMonth] = useState(now.getMonth())
  const [year, setYear] = useState(now.getFullYear())

  const [income, setIncome] = useState(0)
  const [rent, setRent] = useState(0)
  const [food, setFood] = useState(0)
  const [transport, setTransport] = useState(0)
  const [entertainment, setEntertainment] = useState(0)

  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    setIsOnline(navigator.onLine)
    const onOnline = () => setIsOnline(true)
    const onOffline = () => setIsOnline(false)
    window.addEventListener("online", onOnline)
    window.addEventListener("offline", onOffline)
    return () => {
      window.removeEventListener("online", onOnline)
      window.removeEventListener("offline", onOffline)
    }
  }, [])

  useEffect(() => {
    if (status === "loading") return

    function clearInputs() {
      setIncome(0)
      setRent(0)
      setFood(0)
      setTransport(0)
      setEntertainment(0)
    }

    if (!isLoggedIn) {
      clearInputs()
      setSaved(false)
      return
    }

    async function loadData() {
      setLoading(true)
      const record = await loadBudgetFromDrive(month, year)
      if (record) {
        setIncome(record.income)
        setRent(record.rent)
        setFood(record.food)
        setTransport(record.transport)
        setEntertainment(record.entertainment)
      } else {
        clearInputs()
      }
      setSaved(false)
      setLoading(false)
    }

    loadData()
  }, [month, year, isLoggedIn, status])

  const result = calculateBudget({ income, rent, food, transport, entertainment })

  async function handleSave() {
    if (!isLoggedIn) return
    const record = { month, year, income, rent, food, transport, entertainment }
    setLoading(true)
    await saveBudgetToDrive(record)
    setLoading(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">

      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Finance Budget Calculator
        </h1>

        {status !== "loading" && (
          isLoggedIn ? (
            <div className="flex items-center gap-2 shrink-0">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name ?? "avatar"}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <button
                onClick={() => signOut()}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 whitespace-nowrap"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="shrink-0 flex items-center gap-2 py-2 px-3 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </button>
          )
        )}
      </div>

      {status !== "loading" && (
        isLoggedIn ? (
          isOnline ? (
            <p className="text-sm text-green-600 dark:text-green-400">
              Saving to Google Drive · {session.user?.email}
            </p>
          ) : (
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              No internet connection — changes won't be saved to Google Drive until you're back online.
            </p>
          )
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sign in with Google to save your budget to Google Drive across devices.
          </p>
        )
      )}

      <MonthPicker month={month} year={year} onMonthChange={setMonth} onYearChange={setYear} />

      <div className="grid grid-cols-2 gap-4">
        <InputField label="Income" value={income} onChange={setIncome} />
        <InputField label="Rent" value={rent} onChange={setRent} />
        <InputField label="Food" value={food} onChange={setFood} />
        <InputField label="Transport" value={transport} onChange={setTransport} />
        <InputField label="Entertainment" value={entertainment} onChange={setEntertainment} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <ResultCard title="Total Expenses" value={`$${result.totalExpenses}`} />
        <ResultCard title="Remaining" value={`$${result.remaining}`} />
        <ResultCard title="Savings Rate" value={`${result.savingsRate.toFixed(1)}%`} />
      </div>

      <button
        onClick={handleSave}
        disabled={loading || !isLoggedIn}
        className="w-full py-2 px-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors disabled:opacity-50"
      >
        {loading ? "Loading..." : saved ? "Saved!" : "Save Budget"}
      </button>

    </div>
  )
}
