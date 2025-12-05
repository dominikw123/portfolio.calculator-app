import CalculatorDisplay from "./CalculatorDisplay";
import StandardCalculatorKeypad from "./StandardCalculatorKeypad";

export default function StandardCalculator() {
  return (
    <div className="flex flex-col gap-4">
      <CalculatorDisplay value="standard" />
      <StandardCalculatorKeypad />
    </div>
  );
}