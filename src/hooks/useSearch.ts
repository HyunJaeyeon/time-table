import getAxiosIntange from '@apis/axios-instance';
import HttpClient from '@apis/http';
import { MOCK_SERVER_URL } from '@constants/api';
import { useEffect, useState } from 'react';

import useDebounce from './useDebounce';

const axiosInstance = getAxiosIntange(MOCK_SERVER_URL);
const httpClient = new HttpClient(axiosInstance);

const useSearch = (keyword: string, endPoint: string, delayTime: number) => {
  const debouncedKeyword = useDebounce(keyword, delayTime);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const getSearchList = async () => {
      const searchResult = await httpClient.get(
        `${endPoint}?q=${debouncedKeyword}`,
      );
      setSearchList(searchResult);
    };

    getSearchList();
  }, [debouncedKeyword]);

  return searchList;
};

export default useSearch;
