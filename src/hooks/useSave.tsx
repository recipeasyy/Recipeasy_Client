import styled from '@emotion/styled';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { accessApi } from '../api/api';
import { SaveIcon } from '../components/icons/GNBIcons';
import { Recipes, Themes } from '../interfaces/main';
import { queryKeys } from '../types/commonType';
import { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query/build/lib/useMutation';

import { userAPI } from '../api/userAPI';

export const UseSave = (props: any) => {
  const router = useRouter();
  const [selected, setSelected] = useState(false);

  if (props.type == 'Themes') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query_user = useQuery(queryKeys.user, () => userAPI.getUser(), {
      onSuccess(data) {
        data.saved_themes.map((theme: Themes) => {
          if (theme.id == props.id) {
            setSelected(true);
          }
        });
      },
    });
  } else if (props.type == 'Recipes') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query_user = useQuery(queryKeys.user, () => userAPI.getUser(), {
      onSuccess(data) {
        data.saved_recipes.map((recipe: Recipes) => {
          if (recipe.id == props.id) {
            setSelected(true);
          }
        });
      },
    });
  }
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
    queryClient.invalidateQueries(queryKeys.user);
    queryClient.invalidateQueries(['Recipes', router.query.id]);
  };

  return (
    <>
      <IconWrapper onClick={(e) => handleToggleSave(e, props.id, props.type)}>
        <SaveIcon selected={selected} />
      </IconWrapper>
    </>
  );
};

const IconWrapper = styled.div``;
