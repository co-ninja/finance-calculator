interface Props {
    title: string
    value: string
  }
  
  export default function ResultCard({ title, value }: Props) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">{title}</p>

        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
    )
  }