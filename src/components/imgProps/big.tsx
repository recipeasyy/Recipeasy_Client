import styled from '@emotion/styled';
import { useState } from 'react';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

import { SaveIcon } from '../icons/GNBIcons';
import { SmallSaveIcon } from '../icons/SmallSave';

interface imgCardProps {
  title: string;
  duration_num: number;
  recipe_num: number;
  onClick: any;
  selected: boolean;
}

export default function Big() {
  const [isSelect, setSelect] = useState(false);
  return (
    <div>
      <Container>
        <Content>
          <Title css={FONT.FOODTITLE}>{'테마 이름'}</Title>
          <SubTitle css={FONT.DETAIL_2}>
            {0}일 식단 ∙ {0}개의 레시피
            <Icon
              onClick={() => {
                setSelect((prev) => !prev);
              }}>
              <SmallSaveIcon selected={isSelect} />
            </Icon>
          </SubTitle>
        </Content>
      </Container>
    </div>
  );
}
const Icon = styled.div`
  display: flex;
  float: right;
`;

const Container = styled.div`
  width: 100%;
  aspect-ratio: 327 / 424;
  height: 424px;
  padding: 130px 22px 22px 22px;
  border-radius: 1rem;
  background: ${COLOR.PRIMARY_BLACK};
  margin-bottom: 14px;
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
