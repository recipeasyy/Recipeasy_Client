import { useRouter } from 'next/router';
import styled from '@emotion/styled';

const Login = () => {
  const router = useRouter();

  const KAKAO_CLIENT_ID = '51739e59f5bee1dba4de8edbf5088aaf';
  const KAKAO_REDIRECT_URI = 'http://localhost:3000/login/callback';

  const handleClickLogin = (e: any) => {
    router.push(`https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code
    `);
  };

  return (
    <Container>
      <Btn onClick={handleClickLogin}>카카오로 로그인하기</Btn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.div`
  padding: 1rem 8rem 1rem;
  color: black;
  font-size: 0.75rem;
  font-weight: bold;

  border-radius: 0.5rem;
  background: yellow;
  cursor: pointer;
`;

export default Login;
