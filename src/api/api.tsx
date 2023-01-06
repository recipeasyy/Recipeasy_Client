import axios from 'axios';
import { getCookie } from '../util/cookie';

//axios인스턴스
const api = axios.create({
  baseURL: 'https://recipeasy.link/',
});

//axios인스턴스
const accessApi = axios.create({
  baseURL: 'https://recipeasy.link/',
  headers: { Authorization: `Bearer ${getCookie('accessToken')}` },
});

export { api, accessApi };
