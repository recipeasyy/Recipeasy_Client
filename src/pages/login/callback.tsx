import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { api, accessApi } from '../../api/api';
import { getCookie, setCookie, removeCookie } from '../../util/cookie';
import axios from 'axios';

const LoginCallback = () => {
  const router = useRouter();
  const { code, error } = router.query;

  const JWT_EXPIRY_TIME = 300 * 1000; // 만료 시간

  const onLoginSuccess = (response: any) => {
    console.log(response.data);

    const accessToken = response.data.access;
    const refreshToken = response.data.refresh;

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

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    return accessToken;
  };

  const [user, setUser] = useState({ nickname: null, saved_recipes: [], saved_themes: [] });

  const fetchUser = useCallback(async () => {
    try {
      const response = await accessApi.get('/user');
      console.log(response.data.data[0]);
      setUser(response.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      const response = await api.get(`/auth/kakao?code=${code} `);
      if (response) {
        onLoginSuccess(response);
        fetchUser();
        user.nickname
          ? router.push('/home').then(() => router.reload())
          : router.push('/login/nickname').then(() => router.reload());
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
