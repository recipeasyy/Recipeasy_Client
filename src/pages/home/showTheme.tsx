import AllTheme from '../../components/navigations/All_Theme';
import styled from '@emotion/styled';
import GNB from '../../components/global/GNB';
import { useQuery } from 'react-query';
import { accessApi } from '../../api/api';
import FONT from '../../constants/fonts';
import Big from '../../components/img_props/big';
import COLOR from '../../constants/theme';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

interface BigThemes {
  id: number;
  title: string;
  themes: [];
}
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

const themeData = [
  { id: '5', name: '초간단 식단', title1: '방구석 셰프를 위한', title2: '초간단 레시피!' },
  { id: '4', name: '같은 재료', title1: '재료 걱정은 그만!', title2: '한 재료로 만든 N가지 레시피' },
];

export default function ShowTheme(current: string) {
  const getThemes = async () => {
    const res = await accessApi.get(`/theme/`);
    return res.data;
  };

  useEffect(() => {
    if (curState == '초간단 식단') {
      setTitle1(`${themeData[0].title1}`);
      setTitle2(`${themeData[0].title2}`);
    } else {
      setTitle1(`${themeData[1].title1}`);
      setTitle2(`${themeData[1].title2}`);
    }
  }, []);

  const [curState, setCur] = useState('초간단 식단');
  const { data, error, isLoading } = useQuery('Themes', getThemes);
  const [title1, setTitle1] = useState('방구석 셰프를 위한');
  const [title2, setTitle2] = useState('초간단 레시피!');

  const changeText = (e: any) => {
    if (e.target.value == '초간단 식단') {
      setTitle1(`${themeData[0].title1}`);
      setTitle2(`${themeData[0].title2}`);
    } else {
      setTitle1(`${themeData[1].title1}`);
      setTitle2(`${themeData[1].title2}`);
    }
  };

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading....</div>;

  const ChangeState = (e: any) => {
    setCur(e.target.value);
    changeText(e);
  };

  const curThemes = data['Theme Types'].filter((themes: Themes) => themes.title === curState);

  return (
    <>
      <AllTheme />

      <Container>
        <Text css={FONT.HEADING}>
          {title1}
          <br />
          {title2}
        </Text>
        <ThemeWrapper>
          {themeData.map((theme) => {
            return (
              <Wrap key={theme.id}>
                <Category
                  key={theme.id}
                  value={theme.name}
                  css={FONT.DETAIL_2}
                  onClick={ChangeState}
                  current={curState}>
                  {theme.name}
                </Category>
              </Wrap>
            );
          })}
        </ThemeWrapper>
        {data &&
          curThemes.map((themeTypes: BigThemes) => {
            return (
              <div key={themeTypes.id}>
                {themeTypes.themes.map((theme: Themes) => {
                  return <Big key={theme.id} {...theme}></Big>;
                })}
              </div>
            );
          })}
      </Container>
      <GNB></GNB>
    </>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Category = styled.button<{ current: string }>`
  border-radius: 10px;
  width: 106px;
  height: 36px;
  justify-items: center;
  align-items: center;
  ${(props) =>
    props.value === props.current
      ? css`
          background-color: ${COLOR.PRIMARY_ORANGE};
          color: ${COLOR.PRIMARY_WHITE_85};
        `
      : css`
          background-color: ${COLOR.PRIMARY_GRAY2};
          color: ${COLOR.PRIMARY_GRAY1};
        `};

  margin-right: 16px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 6.75rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ThemeWrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  width: 100%;
`;
