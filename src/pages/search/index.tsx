import { useRouter } from 'next/router';

import GNB from '../../components/global/GNB';
import { InputSearch } from '../../components/inputs/input_search';
import TopNavBar from '../../components/navigations/navigation_top';
import { SearchNone } from '../../components/search';

const Search = () => {
  const router = useRouter();
  return (
    <>
      <TopNavBar>
        <InputSearch onClick={() => router.push('/search/search')} />
      </TopNavBar>
      <SearchNone />
      <GNB />
    </>
  );
};

export default Search;
