import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import FONT from '../constants/fonts';
import COLOR from '../constants/theme';
import { Down, Up } from './icons/BtnIcons';
import { FoodIcon } from './icons/FoodIcons';

interface Content {
  full: string;
  full_image: string;
  half: string;
  half_image: string;
  icon_type: string;
  id: number;
  title: string;
}

export default function Accordion(props: Content) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header onClick={() => setOpen((prev) => !prev)}>
        <Box>
          <FlexBox css={FONT.BODY_1}>
            <FoodIcon name={props.icon_type}></FoodIcon>
            <Text>{props.title}</Text>
          </FlexBox>
          <IconWrapper>{isOpen ? <Up /> : <Down />}</IconWrapper>
        </Box>
      </Header>
      {isOpen && (
        <Wrapper>
          <ImgWrapper>
            <Img img={props.full_image}></Img>
            <div css={FONT.BUTTON}>1큰술</div>
            <br />
            <div css={FONT.DETAIL_2}>{props.full}</div>
          </ImgWrapper>
          <ImgWrapper>
            <Img img={props.half_image}></Img>
            <div css={FONT.BUTTON}>1/2큰술</div>
            <br />
            <div css={FONT.DETAIL_2}>{props.half}</div>
          </ImgWrapper>
        </Wrapper>
      )}
    </>
  );
}
const Text = styled.div`
  padding-left: 10px;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  vertical-align: top;
`;
const ImgWrapper = styled.div`
  width: 157px;
  //height: 265px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
`;
const Img = styled.div<{ img: string }>`
  width: 157px;
  height: 193px;
  margin-bottom: 8px;
  border-radius: 12px;
  background-image: linear-gradient(to top, rgba(36, 36, 36, 0.4) 0%, rgba(36, 36, 36, 0) 52.08%),
    url(${(props) => props.img});
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;
const Header = styled.button`
  width: 100%;
  height: 58px;
  background-color: ${COLOR.BG_GRAY1};
  border-radius: 12%;
  margin-bottom: 12px;
`;
const Box = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 18px;
  padding-left: 18px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const DownIcon = styled(Down)<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
  transition: all 0.2s ease;
`;
