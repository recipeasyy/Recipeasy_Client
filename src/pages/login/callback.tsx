import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { api, accessApi } from '../../api/api';
import { setCookie } from '../../util/cookie';

const LoginCallback = () => {
  const router = useRouter();
  const { code, error } = router.query;

  const onLoginSuccess = (response: any) => {
    console.log(response.data);

    const accessToken = response.data.access;
    const refreshToken = response.data.refresh;
    console.log(accessToken);
    console.log(refreshToken);
    // accessToken 설정
    setCookie('accessToken', `${accessToken}`, {
      path: '/',
      sameSite: true,
      // httpOnly: true,
      // secure: true,
    });

    // refreshToken 설정
    setCookie('refreshToken', `${refreshToken}`, {
      path: '/',
      sameSite: true,
      // httpOnly: true,
      // secure: true,
    });

    accessApi.defaults.headers.Authorization = `Bearer ${accessToken}`;

    console.log(response.data.has_nickname);
    response.data.has_nickname
      ? router.push('/home').then(() => router.reload())
      : router.push('/login/nickname').then(() => router.reload());
    return accessToken;
  };

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      const response = await api.get(`/auth/kakao?code=${code} `);
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
