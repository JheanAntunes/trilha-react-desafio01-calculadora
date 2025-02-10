import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useOperation } from "./hooks/operation";

const App = () => {
  const {
    currentNumber,
    handleOnClear,
    handleAddNumber,
    handleMinusNumbers,
    handleSumNumbers,
    handleEquals,
  } = useOperation();

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
