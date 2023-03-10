import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import GNB from '../../components/global/GNB';
import { InputSearch } from '../../components/common/inputs/input_search';
import TopNavBar from '../../components/common/navigations/navigation_top';
import { SearchNone } from '../../components/search';

const Search = () => {
  const router = useRouter();
  return (
    <>
      <TopNavBar>
        <InputSearch onClick={() => router.push('/search/search')} />
      </TopNavBar>
      <Content>
        <SearchNone />
      </Content>
      <GNB />
    </>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export default Search;
