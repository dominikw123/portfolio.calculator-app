import { Card, CardContent } from "@/components/ui/card";

export default function CalculatorWrapper({ children }: { children: React.ReactNode; }) {
  return (
    <Card>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}