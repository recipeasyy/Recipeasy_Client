import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

import { ClockIcon } from '../icons/BasicIcons';
import { SaladIcon } from '../icons/FoodIcons';
import { Themes, Recipes } from '../../interfaces/main';
import { UseSave } from '../../hooks/useSave';

export const ImgCardMedium = (props: Themes) => {
  const router = useRouter();

  return (
    <Container>
      <MediumContainer
        onClick={() => {
          router.push(`/theme/${props.id}`);
        }}
        img={props.landscape_image}>
        <Content>
          <Title css={FONT.FOODTITLE}>{props.title}</Title>
          <SubTitle css={FONT.DETAIL_2}>
            {props.duration}일 식단 ∙ {props.recipe_count}개의 레시피
            <UseSave id={props.id} type={'Themes'} />
          </SubTitle>
        </Content>
      </MediumContainer>
    </Container>
  );
};

export const ImgCardSmall = (props: Recipes, { route }: { route: boolean }) => {
  const router = useRouter();

  const ing: string[] = [];
  props.required_ingredients && props.required_ingredients.map((i: { name: string }) => ing.push(i.name));

  return (
    <Container>
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
          <UseSave id={props.id} type={'Recipes'} />
        </Content>
      </SmallContainer>
      <Description>
        <Title css={FONT.BODY_2}>{props.title}</Title>
        <Text css={FONT.DETAIL_2}>
          <ClockIcon />
          {props.time_taken}
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
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallContainer = styled.div<{ img: string }>`
  width: 100%;
  height: 34vh;

  padding: 230px 12px 12px 124px;
  border-radius: 1rem;
  background-image: linear-gradient(to top, rgba(36, 36, 36, 0.4) 0%, rgba(36, 36, 36, 0) 52.08%),
    url(${(props) => props.img});
  background-size: cover;
`;

const MediumContainer = styled.div<{ img: string }>`
  width: 100%;
  height: 30vh;

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
