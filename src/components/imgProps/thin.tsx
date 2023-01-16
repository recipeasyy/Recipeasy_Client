import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
import { accessApi } from '../../api/api';
import FONT from '../../constants/fonts';
import { SmallSaveIcon } from '../icons/SmallSave';

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

  const HandleClick = async (id: number) => {
    const res = await accessApi.post(`/theme/${props.id}`);
    setSelect((prev) => !prev);
  };

  return (
    <>
      <Recipes>
        <ImgBox>
          <Icon
            onClick={() => {
              HandleClick(props.id);
            }}>
            <SmallSaveIcon selected={isSelect} />
          </Icon>
        </ImgBox>
        <RecipeTitle>{props.title}</RecipeTitle>
        <Time>{props.time_taken}</Time>
        {props.required_ingredients &&
          props?.required_ingredients.map((ing: string, i) => {
            return <Ingredients key={i}></Ingredients>;
          })}
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
`;

const Ingredients = styled.div`
  font-size: 10px;
`;
