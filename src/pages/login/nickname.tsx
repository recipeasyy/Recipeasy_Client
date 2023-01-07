import { accessApi } from '../../api/api';
import { useEffect, useState } from 'react';

export default function Home() {
  return <>레시피지</>;
}

// const [user, setUser] = useState();

// const fetchUserInfo = async () => {
//   try {
//     const response = await accessApi.get('/user');
//     console.log(response.data);
//     setUser(response.data);
//     console.log(accessApi.defaults.headers.common['Authorization']);
//   } catch (err) {
//     console.log(err);
//   }
// };

// useEffect(() => {
//   fetchUserInfo();
// }, []);
