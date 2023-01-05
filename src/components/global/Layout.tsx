import React from "react";
import styled from "@emotion/styled";
import COLOR from "../../constants/theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: auto;
  max-width: 450px;
  background: ${COLOR.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Layout;
