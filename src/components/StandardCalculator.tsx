import CalculatorDisplay from "./CalculatorDisplay";
import StandardCalculatorKeypad from "./StandardCalculatorKeypad";
import { useState } from "react";

const MAX_DISPLAY_LENGTH = 16;

export default function StandardCalculator() {
  const [currentValue, setCurrentValue] = useState<string>("0");
  const [previousValue, setPreviousValue] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  //utility functions
  function isDisplayTooLong(...parts: string[]) {
    return parts.join("").length > MAX_DISPLAY_LENGTH;
  }

  function sanitize(value: string) {
    if (!isFinite(Number(value))) return "0";
    return value;
  }

  function triggerError() {
    setError(true);
    setCurrentValue("Overflow Error");
    setPreviousValue("");
    setOperator("");
  }

  function safeSetCurrent(updater: (prev: string) => string, isResult: boolean = false) {
    setCurrentValue(prev => {
      let next = updater(prev);

      if (isResult) {
        const integerLength = Math.floor(Number(next)).toString().length;

        if (integerLength > MAX_DISPLAY_LENGTH) {
          triggerError();
          return prev;
        }

        const decimalPlaces = Math.max(0, MAX_DISPLAY_LENGTH - integerLength);
        next = Number(next).toFixed(decimalPlaces);

        next = next.replace(/\.?0+$/, "");
      } else {
        next = next.replace(/^0+(?=\d)/, "");
      }

      if (!isResult && isDisplayTooLong(previousValue, operator, next)) {
        triggerError();
        return prev;
      }

      return next;
    });
  }

  //event handlers
  function handleDecimal(value: string) {
    if (error) return;

    safeSetCurrent(prev => {
      if (value === "." && prev.includes(".")) return prev;

      if (prev === "0" && value !== ".") return value;

      if (prev === "" && value === ".") return "0.";

      return prev + value;
    });
  }

  function handleClear() {
    setError(false);
    setCurrentValue("0");
    setPreviousValue("");
    setOperator("");
  }

  function handlePercentage() {
    if (error) return;

    const result = sanitize((parseFloat(currentValue) / 100).toString());
    safeSetCurrent(() => result);
  }

  function handleSquareRoot() {
    if (error) return;

    const num = Math.sqrt(parseFloat(currentValue));
    const integerPart = Math.floor(num).toString();

    if (integerPart.length > MAX_DISPLAY_LENGTH) {
      triggerError();
      return;
    }

    const decimalPlaces = MAX_DISPLAY_LENGTH - integerPart.length;
    let resultStr = num.toFixed(decimalPlaces);

    resultStr = resultStr.replace(/\.?0+$/, "");

    safeSetCurrent(() => resultStr, true);
  }

  function handleOperator(value: string) {
    if (error) return;

    if (previousValue && operator) {
      handleEqual();
    }

    setPreviousValue(currentValue);
    setOperator(value);
    setCurrentValue("0");
  }

  function handleEqual() {
    if (error) return;
    if (!previousValue || !operator) return;

    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);

    let result = "0";

    switch (operator) {
      case "÷":
        result = (prev / curr).toString();
        break;
      case "×":
        result = (prev * curr).toString();
        break;
      case "-":
        result = (prev - curr).toString();
        break;
      case "+":
        result = (prev + curr).toString();
        break;
    }

    result = sanitize(result);

    if (isDisplayTooLong(result)) {
      triggerError();
      return;
    }

    setCurrentValue(result);
    setPreviousValue("");
    setOperator("");
  }

  const displayValue = error
    ? "Overflow error"
    : previousValue && operator
      ? previousValue + operator + currentValue
      : currentValue;

  return (
    <div className="flex flex-col gap-4">
      <CalculatorDisplay value={displayValue} />
      <StandardCalculatorKeypad handleDecimal={handleDecimal} handleClear={handleClear} handlePercentage={handlePercentage} handleSquareRoot={handleSquareRoot} handleOperator={handleOperator} handleEqual={handleEqual} />
    </div>
  );
}