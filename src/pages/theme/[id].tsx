import Link from 'next/link';
import styed from '@emotion/styled';
import { useQuery } from 'react-query';
import { accessApi } from '../../api/api';
import { useRouter } from 'next/router';
import { ifError } from 'assert';
import styled from '@emotion/styled';
import GoBack from '../../components/navigations/goBack';
import Thin from '../../components/imgProps/thin';

export default function allTheme() {
  /*
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    query: { id },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useRouter();

  const getRecipes = async () => {
    const res = await accessApi.get(`/theme/${id}`);
    console.log(res);
    return res.data;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery('Recipes', getRecipes);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading....</div>;
  console.log(data);
  */
  return (
    <>
      <Container>
        <GoBack></GoBack>
        <Heading>theme.Title</Heading>
        <Description>theme.description</Description>
        <Emoticon>theme</Emoticon>
        <AllRecipes>
          <Thin></Thin>
        </AllRecipes>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 24px;
  padding-right: 24px;
`;

const AllRecipes = styled.div`
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  //overflow-y:scroll;
  display: flex;
  flex-direction: row;
  padding-bottom: 54px;
`;

const Heading = styled.div`
  margin-bottom: 8px;
  border: 1px solid black;
  color: black;
`;
const Description = styled.div`
  margin-bottom: 40px;
  border: 1px solid black;
  color: grey;
`;
const Emoticon = styled.div`
  border: 1px solid black;
  margin-bottom: 8px;
  color: black;
`;
