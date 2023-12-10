import { CSSProperties } from 'react';
import styled from 'styled-components';

interface CustomButton {
  children: string;
  onClick?: () => void;
  backgroundColor: CSSProperties['color'];
  color: CSSProperties['color'];
  width: CSSProperties['width'];
}

interface ButtonProps {
  button: CustomButton;
}

interface styledButtonProps {
  boxColor: CSSProperties['color'];
  color: CSSProperties['color'];
}

const Button = (props: ButtonProps) => {
  const { button } = props;
  const { children, backgroundColor, width, color } = button;

  return (
    <ButtonContainer width={width}>
      <StyledButton boxColor={backgroundColor} color={color}>
        {children}
      </StyledButton>
      <Shadow width={width}></Shadow>
    </ButtonContainer>
  );
};

export default Button;

const StyledButton = styled.button<styledButtonProps>`
  padding: 10px 10px;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-family: Galmuri11;
  font-weight: bold;
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-color: ${(props) => props.boxColor};
  color: ${(props) => props.color};
  z-index: 1;
  position: absolute;
`;

const Shadow = styled.div<{ width: CSSProperties['width'] }>`
  border: 2px solid black;
  border-radius: 5px;
  height: 52px;
  background-color: #ffbb00;
  width: ${(props) => props.width};
  position: absolute;
  top: 5px;
  left: 5px;
`;
const ButtonContainer = styled.div<{ width: CSSProperties['width'] }>`
  width: ${(props) => props.width};
  height: 52px;
  border-radius: 5px;
  position: absolute;
  bottom: 5em;
  &:active {
    transform: translate(6px, 6px);
    ${Shadow} {
      display: none;
    }
  }
`;
