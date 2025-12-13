import CalculatorDisplay from "@/components/CalculatorDisplay";
import ScientificCalculatorKeypad from "@/components/ScientificCalculatorKeypad";
import useScientificCalculator from "@/hooks/useScientificCalculator";

export default function ScientificCalculator() {
  const { handleDecimal, handleClear, handlePercentage, handleSquareRoot, handleSin, handleCos, handleTan, handleLog, handlePi, handleOperator, handleEqual, displayValue } = useScientificCalculator();

  return (
    <div className="flex flex-col gap-4 mt-18 sm:mt-0">
      <CalculatorDisplay value={displayValue} />
      <ScientificCalculatorKeypad handleDecimal={handleDecimal} handleClear={handleClear} handlePercentage={handlePercentage} handleSquareRoot={handleSquareRoot} handleSin={handleSin} handleCos={handleCos} handleTan={handleTan} handleLog={handleLog} handlePi={handlePi} handleOperator={handleOperator} handleEqual={handleEqual} />
    </div>
  );
}