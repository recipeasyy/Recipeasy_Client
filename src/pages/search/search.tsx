import styled from '@emotion/styled';
import { useState } from 'react';
import { useInput } from '../../hooks/useInput';

import GNB from '../../components/global/GNB';
import { InputSearchItem } from '../../components/inputs/input_search';
import TopNavBar from '../../components/navigations/navigation_top';
import { SearchNone, SearchItem } from '../../components/search';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

const Search = () => {
  const { value, handleChangeInput, reset } = useInput('');
  const [nav, setNav] = useState('개별');

  return (
    <>
      <TopNavBar>
        <InputSearchItem value={value} onChange={handleChangeInput} reset={reset} />
      </TopNavBar>
      <Content>
        <SortNavBar>
          <SortTitle
            css={FONT.SUBTITLE_2}
            onClick={() => {
              setNav('개별');
            }}
            isSeleted={nav === '개별'}>
            개별레시피
          </SortTitle>
          <SortTitle
            css={FONT.SUBTITLE_2}
            onClick={() => {
              setNav('테마');
            }}
            isSeleted={nav === '테마'}>
            테마레시피
          </SortTitle>
        </SortNavBar>
        <SearchItem nav={nav} value={value} />
      </Content>
      <GNB />
    </>
  );
};

const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 6.75rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SortNavBar = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 22px;
`;

const SortTitle = styled.div<{ isSeleted: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.isSeleted ? `${COLOR.PRIMARY_BLACK}` : `${COLOR.TYPEFACE_GRAY2}`)};
`;

export default Search;
