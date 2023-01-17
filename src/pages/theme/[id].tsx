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
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';
import { GoBackIcon } from '../../components/icons/BtnIcons';
import PATH from '../../constants/path';
import { ShowCount } from '../../components/icons/ShowCount';
import { Calender, Rice, Time } from '../../components/icons/ThemeIcons';

export default function allTheme(props: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const listenScrollEvent = (e: any) => {
      console.log(e.srcElement.scrollTop);
      console.log('e');

      console.log(document.documentElement.scrollTop);
      e.srcElement.scrollTop > 10 ? setnavColor(false) : setnavColor(true);
      e.srcElement.scrollTop > 10 ? setHead(true) : setHead(false);
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
  const [head, setHead] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push } = useRouter();
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
  const curTheme = data.theme;
  const curRecipes = curTheme.recipes;
  console.log(curTheme.title);

  return (
    <>
      <Container>
        <Top_Navigation>
          <Column>
            <GoBackIcon
              onClick={() => {
                push(PATH.HOME);
              }}
            />
            <HeadText css={FONT.BUTTON}>{head === true ? curTheme.title : null}</HeadText>
            <Save>
              <ShowCount></ShowCount>
              <Num>{curTheme.recipe_count}</Num>
            </Save>
          </Column>
        </Top_Navigation>

        {data && (
          <>
            <Heading>
              <Text1 css={FONT.DETAIL_2}>
                {data.title}
                <br />
              </Text1>
              <Text css={FONT.HEADING}>{curTheme.title}</Text>
            </Heading>
            <Description css={FONT.BODY_2_3}>{curTheme.description}</Description>
            <Emoticon>
              <Calender />
              <Small css={FONT.BODY_2_2}>{curTheme.recipe_count}일 식단</Small>
              <Rice />
              <Small css={FONT.BODY_2_2}>{curTheme.duration}개 레시피</Small>
            </Emoticon>
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
const Small = styled.div`
  padding-left: 8px;
  padding-right: 12px;
`;
const Save = styled.div`
  display: flex;
  flex-direction: column;
  width: 24;
  height: 43;
  position: fixed;
  right: 0;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
`;
const Num = styled.div``;
const HeadText = styled.div`
  //align-items: center;
  //align-content: center;
  //justify-content: center;
  margin-left: 58px;
  margin-top: 2px;
  //position: fixed;
  //bottom: 0;
  color: ${COLOR.TYPEFACE_BLACK};
`;

const Top_Navigation = styled.div`
  width: auto;
  height: 100px;
  transition: 'all 1s';
  position: sticky;
  top: 0px;
  display: flex;
  //display: flex;
  background: ${COLOR.PRIMARY_WHITE_85};
  z-index: 1;
  justify-content: space-between;
  align-content: center;
`;

const Column = styled.div`
  width: auto;
  display: flex;
  padding-bottom: 21px;
  padding-top: 55px;
  padding-right: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  position: fixed;
  //left: 0;
`;

const Text1 = styled.div`
  color: ${COLOR.TYPEFACE_GRAY2};
`;

const Text = styled.div`
  color: ${COLOR.TYPEFACE_BLACK};
`;
const EasyTips = styled.div<{ navColor: boolean }>`
  width: 100%;
  height: 800px;
  background-color: ${(props) => (props.navColor === false ? 'green' : 'black')};
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
  // border: 1px solid black;
  color: ${COLOR.TYPEFACE_BLACK};
`;
const Description = styled.div`
  margin-bottom: 40px;
  // border: 1px solid black;
  color: ${COLOR.TYPEFACE_GRAY1};
`;
const Emoticon = styled.div`
  margin-bottom: 8px;
  color: black;
  display: flex;
  flex-direction: row;
`;
