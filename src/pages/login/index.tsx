import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import COLOR from '../../constants/theme';
import { MainLogo, KakaoLogo } from '../../components/icons/LogoIcons';

const Login = () => {
  const router = useRouter();

  const handleClickLogin = (e: React.MouseEvent<HTMLElement>) => {
    if (
      process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID !== undefined &&
      process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI !== undefined
    )
      router.push(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code
    `);
  };

  return (
    <Container>
      <Title>
        <SubTitle>방구석 셰프를 위한 1분 레시피</SubTitle>
        <MainLogo color={COLOR.PRIMARY_ORANGE} />
      </Title>
      <Btn onClick={handleClickLogin}>
        <KakaoLogo />
        카카오 로그인
      </Btn>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  background: ${COLOR.PRIMARY_WHITE};
`;

const Title = styled.div`
  padding-bottom: 21rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SubTitle = styled.div`
  font-family: 'IBM Plex Sans KR';
  font-weight: bold;
  line-height: 145%;

  text-align: center;
  letter-spacing: -0.4px;

  color: ${COLOR.PRIMARY_ORANGE};
`;

const Btn = styled.div`
  width: 80%;
  padding: 1rem;
  margin-bottom: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-radius: 0.5rem;
  background: #fee500;
  cursor: pointer;
`;

export default Login;
