import styled from '@emotion/styled';
import { ChangeEventHandler } from 'react';

import FONT from '../../../constants/fonts';
import COLOR from '../../../constants/theme';

interface propsType {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputName = (props: propsType) => {
  return (
    <Input
      placeholder="닉네임을 입력해주세요!"
      css={FONT.BODY_2_3}
      value={props.value}
      onChange={props.onChange}></Input>
  );
};

const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 10px 10px 10px 16px;

  border-radius: 8px;
  background: ${COLOR.PRIMARY_GRAY2};
`;

export default InputName;
