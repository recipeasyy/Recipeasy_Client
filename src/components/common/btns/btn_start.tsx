import styled from '@emotion/styled';
import COLOR from '../../../constants/theme';
import FONT from '../../../constants/fonts';

interface propsType {
  onClick: () => Promise<void>;
  focused: boolean;
}

const BtnStart = (props: propsType) => {
  return (
    <Btn css={FONT.BUTTON} onClick={props.onClick} focused={props.focused}>
      시작하기
    </Btn>
  );
};

const Btn = styled.div<{ focused: boolean }>`
  width: 100%;
  height: 52px;

  margin: auto 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 8px;
  background: ${(props) => (props.focused ? `${COLOR.PRIMARY_ORANGE}` : `${COLOR.PRIMARY_GRAY1}`)};
  color: ${(props) => (props.focused ? `${COLOR.TYPEFACE_WHITE}` : `${COLOR.TYPEFACE_GRAY1}`)};

  cursor: pointer;
`;

export default BtnStart;
