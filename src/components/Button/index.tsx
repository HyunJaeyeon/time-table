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
    <ParentContainer width={width}>
      <StyledButton boxColor={backgroundColor} color={color}>
        {children}
      </StyledButton>
    </ParentContainer>
  );
};

export default Button;

const StyledButton = styled.button<styledButtonProps>`
  padding: 10px 10px;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-family: Galmuri11;
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-color: ${(props) => props.boxColor};
  color: ${(props) => props.color};
`;

const ParentContainer = styled.div<{ width: CSSProperties['width'] }>`
  box-shadow: 5px 5px 0px #ffbb00;
  width: ${(props) => props.width};
  height: 100%;
  border-radius: 5px;
  &:active {
    box-shadow: none;
    transform: translate(6px, 6px);
  }
`;
