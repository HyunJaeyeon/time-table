import React, { useState } from 'react';
import MOCK_MAJOR_PROFESSOR_DB from 'src/mocks/data/mock-subjec-db';
import styled from 'styled-components';

import Icon from '../Icon/index';

const StyledSelect = styled.select`
  width: 300px;
  height: 48px;
  gap: 2px;
  color: ${({ theme }) => theme.TEXT.GRAY};
  font-size: 16px;
  font-weight: 400;
  padding: 12px;
  border-radius: 10px;
  border: 2px solid #98b1b9;
  -webkit-appearance: none;
  appearance: none;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 5%;
  top: 23px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

const AnimatedIcon = styled(Icon)<{ isActive: boolean }>`
  transform: ${({ isActive }) =>
    isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: all ease 0.4s;
`;

const Container = styled.section`
  position: relative;
  width: 300px;
  height: 48px;
`;
const StyledBox = styled.li`
  position: relative;
  height: 20px;
  width: 240px;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  border-radius: 10px;
  background: #fff;
  display: flex;

  div {
    position: relative;
    right: 10;
    width: 20px;
    height: 20px;
  }
`;

const SubSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<
    { subject: string; professor: string }[]
  >([]);
  const [isInputActive, setIsInputActive] = useState<boolean>(false);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [selectedSubject, selectedProfessor] = e.target.value.split('|');
    const newSelection = {
      subject: selectedSubject,
      professor: selectedProfessor,
    };
    setSelectedOptions([...selectedOptions, newSelection]);
  };
  const handleRemoveOption = (index: number) => {
    const newOptions = [...selectedOptions];
    newOptions.splice(index, 1);
    setSelectedOptions(newOptions);
  };
  return (
    <Container>
      <StyledSelect
        onChange={handleOptionChange}
        value={''}
        onFocus={() => setIsInputActive(true)}
        onBlur={() => setIsInputActive(false)}
      >
        <option value="" disabled>
          과목명 / 교수님
        </option>
        {MOCK_MAJOR_PROFESSOR_DB.map((item, index) => (
          <option key={index} value={`${item.subject}|${item.professor}`}>
            {`${item.subject} / ${item.professor}`}
          </option>
        ))}
      </StyledSelect>
      <IconContainer>
        <AnimatedIcon iconKind={'arrowDown'} isActive={isInputActive} />
      </IconContainer>

      {selectedOptions.length > 0 && (
        <div>
          <ul>
            {selectedOptions.map((option, index) => (
              <StyledBox key={index}>
                {`${option.subject} / ${option.professor}`}
                <div onClick={() => handleRemoveOption(index)}>X</div>
              </StyledBox>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default SubSelect;
