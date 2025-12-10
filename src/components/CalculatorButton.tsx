import { Button } from "@/components/ui/button";

type CalculatorButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
};

export default function CalculatorButton({ children, className, onClick }: CalculatorButtonProps) {
  return (
    <Button className={"text-2xl sm:text-3xl w-full p-8 sm:p-10 " + className} variant="outline" onClick={onClick} >
      {children}
    </Button >
  );
};