import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PATH from '../../constants/path';
import { GoBackIcon } from '../icons/BtnIcons';

export default function GoBack() {
  const { push } = useRouter();

  return (
    <>
      <Top_Navigation>
        <GoBackIcon
          onClick={() => {
            push(PATH.HOME);
          }}
        />
      </Top_Navigation>
    </>
  );
}

const Top_Navigation = styled.div`
  width: 100%;
  height: 100px;
  transition: 'all 1s';
  position: sticky;
  top: 0px;
  display: flex;
  //display: flex;
  background-color: white;
`;
