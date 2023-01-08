import styled from '@emotion/styled';

import COLOR from '../../constants/theme';
import FONT from '../../constants/fonts';

import { GoBackIcon, DelIcon } from '../icons/BtnIcons';

interface propsType {
  value: string;
  onChange: any;
  reset: any;
  typed: boolean;
}

const InputSearch = (props: propsType) => {
  return props.typed ? (
    <>
      <GoBackIcon />
      <Input
        id="search"
        placeholder="검색어 입력"
        css={FONT.BODY_2_3}
        value={props.value}
        onChange={props.onChange}
        typed={props.typed}
      />
      <IconWrapper onClick={props.reset}>
        <DelIcon />
      </IconWrapper>
    </>
  ) : (
    <Input
      placeholder="재료 검색어를 입력해 주세요"
      css={FONT.BODY_2_3}
      value={props.value}
      onChange={props.onChange}
      typed={props.typed}
    />
  );
};

const Input = styled.input<{ typed: boolean }>`
  width: 100%;
  height: 42px;
  padding: 10px 10px 10px 16px;
  margin-left: ${(props) => props.typed && '0.75rem'};

  border-radius: 8px;
  background: ${COLOR.GRAY2};
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 2.5rem;

  display: flex;
  justify-content: center;
`;

export default InputSearch;
