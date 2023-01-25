import { AxiosError } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { accessApi } from '../api/api';
import { queryKeys } from '../types/commonType';

const toggleRecipeSave = async ({ id }: { id: number }): Promise<any> => {
  console.log(id);
  const { data } = await accessApi.post(`/mypages/recipes/${id}/`);
  return data.data.is_saved;
};

const toggleThemeSave = async ({ id }: { id: number }): Promise<any> => {
  const { data } = await accessApi.post(`/theme/${id}`);
  return data.Message;
};

// const { mutate, isLoading, isError, error, isSuccess } = useMutation();

export function useRecipeSaveMutation(): UseMutationResult<any, AxiosError, any> {
  const queryClient = useQueryClient();
  return useMutation(toggleRecipeSave, {
    onSuccess: (data) => {
      console.log(data); // mutation 이 성공하면 response를 받을 수 있다.
      queryClient.invalidateQueries(queryKeys.recipe);
    },
    onError: (error) => {
      // mutation 이 에러가 났을 경우 error를 받을 수 있다.
      console.error(error);
    },
  });
}

export function useThemeSaveMutation(): UseMutationResult<any, AxiosError, any> {
  const queryClient = useQueryClient();
  return useMutation(toggleThemeSave, {
    onSuccess: (data) => {
      console.log(data); // mutation 이 성공하면 response를 받을 수 있다.
      queryClient.invalidateQueries(queryKeys.theme);
    },
    onError: (error) => {
      // mutation 이 에러가 났을 경우 error를 받을 수 있다.
      console.error(error);
    },
  });
}
