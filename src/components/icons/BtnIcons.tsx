import COLOR from '../../constants/theme';

export const SettingIcon = (props: { onClick: any }) => {
  return (
    <svg
      onClick={props.onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.90029 7.75987L3.78029 6.23566C4.30029 5.335 5.46641 5.01522 6.37574 5.54022C7.94324 6.44522 9.2241 5.7067 9.22102 3.89204C9.22069 2.85262 10.0742 1.99437 11.1222 1.99904L13.1155 2.00667C14.0346 1.99464 14.778 2.74713 14.79 3.66629L14.7903 3.88583C14.7847 5.69549 16.0664 6.43549 17.6395 5.53083L17.8297 5.42129C18.6318 4.97213 19.6551 5.23964 20.1043 6.04167L21.1075 7.76404C21.6356 8.66937 21.3191 9.83762 20.4187 10.357C18.8456 11.2617 18.8465 12.7402 20.414 13.6452C21.3147 14.1652 21.6345 15.3313 21.1095 16.2406L20.2295 17.7648C19.7095 18.6655 18.5433 18.9853 17.634 18.4603C16.0665 17.5553 14.7856 18.2938 14.7887 20.1084C14.7841 21.1565 13.9356 22.0061 12.8875 22.0015L10.8943 21.9938C9.97513 22.0059 9.23178 21.2534 9.21975 20.3342L9.21948 20.1147C9.22506 18.305 7.94334 17.565 6.37026 18.4697L6.18 18.5792C5.37797 19.0284 4.35462 18.7609 3.90546 17.9588L2.90224 16.2365C2.37415 15.3311 2.69069 14.1629 3.59102 13.6434C5.1641 12.7388 5.16324 11.2603 3.59574 10.3553C2.68641 9.83032 2.38029 8.66053 2.90029 7.75987Z"
        fill="#DFDFDF"
        stroke="#DFDFDF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  );
};

export const GoBackIcon = (props: { onClick: any }) => {
  return (
    <svg
      onClick={props.onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.5 5L7 12.5L14.5 20"
        stroke="#242424"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DelIcon = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L10 10M2 10L10 2" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const GoBackIconWhite = (props: { onClick: any }) => {
  return (
    <svg
      onClick={props.onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.5 4L7 11.5L14.5 19"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const RoundSave = ({ selected }: { selected: boolean }) => {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="26" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35 20.1834C35 17.1971 32.8214 16 29.6848 16H22.3187C19.2785 16 17 17.1155 17 19.9842V35.9679C17 36.7558 17.9046 37.252 18.6374 36.8668L26.0302 32.9805L33.3591 36.8602C34.093 37.2477 35 36.7514 35 35.9624V20.1834Z"
        fill={selected ? COLOR.PRIMARY_ORANGE : COLOR.PRIMARY_GRAY1}
        stroke={selected ? COLOR.PRIMARY_ORANGE : COLOR.PRIMARY_GRAY1}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ShowMore = () => {
  return (
    <svg width="140" height="52" viewBox="0 0 140 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="52" rx="26" fill="#FE8C46" />
      <path
        d="M40.0312 23.2812V22.0938H42.9844V20.6562H35.2188V22.0938H38.2969V23.2812C38.2891 25.6328 36.9219 28.2734 34.6719 29.3438L35.6875 30.7031C37.3125 29.9219 38.5469 28.2656 39.1875 26.3281C39.8203 28.0938 41 29.6094 42.5938 30.3594L43.5625 28.9844C41.3359 27.9453 40.0234 25.4609 40.0312 23.2812ZM44.2969 33.3906H46.0312V26.2188H48.2031V24.7656H46.0312V19.2656H44.2969V33.3906ZM52.8031 22.9688V20.5156H51.1313V23.0469C51.1234 25.4531 50.2172 27.9453 48.1625 29.1875L49.2406 30.4844C50.5688 29.6719 51.475 28.2344 51.9828 26.5391C52.4516 28.0781 53.2797 29.3906 54.5531 30.1562L55.5063 28.8281C53.5922 27.625 52.8109 25.25 52.8031 22.9688ZM53.9906 25.5625H56.0063V32.7031H57.6469V19.5156H56.0063V24.125H53.9906V25.5625ZM58.9125 33.3906H60.5844V19.2656H58.9125V33.3906ZM73.575 19.2656H71.825V33.3906H73.575V19.2656ZM62.1219 22.8438H70.5906V21.4531H67.2469V19.4375H65.4813V21.4531H62.1219V22.8438ZM62.7938 27.0781C62.7938 29.0234 64.3094 30.3906 66.3875 30.3906C68.4578 30.3906 69.9813 29.0234 69.9813 27.0781C69.9813 25.125 68.4578 23.7422 66.3875 23.75C64.3094 23.7422 62.7938 25.125 62.7938 27.0781ZM64.45 27.0781C64.45 25.9297 65.2547 25.1719 66.3875 25.1719C67.5125 25.1719 68.3172 25.9297 68.3094 27.0781C68.3172 28.2266 67.5125 28.9609 66.3875 28.9531C65.2547 28.9609 64.45 28.2266 64.45 27.0781ZM91.5563 30.2656H85.9313V27.5156H90.0875V20.2031H88.3531V22.5156H81.8063V20.2031H80.0719V27.5156H84.2125V30.2656H78.65V31.6875H91.5563V30.2656ZM81.8063 26.1094V23.9062H88.3531V26.1094H81.8063ZM103.875 19.2656H102.125V33.3906H103.875V19.2656ZM92.1719 29.5L93.0781 30.8906C98.0234 28.5391 99.6562 24.9688 99.6562 20.7656H92.8906V22.1406H97.8906C97.5781 25.3516 95.875 27.7422 92.1719 29.5Z"
        fill="white"
      />
    </svg>
  );
};

export const SmallTextBack = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 1L9 6L4 11" stroke="#120000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export const Down = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_484_21836)">
        <path d="M11 4L6 9L1 4" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_484_21836">
          <rect width="12" height="12" fill="white" transform="translate(12) rotate(90)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Up = () => {
  return (
    <>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_756_76602)">
          <path d="M1 8L6 3L11 8" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_756_76602">
            <rect width="12" height="12" fill="white" transform="translate(0 12) rotate(-90)" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
