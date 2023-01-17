import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { accessApi } from '../../api/api';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

import { SaveIcon } from '../icons/GNBIcons';
import { SmallSaveIcon } from '../icons/SmallSave';

interface Themes {
  id: number;
  title: string;
  description: string;
  recipe_count: number;
  duration: number;
  tips: string;
  theme_type: number;
  recipes: [];
  save_count: number;
}

export default function Big(props: Themes) {
  const [isSelect, setSelect] = useState(false);
  const HandleClick = async () => {
    const res = await accessApi.post(`/theme/${props.id}`);
    setSelect((prev) => !prev);
  };
  const router = useRouter();
  return (
    <div>
      <Container>
        <Content>
          <Title
            css={FONT.FOODTITLE}
            onClick={() => {
              router.push(`/theme/${props.id}`);
            }}>
            {props.title}
          </Title>
          <SubTitle css={FONT.DETAIL_2}>
            {props.duration}일 식단 ∙ {props.recipe_count}개의 레시피
            <Icon
              onClick={() => {
                HandleClick();
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
