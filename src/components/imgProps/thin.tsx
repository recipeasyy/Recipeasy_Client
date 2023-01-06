import styled from '@emotion/styled';
import FONT from '../../constants/fonts';

export default function Thin() {
  return (
    <>
      <Recipes>
        <ImgBox></ImgBox>
        <RecipeTitle>Middle</RecipeTitle>
        <Time>small</Time>
        <Ingredients>small</Ingredients>
      </Recipes>
    </>
  );
}

const Recipes = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;
const ImgBox = styled.div`
  margin-bottom: 4px;
  border: 1px solid black;
  width: 158px;
  height: 290px;
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
