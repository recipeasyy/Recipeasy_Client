import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import { MouseEvent } from 'react';

import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

import { queryKeys } from '../../types/commonType';
import { accessApi } from '../../api/api';
import { SaveIcon } from '../icons/GNBIcons';
import { ClockIcon } from '../icons/BasicIcons';
import { SaladIcon } from '../icons/FoodIcons';
import { Themes, Recipes } from '../../interfaces/main';

const fetchUser = async () => {
  try {
    const response = await accessApi.get('/user');
    console.log('fetch user!');
    return response.data.data[0];
  } catch (err) {}
};

export const ImgCardMedium = (props: Themes) => {
  const router = useRouter();
  const [selected, setSelected] = useState(false);
  const query_user = useQuery(queryKeys.user, fetchUser, {
    onSuccess(data) {
      data.saved_themes.map((theme: Themes) => {
        if (theme.id == props.id) {
          setSelected(true);
        }
      });
    },
  });

  const handleToggleSave = async (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, id: number) => {
    e.stopPropagation();
    const res = await accessApi.post(`/theme/${id}`);
    setSelected((prev) => !prev);
  };

  return (
    <div>
      <MediumContainer
        onClick={() => {
          router.push(`/theme/${props.id}`);
        }}
        img={props.landscape_image}>
        <Content>
          <Title css={FONT.FOODTITLE}>{props.title}</Title>
          <SubTitle css={FONT.DETAIL_2}>
            {props.duration}일 식단 ∙ {props.recipe_count}개의 레시피
            <IconWrapper onClick={(e) => handleToggleSave(e, props.id)}>
              <SaveIcon selected={selected} />
            </IconWrapper>
          </SubTitle>
        </Content>
      </MediumContainer>
    </div>
  );
};

export const ImgCardSmall = (props: Recipes) => {
  const router = useRouter();
  const [selected, setSelected] = useState(false);

  const query_user = useQuery(queryKeys.user, fetchUser, {
    onSuccess(data) {
      data.saved_recipes.map((recipe: Recipes) => {
        if (recipe.id == props.id) {
          setSelected(true);
        }
      });
    },
  });

  const handleToggleSave = async (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, id: number) => {
    e.stopPropagation();
    const res = await accessApi.post(`/mypages/recipes/${id}/`);
    setSelected((prev) => !prev);
  };

  const ing: string[] = [];
  props.required_ingredients && props.required_ingredients.map((i: { name: string }) => ing.push(i.name));

  return (
    <div>
      <SmallContainer
        onClick={() => {
          const themeId = props.theme;
          router.push(
            {
              pathname: `/videoPlayer/${props.id}`,
              query: { themeId },
            },
            `/videoPlayer/${props.id}`,
          );
        }}
        img={props.image}>
        <Content>
          <IconWrapper onClick={(e) => handleToggleSave(e, props.id)}>
            <SaveIcon selected={selected} />
          </IconWrapper>
        </Content>
      </SmallContainer>
      <Description>
        <Title css={FONT.BODY_2}>{props.title}</Title>
        <Text css={FONT.DETAIL_2}>
          <ClockIcon />
          {props.time_taken}
        </Text>
        <Text css={FONT.DETAIL_2}>
          <IconFix>
            <SaladIcon />
          </IconFix>
          {ing.join(' • ')}
        </Text>
      </Description>
    </div>
  );
};

const SmallContainer = styled.div<{ img: string }>`
  width: 100%;
  aspect-ratio: 158 / 264;

  padding: 230px 12px 12px 124px;
  border-radius: 1rem;
  background-image: linear-gradient(to top, rgba(36, 36, 36, 0.4) 0%, rgba(36, 36, 36, 0) 52.08%),
    url(${(props) => props.img});
  background-size: cover;
`;

const MediumContainer = styled.div<{ img: string }>`
  width: 100%;
  aspect-ratio: 327 / 230;

  padding: 130px 22px 22px 22px;
  border-radius: 1rem;

  cursor: pointer;
  background-image: linear-gradient(to top, #1c1c1c 1.09%, rgba(18, 18, 18, 0) 65.65%), url(${(props) => props.img});
  background-size: cover;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  color: ${COLOR.PRIMARY_WHITE};
`;

const Title = styled.div`
  width: 100%;
`;

const SubTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  z-index: 1;
`;

const Description = styled.div`
  width: 100%;
  padding-top: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Text = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;

  word-wrap: break-word;
  word-break: keep-all;
`;

const IconFix = styled.div``;
