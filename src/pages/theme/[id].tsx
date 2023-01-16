import Link from 'next/link';
import styed from '@emotion/styled';
import { useQuery } from 'react-query';
import { accessApi } from '../../api/api';
import { useRouter } from 'next/router';
import { ifError } from 'assert';
import styled from '@emotion/styled';
import GoBack from '../../components/top_navigations/goBack';
import Thin from '../../components/imgProps/thin';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

export default function allTheme() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const listenScrollEvent = (e: any) => {
      console.log(e.srcElement.scrollTop);
      console.log('e');

      console.log(document.documentElement.scrollTop);
      e.srcElement.scrollTop > 10 ? setnavColor(false) : setnavColor(true);
      console.log(window.pageYOffset);
      console.log(document.body.scrollTop);
    };

    console.log(document.body);

    document.body.addEventListener('scroll', listenScrollEvent, { capture: true });
    return () => {
      if (typeof window !== 'undefined') {
        document.body.removeEventListener('scroll', listenScrollEvent);
        console.log('a');
      }
    };
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const getRecipes = async () => {
    console.log(router.query.id);
    const res = await accessApi.get(`/theme/${router.query.id}`);
    console.log(res);
    return res.data;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [navColor, setnavColor] = useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery('Recipes', getRecipes);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading....</div>;
  console.log(data);

  interface Themes {
    id: number;
    title: string;
    description: string;
    recipe_count: number;
    duration: number;
    tips: string;
    theme_type: number;
    recipes: [];
  }

  console.log(data.theme);
  console.log(data);
  const curTheme = data.theme;
  const curRecipes = curTheme.recipes;
  return (
    <>
      <Container>
        <GoBack></GoBack>
        {data && (
          <>
            <Heading>{curTheme.title}</Heading>
            <Description>{curTheme.description}</Description>
            <Emoticon>{curTheme.recipe_count}</Emoticon>
            <AllRecipes>
              {curRecipes.map((recipes: any) => {
                return <Thin key={recipes.id} {...recipes}></Thin>;
              })}
            </AllRecipes>
          </>
        )}
        <EasyTips navColor={navColor}></EasyTips>
      </Container>
    </>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const EasyTips = styled.div<{ navColor: boolean }>`
  width: 100%;
  height: 800px;
  background-color: ${(props) => (props.navColor === false ? 'green' : 'red')};
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AllRecipes = styled.div`
  overflow-y: scroll;
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
