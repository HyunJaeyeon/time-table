import Ballon from '@components/Ballon';
import Button from '@components/Button';
import Credits from '@components/Credits';
import PageHeader from '@components/PageHeader';
import TimeChecker from '@components/TimeChecker';
import { THEME } from '@styles/index';
import styled from 'styled-components';

const FourthPage = () => {
  return (
    <MainWrapper>
      <PageHeader totalPages={4} currentPage={4}></PageHeader>
      <NoticeBox>
        <p>안되는 시간을</p>
        <p>터치&드래그 해주세요</p>
        <h5>원하는 시간만큼 쭉 잡아당기면 돼요</h5>
      </NoticeBox>
      <StyldeTimeChecker>
        <TimeChecker></TimeChecker>
      </StyldeTimeChecker>

      <ButtonWrapper>
        <Button
          button={{
            children: '이전',
            backgroundColor: THEME.BUTTON.WHITE, // 배경색
            color: THEME.BUTTON.BLACK, // 글자색
            width: '156px', // 버튼 너비
          }}
        ></Button>
        <Button
          button={{
            children: '다음',
            backgroundColor: THEME.BUTTON.BROWN, // 배경색
            color: THEME.BUTTON.WHITE, // 글자색
            width: '156px', // 버튼 너비
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
const StyldeTimeChecker = styled.div`
  position: relative;
  top: 140px;
`;

export default FourthPage;
