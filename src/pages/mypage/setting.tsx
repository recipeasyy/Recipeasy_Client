import styled from '@emotion/styled';
import GoBack from '../../components/navigations/goBack';

import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

const MyPage = () => {
  return (
    <>
      <GoBack color={COLOR.TYPEFACE_BLACK} />
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
  padding-top: 55px;

  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  align-items: center;
  color: ${COLOR.TYPEFACE_BLACK};
`;

export default MyPage;
