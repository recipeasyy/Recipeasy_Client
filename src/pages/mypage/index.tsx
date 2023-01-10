import styled from '@emotion/styled';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import { accessApi } from '../../api/api';
import GNB from '../../components/global/GNB';
import TopNavBar from '../../components/navigations/navigation_top';
import { SettingIcon } from '../../components/icons/BtnIcons';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

const MyPage = () => {
  const [user, setUser] = useState({ nickname: null, saved_recipes: [], saved_themes: [] });

  const fetchUser = useCallback(async () => {
    try {
      const response = await accessApi.get('/user');
      console.log(response.data.data[0]);
      setUser(response.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const router = useRouter();

  return (
    <>
      <TopNavBar>
        <IconWrapper>
          <SettingIcon onClick={() => router.push('/mypage/setting')} />
        </IconWrapper>
      </TopNavBar>
      <Content>
        <Title css={FONT.HEADING}>{user.nickname}님</Title>
        <SortNavBar>
          <SortTitle css={FONT.SUBTITLE_2}>개별레시피</SortTitle>
          <SortTitle css={FONT.SUBTITLE_2}>테마레시피</SortTitle>
        </SortNavBar>
        <TagIcon>2개의 테마레시피</TagIcon>
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
  height: 100%;
  padding-top: 6.75rem;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const Title = styled.div`
  color: ${COLOR.BLACK};
`;

const SortNavBar = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 22px;
`;

const SortTitle = styled.div``;

const TagIcon = styled.div`
  background: ${COLOR.MAIN};
`;

export default MyPage;
