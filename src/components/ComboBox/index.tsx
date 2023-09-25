import useSearch from '@hooks/useSearch';
import formatSearchData from '@utils/format-data';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Icon, useTextInput } from '..';

interface FormattedItem {
  id: number;
  name: string;
}

interface ComboBoxProps {
  inputRef: React.RefObject<HTMLInputElement>;
  placeHolderText: string;
  endPoint: string;
  formatKey?: string;
  onSelect: (value: string) => void;
}

const ComboBox = ({
  inputRef,
  placeHolderText,
  endPoint,
  formatKey,
  onSelect,
}: ComboBoxProps) => {
  const { value, Input, clearInput } = useTextInput({
    inputRef: inputRef,
    initialValue: '',
    width: '80%',
    placeholder: placeHolderText,
  });
  const searchDatas = useSearch(value, endPoint, 500);
  const formattedDatas: FormattedItem[] | undefined = formatSearchData(
    searchDatas,
    formatKey,
  );
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const comboBoxRef = useRef<HTMLDivElement>(null);

  const handleItemClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.target instanceof HTMLDivElement && onSelect(e.target.innerText);
  };

  useEffect(() => {
    const handleFocus = () => setIsInputActive(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (!comboBoxRef.current?.contains(event.target as Node))
        setIsInputActive(false);
    };
    inputRef.current?.addEventListener('focus', handleFocus);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      inputRef.current?.removeEventListener('focus', handleFocus);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container ref={comboBoxRef}>
      {Input}
      {isInputActive && (
        <RecommendList onClick={handleItemClick}>
          {formattedDatas?.map((recommendItem) => {
            return (
              <RecommendItem key={recommendItem.id}>
                {recommendItem.name}
              </RecommendItem>
            );
          })}
        </RecommendList>
      )}
      <IconContainer>
        <AnimatedIcon iconKind={'arrowDown'} isActive={isInputActive} />
      </IconContainer>
    </Container>
  );
};

export default ComboBox;

const Container = styled.section`
  position: relative;
`;

const RecommendList = styled.main`
  width: 85%;
  max-height: 150px;
  overflow-y: scroll;
  border-radius: 10px;
  border: 2px solid #000;
  background: ${({ theme }) => theme.DROPDOWN.SELECT_BOX};

  &:last-child {
    border-bottom: none;
  }
`;

const RecommendItem = styled.div`
  background: #f1fcff;
  padding: 12px;
  border-bottom: 2px solid #000;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 20%;
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
