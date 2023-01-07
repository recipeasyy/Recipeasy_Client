import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { api, accessApi } from '../../api/api';
import { getCookie, setCookie, removeCookie } from '../../util/cookie';

const LoginCallback = () => {
  const router = useRouter();
  const { code: code, error: error } = router.query;
  console.log(code);

  const JWT_EXPIRY_TIME = 300 * 1000; // 만료 시간

  const onLoginSuccess = (response: any) => {
    const accessToken = response.data.access;
    const refreshToken = response.data.refresh;

    // accessToken 설정
    setCookie('accessToken', `${accessToken}`, {
      path: '/',
      sameSite: true,
      // HttpOnly: true,
      // secure: true,
    });


    // refreshToken 설정
    setCookie('refreshToken', `${refreshToken}`, {
      path: '/',
      sameSite: true,
      // HttpOnly: true,
      // secure: true,
    });

    // accessToken 만료하기 1분 전에 로그인 연장)
    setTimeout(onLoginRefresh, JWT_EXPIRY_TIME - 60000);
  };

  const onLoginRefresh = async () => {
    const refresh = getCookie('refreshToken');
    console.log('refresh', `${refresh}`);

    // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
    if (refresh) {
      // 토큰 갱신 서버통신
      try {
        const response = await api.post('/token/refresh/', { refresh: refresh });
        console.log(response);
        if (response) {
          onLoginSuccess(response);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      const response = await api.get(`/auth/kakao?code=${code} `);

      if (response) {
        console.log(response.data);
        if (response) {
          onLoginSuccess(response);
        }
        router.push('/');
      } else {
        // router.push('/login/error');
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
