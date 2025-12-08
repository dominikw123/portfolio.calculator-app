export default function CalculatorDisplay({ value }: { value: string; }) {
  return (
    <div className="text-right text-4xl w-full bg-gray-100 rounded-md border border-gray-200 p-4 flex items-center justify-end whitespace-nowrap tracking-wide dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {value}
    </div>
  );
}