import styled from '@emotion/styled';
import { useState } from 'react';
import FONT from '../../constants/fonts';
import { SmallSaveIcon } from '../icons/SmallSave';

export default function Thin() {
  const [isSelect, setSelect] = useState(false);
  return (
    <>
      <Recipes>
        <ImgBox>
          <Icon
            onClick={() => {
              setSelect((prev) => !prev);
            }}>
            <SmallSaveIcon selected={isSelect} />
          </Icon>
        </ImgBox>
        <RecipeTitle>Middle</RecipeTitle>
        <Time>small</Time>
        <Ingredients>small</Ingredients>
      </Recipes>
    </>
  );
}
const Icon = styled.div`
  padding-top: 170px;
  padding-bottom: 12px;
  padding-right: 12px;
  display: flex;
  position: relative;
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
