import React from 'react';
import styled from '@emotion/styled';
import COLOR from '../../constants/theme';

import { useRouter } from 'next/router';

const HIDDEN_LAYOUT = ['/', '/login'];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return <>{!isHiddenLayout ? <Container>{children}</Container> : <>{children}</>}</>;
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 24px;

  max-width: 450px;
  background: ${COLOR.PRIMARY_WHITE};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
