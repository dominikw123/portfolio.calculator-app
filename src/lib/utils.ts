import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isDisplayTooLong = (maxLength: number, ...parts: string[]) =>
  parts.join("").length > maxLength;

export const sanitize = (value: string) => {
  if (!isFinite(Number(value))) return "0";
  return value;
};

export const triggerError = (
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>,
  setPreviousValue: React.Dispatch<React.SetStateAction<string>>,
  setOperator: React.Dispatch<React.SetStateAction<string>>
) => {
  setCurrentValue("Overflow Error");
  setPreviousValue("");
  setOperator("");
};