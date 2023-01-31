import styled from '@emotion/styled';
import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { accessApi } from '../api/api';
import { SaveIcon } from '../components/icons/GNBIcons';
import { Recipes, Themes } from '../interfaces/main';
import { queryKeys } from '../types/commonType';
import { MouseEvent } from 'react';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query/build/lib/useMutation';

const fetchUser = async () => {
  try {
    const response = await accessApi.get('/user');
    console.log('fetch user!');
    return response.data.data[0];
  } catch (err) {}
};

export const UseSave = (props: any) => {
  const router = useRouter();
  const [selected, setSelected] = useState(false);
  console.log(props.type);
  if (props.type == 'Themes') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query_user = useQuery(queryKeys.user, fetchUser, {
      onSuccess(data) {
        console.log(data);
        console.log(props.id);
        data.saved_themes.map((theme: Themes) => {
          if (theme.id == props.id) {
            setSelected(true);
            console.log('work');
          }
        });
      },
    });
  } else if (props.type == 'Recipes') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query_user = useQuery(queryKeys.user, fetchUser, {
      onSuccess(data) {
        console.log(data.saved_recipes);
        data.saved_recipes.map((recipe: Recipes) => {
          if (recipe.id == props.id) {
            setSelected(true);
            console.log(selected);
            console.log('work');
          }
        });
      },
    });
  }
  //useMutation쓰면 할 수 있지않을까?
  const queryClient = useQueryClient();

  const handleToggleSave = async (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, id: number, type: string) => {
    e.stopPropagation();
    if (props.type == 'Themes') {
      const res = await accessApi.post(`/theme/${id}`);
      setSelected((prev) => !prev);
    } else {
      const res = await accessApi.post(`/mypages/recipes/${id}/`);
      setSelected((prev) => !prev);
    }
    queryClient.invalidateQueries(['Recipes', router.query.id]);
    queryClient.invalidateQueries(queryKeys.user);
  };

  return (
    <>
      <IconWrapper onClick={(e) => handleToggleSave(e, props.id, props.type)}>
        <SaveIcon selected={selected} />
      </IconWrapper>
    </>
  );
};

const IconWrapper = styled.div`
  z-index: 1;
`;
