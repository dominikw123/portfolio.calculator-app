import CalculatorWrapper from "./components/CalculatorWrapper";
import ModeSwitchBar from "./components/ModeSwitchBar";
import StandardCalculator from "./components/StandardCalculator";
import ScientificCalculator from "./components/ScientificCalculator";
import type { CalculatorMode } from "@/lib/types";
import { useState } from "react";


export default function App() {
  const [mode, setMode] = useState<CalculatorMode>("standard");

  return (
    <main className="flex items-center justify-center w-full min-h-screen py-10">
      <CalculatorWrapper>
        <ModeSwitchBar mode={mode} setMode={setMode} />
        {mode === "standard" && <StandardCalculator />}
        {mode === "scientific" && <ScientificCalculator />}
      </CalculatorWrapper>
    </main>
  );
}
