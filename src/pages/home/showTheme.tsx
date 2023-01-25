import Link from 'next/link';
import AllTheme from '../../components/navigations/All_Theme';
import styled from '@emotion/styled';
import GNB from '../../components/global/GNB';
import axios from 'axios';
import { useQuery } from 'react-query';
import { accessApi } from '../../api/api';
import FONT from '../../constants/fonts';
import Big from '../../components/imgProps/big';
import COLOR from '../../constants/theme';
import { useState } from 'react';
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
  { id: '5', name: '초간단 식단' },
  { id: '4', name: '같은 재료' },
];

export default function showTheme(current: string) {
  const getThemes = async () => {
    const res = await accessApi.get(`/theme/`);
    console.log(res);
    return res.data;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [curState, setCur] = useState('초간단 식단');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery('Themes', getThemes);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading....</div>;

  const ChangeState = (e: any) => {
    setCur(e.target.value);
    console.log(e.target.value);
    console.log(curState);
  };

  console.log(data);

  const curThemes = data['Theme Types'].filter((themes: Themes) => themes.title === curState);
  console.log(curThemes);
  return (
    <>
      <AllTheme />

      <Container>
        <Text css={FONT.HEADING}>
          오늘의 레시피지
          <div></div>
          추천 테마는?
        </Text>
        <ThemeWrapper>
          {themeData.map((theme) => {
            return (
              <Category key={theme.id} value={theme.name} css={FONT.DETAIL_2} onClick={ChangeState} current={curState}>
                {theme.name}
              </Category>
            );
          })}
        </ThemeWrapper>
        {data &&
          curThemes.map((themeTypes: BigThemes) => {
            return (
              <div key={themeTypes.id}>
                {themeTypes.themes.map((theme: Themes) => {
                  console.log(theme);
                  console.log(theme.id);
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
