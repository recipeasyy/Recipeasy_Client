import Link from 'next/link';
import AllTheme from '../../components/top_navigations/All_Theme';
import styled from '@emotion/styled';
import GNB from '../../components/global/GNB';
import axios from 'axios';
import { useQuery } from 'react-query';

interface IThemes {
  id: string;
}

export default function showTheme() {
  const getThemes = async () => {
    const res = await axios.get(`https://recipeasy.link/theme/`, {
      headers: {
        'Content-type': `application/json`,
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyODMyNTAyLCJpYXQiOjE2NzI4MzIyMDIsImp0aSI6ImQzZjhhMDk0ZTgxNjRmYzc4NWE4OTNjMDFiZWZkNjhjIiwidXNlcl9pZCI6NH0.KyCtpCyXgpzwAUSI-u9iv8KqZ-BgmjFCEK5-amus__I'}`,
      },
    });
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
          <div>{data?.Themes.id}</div>
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
