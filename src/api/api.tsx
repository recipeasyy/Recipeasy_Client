import axios from 'axios';
import { getCookie } from '../util/cookie';

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

export { api, accessApi };
