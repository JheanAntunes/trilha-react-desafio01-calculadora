import { ButtonContainer } from "./styles";

const Button = ({ children, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} type="button">
      {children}
    </ButtonContainer>
  );
};

export default Button;
