import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import FONT from '../../../constants/fonts';
import COLOR from '../../../constants/theme';

import { Themes } from '../../../interfaces/main';
import { UseSave } from '../../../hooks/useSave';
import { useImage } from '../../../hooks/useImage';

import { SkeletonMedium } from '../skeletons/card_skeleton';

export const ImgCardMedium = (props: Themes) => {
  const router = useRouter();
  const loaded = useImage(props.landscape_image);

  return loaded ? (
    <Container>
      <MediumContainer
        onClick={() => {
          router.push(`/theme/${props.id}`);
        }}
        img={loaded}>
        <Content>
          <Title css={FONT.FOODTITLE}>{props.title}</Title>
          <SubTitle css={FONT.DETAIL_2}>
            {props.duration}일 식단 ∙ {props.recipe_count}개의 레시피
            <UseSave id={props.id} type={'Themes'} />
          </SubTitle>
        </Content>
      </MediumContainer>
    </Container>
  ) : (
    <SkeletonMedium />
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MediumContainer = styled.div<{ img: string }>`
  width: 100%;

  padding: calc(156 / 327 * 100%) 22px 22px 22px;
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
