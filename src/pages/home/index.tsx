import styled from '@emotion/styled';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { Url } from 'url';
import { accessApi } from '../../api/api';

import GNB from '../../components/global/GNB';
import All_Theme from '../../components/navigations/All_Theme';
import FONT from '../../constants/fonts';

import { Themes } from '../../interfaces/main';
import { ImgCardMedium } from '../../components/imgProps/imgcard';

const Home = () => {
  const getThemes = async () => {
    const res = await accessApi.get('/theme/');
    console.log(res.data);
    return res.data;
  };

  const { isLoading, data } = useQuery('Themes', getThemes);

  return (
    <>
      <All_Theme />
      <Box>
        <Title css={FONT.HEADING}>
          오늘의 레시피지
          <br /> 추천 테마는?
        </Title>
        {data &&
          data.Themes.map((theme: Themes) => {
            return <ImgCardMedium key={theme.id} {...theme}></ImgCardMedium>;
          })}
      </Box>
      <GNB />
    </>
  );
};
const Box = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 0 6.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
`;

const Title = styled.div`
  width: 100%;
  padding-bottom: 1rem;
`;

export default Home;
