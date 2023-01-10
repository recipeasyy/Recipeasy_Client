import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import COLOR from '../../constants/theme';

const Login = () => {
  const router = useRouter();

  const handleClickLogin = (e: any) => {
    router.push(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code
    `);
  };

  return (
    <Container>
      <SubTitle>방구석 셰프를 위한 1분 레시피</SubTitle>
      <MainTitle>Recipeasy!</MainTitle>
      <Btn onClick={handleClickLogin}>카카오로 로그인하기</Btn>
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
  justify-content: center;
`;

const SubTitle = styled.div`
  font-family: 'IBM Plex Sans KR';
  font-weight: bold;
  line-height: 145%;

  text-align: center;
  letter-spacing: -0.4px;

  color: ${COLOR.PRIMARY_ORANGE};
`;
const MainTitle = styled.div`
  font-family: 'Paytone One';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  letter-spacing: -0.022em;

  color: ${COLOR.PRIMARY_ORANGE};
`;

const Btn = styled.div`
  background: #fee500;

  cursor: pointer;
`;

export default Login;
