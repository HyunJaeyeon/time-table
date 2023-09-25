import axios from 'axios';

const getAxiosInstance = (baseURL: string) => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'Application/json',
    },
  });
};

export default getAxiosInstance;
