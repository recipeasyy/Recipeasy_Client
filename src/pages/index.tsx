import GNB from '../components/global/GNB';
import { accessApi, api } from '../api/api';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../util/cookie';
import router from 'next/router';

export default function Home() {
  const [user, setUser] = useState();

  const ReloadFunc = () => {
    //router.reload();
  };
  const fetchUserInfo = async () => {
    ReloadFunc();
    try {
      const cookie = getCookie('accessToken');
      console.log(cookie);
      const response = await api.get('/user', { headers: { Authorization: `Bearer ${getCookie('accessToken')}` } });
      console.log(response.data);
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <GNB />
    </>
  );
}
