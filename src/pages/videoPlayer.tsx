import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { RoundSave, ShowMore } from '../components/icons/BtnIcons';
import GoBack from '../components/navigations/goBack';
import PATH from '../constants/path';
import { useRouter } from 'next/router';
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
      <TopInfo>
        <GoBack color={COLOR.PRIMARY_WHITE} />
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
  width: 100%;
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
