import Ballon from '@components/Ballon';
import Button from '@components/Button';
import Credits from '@components/Credits';
import PageHeader from '@components/PageHeader';
import { THEME } from '@styles/index';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CreditInputPage = () => {
  const navigate = useNavigate();
  const handlePreviousButtonClick = () => navigate(-1);
  const handleNextButtonClick = () => navigate('/subject');
  return (
    <MainWrapper>
      <PageHeader totalPages={4} currentPage={2}></PageHeader>
      <NoticeBox>
        <p>이번 학기는 총</p>
        <p>몇 학점 수강하나요?</p>
        <h5>이번 학기 들어아하는 최대 학점을 입력해주세요</h5>
      </NoticeBox>

      <Wrapper>
        <Credits></Credits>
      </Wrapper>

      <CharacterBox>
        <Ballon messege="이번학기 학점 입력해줘" left={'23px'}></Ballon>
      </CharacterBox>
      <ButtonWrapper>
        <Button
          button={{
            children: '이전',
            backgroundColor: THEME.BUTTON.WHITE, // 배경색
            color: THEME.BUTTON.BLACK, // 글자색
            width: '156px', // 버튼 너비
            onClick: handlePreviousButtonClick,
          }}
        ></Button>
        <Button
          button={{
            children: '다음',
            backgroundColor: THEME.BUTTON.BROWN, // 배경색
            color: THEME.BUTTON.WHITE, // 글자색
            width: '156px', // 버튼 너비
            onClick: handleNextButtonClick,
          }}
        ></Button>
      </ButtonWrapper>
    </MainWrapper>
  );
};

const NoticeBox = styled.div`
  font-family: Galmuri11;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  top: 120px;
  right: 50px;

  h5 {
    color: #98b1b9;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    margin-top: 3px;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CharacterBox = styled.div`
  position: absolute;
  top: 400px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 333px;
  position: absolute;
  top: 700px;
`;
const Wrapper = styled.div`
  position: relative;
  left: 12px;
  top: 180px;
`;

export default CreditInputPage;
