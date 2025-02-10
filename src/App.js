import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useOperation } from "./hooks/operation";

const App = () => {
  const { addNumber, clear, currentNumber, equals, handleOperation } =
    useOperation();

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button onClick={() => handleOperation("x")}>x</Button>
          <Button onClick={() => handleOperation("/")}>/</Button>
          <Button onClick={() => handleOperation("%")}>%</Button>
          <Button onClick={clear}>C</Button>
          <Button onClick={() => addNumber(".")}>.</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumber("7")}>7</Button>
          <Button onClick={() => addNumber("8")}>8</Button>
          <Button onClick={() => addNumber("9")}>9</Button>
          <Button onClick={() => handleOperation("-")}>-</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumber("4")}>4</Button>
          <Button onClick={() => addNumber("5")}>5</Button>
          <Button onClick={() => addNumber("6")}>6</Button>
          <Button onClick={() => handleOperation("+")}>+</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumber("1")}>1</Button>
          <Button onClick={() => addNumber("2")}>2</Button>
          <Button onClick={() => addNumber("3")}>3</Button>
          <Button onClick={equals}>=</Button>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
