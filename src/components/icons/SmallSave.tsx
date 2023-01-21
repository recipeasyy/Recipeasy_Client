import COLOR from '../../constants/theme';

export const SmallSaveIcon = ({ selected }: { selected: boolean }) => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.7143 6.59997C19.7143 4.03017 17.8123 3 15.074 3H8.64332C5.98912 3 4 3.95993 4 6.42859V20.1832C4 20.8613 4.78977 21.2883 5.42949 20.9568L11.8835 17.6125L18.2818 20.9512C18.9225 21.2846 19.7143 20.8575 19.7143 20.1785V6.59997Z"
          fill={selected ? COLOR.PRIMARY_ORANGE : COLOR.PRIMARY_GRAY1}
          stroke={selected ? COLOR.PRIMARY_ORANGE : COLOR.PRIMARY_GRAY1}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
