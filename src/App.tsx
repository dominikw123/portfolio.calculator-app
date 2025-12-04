import CalculatorWrapper from "./components/CalculatorWrapper";
import ModeSwitchBar from "./components/ModeSwitchBar";
import StandardCalculator from "./components/StandardCalculator";
import ScientificCalculator from "./components/ScientificCalculator";
import type { CalculatorMode } from "@/lib/types";
import { useState, Activity } from "react";


export default function App() {
  const [mode, setMode] = useState<CalculatorMode>("standard");

  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <CalculatorWrapper>
        <ModeSwitchBar mode={mode} setMode={setMode} />
        <Activity mode={mode === "standard" ? "visible" : "hidden"}>
          <StandardCalculator />
        </Activity>
        <Activity mode={mode === "scientific" ? "visible" : "hidden"}>
          <ScientificCalculator />
        </Activity>
      </CalculatorWrapper>
    </main>
  );
}
