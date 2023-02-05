import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { accessApi } from '../../api/api';
import GNB from '../../components/global/GNB';
import All_Theme from '../../components/common/navigations/All_Theme';
import FONT from '../../constants/fonts';

import { Themes } from '../../interfaces/main';
import { ImgCardMedium } from '../../components/common/img_props/imgcard';
import { themeAPI } from '../../api/themeAPI';

const Home = () => {
  const { data } = useQuery('Themes', () => themeAPI.getThemes());

  return (
    <>
      <Box>
        <All_Theme />
        <Title css={FONT.HEADING}>
          오늘의 레시피지
          <br /> 추천 테마는?
        </Title>
        {data &&
          data.Themes.map((theme: Themes) => {
            return (
              <Wrap key={theme.id}>
                <ImgCardMedium {...theme}></ImgCardMedium>
              </Wrap>
            );
          })}
      </Box>
      <GNB />
    </>
  );
};
const Wrap = styled.div`
  margin-bottom: 16px;
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 6.75rem 0;
  //display: flex;
  //flex-direction: column;
  //gap: 1rem;
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
