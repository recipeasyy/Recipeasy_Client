import styled from '@emotion/styled';
import React from 'react';
import GNB from '../../components/global/GNB';
import Wide from '../../components/imgProps/wide';
import All_Theme from '../../components/top_navigations/All_Theme';

const Home = () => {
  return (
    <>
      <Container>
        <All_Theme />
        <Text>
          오늘의 레시피지
          <div></div>
          추천테마는?
        </Text>
        <Wide></Wide>
      </Container>
      <GNB />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 24px;
  padding-right: 24px;
`;

const Text = styled.div`
  color: black;
  font-size: 24px;
  white-space: pre;
  height: 70px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export default Home;
