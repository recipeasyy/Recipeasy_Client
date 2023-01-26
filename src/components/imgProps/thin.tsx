import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { accessApi } from '../../api/api';
import FONT from '../../constants/fonts';
import { SaladIcon } from '../icons/FoodIcons';
import { SmallSaveIcon } from '../icons/SmallSave';
import { Time as Timeicon } from '../icons/ThemeIcons';
interface Recipes {
  id: number;
  video_id: string;
  title: string;
  time_taken: string;
  save_count: number;
  required_ingredients: [];
  theme: number;
  image: string;
}
interface Ingredients {
  name: string;
}
//Recipes누르면 해당 Recipes/id로 가는걸로 id필요할 것 같다!
export default function Thin(props: Recipes) {
  const [isSelect, setSelect] = useState(false);

  const [user, setUser] = useState({ nickname: null, saved_recipes: [], saved_themes: [] });

  const fetchUser = useCallback(async () => {
    try {
      const response = await accessApi.get('/user');
      setUser(response.data.data[0]);
      response.data.data[0].saved_recipes.map((recipes: any) => {
        const id = recipes.id;
        if (id == props.id) {
          setSelect((prev) => !prev);
        }
      });
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const HandleClick = async () => {
    const res = await accessApi.post(`/mypages/recipes/${props.id}/`);
    setSelect((prev) => !prev);
  };
  const router = useRouter();
  const len = props.required_ingredients.length;

  const onClick = (id: any, themeId: any) => {
    router.push(
      {
        pathname: `/videoPlayer/${id}`,
        query: {
          themeId,
        },
      },
      `/videoPlayer/${id}`,
    );
  };

  return (
    <>
      <Recipes>
        <ImgBox
          imgProps={props.image}
          onClick={() => {
            onClick(props.id, props.theme);
          }}>
          <Icon
            onClick={(e) => {
              e.stopPropagation();
              HandleClick();
            }}>
            <SmallSaveIcon selected={isSelect} />
          </Icon>
        </ImgBox>
        <RecipeTitle css={FONT.BODY_2}>{props.title}</RecipeTitle>
        <Time css={FONT.DETAIL_2}>
          <Small>
            <Timeicon />
          </Small>
          {props.time_taken}
        </Time>
        <Ingredients>
          <Small>
            <SaladIcon />
          </Small>
          {props.required_ingredients &&
            props?.required_ingredients.map((ing: Ingredients, i: number) => {
              if (i !== len - 1) {
                return (
                  <Ing key={i} css={FONT.DETAIL_2}>
                    {ing.name}·
                  </Ing>
                );
              } else {
                return (
                  <Ing key={i} css={FONT.DETAIL_2}>
                    {ing.name}
                  </Ing>
                );
              }
            })}
        </Ingredients>
      </Recipes>
    </>
  );
}
const Ing = styled.a`
  vertical-align: top;
`;
const Small = styled.div`
  padding-right: 4px;
  display: inline;
`;

const Icon = styled.div`
  padding-top: 218px;
  padding-bottom: 12px;
  padding-right: 12px;
  display: flex;
  float: right;
`;

const Recipes = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;
const ImgBox = styled.div<{ imgProps: string }>`
  margin-bottom: 4px;

  width: 158px;
  height: 264px;
  margin-right: 12px;
  background-image: linear-gradient(to top, #1c1c1c 1.09%, rgba(18, 18, 18, 0) 65.65%),
    url(${(props) => props.imgProps});
  background-size: cover;
  border-radius: 20px;
`;
const RecipeTitle = styled.div`
  margin-bottom: 4px;
`;
const Time = styled.div`
  margin-bottom: 4px;
  font-size: 10px;
  color: black;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

const Ingredients = styled.div`
  width: 100%;
  display: inline;
  justify-content: center;
  align-content: center;
`;
