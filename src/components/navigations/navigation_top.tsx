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
  padding: 3rem 1.5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${COLOR.WHITE85};
`;

export default TopNavBar;
