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
  video: string;
  title: string;
  time_taken: string;
  save_count: number;
  required_ingredients: [];
  theme: number;
}
//Recipes누르면 해당 Recipes/id로 가는걸로 id필요할 것 같다!
export default function Thin(props: Recipes) {
  console.log(props.id);
  const [isSelect, setSelect] = useState(false);

  const [user, setUser] = useState({ nickname: null, saved_recipes: [], saved_themes: [] });

  const fetchUser = useCallback(async () => {
    try {
      const response = await accessApi.get('/user');
      console.log(response.data.data[0]);
      setUser(response.data.data[0]);
      console.log(props.id);
      console.log(user.saved_recipes);
      response.data.data[0].saved_recipes.map((recipes: any) => {
        console.log(recipes);
        const id = recipes.id;
        if (id == props.id) {
          setSelect((prev) => !prev);
          console.log(id == props.id);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  console.log(isSelect);
  const HandleClick = async () => {
    const res = await accessApi.post(`/mypages/recipes/${props.id}/`);
    console.log(res.data.data.is_saved);
    setSelect((prev) => !prev);
  };
  console.log(props);
  const router = useRouter();
  return (
    <>
      <Recipes>
        <ImgBox
          onClick={() => {
            router.push(`/recipe/${props.id}`);
          }}>
          <Icon
            onClick={() => {
              HandleClick();
            }}>
            <SmallSaveIcon selected={isSelect} />
          </Icon>
        </ImgBox>
        <RecipeTitle css={FONT.BODY_2}>{props.title}</RecipeTitle>
        <Time css={FONT.DETAIL_2}>
          <Timeicon />
          {props.time_taken}
        </Time>
        <Ingredients>
          <SaladIcon />
          {props.required_ingredients &&
            props?.required_ingredients.map((ing: string, i) => {
              return <Ingredients key={i} css={FONT.DETAIL_2}></Ingredients>;
            })}
        </Ingredients>
      </Recipes>
    </>
  );
}
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
const ImgBox = styled.div`
  margin-bottom: 4px;
  border: 1px solid black;
  width: 158px;
  height: 264px;
  margin-right: 12px;
  background-color: black;
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
  font-size: 10px;
  display: flex;
  flex-direction: row;
`;
