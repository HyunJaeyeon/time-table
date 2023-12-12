import CreditHour from '@components/CreditHour';
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const Credits: React.FC = () => {
  const [creditHourValues, setCreditHourValues] = useState<string[]>([
    '',
    '',
    '',
  ]);
  const displayValues = ['전공', '교양', '자선'];

  const handleInputChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const newValues = [...creditHourValues];
      newValues[index] = event.target.value; // 입력받은 값을 숫자로 변환
      setCreditHourValues(newValues);
      console.log(`Input ${index + 1}: ${event.target.value}`);
    };

  return (
    <Wrapper>
      {creditHourValues.map((value, index) => (
        <CreditHour
          key={index}
          inputValue={value} // 숫자를 문자열로 변환하여 전달
          displayValue={displayValues[index]}
          onInputChange={handleInputChange(index)}
        />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  // position:absolute;
  // top :200px;
  width: 300px;
`;

export default Credits;
