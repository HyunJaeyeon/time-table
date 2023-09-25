import { useEffect, useState } from 'react';

const useDebounce = (keyword: string, delayTime: number) => {
  const [debouncedKeyword, setDebouncedKeyword] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, delayTime);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return debouncedKeyword;
};

export default useDebounce;
