import { useState, useEffect } from 'react';
import { accessApi } from '../../api/api';
import { useInput } from '../../hooks/useInput';

import styled from '@emotion/styled';
import FONT from '../../constants/fonts';
import BtnStart from '../../components/btns/btn_start';

import COLOR from '../../constants/theme';

export default function LoginNickName() {
  const name = useInput('');

  const handleClickName = async () => {
    try {
      const response = await accessApi.post('/user/nickname', { nickname: `${name.value}` });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Title css={FONT.HEADING}>닉네임을 정해주세요</Title>
      <Input placeholder="닉네임을 입력해주세요!" css={FONT.BODY_2_3} {...name} />
      <BtnStart onClick={handleClickName} />
    </>
  );
}

const Title = styled.div`
  width: 100%;
  padding: 9rem 0 0.75rem;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 10px 10px 10px 16px;

  border-radius: 8px;
  background: ${COLOR.GRAY2};
`;
