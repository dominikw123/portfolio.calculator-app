import CalculatorDisplay from "./CalculatorDisplay";
import StandardCalculatorKeypad from "./StandardCalculatorKeypad";
import useStandardCalculator from "@/hooks/useStandardCalculator";

export default function StandardCalculator() {
  const { handleDecimal, handleClear, handlePercentage, handleSquareRoot, handleOperator, handleEqual, displayValue } = useStandardCalculator();

  return (
    <div className="flex flex-col gap-4">
      <CalculatorDisplay value={displayValue} />
      <StandardCalculatorKeypad handleDecimal={handleDecimal} handleClear={handleClear} handlePercentage={handlePercentage} handleSquareRoot={handleSquareRoot} handleOperator={handleOperator} handleEqual={handleEqual} />
    </div>
  );
}