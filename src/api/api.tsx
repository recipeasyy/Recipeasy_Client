import axios from 'axios';
import { getCookie, removeCookie, setCookie } from '../util/cookie';
import mem from 'mem';

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
      setCookie('accessToken', `${accessToken}`, {
        path: '/',
        sameSite: true,
        // httpOnly: true,
        // secure: true,
      });

      if (refreshToken !== null) {
        setCookie('refreshToken', `${refreshToken}`, {
          path: '/',
          sameSite: true,
          // httpOnly: true,
          // secure: true,
        });
      }

      return accessToken;
    } catch (e) {
      removeCookie('accessToken');
      removeCookie('refreshToken');
    }
  },
  { maxAge: 31536000 },
);

accessApi.interceptors.response.use(
  (response) => {
    if (!(response.status === 200 || response.status === 201 || response.status === 204)) throw new Error();
    if (response.data.errors) throw new Error(response.data.errors);
    return response;
  },
  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    if (status !== 401 || config.sent) {
      return Promise.reject(err);
    }

    //config.sent = true;
    const accessToken = await getRefreshToken();

    const old = getCookie('accessToken');
    if (accessToken == old) {
      window.location.reload();
    }

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

export { api, accessApi };
