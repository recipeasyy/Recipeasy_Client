import { accessApi } from './api';

export const userAPI = {
  async getUser() {
    const res = await accessApi.get('/user');
    return res.data.data[0];
  },
};
