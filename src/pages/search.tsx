import styled from "@emotion/styled";
import React from "react";
import GNB from "../components/global/GNB";

const Search = () => {
  return (
    <>
      <Container>Search</Container>
      <GNB />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Search;