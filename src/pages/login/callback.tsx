import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '../../api/api';
import { setCookie } from '../../util/cookie';

const LoginCallback = () => {
  const router = useRouter();
  const { code: code, error: error } = router.query;
  console.log(code);
  const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

  const onSilentRefresh = () => {
    async (refresh: any) => {
      try {
        const response = await api.post('/token/refresh', { refresh: refresh });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
  };

  const onLoginSuccess = (response: any) => {
    const accessToken = response.data.access_token;

    // accessToken 설정
    setCookie('accessToken', `${accessToken}`);

    // accessToken 만료하기 1분 전에 로그인 연장
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
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
