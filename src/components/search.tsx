import styled from '@emotion/styled';
import { useEffect, useCallback } from 'react';

import FONT from '../constants/fonts';
import COLOR from '../constants/theme';

import { api, accessApi } from '../api/api';
import { PotatoIcon, EggIcon } from './icons/FoodIcons';

export const SearchNone = () => {
  return (
    <Content>
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

export const SearchItem = (props: { value: string }) => {
  const fetchSearch = useCallback(async () => {
    try {
      const response = await accessApi.get(`/recipes/search/?q=${props.value}/`);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [props.value]);

  useEffect(() => {
    fetchSearch();
  }, [fetchSearch]);

  return <Content></Content>;
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 6.75rem;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;
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
