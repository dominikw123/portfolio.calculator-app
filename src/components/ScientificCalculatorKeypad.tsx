import CalculatorButton from "./CalculatorButton";

export default function ScientificCalculatorKeypad() {
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-3">
      <CalculatorButton className="bg-red-100 border-red-300 text-red-500 hover:bg-red-200 hover:border-red-400 hover:text-red-600" onClick={() => console.log("C")}>C</CalculatorButton>
      <CalculatorButton onClick={() => console.log("%")}>%</CalculatorButton>
      <CalculatorButton onClick={() => console.log("√")}>√</CalculatorButton>
      <CalculatorButton className="bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-600" onClick={() => console.log("÷")}>÷</CalculatorButton>
      <CalculatorButton onClick={() => console.log("sin")}>sin</CalculatorButton>
      <CalculatorButton onClick={() => console.log("cos")}>cos</CalculatorButton>
      <CalculatorButton onClick={() => console.log("tan")}>tan</CalculatorButton>
      <CalculatorButton className="bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-600" onClick={() => console.log("×")}>×</CalculatorButton>
      <CalculatorButton onClick={() => console.log("log")}>log</CalculatorButton>
      <CalculatorButton onClick={() => console.log("pi")}>pi</CalculatorButton>
      <CalculatorButton onClick={() => console.log("^")}>^</CalculatorButton>
      <CalculatorButton className="bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-600" onClick={() => console.log("-")}>-</CalculatorButton>
      <CalculatorButton onClick={() => console.log("1")}>1</CalculatorButton>
      <CalculatorButton onClick={() => console.log("2")}>2</CalculatorButton>
      <CalculatorButton onClick={() => console.log("3")}>3</CalculatorButton>
      <CalculatorButton className="bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-600" onClick={() => console.log("+")}>+</CalculatorButton>
      <CalculatorButton onClick={() => console.log("4")}>4</CalculatorButton>
      <CalculatorButton onClick={() => console.log("5")}>5</CalculatorButton>
      <CalculatorButton onClick={() => console.log("6")}>6</CalculatorButton>
      <CalculatorButton className="row-span-2 h-full bg-green-100 border-green-300 text-green-500 hover:bg-green-200 hover:border-green-400 hover:text-green-600" onClick={() => console.log("=")}>=</CalculatorButton>
      <CalculatorButton onClick={() => console.log("7")}>7</CalculatorButton>
      <CalculatorButton onClick={() => console.log("8")}>8</CalculatorButton>
      <CalculatorButton onClick={() => console.log("9")}>9</CalculatorButton>
      <CalculatorButton className="col-span-2" onClick={() => console.log("0")}>0</CalculatorButton>
      <CalculatorButton onClick={() => console.log(".")}>.</CalculatorButton>
    </div>
  );
}