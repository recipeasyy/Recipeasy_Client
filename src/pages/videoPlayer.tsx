import ReactPlayer from 'react-player/dailymotion';
import styled from '@emotion/styled';
import GoBack from '../components/navigations/goBack';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import { GoBackIconWhite, RoundSave, ShowMore } from '../components/icons/BtnIcons';
import PATH from '../constants/path';
import { useRouter } from 'next/router';

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
          <GoBackIconWhite
            onClick={() => {
              push(PATH.HOME);
            }}
          />
        </Column>
        {hasWindow && (
          <iframe
            src="https://geo.dailymotion.com/player/xbi7j.html?video=x8gsm33"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            //frameborder="0"
            width="360px"
            height="620px"></iframe>
        )}
      </Wrapper>
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
    </>
  );
}
const Icons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background-color: black;
`;
const Column = styled.div`
  display: flex;
  padding-bottom: 21px;
  padding-top: 55px;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  //left: 0;
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
  overflow-y: hidden;
  margin-top: 10px;
`;