import styled from '@emotion/styled';
import COLOR from '../constants/theme';

const Loading = () => {
  return (
    <Container>
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-orange-400"
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  max-width: 450px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${COLOR.BG_GRAY1_85};
`;

export default Loading;
