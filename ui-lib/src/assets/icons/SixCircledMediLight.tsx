import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SixCircledMediLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.976 16.704C13.824 16.704 15.12 15.384 15.12 13.608C15.12 11.832 13.824 10.512 12.12 10.512C11.064 10.512 10.2 11.064 9.81601 11.928H9.64801C9.62401 9.912 10.152 8.4 12 8.4C13.128 8.4 13.824 8.928 13.992 9.984H15.096C14.88 8.376 13.704 7.34401 12.024 7.34401C9.74401 7.34401 8.44801 9.216 8.47201 12.144C8.49601 15 9.79201 16.704 11.976 16.704ZM5.76001 21.12H18.24V19.92H5.76001V21.12ZM5.76001 4.08H18.24V2.88H5.76001V4.08ZM9.91201 13.776V13.368C9.91201 12.24 10.584 11.544 11.88 11.544H12.024C13.272 11.544 13.968 12.216 13.968 13.368V13.776C13.968 14.928 13.272 15.6 12.024 15.6H11.88C10.584 15.6 9.91201 14.856 9.91201 13.776Z"
        fill={color}
      />
    </svg>
  );
}

export default SixCircledMediLight;
