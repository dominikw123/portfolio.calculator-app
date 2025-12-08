import CalculatorButton from "./CalculatorButton";

type StandardCalculatorKeypadProps = {
  handleDecimal: (value: string) => void;
  handleClear: () => void;
  handlePercentage: () => void;
  handleSquareRoot: () => void;
  handleOperator: (value: string) => void;
  handleEqual: () => void;
};

export default function StandardCalculatorKeypad({ handleDecimal, handleClear, handlePercentage, handleSquareRoot, handleOperator, handleEqual }: StandardCalculatorKeypadProps) {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-3">
      <CalculatorButton className="bg-red-100 border-red-300 text-red-500 hover:bg-red-200 hover:border-red-400 hover:text-red-600 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white" onClick={handleClear}>C</CalculatorButton>
      <CalculatorButton onClick={handlePercentage}>%</CalculatorButton>
      <CalculatorButton onClick={handleSquareRoot}>√</CalculatorButton>
      <CalculatorButton className="bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-600 dark:text-white dark:border-white dark:hover:text-white" onClick={() => handleOperator("÷")}>÷</CalculatorButton>
      <CalculatorButton onClick={() => handleDecimal("1")}>1</CalculatorButton>
      <CalculatorButton onClick={() => handleDecimal("2")}>2</CalculatorButton>
      <CalculatorButton onClick={() => handleDecimal("3")}>3</CalculatorButton>
      <CalculatorButton className="bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-600 dark:text-white dark:border-white dark:hover:text-white" onClick={() => handleOperator("×")}>×</CalculatorButton>
      <CalculatorButton onClick={() => handleDecimal("4")}>4</CalculatorButton>
      <CalculatorButton onClick={() => handleDecimal("5")}>5</CalculatorButton>
      <CalculatorButton onClick={() => handleDecimal("6")}>6</CalculatorButton>
      <CalculatorButton className="bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-600 dark:text-white dark:border-white dark:hover:text-white" onClick={() => handleOperator("-")}>-</CalculatorButton>
      <CalculatorButton onClick={() => handleDecimal("7")}>7</CalculatorButton>
      <CalculatorButton onClick={() => handleDecimal("8")}>8</CalculatorButton>
      <CalculatorButton onClick={() => handleDecimal("9")}>9</CalculatorButton>
      <CalculatorButton className="bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-600 dark:text-white dark:border-white dark:hover:text-white" onClick={() => handleOperator("+")}>+</CalculatorButton>
      <CalculatorButton className="col-span-2" onClick={() => handleDecimal("0")}>0</CalculatorButton>
      <CalculatorButton onClick={() => handleDecimal(".")}>·</CalculatorButton>
      <CalculatorButton className="bg-green-100 border-green-300 text-green-500 hover:bg-green-200 hover:border-green-400 hover:text-green-600 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white" onClick={handleEqual}>=</CalculatorButton>
    </div>
  );
}