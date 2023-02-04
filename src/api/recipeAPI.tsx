import { accessApi } from './api';

export const recipeAPI = {
  async getRecipe(id: number) {
    const response = await accessApi.get(`/recipes/${id}/`);
    return response.data.data;
  },
};
