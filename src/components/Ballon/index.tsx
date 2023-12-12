import { CSSProperties } from 'react';
import styled from 'styled-components';

interface BallonProps {
  messege: string;
  top?: CSSProperties['top'];
  left?: CSSProperties['left'];
}
interface StyledComponentProps {
  top?: CSSProperties['top'];
  left?: CSSProperties['left'];
}
function Ballon({ messege, top, left }: BallonProps) {
  return (
    <StyledBallon>
      <Styledbubble src="img/bubble.png" alt="bubble" />
      <Text top={top} left={left}>
        {' '}
        {messege}
      </Text>
      <Styledbbugong src="img/bbugong.png"></Styledbbugong>
    </StyledBallon>
  );
}

export default Ballon;

const StyledBallon = styled.div`
  width: 175px;
  height: 149px;
  position: relative;
`;

const Styledbubble = styled.img`
  width: 175px;
  height: 149px;
  position: absolute;
  z-index: 1;
  transform: scaleX(-1);
`;
const Styledbbugong = styled.img`
  position: relative;
  top: 95px;
  left: 100px;
`;

const Text = styled.p<StyledComponentProps>`
  width: 100%;
  position: absolute;
  top: ${(props) => (props.top ? props.top : '65px')};
  left: ${(props) => (props.left ? props.left : '30px')};
  width: 145px;
  color: #000;
  font-family: Galmuri11;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  z-index: 2;
`;
