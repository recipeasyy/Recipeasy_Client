import COLOR from "../../constants/theme";

export const HomeIcon = ({ selected }: { selected: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.7668 23.9V20.3221C10.7667 19.4121 11.5086 18.6726 12.4278 18.6665H15.7949C16.7185 18.6665 17.4673 19.4078 17.4673 20.3221V23.9111C17.467 24.6837 18.09 25.3152 18.8702 25.3333H21.1149C24.0443 25.3333 25.1667 23.9111 25.1667 21.3221V11.1441C25.1547 10.2726 24.7414 9.45424 24.0443 8.92187L16.3673 2.79952C15.0224 1.73349 13.1106 1.73349 11.7657 2.79952L4.12236 8.93298C3.42264 9.46319 3.00862 10.2829 3 11.1553V21.3221C3 23.9 4.12236 25.3333 7.05173 25.3333H9.29646C10.0961 25.3333 10.7443 24.6916 10.7443 23.9"
      fill={selected ? COLOR.MAIN : COLOR.GRAY}
    />
    <path
      d="M10.7668 23.9V20.3221C10.7667 19.4121 11.5086 18.6726 12.4278 18.6665H15.7949C16.7185 18.6665 17.4673 19.4078 17.4673 20.3221V23.9111C17.467 24.6837 18.09 25.3152 18.8702 25.3333H21.1149C24.0443 25.3333 25.1667 23.9111 25.1667 21.3221V11.1441C25.1547 10.2726 24.7414 9.45424 24.0443 8.92187L16.3673 2.79952C15.0224 1.73349 13.1106 1.73349 11.7657 2.79952L4.12236 8.93298C3.42264 9.46319 3.00862 10.2829 3 11.1553V21.3221C3 23.9 4.12236 25.3333 7.05173 25.3333H9.29646C10.0961 25.3333 10.7443 24.6916 10.7443 23.9"
      stroke={selected ? COLOR.MAIN : COLOR.GRAY}
      stroke-width="1.47076"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const SearchIcon = ({ selected }: { selected: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="13.7274"
      cy="12.7279"
      r="10.4867"
      fill={selected ? COLOR.MAIN : COLOR.GRAY}
      stroke={selected ? COLOR.MAIN : COLOR.GRAY}
      stroke-width="1.47076"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.021 20.5664L25.1324 24.6671"
      stroke={selected ? COLOR.MAIN : COLOR.GRAY}
      stroke-width="3.40345"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="13.7585" cy="12.7585" r="7.96552" fill="#FBF9F6" />
  </svg>
);

export const SaveIcon = ({ selected }: { selected: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 7.58178C24 4.31112 21.5794 3 18.0942 3H9.90968C6.53161 3 4 4.22173 4 7.36366V24.8696C4 25.7325 5.00516 26.276 5.81935 25.8541L14.0335 21.5977L22.1768 25.8469C22.9923 26.2713 24 25.7277 24 24.8636V7.58178Z"
      fill={selected ? COLOR.MAIN : COLOR.GRAY}
      stroke={selected ? COLOR.MAIN : COLOR.GRAY}
      stroke-width="1.47076"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
