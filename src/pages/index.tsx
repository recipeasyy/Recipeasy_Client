import GNB from '../components/global/GNB';
import { accessApi } from '../api/api';
import { useEffect, useState } from 'react';
import { getCookie } from '../util/cookie';

export default function Home() {
  const [user, setUser] = useState();

  const fetchUserInfo = async () => {
    try {
      const response = await accessApi.get('/user');
      console.log(response.data);
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <GNB />
    </>
  );
}
