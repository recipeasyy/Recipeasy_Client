import styled from '@emotion/styled';
import { useEffect, useCallback, useState } from 'react';

import FONT from '../constants/fonts';
import COLOR from '../constants/theme';

import { api, accessApi } from '../api/api';
import { PotatoIcon, EggIcon } from './icons/FoodIcons';
import { ImgCardMedium, ImgCardSmall } from './imgProps/imgcard';

export const SearchNone = () => {
  return (
    <Content type={''}>
      <TagBox>
        <Title css={FONT.BODY_2}>재료 추천 검색어</Title>
        <Tags css={FONT.BODY_1}>
          <Tag>
            계란 <EggIcon />
          </Tag>
          <Tag>
            감자 <PotatoIcon />
          </Tag>
        </Tags>
      </TagBox>
      <TagBox>
        <Title css={FONT.BODY_2}>테마 추천 검색어</Title>
        <Tags css={FONT.BODY_1}>
          <Tag>자취생 식단</Tag>
          <Tag>같은 재료</Tag>
        </Tags>
      </TagBox>
    </Content>
  );
};

export const SearchItem = (props: { value: string; nav: string }) => {
  const [recipes, setRecipes] = useState<any>([]);
  const fetchSearch = useCallback(async () => {
    try {
      const response =
        props.nav == '개별'
          ? await accessApi.get(`/recipes/search/?q=${props.value}`)
          : await accessApi.get(`/recipes/search/?q=${props.value}`);
      console.log(response.data);
      setRecipes(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [props.value]);

  useEffect(() => {
    fetchSearch();
  }, [fetchSearch]);

  return recipes ? (
    <Content type={props.nav}>
      {recipes.map((recipe: any) =>
        props.nav == '개별' ? (
          <ImgCardSmall key={recipe.id} {...recipe} />
        ) : (
          <ImgCardMedium key={recipe.id} {...recipe} />
        ),
      )}
    </Content>
  ) : (
    <></>
  );
};

const Content = styled.div<{ type: string }>`
  width: 100%;
  height: 100%;

  ${(props) =>
    props.type == '개별'
      ? `display: grid; 
      grid-template-columns: 1fr 1fr;
      row-gap: 1.75rem;
      column-gap: 0.75rem;`
      : `  display: flex;
  flex-direction: column;
  gap: 1rem;`};
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
`;
