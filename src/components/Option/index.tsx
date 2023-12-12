import styled from 'styled-components';

interface PageProps {
  option: string;
  detail: number | string;
  onClick?: () => void;
}

function Option({ option, detail, onClick }: PageProps) {
  return (
    <Container onClick={onClick}>
      <SBox>
        {option}
        <p>{detail}</p>
      </SBox>
    </Container>
  );
}

export default Option;

const Container = styled.div`
  border: 2px solid #191919;
  padding: 4px;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  margin: 2px;
  background-color: #333;
  color: white;
  font-weight: 700;
  p {
    color: #fb0;
    margin-left: 2px;
  }
`;
const SBox = styled.div`
  display: flex;
`;
