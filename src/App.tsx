import CalculatorWrapper from "./components/CalculatorWrapper";
import ModeSwitchBar from "./components/ModeSwitchBar";
import StandardCalculator from "./components/StandardCalculator";
import ScientificCalculator from "./components/ScientificCalculator";
import type { CalculatorMode } from "@/lib/types";
import { useState, useEffect } from "react";


export default function App() {
  const [mode, setMode] = useState<CalculatorMode>(() => {
    const savedMode = localStorage.getItem("calculatorMode") as CalculatorMode | null;
    if (savedMode === "standard" || savedMode === "scientific") {
      return savedMode;
    }
    return "standard";
  });

  useEffect(() => {
    const savedMode = localStorage.getItem("calculatorMode") as CalculatorMode | null;
    if (savedMode === "standard" || savedMode === "scientific") {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calculatorMode", mode);
  }, [mode]);

  return (
    <main className="p-0 flex items-center justify-center w-full min-h-screen overflow-x-hidden sm:p-10">
      <CalculatorWrapper>
        <ModeSwitchBar mode={mode} setMode={setMode} />
        {mode === "standard" && <StandardCalculator />}
        {mode === "scientific" && <ScientificCalculator />}
      </CalculatorWrapper>
    </main>
  );
}
