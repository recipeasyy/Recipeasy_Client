import styled from '@emotion/styled';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { accessApi } from '../../api/api';

import GNB from '../../components/global/GNB';
import Wide from '../../components/imgProps/wide';
import All_Theme from '../../components/navigations/All_Theme';
import FONT from '../../constants/fonts';

const testCase = [1, 2, 3, 4, 5];
interface Themes {
  id: number;
  title: string;
  description: string;
  recipe_count: number;
  duration: number;
  tips: string;
  theme_type: number;
  recipes: [];
}

const Home = () => {
  const getThemes = async () => {
    const res = await accessApi.get('/theme/');
    console.log(res.data);
    return res.data;
  };

  const { data } = useQuery('Themes', getThemes);

  return (
    <>
      <>
        <All_Theme />
        <Box>
          <Text css={FONT.HEADING}>
            오늘의 레시피지
            <br /> 추천 테마는?
          </Text>
          {data &&
            data.Themes.map((themeTypes: Themes) => {
              console.log(themeTypes);
              return <Wide key={themeTypes.id} props={themeTypes}></Wide>;
            })}
        </Box>
      </>

      <GNB />
    </>
  );
};
const Box = styled.div`
  width: 100%;
  height: auto;
  padding: 0 0 6.75rem 0;
  display: flex;
  flex-direction: column;
  //gap: 1.75rem;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
`;

const Text = styled.div`
  width: 100%;
  padding-bottom: 16px;
`;

const ThemeWrapper = styled.div`
  padding: 1rem 0;
`;

export default Home;
