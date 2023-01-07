import styled from '@emotion/styled';
import COLOR from '../../constants/theme';
import FONT from '../../constants/fonts';

const BtnStart = ({ onClick }: any) => {
  return (
    <Btn css={FONT.BUTTON} onClick={onClick}>
      시작하기
    </Btn>
  );
};

const Btn = styled.div`
  width: 100%;
  height: 52px;

  margin: auto 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 8px;
  background: ${COLOR.GRAY};
  color: ${COLOR.GRAY0};

  cursor: pointer;
`;

export default BtnStart;
