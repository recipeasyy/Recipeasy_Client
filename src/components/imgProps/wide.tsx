import styled from '@emotion/styled';
import FONT from '../../constants/fonts';

export default function Wide() {
  return (
    <>
      <ImgBox>
        <HeadText>Themes.title</HeadText>
        <Detail>
          <SmallText>
            {'Themes.duration'}일식단{'Themes.recipe_count'}개의레시피
          </SmallText>
          <Icon>+</Icon>
        </Detail>
      </ImgBox>
      <a css={FONT.HEADING}>haha</a>
    </>
  );
}

const ImgBox = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  width: 327px;
  height: 230px;
  margin-bottom: 14px;
  background-color: black;
  display: flex;
  flex-direction: column;
`;
const HeadText = styled.div`
  padding-left: 22px;
  width: 216px;
  height: 54px;
  padding-top: 150px;
`;
const Detail = styled.div`
  padding-left: 22px;
  display: flex;
  flex-direction: row;
  font-size: 8px;
  padding-top: 22px;
  color: white;
`;
const SmallText = styled.div`
  margin-right: 150px;
  padding-bottom: 22px;
`;
const Icon = styled.div`
  padding-right: 22px;
`;
