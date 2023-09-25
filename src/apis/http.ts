import { AxiosInstance } from 'axios';

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async get(endPoint: string) {
    try {
      const { data } = await this.axiosInstance.get(`${endPoint}`);
      return data;
    } catch (error) {
      return error;
    }
  }

  // 사용자의 모든 입력을 받은 후, 알고리즘이 적용된 시간표를 얻기 위해서 post 요청을 하는 함수를 추가적으로 구현 예정.
}

export default HttpClient;
