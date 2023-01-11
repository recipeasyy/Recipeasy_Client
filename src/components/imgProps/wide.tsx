import styled from '@emotion/styled';
import { useState } from 'react';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';
import { SmallSaveIcon } from '../icons/SmallSave';

export default function Wide() {
  const [isSelect, setSelect] = useState(false);
  return (
    <>
      <Container>
        <Content>
          <Title css={FONT.FOODTITLE}>{'title'}</Title>
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
    </>
  );
}
const Container = styled.div`
  //width: 100%;
  //aspect-ratio: 327 / 230;
  margin-bottom: 14px;
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

const Icon = styled.div`
  padding-right: 22px;
`;
