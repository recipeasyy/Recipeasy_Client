import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { accessApi } from '../../api/api';

import TopNavBar from '../../components/navigations/navigation_top';
import { SaveIcon } from '../../components/icons/GNBIcons';
import { GoBackIcon } from '../../components/icons/BtnIcons';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

const Recipe = () => {
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
      const response = await accessApi.get(`/recipes/${router.query.id}/`);
      console.log(response.data.data);
      setRecipe(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchRecipe();
  }, [fetchRecipe]);

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
            🌟🌟🌟🌟🌟
          </Card>
          <Card>
            <Text css={FONT.DETAIL_2}>소요시간</Text>
            {recipe.time_taken}
          </Card>
        </Cards>
      </TopBar>

      <Contents>
        <Content>
          <Ingredients>
            <Title css={FONT.SUBTITLE_1}>
              필수 재료 <TagIcon css={FONT.DETAIL_2}>계량하는 법 보기</TagIcon>
            </Title>
            {recipe.required_ingredients.map((ingredient, i) => (
              <Ingredient key={i}>
                <Text css={FONT.BUTTON}>{ingredient.name}</Text>
                <Text css={FONT.BODY_1}>{ingredient.quantity}</Text>
              </Ingredient>
            ))}
          </Ingredients>
          <br />
          <Ingredients>
            <Title css={FONT.SUBTITLE_1}>추가 재료</Title>
            {recipe.additional_ingredients.map((ingredient, i) => (
              <Ingredient key={i}>
                <Text css={FONT.BUTTON}>{ingredient.name}</Text>
                <Text css={FONT.BODY_1}>{ingredient.quantity}</Text>
              </Ingredient>
            ))}
          </Ingredients>
          <br />
          <Ingredients>
            <Title css={FONT.SUBTITLE_1}>필요 도구</Title>
            {recipe.equipment.map((ingredient, i) => (
              <Ingredient key={i}>
                <Text css={FONT.BUTTON}>{ingredient.name}</Text>
              </Ingredient>
            ))}
          </Ingredients>
        </Content>
        <Content>
          <Title css={FONT.SUBTITLE_1}>레시피 요약</Title>
          <Ingredients>
            {recipe.recipe_sequence.map((sequence) => (
              <Sequence key={sequence.order}>
                <Text css={FONT.BUTTON}>{sequence.order}</Text>
                <Text css={FONT.BODY_1}>{sequence.short_desc}</Text>
              </Sequence>
            ))}
          </Ingredients>
          <Title css={FONT.SUBTITLE_1}>레시피 더 자세히 보기</Title>
          <Ingredients>
            {recipe.recipe_sequence.map((sequence) => (
              <>
                <Sequence key={sequence.order}>
                  <Text css={FONT.BUTTON}>{sequence.order}</Text>
                  <Text css={FONT.BODY_1}>{sequence.short_desc}</Text>
                </Sequence>
                <Text>{sequence.long_desc}</Text>
              </>
            ))}
          </Ingredients>
        </Content>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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

const Text = styled.div``;

const Content = styled.div`
  width: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;
  background: ${COLOR.PRIMARY_WHITE};
`;

const TagIcon = styled.div`
  padding: 6px 12px 4px 12px;

  color: ${COLOR.TYPEFACE_WHITE};
  background: ${COLOR.PRIMARY_ORANGE};

  border-radius: 8px;
`;

const Sequence = styled.div`
  padding: 14px 13px;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 12px;

  background: ${COLOR.BG_GRAY1_85};
`;

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
