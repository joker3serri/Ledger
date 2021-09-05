import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledSouthWestMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.20814 15.7919H14.3521V14.1119H12.8401C12.3121 14.1119 11.7121 14.1119 11.1361 14.1599L16.1521 9.14389L14.8561 7.84789L9.81614 12.8879C9.84014 12.2879 9.88814 11.7119 9.88814 11.1359L9.86414 9.62389H8.20814V15.7919ZM2.64014 11.9999C2.64014 17.2319 6.76814 21.3599 12.0001 21.3599C17.2561 21.3599 21.3601 17.0879 21.3601 11.9999C21.3601 6.76789 17.2321 2.63989 12.0001 2.63989C6.76814 2.63989 2.64014 6.76789 2.64014 11.9999ZM4.56014 11.9999C4.56014 7.82389 7.82414 4.55989 12.0001 4.55989C16.1761 4.55989 19.4401 7.82389 19.4401 11.9999C19.4401 16.0559 16.1761 19.4399 12.0001 19.4399C7.82414 19.4399 4.56014 16.1759 4.56014 11.9999Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledSouthWestMedium;
