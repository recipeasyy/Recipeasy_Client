import Link from 'next/link';
import AllTheme from '../../components/top_navigations/All_Theme';
import styled from '@emotion/styled';
import GNB from '../../components/global/GNB';
import axios from 'axios';
import { useQuery } from 'react-query';
import { accessApi } from '../../api/api';

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
      <Container>
        <AllTheme></AllTheme>
        <Text>
          오늘의 레시피지
          <div></div>
          추천테마는?
        </Text>
        <Padding>
          <div>{data?.message}</div>
        </Padding>
      </Container>
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

const Text = styled.div`
  color: black;
  font-size: 24px;
  white-space: pre;
  height: 70px;
  font-weight: bold;
  margin-bottom: 16px;
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
