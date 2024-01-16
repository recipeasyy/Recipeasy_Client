import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import FONT from '../../../constants/fonts';
import COLOR from '../../../constants/theme';

import { ClockIcon } from '../../icons/BasicIcons';
import { SaladIcon } from '../../icons/FoodIcons';
import { Themes, Recipes } from '../../../interfaces/main';
import { UseSave } from '../../../hooks/useSave';
import { useImage } from '../../../hooks/useImage';

import { SkeletonSmall } from '../skeletons/card_skeleton';

export const ImgCardSmall = ({ recipe, route }: { recipe: Recipes; route: boolean }) => {
  const router = useRouter();
  const loaded = useImage(recipe.image);

  const ing: string[] = [];
  recipe.required_ingredients &&
    recipe.required_ingredients.map((i: { name: string }) => {
      if (ing.length < 3) ing.push(i.name);
    });

  return loaded ? (
    <Container>
      <SmallContainer
        onClick={() => {
          const themeId = recipe.theme;
          router.push(
            {
              pathname: `/videoPlayer/${recipe.id}/${themeId}`,
              query: { themeId },
            },
            `/videoPlayer/${recipe.id}/${themeId}`,
          );
        }}
        img={loaded}>
        <Content>
          <UseSave id={recipe.id} type={'Recipes'} />
        </Content>
      </SmallContainer>
      <Description>
        <Title css={FONT.BODY_2}>{recipe.title}</Title>
        <Text css={FONT.DETAIL_2}>
          <ClockIcon />
          {recipe.time_taken}
        </Text>
        {route ? (
          <Text css={FONT.DETAIL_2}>
            <IconFix>
              <SaladIcon />
            </IconFix>
            {ing.join(' • ')}
          </Text>
        ) : (
          <></>
        )}
      </Description>
    </Container>
  ) : (
    <SkeletonSmall />
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SmallContainer = styled.div<{ img: string }>`
  width: 100%;
  min-width: 150px;

  padding: calc(230 / 158 * 100%) 12px 12px 0;
  border-radius: 1rem;
  background-image: linear-gradient(to top, rgba(36, 36, 36, 0.4) 0%, rgba(36, 36, 36, 0) 52.08%),
    url(${(props) => props.img});
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
