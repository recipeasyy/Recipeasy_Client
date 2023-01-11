import styled from '@emotion/styled';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

import { SaveIcon } from '../icons/GNBIcons';

interface imgCardProps {
  title: string;
  duration_num: number;
  recipe_num: number;
  onClick: any;
  selected: boolean;
}

export const ImgCardMedium = (props: imgCardProps) => {
  return (
    <div>
      <Container>
        <Content>
          <Title css={FONT.FOODTITLE}>{props.title}</Title>
          <SubTitle css={FONT.DETAIL_2}>
            {props.duration_num}일 식단 ∙ {props.recipe_num}개의 레시피
            <IconWrapper onClick={props.onClick}>
              <SaveIcon selected={props.selected} />
            </IconWrapper>
          </SubTitle>
        </Content>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  aspect-ratio: 327 / 230;

  padding: 130px 22px 22px 22px;
  border-radius: 1rem;
  background: ${COLOR.PRIMARY_BLACK};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;
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

const IconWrapper = styled.div``;
