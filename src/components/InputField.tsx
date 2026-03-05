import { useState, useEffect } from "react"

interface Props {
  label: string
  value: number
  onChange: (value: number) => void
}

export default function InputField({ label, value, onChange }: Props) {
  const [display, setDisplay] = useState(value === 0 ? "" : String(value))

  useEffect(() => {
    setDisplay(value === 0 ? "" : String(value))
  }, [value])

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-800 dark:text-gray-300">
        {label}
      </label>

      <input
        type="number"
        value={display}
        onChange={(e) => {
          setDisplay(e.target.value)
          onChange(e.target.value === "" ? 0 : Number(e.target.value))
        }}
        className="border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      />
    </div>
  )
}