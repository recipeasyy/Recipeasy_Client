import styled from '@emotion/styled';
import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useRecipeSaveMutation, useThemeSaveMutation } from '../hooks/useSaveMutation';
import { queryKeys } from '../types/commonType';

import FONT from '../constants/fonts';
import COLOR from '../constants/theme';

import { api, accessApi } from '../api/api';
import { PotatoIcon, EggIcon } from './icons/FoodIcons';
import { ImgCardMedium, ImgCardSmall } from './imgProps/imgcard';

export const SearchNone = () => {
  const router = useRouter();

  const handleClickSaveText = (e: any, type: string) => {
    const searchText = e.currentTarget.innerText;
    router.push({
      pathname: '/search/search',
      query: { text: searchText, type: type },
    });
  };

  return (
    <Content type={''}>
      <TagBox>
        <Title css={FONT.BODY_2}>재료 추천 검색어</Title>
        <Tags css={FONT.BODY_1}>
          <Tag onClick={(e) => handleClickSaveText(e, 'recipe')}>
            계란 <EggIcon />
          </Tag>
          <Tag onClick={(e) => handleClickSaveText(e, 'recipe')}>
            감자 <PotatoIcon />
          </Tag>
        </Tags>
      </TagBox>
      <TagBox>
        <Title css={FONT.BODY_2}>테마 추천 검색어</Title>
        <Tags css={FONT.BODY_1}>
          <Tag onClick={(e) => handleClickSaveText(e, 'theme')}>자취생 식단</Tag>
          <Tag onClick={(e) => handleClickSaveText(e, 'theme')}>같은 재료</Tag>
        </Tags>
      </TagBox>
    </Content>
  );
};

export const SearchItem = (props: { value: string; nav: string }) => {
  const router = useRouter();

  const [recipes, setRecipes] = useState<any>([]);
  const [saveRecipe, setSaveRecipe] = useState<any>([]);
  const [saveTheme, setSaveTheme] = useState<any>([]);

  const fetchSearch = useCallback(async () => {
    try {
      if (props.nav == 'recipe') {
        const response = await accessApi.get(`/recipes/search/?q=${props.value}`);
        setRecipes(response.data);
      } else {
        const response = await accessApi.get(`/theme/search/?q=${props.value}`);
        setRecipes(response.data);
      }
    } catch (err) {}
  }, [props.nav, props.value]);

  const fetchUser = useCallback(async () => {
    try {
      const response = await accessApi.get('/user');
      const user = response.data.data[0];
      user.saved_recipes.map((recipe: any) => setSaveRecipe([recipe.id, ...saveRecipe]));
      user.saved_themes.map((theme: any) => setSaveTheme([theme.id, ...saveTheme]));
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchSearch();
    fetchUser();
  }, [fetchSearch, fetchUser]);

  const { mutate: toggleRecipeSaveMutate } = useRecipeSaveMutation();
  const { mutate: toggleThemeSaveMutate } = useThemeSaveMutation();

  const handleToggleSave = useCallback(
    (e: any, type: string, id: number) => {
      e.stopPropagation();
      if (type == 'recipe') {
        toggleRecipeSaveMutate(
          { id },
          {
            onSuccess: (data) => {
              if (data) setSaveRecipe([id, ...saveRecipe]);
              else setSaveRecipe(saveRecipe.filter((item: number) => item !== id));
            },
          },
        );
      } else {
        toggleThemeSaveMutate(
          { id },
          {
            onSuccess: (data) => {
              if (data == 'Theme saved successfully') setSaveTheme([id, ...saveTheme]);
              else setSaveTheme(saveTheme.filter((item: number) => item !== id));
            },
          },
        );
      }
    },
    [toggleRecipeSaveMutate, toggleThemeSaveMutate, saveRecipe, saveTheme],
  );

  const handleClickDetail = (type: string, id: number) => {
    router.push(`/${type}/${id}`);
  };

  return recipes ? (
    <Content type={props.nav}>
      {recipes.map((recipe: any) =>
        props.nav == 'recipe' ? (
          <ImgCardSmall
            key={recipe.id}
            {...recipe}
            handleClickDetail={() => handleClickDetail(props.nav, recipe.id)}
            handleToggleSave={(e: any) => handleToggleSave(e, props.nav, recipe.id)}
            selected={saveRecipe.includes(recipe.id) ? true : false}
          />
        ) : (
          <ImgCardMedium
            key={recipe.id}
            {...recipe}
            handleClickDetail={() => handleClickDetail(props.nav, recipe.id)}
            handleToggleSave={(e: any) => handleToggleSave(e, props.nav, recipe.id)}
            selected={saveTheme.includes(recipe.id) ? true : false}
          />
        ),
      )}
    </Content>
  ) : (
    <></>
  );
};

const Content = styled.div<{ type: string }>`
  width: 100%;

  ${(props) =>
    props.type == 'recipe'
      ? `display: grid; 
      grid-template-columns: 1fr 1fr;
      row-gap: 1.75rem;
      column-gap: 0.75rem;`
      : `  display: flex;
  flex-direction: column;
  gap: 1rem;`};

  overscroll: auto;
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Title = styled.div``;

const Tags = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Tag = styled.div`
  padding: 6px 12px;

  display: flex;
  align-items: center;

  gap: 0.25rem;

  border-radius: 0.5rem;
  background: ${COLOR.BG_GRAY1};

  cursor: pointer;
`;
