import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { GoBackIcon } from '../icons/BtnIcons';
import TopNavBar from './navigation_top';

export default function GoBack() {
  const router = useRouter();
  return (
    <>
      <TopNavBar>
        <IconWrapper
          onClick={() => {
            router.back();
          }}>
          <GoBackIcon />
        </IconWrapper>
      </TopNavBar>
    </>
  );
}

const IconWrapper = styled.div`
  width: 100%;
`;
