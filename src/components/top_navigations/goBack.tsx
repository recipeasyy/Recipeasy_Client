import styled from '@emotion/styled';
import { useRouter } from 'next/router';
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
`;

const Column = styled.div`
  display: flex;
  padding-bottom: 21px;
  padding-top: 55px;
  flex-direction: row;
`;
