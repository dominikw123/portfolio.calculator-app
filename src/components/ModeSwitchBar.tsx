import { Button } from "@/components/ui/button";
import type { CalculatorMode } from "@/lib/types";

type ModeSwitchBarProps = {
  mode: CalculatorMode;
  setMode: (mode: CalculatorMode) => void;
};

export default function ModeSwitchBar({ mode, setMode }: ModeSwitchBarProps) {
  return (
    <div className="flex items-center gap-2">
      <Button size="lg" variant={mode === "standard" ? "default" : "secondary"} onClick={() => setMode("standard")}>
        Standard
      </Button>
      <Button size="lg" variant={mode === "scientific" ? "default" : "secondary"} onClick={() => setMode("scientific")}>
        Scientific
      </Button>
    </div>
  );
}