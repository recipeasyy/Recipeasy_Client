import styled from '@emotion/styled';

import GNB from '../../components/global/GNB';
import { SettingIcon } from '../../components/icons/BtnIcons';
import GoBack from '../../components/navigations/goBack';

import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

const MyPage = () => {
  return (
    <>
      <GoBack />
      <Content>
        <Text css={FONT.BODY_1}>버전정보</Text>
        <Text css={FONT.BODY_1}>탈퇴하기</Text>
        <Text css={FONT.BODY_1}>닉네임 수정하기</Text>
      </Content>
    </>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 6.75rem;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const Text = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  align-items: center;
`;

export default MyPage;
