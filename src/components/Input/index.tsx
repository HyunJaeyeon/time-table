import { useCallback, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef: React.RefObject<HTMLInputElement>;
  initialValue?: string;
  width: CSSProperties['width'];
}

const useInput = ({
  inputRef,
  initialValue = '' as string,
  width,
  ...props
}: InputProps) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value as string);
    },
    [],
  );
  const clearInput = useCallback(() => {
    setValue('' as string);
  }, []);

  const Input = (
    <StyledInput
      ref={inputRef}
      value={value}
      width={width}
      onChange={handleInputChange}
      {...props}
    />
  );

  return { Input, value, clearInput };
};

const useTextInput = (options: Parameters<typeof useInput>[0]) =>
  useInput({ ...options, type: 'text' });

export default useTextInput;

const StyledInput = styled.input<{ width: CSSProperties['width'] }>`
  width: ${({ width }) => width};

  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  outline: none;
  border-radius: 10px;
  border: 2px solid #98b1b9;
  background: #fff;
  color: ${({ theme }) => theme.TEXT.BALLOON};
  font-size: 16px;

  &:focus {
    border: 2px solid #000;
  }
  &::placeholder {
    color: ${({ theme }) => theme.TEXT.GRAY};
    font-size: 16px;
  }
`;
