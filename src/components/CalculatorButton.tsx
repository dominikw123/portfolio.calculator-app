import { Button } from "@/components/ui/button";

type CalculatorButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  onClick: () => void;
};

export default function CalculatorButton({ children, className, variant, onClick }: CalculatorButtonProps) {
  return (
    <Button className={"aspect-square text-3xl w-full p-10 " + className} variant={variant} onClick={onClick} >
      {children}
    </Button >
  );
};