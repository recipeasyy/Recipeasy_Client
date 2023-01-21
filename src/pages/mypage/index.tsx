import styled from '@emotion/styled';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import { accessApi } from '../../api/api';
import GNB from '../../components/global/GNB';
import TopNavBar from '../../components/navigations/navigation_top';
import { SettingIcon } from '../../components/icons/BtnIcons';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';
import { ImgCardMedium, ImgCardSmall } from '../../components/imgProps/imgcard';

const MyPage = () => {
  const [user, setUser] = useState({ nickname: '레시피지', saved_recipes: [], saved_themes: [] });
  const [recipes, setRecipes] = useState([]);
  const [themes, setThemes] = useState([]);

  const fetchUser = useCallback(async () => {
    try {
      const response = await accessApi.get('/user');
      setUser(response.data.data[0]);
      setRecipes(response.data.data[0].saved_recipes);
      setThemes(response.data.data[0].saved_themes);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const router = useRouter();

  const [nav, setNav] = useState('개별');

  const handleToggleSave = async (e: any, id: number) => {
    e.stopPropagation();
    try {
      const response = await accessApi.post(`/mypages/recipes/${id}/`);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickDetail = (id: number) => {
    router.push(`/recipe/${id}`);
  };

  return (
    <>
      <TopNavBar>
        <IconWrapper>
          <SettingIcon onClick={() => router.push('/mypage/setting')} />
        </IconWrapper>
      </TopNavBar>
      <Content>
        <TopInfo>
          <Title css={FONT.HEADING}>{user.nickname ? user.nickname : '레시피지'}님</Title>
          <SortNavBar>
            <SortTitle
              css={FONT.SUBTITLE_2}
              onClick={() => {
                setNav('개별');
              }}
              isSeleted={nav === '개별'}>
              개별레시피
            </SortTitle>
            <SortTitle
              css={FONT.SUBTITLE_2}
              onClick={() => {
                setNav('테마');
              }}
              isSeleted={nav === '테마'}>
              테마레시피
            </SortTitle>
          </SortNavBar>
        </TopInfo>
        <TagIcon css={FONT.BODY_2_2}>
          {nav === '개별' ? user.saved_recipes.length : user.saved_themes.length}개의 {nav}레시피
        </TagIcon>
        <CardWrapper nav={nav}>
          {nav === '개별'
            ? recipes.map((recipe: any) => (
                <ImgCardSmall
                  key={recipe.id}
                  {...recipe}
                  handleToggleSave={(e: any) => handleToggleSave(e, recipe.id)}
                  handleClickDetail={() => handleClickDetail(recipe.id)}
                  selected={true}
                />
              ))
            : themes.map((theme: any) => (
                <ImgCardMedium
                  key={theme.id}
                  {...theme}
                  handleToggleSave={(e: any) => handleToggleSave(e, theme.id)}
                  handleClickDetail={() => handleClickDetail(theme.id)}
                  selected={true}
                />
              ))}
        </CardWrapper>
      </Content>
      <GNB />
    </>
  );
};

const IconWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 6.75rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  overflow: auto;
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`;

const Title = styled.div`
  color: ${COLOR.PRIMARY_BLACK};
`;

const SortNavBar = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 22px;
`;

const SortTitle = styled.div<{ isSeleted: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.isSeleted ? `${COLOR.PRIMARY_BLACK}` : `${COLOR.TYPEFACE_GRAY2}`)};
`;

const TagIcon = styled.div`
  width: 118px;
  height: 28px;
  padding: 4px 12px;

  color: ${COLOR.PRIMARY_ORANGE};
  background: ${COLOR.PRIMARY_ORANGE2};

  border-radius: 8px;
`;

const CardWrapper = styled.div<{ nav: string }>`
  ${(props) =>
    props.nav == '개별'
      ? `display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 24px;
      column-gap: 12px;
      `
      : `display: flex;
      flex-direction: column;
      gap: 1rem;`}
`;

export default MyPage;
