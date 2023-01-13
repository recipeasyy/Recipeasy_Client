import axios from 'axios';
import { getCookie, setCookie } from '../util/cookie';

axios.defaults.withCredentials = true;

//axios인스턴스
const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

//axios인스턴스
const accessApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: { Authorization: `Bearer ${getCookie('accessToken')}` },
});

accessApi.interceptors.response.use(
  (response) => {
    if (!(response.status === 200 || response.status === 201 || response.status === 204)) throw new Error();
    if (response.data.errors) throw new Error(response.data.errors);
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      const originalRequest = config;
      const refresh = getCookie('refreshToken');

      // 두번 이상 요청하면 다시 헤더 넣기

      // token refresh 요청
      const response = await accessApi.post('/token/refresh/', { refresh: `${refresh}` });
      // 새로운 토큰 저장
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;
      setCookie('accessToken', `${accessToken}`);
      setCookie('refreshToken', `${refreshToken}`);

      // accessApi.defaults.headers.Authorization = `Bearer ${accessToken}`;
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;

      // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
      return axios(originalRequest);
    }
    return Promise.reject(error);
  },
);

export { api, accessApi };
