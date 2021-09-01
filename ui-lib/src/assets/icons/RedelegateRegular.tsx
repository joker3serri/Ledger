import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function RedelegateRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.64018 8.18395V12H4.12818V8.18395C4.12818 7.51195 4.77618 6.83995 5.47218 6.83995H19.7282C19.2242 7.29595 18.7442 7.75195 18.2642 8.20795L17.0162 9.47995L17.9762 10.464L22.3202 6.09595L17.9762 1.75195L17.0162 2.73595L18.2642 3.98395C18.7202 4.43995 19.2002 4.89595 19.6802 5.35195H5.47218C4.05618 5.35195 2.64018 6.81595 2.64018 8.18395ZM1.68018 17.904L6.02418 22.248L6.98418 21.264L5.73618 19.992C5.28018 19.56 4.80018 19.08 4.32018 18.648H18.5282C19.9442 18.648 21.3602 17.16 21.3602 15.816V12H19.8722V15.816C19.8722 16.488 19.2242 17.16 18.5282 17.16H4.29618C4.77618 16.704 5.28018 16.248 5.73618 15.792L6.98418 14.496L6.02418 13.536L1.68018 17.904Z"
        fill={color}
      />
    </svg>
  );
}

export default RedelegateRegular;
