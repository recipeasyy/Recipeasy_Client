import { accessApi } from './api';

export const themeAPI = {
  async getTheme(id: number) {
    const res = await accessApi.get(`/theme/${id}`);
    return res.data;
  },
  async getThemes() {
    const res = await accessApi.get('/theme/');
    return res.data;
  },
};
