import CalculatorWrapper from "@/components/CalculatorWrapper";
import ModeSwitchBar from "@/components/ModeSwitchBar";
import StandardCalculator from "@/components/StandardCalculator";
import ScientificCalculator from "@/components/ScientificCalculator";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import type { CalculatorMode } from "@/lib/types";
import { useState, useEffect } from "react";

export default function App() {
  const [mode, setMode] = useState<CalculatorMode>(() => {
    const savedMode = localStorage.getItem("calculatorMode") as CalculatorMode | null;
    return savedMode === "scientific" ? "scientific" : "standard";
  });

  useEffect(() => {
    localStorage.setItem("calculatorMode", mode);
  }, [mode]);

  return (
    <main className="p-0 flex items-center justify-center w-full min-h-screen overflow-x-hidden sm:p-10">
      <CalculatorWrapper>
        <div className="flex items-center justify-between w-full relative sm:static mb-0">
          <ModeSwitchBar mode={mode} setMode={setMode} />
          <ThemeToggleButton />
        </div>
        {mode === "standard" && <StandardCalculator />}
        {mode === "scientific" && <ScientificCalculator />}
      </CalculatorWrapper>
    </main>
  );
}
