import { useInput } from '../../hooks/useInput';

import GNB from '../../components/global/GNB';
import InputSearch from '../../components/inputs/input_search';
import TopNavBar from '../../components/navigations/navigation_top';
import { SearchNone, SearchItem } from '../../components/search';

const Search = () => {
  const { value, handleChangeInput, reset } = useInput('');

  return (
    <>
      <TopNavBar>
        <InputSearch value={value} onChange={handleChangeInput} reset={reset} typed={value === '' ? false : true} />
      </TopNavBar>
      {value === '' ? <SearchNone /> : <SearchItem value={value} />}
      <GNB />
    </>
  );
};

export default Search;
