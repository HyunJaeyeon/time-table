import Button from '@components/Button';
import OptionBar from '@components/OptionBar';
import TimeTable from '@components/TimeTable';
import { THEME } from '@styles/index';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import styled from 'styled-components';

const SavePage = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'result.png');
          console.log('저장');
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <MainWrapper>
      <NoticeBox>
        <p>학년 학기</p>
        <h5>전공</h5>
      </NoticeBox>
      <StyledOption>
        <OptionBar></OptionBar>
      </StyledOption>
      <StyledTimeTable ref={divRef}>
        <TimeTable></TimeTable>
      </StyledTimeTable>

      <ButtonWrapper>
        <Button
          button={{
            children: '이전',
            backgroundColor: THEME.BUTTON.WHITE, // 배경색
            color: THEME.BUTTON.BLACK, // 글자색
            width: '70px', // 버튼 너비
          }}
        ></Button>
        <div onClick={handleDownload}>
          <Button
            button={{
              children: '저장',
              backgroundColor: '#333', // 배경색
              color: THEME.BUTTON.WHITE, // 글자색
              width: '155px',
            }}
          ></Button>
        </div>

        <Button
          button={{
            children: '다음',
            backgroundColor: THEME.BUTTON.BROWN, // 배경색
            color: THEME.BUTTON.WHITE, // 글자색
            width: '70px',
          }}
        ></Button>
      </ButtonWrapper>
    </MainWrapper>
  );
};

const NoticeBox = styled.div`
  font-weight: bold;
  position: relative;
  top: 50px;
  right: 80px;
  display: flex;
  color: white;
  font-family: Galmuri11;
  font-size: 24px;

  h5 {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    margin-top: 10px;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledOption = styled.div`
  position: relative;
  top: 60px;
`;
const StyledTimeTable = styled.div`
  position: relative;
  top: 70px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 333px;
  position: relative;
  top: 100px;
`;

export default SavePage;
