import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import COLOR from '../../constants/theme';
import { GoBackIcon } from '../icons/BtnIcons';

export default function GoBack({ color }: { color: string }) {
  const router = useRouter();
  return (
    <TopNav>
      <IconWrapper>
        <GoBackIcon
          onClick={() => {
            router.back();
          }}
          color={color}
        />
      </IconWrapper>
    </TopNav>
  );
}

const TopNav = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 450px;
  padding: 1rem 1.5rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
`;

const IconWrapper = styled.div`
  width: 100%;
`;
