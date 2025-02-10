import { useState, useCallback } from "react";

// Custom Hook para operações de calculadora
export const useOperation = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const clear = useCallback(() => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  }, []);

  const addNumber = useCallback((num) => {
    setCurrentNumber((prev) => (prev === "0" ? num : prev + num));
  }, []);

  const performOperation = useCallback(() => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      default:
        return currentNumber;
    }
  }, [firstNumber, currentNumber, operation]);

  const handleOperation = useCallback(
    (op) => {
      if (operation) {
        setCurrentNumber(String(performOperation()));
        setOperation("");
        setFirstNumber("0");
      } else {
        setFirstNumber(currentNumber);
        setCurrentNumber("0");
        setOperation(op);
      }
    },
    [performOperation, operation, currentNumber]
  );

  const equals = useCallback(() => {
    if (operation && currentNumber !== "0") {
      setCurrentNumber(String(performOperation()));
      setOperation("");
      setFirstNumber("0");
    }
  }, [performOperation, operation, currentNumber]);

  return {
    currentNumber,
    clear,
    addNumber,
    handleOperation,
    equals,
  };
};
