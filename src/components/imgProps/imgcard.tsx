import styled from '@emotion/styled';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

import { SaveIcon } from '../icons/GNBIcons';
import { ClockIcon } from '../icons/BasicIcons';

interface midImgCardProps {
  title: string;
  duration: number;
  recipe_count: number;
  handleToggleSave: any;
  handleClickDetail: any;
  selected: boolean;
}

export const ImgCardMedium = (props: midImgCardProps) => {
  return (
    <div>
      <MediumContainer onClick={props.handleClickDetail}>
        <Content>
          <Title css={FONT.FOODTITLE}>{props.title}</Title>
          <SubTitle css={FONT.DETAIL_2}>
            {props.duration}일 식단 ∙ {props.recipe_count}개의 레시피
            <IconWrapper onClick={props.handleToggleSave}>
              <SaveIcon selected={props.selected} />
            </IconWrapper>
          </SubTitle>
        </Content>
      </MediumContainer>
    </div>
  );
};

interface smImgCardProps {
  title: string;
  time_taken: number;
  required_ingredients: number;
  handleToggleSave: any;
  handleClickDetail: any;
  selected: boolean;
}

export const ImgCardSmall = (props: smImgCardProps) => {
  return (
    <div>
      <SmallContainer onClick={props.handleClickDetail}>
        <Content>
          <IconWrapper onClick={props.handleToggleSave}>
            <SaveIcon selected={props.selected} />
          </IconWrapper>
        </Content>
      </SmallContainer>
      <Description>
        <Title css={FONT.BODY_2}>{props.title}</Title>
        <Text css={FONT.DETAIL_2}>
          <ClockIcon />
          {props.time_taken}
        </Text>
      </Description>
    </div>
  );
};

const SmallContainer = styled.div`
  width: 100%;
  aspect-ratio: 158 / 264;

  padding: 230px 12px 12px 124px;
  border-radius: 1rem;
  background: ${COLOR.PRIMARY_BLACK};
`;

const MediumContainer = styled.div`
  width: 100%;
  aspect-ratio: 327 / 230;

  padding: 130px 22px 22px 22px;
  border-radius: 1rem;
  background: ${COLOR.PRIMARY_BLACK};

  cursor: pointer;
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
  align-items: center;
  gap: 0.25rem;
`;
