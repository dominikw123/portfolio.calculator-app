import CalculatorWrapper from "./components/CalculatorWrapper";
import ModeSwitchBar from "./components/ModeSwitchBar";
import type { CalculatorMode } from "@/lib/types";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState<CalculatorMode>("standard");

  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <CalculatorWrapper>
        <ModeSwitchBar mode={mode} setMode={setMode} />
      </CalculatorWrapper>
    </main>
  );
}
