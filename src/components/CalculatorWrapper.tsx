import { Card, CardContent } from "@/components/ui/card";

export default function CalculatorWrapper({ children }: { children: React.ReactNode; }) {
  return (
    <Card className="w-full max-w-md">
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}