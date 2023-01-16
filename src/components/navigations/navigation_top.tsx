import styled from '@emotion/styled';
import COLOR from '../../constants/theme';

const TopNavBar = ({ children }: { children: React.ReactNode }) => {
  return <TopNav>{children}</TopNav>;
};

const TopNav = styled.div`
  position: fixed;

  width: 100%;
  max-width: 450px;
  height: 6.25rem;
  padding: 3rem 1.5rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${COLOR.PRIMARY_WHITE_85};
`;

export default TopNavBar;
