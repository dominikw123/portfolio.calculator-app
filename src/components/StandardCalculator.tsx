import CalculatorDisplay from "@/components/CalculatorDisplay";
import StandardCalculatorKeypad from "@/components/StandardCalculatorKeypad";
import useStandardCalculator from "@/hooks/useStandardCalculator";

export default function StandardCalculator() {
  const { handleDecimal, handleClear, handlePercentage, handleSquareRoot, handleOperator, handleEqual, displayValue } = useStandardCalculator();

  return (
    <div className="flex flex-col gap-4 mt-18 sm:mt-0">
      <CalculatorDisplay value={displayValue} />
      <StandardCalculatorKeypad handleDecimal={handleDecimal} handleClear={handleClear} handlePercentage={handlePercentage} handleSquareRoot={handleSquareRoot} handleOperator={handleOperator} handleEqual={handleEqual} />
    </div>
  );
}