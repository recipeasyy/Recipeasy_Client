import styled from '@emotion/styled';
import { HomeIcon, SaveIcon, SearchIcon } from '../icons/GNBIcons';
import { useRouter } from 'next/router';
import PATH from '../../constants/path';
import COLOR from '../../constants/theme';

const GNB = () => {
  const { pathname, push } = useRouter();
  return (
    <Container>
      <Column
        onClick={() => {
          push(PATH.HOME);
        }}>
        <HomeIcon selected={pathname === PATH.HOME || pathname === PATH.THEME} />
      </Column>
      <Column
        onClick={() => {
          push(PATH.SEARCH);
        }}>
        <SearchIcon selected={pathname === PATH.SEARCH || pathname == PATH.SEARCHING} />
      </Column>
      <Column
        onClick={() => {
          push(PATH.MYPAGE);
        }}>
        <SaveIcon selected={pathname === PATH.MYPAGE} />
      </Column>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 83px;

  padding-top: 1.25rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: ${COLOR.BG_GRAY1};

  z-index: 2;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default GNB;
