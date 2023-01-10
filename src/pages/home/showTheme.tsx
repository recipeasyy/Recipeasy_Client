import Link from 'next/link';
import AllTheme from '../../components/navigations/All_Theme';
import styled from '@emotion/styled';
import GNB from '../../components/global/GNB';
import axios from 'axios';
import { useQuery } from 'react-query';
import { accessApi } from '../../api/api';
import FONT from '../../constants/fonts';

interface IThemes {
  message: string;
}

export default function showTheme() {
  const getThemes = async () => {
    const res = await accessApi.get(`/recipes/list/`);
    console.log(res);
    return res.data;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery('Themes', getThemes);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading....</div>;

  return (
    <>
      <AllTheme />
      <Text css={FONT.HEADING}>
        오늘의 레시피지
        <div></div>
        추천테마는?
      </Text>
      <ThemeWrapper>
        <div>{data?.message}</div>
      </ThemeWrapper>

      <GNB></GNB>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 24px;
  padding-right: 24px;
`;
const ThemeWrapper = styled.div`
  padding: 1rem 0;
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
