import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import { useCallback, useEffect, useState } from 'react';
import { accessApi } from '../../api/api';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';
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
  landscape_image: string;
  portrait_image: string;
  save_count: number;
}

export default function Big(props: Themes) {
  const [isSelect, setSelect] = useState(false);
  const [user, setUser] = useState({ nickname: null, saved_recipes: [], saved_themes: [] });

  const fetchUser = useCallback(async () => {
    try {
      const response = await accessApi.get('/user');
      setUser(response.data.data[0]);
      response.data.data[0].saved_themes.map((themes: Themes) => {
        const id = themes.id;
        if (id == props.id) {
          setSelect(true);
        }
      });
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const HandleClick = async () => {
    const res = await accessApi.post(`/theme/${props.id}`);
    setSelect((prev) => !prev);
  };
  const router = useRouter();
  return (
    <div>
      <Container imgProps={props.portrait_image}>
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

const Container = styled.div<{ imgProps: string }>`
  width: 100%;
  aspect-ratio: 327 / 424;
  padding: 130px 22px 22px 22px;
  border-radius: 1rem;
  margin-bottom: 14px;
  background-image: linear-gradient(to top, #1c1c1c 1.09%, rgba(18, 18, 18, 0) 65.65%),
    url(${(props) => props.imgProps});
  background-size: cover;
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
