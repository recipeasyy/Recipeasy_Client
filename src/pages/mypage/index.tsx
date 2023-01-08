import styled from '@emotion/styled';
import GNB from '../../components/global/GNB';
import TopNavBar from '../../components/navigations/navigation_top';
import { SettingIcon } from '../../components/icons/BtnIcons';

const MyPage = () => {
  return (
    <>
      <TopNavBar>
        <IconWrapper>
          <SettingIcon />
        </IconWrapper>
      </TopNavBar>
      <GNB />
    </>
  );
};

const IconWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

export default MyPage;
