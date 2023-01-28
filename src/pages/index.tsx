import styled from '@emotion/styled';
import COLOR from '../constants/theme';
import { useRouter } from 'next/router';
import { getCookie } from '../util/cookie';

import { MainLogo } from '../components/icons/LogoIcons';

const LandingPage = () => {
  const router = useRouter();
  const isUser = Boolean(getCookie('accessToken'));

  setTimeout(() => (isUser ? router.push('/home') : router.push('/login')), 2000);
  return (
    <Container>
      <Img src="img/landing.png" alt="" />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 450px;
`;

const Img = styled.img`
  object-fit: cover;
`;

export default LandingPage;
