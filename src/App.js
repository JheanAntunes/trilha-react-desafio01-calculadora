import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button>x</Button>
          <Button>/</Button>
          <Button>%</Button>
          <Button onClick={handleOnClear}>c</Button>
          <Button>.</Button>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber("7")}>7</Button>
          <Button onClick={() => handleAddNumber("8")}>8</Button>
          <Button onClick={() => handleAddNumber("9")}>9</Button>
          <Button onClick={handleMinusNumbers}>-</Button>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber("4")}>4</Button>
          <Button onClick={() => handleAddNumber("5")}>5</Button>
          <Button onClick={() => handleAddNumber("6")}>6</Button>
          <Button onClick={handleSumNumbers}>+</Button>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber("1")}>1</Button>
          <Button onClick={() => handleAddNumber("2")}>2</Button>
          <Button onClick={() => handleAddNumber("3")}>3</Button>
          <Button onClick={handleEquals}> = </Button>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
