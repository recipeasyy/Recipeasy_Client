import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PATH from '../../constants/path';
import { GoBackIcon } from '../icons/GoBackIcon';

export default function GoBack() {
  const { push } = useRouter();

  return (
    <>
      <Top_Navigation>
        <Column
          onClick={() => {
            push(PATH.HOME);
          }}>
          <GoBackIcon />
        </Column>
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

const Column = styled.div`
  display: flex;
  padding-bottom: 21px;
  padding-top: 55px;
  flex-direction: row;
  justify-content: space-between;
`;
