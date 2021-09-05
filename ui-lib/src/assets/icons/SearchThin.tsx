import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SearchThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4439 15.804L21.3479 21.684L21.6839 21.348L15.8039 15.444C17.0999 14.052 17.9159 12.18 17.9159 10.116C17.9159 5.82001 14.4119 2.31601 10.1159 2.31601C5.81992 2.31601 2.31592 5.82001 2.31592 10.116C2.31592 14.412 5.81992 17.916 10.1159 17.916C12.1799 17.916 14.0519 17.1 15.4439 15.804ZM2.79592 10.116C2.79592 6.08401 6.08392 2.79601 10.1159 2.79601C14.1479 2.79601 17.4359 6.08401 17.4359 10.116C17.4359 14.148 14.1479 17.436 10.1159 17.436C6.08392 17.436 2.79592 14.148 2.79592 10.116Z"
        fill={color}
      />
    </svg>
  );
}

export default SearchThin;
