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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [scrolly, setscrollY] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [navColor, setnavColor] = useState(true);

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
        <EasyTips navColor={navColor}></EasyTips>
      </Container>
    </>
  );
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
