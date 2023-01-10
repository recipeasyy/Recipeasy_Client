import { accessApi } from '../../api/api';
import { useInput } from '../../hooks/useInput';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';
import FONT from '../../constants/fonts';
import BtnStart from '../../components/btns/btn_start';
import InputName from '../../components/inputs/input_name';

export default function LoginNickName() {
  const router = useRouter();
  const { value, handleChangeInput, reset } = useInput('');
  const handleClickName = async () => {
    try {
      const response = await accessApi.post('/user/nickname', { nickname: `${value}` });
      console.log(response.data);
      router.push('/home');
    } catch (err) {
      console.log(err);
    }
    reset();
  };

  return (
    <>
      <Title css={FONT.HEADING}>닉네임을 정해주세요</Title>
      <InputName value={value} onChange={handleChangeInput} />
      <BtnStart onClick={handleClickName} focused={value === '' ? false : true} />
    </>
  );
}

const Title = styled.div`
  width: 100%;
  padding: 9rem 0 0.75rem;
`;
