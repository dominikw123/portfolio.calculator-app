import CalculatorDisplay from "./CalculatorDisplay";
import ScientificCalculatorKeypad from "./ScientificCalculatorKeypad";

export default function ScientificCalculator() {
  return (
    <div className="flex flex-col gap-4">
      <CalculatorDisplay value="scientific" />
      <ScientificCalculatorKeypad />
    </div>
  );
}