import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import FONT from '../constants/fonts';
import COLOR from '../constants/theme';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const testPage = () => {
  return (
    <Container>
      <VideoWrapper>
        <ReactPlayer url={'https://www.dailymotion.com/video/x8hfepq'} width="100%" height="100vh" />
      </VideoWrapper>
      <ButtonWrapper>
        <Button css={FONT.BUTTON}>자세히 보기</Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  max-width: 450px;
  height: 100vh;

  overflow: hidden;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;

  width: 100vw;
  max-width: 450px;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: black;
`;

const Button = styled.div`
  position: fixed;
  bottom: 0;

  padding: 1rem 2rem;
  margin-bottom: 0.75rem;
  background: ${COLOR.PRIMARY_ORANGE};
  color: ${COLOR.TYPEFACE_WHITE};
  z-index: 1;

  border-radius: 30px;
`;

export default testPage;
