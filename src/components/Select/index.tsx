import React, { useState } from 'react';
import styled from 'styled-components';

import Icon from '../Icon/index';

interface SelectProps {
  options: JSX.Element[];
  placeholdertext: string;
}

const Select = ({ options, placeholdertext }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>('');
  const [isInputActive, setIsInputActive] = useState<boolean>(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setIsInputActive(false);
  };

  return (
    <Container>
      <StyledSelect
        onChange={handleSelectChange}
        value={selectedOption}
        onFocus={() => setIsInputActive(true)}
        onBlur={() => setIsInputActive(false)}
      >
        <option value="" disabled selected hidden>
          {placeholdertext}
        </option>
        {options}
      </StyledSelect>
      <IconContainer>
        <AnimatedIcon iconKind={'arrowDown'} isActive={isInputActive} />
      </IconContainer>
    </Container>
  );
};

export default Select;

const StyledSelect = styled.select`
  width: 156px;
  height: 48px;
  gap: 2px;
  color: ${({ theme }) => theme.TEXT.GRAY};
  font-family: ;
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
  right: 10%;
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
  width: 156px;
  height: 48px;
`;
