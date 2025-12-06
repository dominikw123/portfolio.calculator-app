import { Card, CardContent } from "@/components/ui/card";

export default function CalculatorWrapper({ children }: { children: React.ReactNode; }) {
  return (
    <Card className="w-full max-w-lg">
      <CardContent className="flex flex-col gap-4">
        {children}
      </CardContent>
    </Card>
  );
}