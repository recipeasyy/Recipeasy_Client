import axios from 'axios';
import { getCookie, removeCookie, setCookie } from '../util/cookie';
import mem from 'mem';
import { Router, useRouter } from 'next/router';


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

let retries = 0;

const getRefreshToken = mem(
  async (): Promise<string | void> => {
    try {
      const refresh = getCookie('refreshToken');
      const response = await api.post('/token/refresh/', { refresh: `${refresh}` });
      // 새로운 토큰 저장
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      setCookie('accessToken', accessToken);

      if (refreshToken !== null) {
        setCookie('refreshToken', refreshToken);
      }

      return accessToken;
    } catch (e) {
      console.log(e);
      removeCookie('accessToken');
      removeCookie('refreshToken');
    }
  },
  { maxAge: 31536000 },
);

accessApi.interceptors.response.use(
  (res) => res,
  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    if (status !== 401 || config.sent) {
      return Promise.reject(err);
    }

    config.sent = true;
    const accessToken = await getRefreshToken();

    if (accessToken) {
      accessApi.defaults.headers.Authorization = `Bearer ${accessToken}`;
      config.headers.Authorization = `Bearer ${accessToken}`;

      // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
      const originalResponse = await axios.request(config);

      return originalResponse;
    }

    return Promise.reject(err);
  },
);

/*
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
      retries = retries + 1;
      // retries 가 2 이상이면 Promise reject을 해준다.
      if (retries >= 2) {
        const router = useRouter();

        retries = 0;

        removeCookie('accessToken');
        removeCookie('refreshToken');

        router.push('/login');

        return Promise.reject(error);
      }

      const originalRequest = config;
      const refresh = getCookie('refreshToken');

      // token refresh 요청
      const response = await api.post('/token/refresh/', { refresh: `${refresh}` });
      // 새로운 토큰 저장
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;
      setCookie('accessToken', `${accessToken}`);
      setCookie('refreshToken', `${refreshToken}`);

      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      accessApi.defaults.headers.Authorization = `Bearer ${accessToken}`;

      // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
      return axios(originalRequest);
    }
    return Promise.reject(error);
  },
);
*/
export { api, accessApi };
