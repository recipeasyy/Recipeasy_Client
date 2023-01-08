import styled from '@emotion/styled';
import Link from 'next/link';

import GNB from '../../components/global/GNB';
import Wide from '../../components/imgProps/wide';
import All_Theme from '../../components/top_navigations/All_Theme';
import FONT from '../../constants/fonts';

const testCase = [1, 2, 3, 4, 5];

const Home = () => {
  return (
    <>
      <>
        <All_Theme />
        <Text css={FONT.HEADING}>
          오늘의 레시피지
          <br /> 추천 테마는?
        </Text>
        <Wide></Wide>
        <ThemeWrapper>
          {testCase.map((menu) => {
            console.log(menu);
            return (
              <Link href={`/theme/${menu}`} key={menu}>
                {menu}
              </Link>
            );
          })}
        </ThemeWrapper>
      </>

      <GNB />
    </>
  );
};

const Text = styled.div`
  width: 100%;
`;

const ThemeWrapper = styled.div`
  padding: 1rem 0;
`;

export default Home;
