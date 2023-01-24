import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { RoundSave, ShowMore, GoForward } from '../../components/icons/BtnIcons';
import GoBack from '../../components/navigations/goBack';
import PATH from '../../constants/path';
import COLOR from '../../constants/theme';
import FONT from '../../constants/fonts';
import { accessApi } from '../../api/api';
import { useQuery } from 'react-query';

export default function VideoPlayer() {
  const [hasWindow, setHasWindow] = useState(false);
  const { push } = useRouter();
  const [isSelect, setSelect] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({ nickname: null, saved_recipes: [], saved_themes: [] });

  const getVideos = async () => {
    const res = await accessApi.get(`/theme/${router.query.id}`);
    console.log(router.query.id);
    console.log(res);
    return res.data;
  };
  interface recipe {
    id: number;
    title: string;
    required_ingredients: [];
    save_count: number;
    theme: 1;
    time_taken: string;
    image: string;
    video_id: string;
  }
  const { data } = useQuery('Videos', getVideos);
  console.log(data);
  const theme = data && data.theme;
  console.log(theme);
  const recipe = theme && theme.recipes;
  console.log(recipe);

  const curRecipe = recipe && recipe.find((a: recipe) => `${a.id}` === `${router.query.id}`);
  console.log(curRecipe && curRecipe.id);
  console.log(router.query.id);

  const fetchUser = useCallback(async () => {
    try {
      const response = await accessApi.get('/user');
      console.log(response.data.data[0]);
      setUser(response.data.data[0]);
      console.log(user.saved_recipes);
      response.data.data[0].saved_recipes.map((recipes: any) => {
        console.log(recipes);
        const id = recipes.id;
        if (id == router.query.id) {
          setSelect((prev) => !prev);
          console.log(id == router.query.id);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      setHasWindow(true);
    }
    fetchUser();
  }, [fetchUser]);

  const HandleClick = async () => {
    const res = await accessApi.post(`/mypages/recipes/${curRecipe && curRecipe.id}/`);
    console.log(res.data.data.is_saved);
    setSelect((prev) => !prev);
  };

  return (
    <Container>
      <GoBack color={COLOR.PRIMARY_WHITE} />
      <TopInfo>
        <Title css={FONT.FOODTITLE}>{curRecipe && curRecipe.title}</Title>
        <ThemeBtn
          css={FONT.BODY_2_3}
          onClick={() => {
            push(PATH.HOME);
          }}>
          {theme && theme.title}
          <GoForward />
        </ThemeBtn>
      </TopInfo>

      <Vid>
        {hasWindow && (
          <iframe
            src={`https://geo.dailymotion.com/player/xbi7j.html?video=${curRecipe && curRecipe.video_id}`}
            allow="autoplay;"
            width="100%"
            height="720px"
            allowFullScreen></iframe>
        )}
      </Vid>

      <Icons>
        <Text
          onClick={() => {
            push(`/recipe/${router.query.id}`);
          }}>
          <ShowMore></ShowMore>
        </Text>
        <Text
          onClick={() => {
            HandleClick();
          }}>
          <RoundSave selected={isSelect} />
        </Text>
      </Icons>
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Container = styled.div`
  position: absolute;
  top: 0;

  width: 100vw;
  max-width: 450px;
  height: 100vh;
  background: #0b0b0b;

  overflow: hidden;
`;

const TopInfo = styled.div`
  position: fixed;
  top: 0;

  width: 100vw;
  max-width: 450px;

  padding: 100px 24px 48px 24px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: ${COLOR.TYPEFACE_WHITE};
  background: linear-gradient(180deg, #161616 0%, rgba(18, 18, 18, 0) 100%);

  z-index: 1;
`;

const Title = styled.div``;

const ThemeBtn = styled.div`
  width: fit-content;

  padding: 8px 12px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  color: ${COLOR.TYPEFACE_BLACK};
  background: ${COLOR.PRIMARY_WHITE};
`;

const Vid = styled.div`
  position: absolute;
  bottom: 12vh;
  width: 100%;
  height: 720px;

  border-radius: 10px;

  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Icons = styled.div`
  width: 100vw;
  max-width: 450px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  flex-wrap: wrap;
  position: fixed;
  bottom: 4vh;
`;

const Text = styled.div``;
