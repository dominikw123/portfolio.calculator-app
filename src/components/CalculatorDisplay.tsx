export default function CalculatorDisplay({ value }: { value: string; }) {
  return (
    <div className="text-right text-3xl font-bold w-full bg-gray-100 rounded-md border border-gray-200 p-3 flex items-center justify-end whitespace-nowrap tracking-wide">
      {value}
    </div>
  );
}