import axios, { AxiosRequestConfig } from 'axios';
import { getCookie, removeCookie, setCookie } from '../util/cookie';
import { accessApi } from './api';

const onLoginRefresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const refresh = getCookie('refreshToken');
  console.log(refresh);
  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (refresh) {
    // 토큰 갱신 서버통신
    const response = await accessApi.post('/token/refresh/', { refresh: `${refresh}` });

    const accessToken = response.data.access;
    const refreshToken = response.data.refresh;

    // accessToken 설정
    setCookie('accessToken', `${accessToken}`);

    // refreshToken 설정
    setCookie('refreshToken', `${refreshToken}`);
  }

  return config;
};

const refreshErrorHandle = (err: any) => {
  removeCookie('refreshToken');
};

export { onLoginRefresh, refreshErrorHandle };
