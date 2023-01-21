import styled from '@emotion/styled';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import { accessApi } from '../../api/api';
import GNB from '../../components/global/GNB';
import TopNavBar from '../../components/navigations/navigation_top';
import { SettingIcon } from '../../components/icons/BtnIcons';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';
import { ImgCardMedium } from '../../components/imgProps/imgcard';

const MyPage = () => {
  const [user, setUser] = useState({ nickname: '레시피지', saved_recipes: [], saved_themes: [] });

  const fetchUser = useCallback(async () => {
    try {
      const response = await accessApi.get('/user');
      setUser(response.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const router = useRouter();

  const [nav, setNav] = useState('개별');

  const handleToggleSave = (e: any) => {};

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
        <CardWrapper>
          <TagIcon css={FONT.BODY_2_2}>
            {nav === '개별' ? user.saved_recipes.length : user.saved_themes.length}개의 {nav}레시피
          </TagIcon>
          {nav === '개별'
            ? user.saved_recipes.map((recipe) => (
                <ImgCardMedium
                  key={1}
                  title="레시피 이름"
                  duration_num={0}
                  recipe_num={0}
                  onClick={handleToggleSave}
                  selected={true}
                />
              ))
            : user.saved_themes.map((theme) => (
                <ImgCardMedium
                  key={2}
                  title="테마 이름"
                  duration_num={0}
                  recipe_num={0}
                  onClick={handleToggleSave}
                  selected={true}
                />
              ))}

          <ImgCardMedium title="테마 이름" duration_num={0} recipe_num={0} onClick={handleToggleSave} selected={true} />
          <ImgCardMedium title="테마 이름" duration_num={0} recipe_num={0} onClick={handleToggleSave} selected={true} />
          <ImgCardMedium title="테마 이름" duration_num={0} recipe_num={0} onClick={handleToggleSave} selected={true} />
          <ImgCardMedium title="테마 이름" duration_num={0} recipe_num={0} onClick={handleToggleSave} selected={true} />
          <ImgCardMedium title="테마 이름" duration_num={0} recipe_num={0} onClick={handleToggleSave} selected={true} />
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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default MyPage;
