import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { RoundSave, ShowMore, GoForward } from '../components/icons/BtnIcons';
import GoBack from '../components/navigations/goBack';
import PATH from '../constants/path';
import COLOR from '../constants/theme';
import FONT from '../constants/fonts';

export default function VideoPlayer() {
  const [hasWindow, setHasWindow] = useState(false);
  const { push } = useRouter();
  const [isSelect, setSelect] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setHasWindow(true);
    }
  }, []);
  return (
    <Container>
      <GoBack color={COLOR.PRIMARY_WHITE} />
      <TopInfo>
        <Title css={FONT.FOODTITLE}>오야꼬동</Title>
        <ThemeBtn
          css={FONT.BODY_2_3}
          onClick={() => {
            push(PATH.HOME);
          }}>
          계란으로 5일 버티기
          <GoForward />
        </ThemeBtn>
      </TopInfo>

      <Vid>
        {hasWindow && (
          <iframe
            src="https://geo.dailymotion.com/player/xbi7j.html?video=x8hfepq"
            allow="autoplay;"
            width="100%"
            height="720px"
            allowFullScreen></iframe>
        )}
      </Vid>

      <Icons>
        <Text
          onClick={() => {
            push(PATH.HOME);
          }}>
          <ShowMore></ShowMore>
        </Text>
        <Text
          onClick={() => {
            setSelect((prev) => !prev);
          }}>
          <RoundSave selected={isSelect} />
        </Text>
      </Icons>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;

  width: 100vw;
  max-width: 450px;
  height: 100vh;
  background: #0b0b0b;

  overflow: hidden;
`;

const TopInfo = styled.div`
  position: fixed;
  top: 0;

  width: 100vw;
  max-width: 450px;

  padding: 100px 24px 48px 24px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: ${COLOR.TYPEFACE_WHITE};
  background: linear-gradient(180deg, #161616 0%, rgba(18, 18, 18, 0) 100%);

  z-index: 1;
`;

const Title = styled.div``;

const ThemeBtn = styled.div`
  width: fit-content;

  padding: 8px 12px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  color: ${COLOR.TYPEFACE_BLACK};
  background: ${COLOR.PRIMARY_WHITE};
`;

const Vid = styled.div`
  position: absolute;
  bottom: 12vh;
  width: 100%;
  height: 720px;

  border-radius: 10px;

  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Icons = styled.div`
  width: 100vw;
  max-width: 450px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  flex-wrap: wrap;
  position: fixed;
  bottom: 4vh;
`;

const Text = styled.div``;
