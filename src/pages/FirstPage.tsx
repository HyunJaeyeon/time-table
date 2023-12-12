import Ballon from '@components/Ballon';
import Button from '@components/Button';
import ComboBox from '@components/ComboBox';
import PageHeader from '@components/PageHeader';
import Select from '@components/Select';
import { MOCK_API_PATH } from '@constants/api';
import PLACEHOLDER from '@constants/placeholder';
import { THEME } from '@styles/index';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FirstPage = () => {
  const navigate = useNavigate();
  const handleNextButtonClick = () => navigate('/credit');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleMajorSelect = (value: string) => {
    if (inputRef.current) inputRef.current.value = value;
  };
  const gradeOptions = [
    <option key="option1" value="grade1">
      1
    </option>,
    <option key="option2" value="grade2">
      2
    </option>,
    <option key="option3" value="grade3">
      3
    </option>,
    <option key="option4" value="grade4">
      4
    </option>,
  ];
  const semesterOptions = [
    <option key="option1" value="semester1">
      1
    </option>,
    <option key="option2" value="semester2">
      2
    </option>,
  ];

  return (
    <MainWrapper>
      <PageHeader totalPages={4} currentPage={1}></PageHeader>
      <NoticeBox>
        <p>전공, 학년 학기를</p>
        <p>입력해주세요</p>
      </NoticeBox>

      <ComboBoxWrapper>
        <h5>전공명 입력</h5>
        <ComboBox
          inputRef={inputRef}
          placeHolderText={PLACEHOLDER.SELECT_MAJOR}
          endPoint={MOCK_API_PATH.MAJOR}
          formatKey="majorName"
          onSelect={handleMajorSelect}
        ></ComboBox>
      </ComboBoxWrapper>

      <SelectWrapper>
        <div>
          <h5>학년선택</h5>
          <Select options={gradeOptions} placeholdertext="학년선택"></Select>
        </div>
        <div>
          <h5>학기선택</h5>
          <Select options={semesterOptions} placeholdertext="학기선택"></Select>
        </div>
      </SelectWrapper>
      <CharacterBox>
        <Ballon messege="안뇽 나는 뿌공"></Ballon>
      </CharacterBox>
      <StyledButton>
        <Button
          button={{
            children: 'START',
            backgroundColor: THEME.BUTTON.BROWN, // 배경색
            color: THEME.BUTTON.WHITE, // 글자색
            width: '327px', // 버튼 너비
            onClick: handleNextButtonClick,
          }}
        ></Button>
      </StyledButton>
    </MainWrapper>
  );
};
const SelectWrapper = styled.div`
  h5 {
    color: #98b1b9;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
  }
  display: flex;
  width: 328px;
  justify-content: space-between;
  position: absolute;
  top: 22em;
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
const NoticeBox = styled.div`
  font-family: Galmuri11;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  top: 50px;
  right: 50px;
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
const CharacterBox = styled.div`
  position: absolute;
  top: 400px;
`;
const StyledButton = styled.div`
  position: absolute;
  top: 700px;
`;

export default FirstPage;
