import styled from 'styled-components';
// import ".././Fonts/font.css";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  page: number;
}

const Button = ({ children, onClick, page }: ButtonProps) => {
  // page 값에 따라 다른 onClick 함수 설정
  const handleClick = () => {
    if (page === 1) {
      // page가 1일 때의 처리
    } else if (page === 2) {
      // page가 2일 때의 처리
    } else if (page === 3) {
      // page가 2일 때의 처리
    } else if (page === 4) {
      // page가 2일 때의 처리
    } else if (page === 5) {
      // page가 2일 때의 처리
    } else {
      // 그 외의 경우
    }
  };
  return (
    <ParentContainer
      style={{
        width: (() => {
          if (children === 'START') return '327px';
          if (page === 6 && children === '이미지 저장') return '155px';
          if (page === 6) return '70px';
          return '156px';
        })(),
      }}
    >
      <StyledButton
        onClick={handleClick}
        style={{
          backgroundColor: (() => {
            if (children === '이미지 저장') return '#333';
            if (children === '이전' || children === '초기화') return '#ffff';
            if (children === '다음' && page === 6) return '#ffff';
            return '#7F4C2F'; // 기본 배경색
          })(),
          color: (() => {
            if (children === '이전' || children === '초기화') return 'black';
            if (children === '다음' && page === 6) return 'black';
            return 'white';
          })(),
        }}
      >
        {children}
      </StyledButton>
    </ParentContainer>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 10px 10px;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-family: Galmuri11;
  width: 100%;
  height: 100%;
  font-size: 16px;
`;

const ParentContainer = styled.div`
  box-shadow: 5px 5px 0px #ffbb00;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  &:active {
    box-shadow: none; /* 클릭 시 그림자 없앰 */
    transform: translate(6px, 6px);
  }
`;
