import styled from '@emotion/styled';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from 'react-query';

import { queryKeys } from '../../types/commonType';
import { accessApi } from '../../api/api';
import GNB from '../../components/global/GNB';
import TopNavBar from '../../components/navigations/navigation_top';
import { SettingIcon } from '../../components/icons/BtnIcons';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';
import { ImgCardMedium, ImgCardSmall } from '../../components/img_props/imgcard';

const MyPage = () => {
  const router = useRouter();
  const [nav, setNav] = useState('개별');

  const fetchUser = async () => {
    const res = await accessApi.get('/user');
    return res.data.data[0];
  };

  const { isLoading, error, data } = useQuery(queryKeys.user, fetchUser);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading....</div>;
  const user = data;

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
            ? user.saved_recipes.map((recipe: any) => <ImgCardSmall key={recipe.id} recipe={recipe} route={false} />)
            : user.saved_themes.map((theme: any) => <ImgCardMedium key={theme.id} {...theme} />)}
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
  padding: 3.75rem 0 6.75rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
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
  width: max-content;
  padding: 4px 12px;

  color: ${COLOR.PRIMARY_ORANGE};
  background: ${COLOR.PRIMARY_ORANGE2};

  border-radius: 8px;
`;

const CardWrapper = styled.div<{ nav: string }>`
  width: 100%;

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
