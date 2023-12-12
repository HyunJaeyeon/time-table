import Button from '@components/Button';
import { ComboBox } from '@components/index';
import PageHeader from '@components/PageHeader';
import { MOCK_API_PATH } from '@constants/api';
import PLACEHOLDER from '@constants/placeholder';
import { THEME } from '@styles/index';
import { useRef } from 'react';
import styled from 'styled-components';

const SubjectPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubjectSelect = (value: string) => {
    if (inputRef.current) inputRef.current.value = value;
  };
  return (
    <MainWrapper>
      <PageHeader totalPages={4} currentPage={3}></PageHeader>
      <NoticeBox>
        <p>이번 학기에</p>
        <p>듣고 싶은 과목을</p>
        <p>선택해주세요</p>z
      </NoticeBox>
      <ComboBoxWrapper>
        <ComboBox
          inputRef={inputRef}
          placeHolderText={PLACEHOLDER.SELECT_MAJOR}
          endPoint={MOCK_API_PATH.SUBJECT}
          formatKey="subject"
          onSelect={handleSubjectSelect}
        ></ComboBox>
      </ComboBoxWrapper>

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
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 333px;
  position: absolute;
  top: 700px;
`;

const ComboBoxWrapper = styled.div`
  h5 {
    color: #98b1b9;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
  }
  width: 400px;
  margin: auto;
  align-items: center;
  z-index: 3;
  position: relative;
  top: 100px;
  left: 30px;
`;
export default SubjectPage;
