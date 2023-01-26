import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { api, accessApi } from '../../api/api';
import { setCookie } from '../../util/cookie';
import { AxiosHeaders, AxiosResponse } from 'axios';

const LoginCallback = () => {
  const router = useRouter();
  const { code } = router.query;

  const onLoginSuccess = (response: AxiosResponse) => {
    const accessToken = response.data.access;
    const refreshToken = response.data.refresh;
    // accessToken 설정
    setCookie('accessToken', `${accessToken}`, {
      path: '/',
      sameSite: true,
    });

    // refreshToken 설정
    setCookie('refreshToken', `${refreshToken}`, {
      path: '/',
      sameSite: true,
    });

    accessApi.defaults.headers.Authorization = `Bearer ${accessToken}`;

    response.data.has_nickname
      ? router.push('/home').then(() => router.reload())
      : router.push('/login/nickname').then(() => router.reload());
  };

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      const response = await api.get(`/auth/kakao?code=${code}`, {
        params: { redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI },
      });

      if (response) {
        onLoginSuccess(response);
      } else {
        router.push('/login');
      }
    },
    [router],
  );

  useEffect(() => {
    if (code) {
      loginHandler(code);
    }
  }, [loginHandler, code, router]);

  return <div></div>;
};

export default LoginCallback;
