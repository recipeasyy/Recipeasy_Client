import styled from '@emotion/styled';
import router, { useRouter } from 'next/router';
import PATH from '../../constants/path';
import COLOR from '../../constants/theme';
import { GoBackIcon } from '../icons/BtnIcons';

export default function GoBack() {
  const { push } = useRouter();

  return (
    <>
      <Top_Navigation>
        <Column>
          <GoBackIcon
            onClick={() => {
              router.back();
            }}
            color={COLOR.TYPEFACE_BLACK}
          />
        </Column>
      </Top_Navigation>
    </>
  );
}

const Top_Navigation = styled.div`
  width: auto;
  height: 100px;
  transition: 'all 1s';
  position: sticky;
  top: 0px;
  display: flex;
  //display: flex;
  background: ${COLOR.PRIMARY_WHITE_85};
  z-index: 1;
`;

const Column = styled.div`
  display: flex;
  padding-bottom: 21px;
  padding-top: 55px;
  //flex-direction: row;
  //justify-content: flex-start;
  //position: fixed;
  //left: 0;
  //padding-left: 24px;
`;
