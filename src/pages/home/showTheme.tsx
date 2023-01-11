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

interface IThemes {
  message: string;
}

const themeData = [
  { id: '1', name: '자취생 초간단' },
  { id: '2', name: '같은 재료' },
];

export default function showTheme(current: string) {
  const getThemes = async () => {
    const res = await accessApi.get(`/recipes/list/`);
    console.log(res);
    return res.data;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [curState, setCur] = useState('자취생 초간단');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery('Themes', getThemes);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading....</div>;

  const ChangeState = (e: any) => {
    setCur(e.target.value);
    console.log(e.target.value);
    console.log(curState);
  };
  return (
    <>
      <AllTheme />
      <Box>
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
        <Big></Big>
        <Big></Big>
      </Box>
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

const Box = styled.div`
  width: 100%;
  height: auto;
  padding: 0 0 6.75rem 0;
  display: flex;
  flex-direction: column;
  //gap: 1.75rem;

  overflow: auto;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 24px;
  padding-right: 24px;
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

const Padding = styled.div`
  height: 507px;
  width: 375px;
  overflow: hidden;
`;

const MainBox = styled.div`
  width: 375px;
  height: 729px;
  background-color: white;
  padding-left: 24px;
  padding-right: 24px;
`;
