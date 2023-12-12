import React from 'react';
import styled from 'styled-components';

interface CreditHourProps {
  inputValue: string;
  displayValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreditHour: React.FC<CreditHourProps> = ({
  inputValue,
  displayValue,
  onInputChange,
}) => {
  return (
    <Box>
      <div>{displayValue}</div>
      <input value={inputValue} onChange={onInputChange} />
      <p>학점</p>
    </Box>
  );
};

export default CreditHour;

const Box = styled.div`
  display: felx;
  font-family: Galmuri11;
  div {
    padding-top: 3px;
    font-size: 16px;
    font-weight: bold;
    margin-right: 16px;
  }
  input {
    border: 2px solid #98b1b9;
    border-radius: 10px;
    width: 44px;
    height: 22px;
    flex-shrink: 0;
  }
  p {
    padding-top: 3px;
    font-size: 16px;
    margin-left: 8px;
  }
  margin: 5px;
`;
