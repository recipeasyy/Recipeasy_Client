import { useCallback, useEffect } from 'react';
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
import { useQuery } from 'react-query';
interface recipes {
  id: number;
  title: string;
  required_ingredients: required;
  description: string;
  save_count: number;
  additional_ingredients: additional;
  difficulty: number;
  equipment: equipment;
  recipe_sequence: sequence;
  time_taken: string;
  video_id: string;
}
interface equipment {
  name: string;
}

interface required {
  name: string;
  emoji: string;
  quantity: string;
  substitute: string;
}

interface additional {
  name: string;
  emoji: string;
  quantity: string;
  substitute: string;
}

interface sequence {
  image: string;
  long_desc: string;
  order: number;
  short_desc: string;
}

const Recipe = (id: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const fetchRecipe = useCallback(async () => {
    try {
      const response = await accessApi.get(`/recipes/${id.params}/`);
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchRecipe();
  }, [fetchRecipe]);
  const { data } = useQuery('Recipe', fetchRecipe);

  const curRecipe = data && data;
  console.log(data);
  const stars = () => {
    let arr = [];
    for (let i = 0; i < curRecipe?.difficulty; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <Container>
      <TopBar>
        <IconWrapper>
          <GoBackIcon onClick={() => router.back()} color={COLOR.TYPEFACE_BLACK} />
          <SaveIcon selected={true} />
        </IconWrapper>
        <Title css={FONT.FOODTITLE}>{curRecipe?.title}</Title>
        <Subtitle css={FONT.BODY_2_3}>{curRecipe?.description}</Subtitle>
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
              {curRecipe?.time_taken}
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
            {curRecipe?.required_ingredients.map((ingredient: required, i: number) => (
              <Ingredient key={i}>
                <FoodName>
                  <FoodIconWrapper>
                    <FoodIcon name={ingredient?.name} />
                  </FoodIconWrapper>
                  <Text css={FONT.BUTTON}>{ingredient?.name}</Text>
                </FoodName>
                <Text css={FONT.BODY_1}>{ingredient?.quantity}</Text>
              </Ingredient>
            ))}
          </Ingredients>
          <Ingredients>
            <Title css={FONT.SUBTITLE_1}>추가 재료</Title>
            {curRecipe?.additional_ingredients.map((ingredient: additional, i: number) => (
              <Ingredient key={i}>
                <Text css={FONT.BUTTON}>{ingredient?.name}</Text>
                <Text css={FONT.BODY_1}>{ingredient?.quantity}</Text>
              </Ingredient>
            ))}
          </Ingredients>
          <Ingredients>
            <Title css={FONT.SUBTITLE_1}>필요 도구</Title>
            <Equipments>
              {curRecipe?.equipment.map((ingredient: equipment, i: number) => (
                <Tag key={i} css={FONT.BODY_2_3}>
                  {ingredient?.name}
                </Tag>
              ))}
            </Equipments>
          </Ingredients>
        </Content>
        <Content>
          <Sequences>
            <Title css={FONT.SUBTITLE_1}>레시피 요약</Title>
            {curRecipe?.recipe_sequence.map((sequence: sequence) => (
              <Sequence key={sequence.order}>
                <NumberIcon num={sequence.order} />
                <Text css={FONT.BODY_1}>{sequence?.short_desc}</Text>
              </Sequence>
            ))}
          </Sequences>
          <Sequences>
            <Title css={FONT.SUBTITLE_1}>레시피 더 자세히 보기</Title>
            {curRecipe?.recipe_sequence.map((sequence: sequence) => (
              <SequenceWrapper key={sequence?.order}>
                <Sequence>
                  <NumberIcon num={sequence?.order} />
                  <Text css={FONT.BODY_1}>{sequence?.short_desc}</Text>
                </Sequence>
                {/* <Img src={sequence.image} /> */}
                <Text css={FONT.BODY_1}>{sequence?.long_desc}</Text>
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
