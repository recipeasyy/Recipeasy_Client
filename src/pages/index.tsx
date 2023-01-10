import styled from '@emotion/styled';
import COLOR from '../constants/theme';
import { useRouter } from 'next/router';

const LandingPage = () => {
  const router = useRouter();
  setTimeout(() => router.push('/login'), 2000);
  return (
    <Container>
      <SubTitle>방구석 셰프를 위한 1분 레시피</SubTitle>
      <MainTitle>Recipeasy!</MainTitle>
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
  background: ${COLOR.PRIMARY_ORANGE};
`;

const SubTitle = styled.div`
  font-family: 'IBM Plex Sans KR';
  font-weight: bold;
  line-height: 145%;

  text-align: center;
  letter-spacing: -0.4px;

  color: ${COLOR.TYPEFACE_WHITE};
`;
const MainTitle = styled.div`
  font-family: 'Paytone One';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  letter-spacing: -0.022em;

  color: ${COLOR.TYPEFACE_WHITE};
`;

export default LandingPage;
