import ReactPlayer from 'react-player/dailymotion';
import styled from '@emotion/styled';
import GoBack from '../components/navigations/goBack';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import { GoBackIconWhite, RoundSave, ShowMore, SmallTextBack } from '../components/icons/BtnIcons';
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
    <>
      <Wrapper>
        <Column>
          <Col>
            <GoBackIconWhite
              onClick={() => {
                push(PATH.HOME);
              }}
            />
          </Col>
          <Title css={FONT.FOODTITLE}>{'오이꼬동'}</Title>
          <Button>
            <Te css={FONT.BODY_2_3}>
              {'계란으로 3일 버티기'}
              <SmallTextBack />
            </Te>
          </Button>
        </Column>
        <Vid>
          {hasWindow && (
            <iframe
              src="https://geo.dailymotion.com/player/xbi7j.html?video=x8gsm33"
              allow="autoplay; fullscreen; picture-in-picture"
              //allowfullscreen
              //frameborder="0"
              width="800vw"
              height="1400vh"></iframe>
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
      </Wrapper>
    </>
  );
}
const Col = styled.div`
  padding-bottom: 21px;
`;
const Te = styled.div`
  justify-content: center;
  align-content: center;
  margin-left: 6px;
  margin-top: 8px;
  margin-bottom: 12px;
  margin-right: 4px;
`;
const Button = styled.div`
  width: 150px;
  height: 38px;
  border-radius: 8px;
  color: ${COLOR.TYPEFACE_BLACK};
  background-color: ${COLOR.BG_GRAY1};
  //align-content: center;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`;
const Title = styled.div`
  color: ${COLOR.TYPEFACE_WHITE};
`;
const Vid = styled.div`
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Icons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  bottom: 0;
  margin-left: 210px;
`;
const Column = styled.div`
  display: flex;
  padding-bottom: 21px;
  padding-top: 55px;
  flex-direction: row;
  justify-content: left;
  position: fixed;
  left: 0;
  padding-left: 22px;
  display: flex;
  flex-direction: column;
`;
const All = styled.div`
  all: initial;
  //background-color: white;
  //position: fixed;
`;
const Text = styled.div`
  //text-align: center;
  justify-content: center;
  //width: 100%;
  //position: fixed;
  bottom: 0;
  margin-bottom: 33px;
  margin-left: 10px;
  margin-right: 10px;
`;
const Wrapper = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  //overflow: none;
  //margin-top: 10px;
`;
