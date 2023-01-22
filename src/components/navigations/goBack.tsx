import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import COLOR from '../../constants/theme';
import { GoBackIcon } from '../icons/BtnIcons';

export default function GoBack({ color }: { color: string }) {
  const router = useRouter();
  return (
    <>
      <TopNav>
        <IconWrapper color={color}>
          <GoBackIcon
            onClick={() => {
              router.back();
            }}
            color={COLOR.PRIMARY_WHITE}
          />
        </IconWrapper>
      </TopNav>
    </>
  );
}

const TopNav = styled.div`
  position: fixed;

  width: 100%;
  max-width: 450px;
  height: 6.25rem;
  padding: 3rem 1.5rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 100%;
  color: ${(props) => props.color};
`;
