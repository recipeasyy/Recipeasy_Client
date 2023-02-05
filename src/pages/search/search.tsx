import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useInput } from '../../hooks/useInput';

import GNB from '../../components/global/GNB';
import { InputSearchItem } from '../../components/common/inputs/input_search';
import TopNavBar from '../../components/common/navigations/navigation_top';
import { SearchNone, SearchItem } from '../../components/search';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/theme';

const Search = () => {
  const router = useRouter();
  const initialText = typeof router.query.text === 'string' ? router.query.text : '';
  const initialNav = typeof router.query.type === 'string' ? router.query.type : 'recipe';

  const { value, handleChangeInput, reset } = useInput(initialText);
  const [nav, setNav] = useState(initialNav);

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
              setNav('recipe');
            }}
            isSeleted={nav === 'recipe'}>
            개별레시피
          </SortTitle>
          <SortTitle
            css={FONT.SUBTITLE_2}
            onClick={() => {
              setNav('theme');
            }}
            isSeleted={nav === 'theme'}>
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
  padding: 5rem 0;

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
