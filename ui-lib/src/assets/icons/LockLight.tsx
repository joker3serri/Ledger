import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LockLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75195 21.3H19.248V9.66001H17.232V7.86001C17.232 5.02801 14.856 2.70001 12 2.70001C9.14395 2.70001 6.76795 5.02801 6.76795 7.86001V9.66001H4.75195V21.3ZM5.95195 20.148V10.788H18.048V20.148H5.95195ZM7.96795 9.66001V7.86001C7.96795 5.67601 9.79195 3.82801 12 3.82801C14.232 3.82801 16.032 5.67601 16.032 7.86001V9.66001H7.96795Z"
        fill={color}
      />
    </svg>
  );
}

export default LockLight;
