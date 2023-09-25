import axios from 'axios';

const getAxiosIntange = (baseURL: string) => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'Application/json',
    },
  });
};

export default getAxiosIntange;
