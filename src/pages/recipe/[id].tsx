import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import styled from '@emotion/styled';

import { accessApi } from '../../api/api';

import { SaveIcon } from '../../components/icons/GNBIcons';
import { GoBackIcon } from '../../components/icons/BtnIcons';
import { ClockIcon, FilledStarIcon, EmptyStarIcon, NumberIcon } from '../../components/icons/BasicIcons';
import { FoodIcon } from '../../components/icons/FoodIcons';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

const Recipe = (id: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [recipe, setRecipe] = useState({
    id: 1,
    title: '간장계란밥',
    description: '설명설명',
    difficulty: 3,
    time_taken: '10분',
    save_count: 46,
    required_ingredients: [
      {
        name: '계란',
        quantity: '2개',
        substitute: '닭고기',
        emoji: '계란.png',
      },
      {
        name: '간장',
        quantity: '2스푼',
        substitute: 'none',
        emoji: '간장.png',
      },
    ],
    additional_ingredients: [
      {
        name: '대파',
        quantity: '적당히',
        substitute: '양파',
        emoji: '대파.png',
      },
    ],
    equipment: [
      {
        name: '칼',
      },
      {
        name: '프라이팬',
      },
    ],
    recipe_sequence: [
      {
        order: 1,
        short_desc: '계란을 뭐뭐한다',
        long_desc: '계란을 이렇게 해서 저렇게 한다.',
        image: 'https://sdflkj.com',
      },
      {
        order: 2,
        short_desc: '프라이팬에 뭐뭐한다',
        long_desc: '프라이팬이 이렇게해서 저렇게한다.',
        image: 'https://sdflkj.com',
      },
    ],
  });

  const fetchRecipe = useCallback(async () => {
    try {
      const response = await accessApi.get(`/recipes/${id.params}/`);
      console.log(response.data.data);
      setRecipe(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchRecipe();
  }, [fetchRecipe]);

  const stars = () => {
    let arr = [];
    for (let i = 0; i < recipe.difficulty; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <Container>
      <TopBar>
        <IconWrapper>
          <GoBackIcon onClick={() => router.back()} />
          <SaveIcon selected={true} />
        </IconWrapper>
        <Title css={FONT.FOODTITLE}>{recipe.title}</Title>
        <Subtitle css={FONT.BODY_2_3}>{recipe.description}</Subtitle>
        <Cards>
          <Card>
            <Text css={FONT.DETAIL_2}>난이도</Text>
            <Icons>
              {stars().map((idx) => (
                <FilledStarIcon key={idx} />
              ))}
              {[0, 1, 2, 3, 4]
                .filter((idx) => !stars().includes(idx))
                .map((idx) => (
                  <EmptyStarIcon key={idx} />
                ))}
            </Icons>
          </Card>
          <Card>
            <Text css={FONT.DETAIL_2}>소요시간</Text>
            <Icons>
              <ClockIcon />
              {recipe.time_taken}
            </Icons>
          </Card>
        </Cards>
      </TopBar>

      <Contents>
        <Content>
          <Ingredients>
            <Title css={FONT.SUBTITLE_1}>
              필수 재료{' '}
              <TagIcon css={FONT.DETAIL_2} onClick={() => router.push(`/calcDetail`)}>
                계량하는 법 보기
              </TagIcon>
            </Title>
            {recipe.required_ingredients.map((ingredient, i) => (
              <Ingredient key={i}>
                <FoodName>
                  <FoodIconWrapper>
                    <FoodIcon name={ingredient.name} />
                  </FoodIconWrapper>
                  <Text css={FONT.BUTTON}>{ingredient.name}</Text>
                </FoodName>
                <Text css={FONT.BODY_1}>{ingredient.quantity}</Text>
              </Ingredient>
            ))}
          </Ingredients>
          <Ingredients>
            <Title css={FONT.SUBTITLE_1}>추가 재료</Title>
            {recipe.additional_ingredients.map((ingredient, i) => (
              <Ingredient key={i}>
                <Text css={FONT.BUTTON}>{ingredient.name}</Text>
                <Text css={FONT.BODY_1}>{ingredient.quantity}</Text>
              </Ingredient>
            ))}
          </Ingredients>
          <Ingredients>
            <Title css={FONT.SUBTITLE_1}>필요 도구</Title>
            <Equipments>
              {recipe.equipment.map((ingredient, i) => (
                <Tag key={i} css={FONT.BODY_2_3}>
                  {ingredient.name}
                </Tag>
              ))}
            </Equipments>
          </Ingredients>
        </Content>
        <Content>
          <Sequences>
            <Title css={FONT.SUBTITLE_1}>레시피 요약</Title>
            {recipe.recipe_sequence.map((sequence) => (
              <Sequence key={sequence.order}>
                <NumberIcon num={sequence.order} />
                <Text css={FONT.BODY_1}>{sequence.short_desc}</Text>
              </Sequence>
            ))}
          </Sequences>
          <Sequences>
            <Title css={FONT.SUBTITLE_1}>레시피 더 자세히 보기</Title>
            {recipe.recipe_sequence.map((sequence) => (
              <SequenceWrapper key={sequence.order}>
                <Sequence>
                  <NumberIcon num={sequence.order} />
                  <Text css={FONT.BODY_1}>{sequence.short_desc}</Text>
                </Sequence>
                {/* <Img src={sequence.image} /> */}
                <Text css={FONT.BODY_1}>{sequence.long_desc}</Text>
              </SequenceWrapper>
            ))}
          </Sequences>
        </Content>
      </Contents>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params!.id;
  return {
    props: { params },
  };
};

const Container = styled.div`
  width: 100vw;
  max-width: 450px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${COLOR.BG_GRAY1_85};

  overflow: auto;
`;

const Contents = styled.div`
  width: 100%;
`;

const TopBar = styled.div`
  width: 100%;
  height: auto;
  max-width: 450px;

  padding: 0 1.5rem 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${COLOR.BG_GRAY1_85};
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const Subtitle = styled.div`
  padding-bottom: 1rem;
  color: ${COLOR.TYPEFACE_GRAY1};
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = styled.div`
  width: 100%;
  padding: 1rem;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background: ${COLOR.PRIMARY_WHITE};
`;

const FoodName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FoodIconWrapper = styled.div`
  padding: 5px;

  background: ${COLOR.BG_GRAY1};

  border-radius: 0.5rem;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Text = styled.div``;

const Content = styled.div`
  width: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${COLOR.PRIMARY_WHITE};
`;

const TagIcon = styled.div`
  padding: 6px 12px 4px 12px;

  color: ${COLOR.TYPEFACE_WHITE};
  background: ${COLOR.PRIMARY_ORANGE};

  border-radius: 8px;
`;

const Equipments = styled.div`
  display: flex;
  gap: 6px;
`;

const Tag = styled.div`
  padding: 4px 12px;
  color: ${COLOR.TYPEFACE_BLACK};
  background: ${COLOR.BG_GRAY1};
  border-radius: 8px;
`;

const Sequences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SequenceWrapper = styled.div`
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Sequence = styled.div`
  padding: 14px 13px;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 12px;

  background: ${COLOR.BG_GRAY1_85};
`;

const Img = styled.img``;

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Ingredient = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export default Recipe;
