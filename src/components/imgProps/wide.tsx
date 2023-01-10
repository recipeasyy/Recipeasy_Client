import styled from '@emotion/styled';
import { useState } from 'react';
import FONT from '../../constants/fonts';
import { SmallSaveIcon } from '../icons/SmallSave';

export default function Wide() {
  const [isSelect, setSelect] = useState(false);
  return (
    <>
      <ImgBox>
        <HeadText css={FONT.HEADING}>
          <Head>계란으로 3일 버티기</Head>
        </HeadText>
        <Detail>
          <SmallText>
            {'Themes.duration'}일식단{'Themes.recipe_count'}개의레시피
          </SmallText>
          <Icon
            onClick={() => {
              setSelect((prev) => !prev);
            }}>
            <SmallSaveIcon selected={isSelect} />
          </Icon>
        </Detail>
      </ImgBox>
    </>
  );
}
const Head = styled.a`
  text-align: left;
  bottom: 0px;
  vertical-align: bottom;
  position: relative;
`;
const ImgBox = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  width: 100%;
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
  margin-top: 130px;
  color: white;
  text-align: left;
  bottom: 0px;
  position: relative;
  vertical-align: bottom;
`;
const Detail = styled.div`
  padding-left: 22px;
  display: flex;
  flex-direction: row;
  font-size: 8px;
  padding-top: 15px;
  color: white;
  justify-content: space-between;
  vertical-align: bottom;
`;
const SmallText = styled.div`
  //margin-right: 150px;
  padding-bottom: 22px;
  width: 100%;
`;
const Icon = styled.div`
  padding-right: 22px;
`;
