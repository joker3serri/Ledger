import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LifeRingRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14.52C10.608 14.52 9.48001 13.392 9.48001 12C9.48001 10.608 10.608 9.48001 12 9.48001C13.392 9.48001 14.52 10.608 14.52 12C14.52 13.392 13.392 14.52 12 14.52ZM2.76001 12C2.76001 17.16 6.84001 21.24 12 21.24C17.184 21.24 21.24 17.04 21.24 12C21.24 6.84001 17.16 2.76001 12 2.76001C6.84001 2.76001 2.76001 6.84001 2.76001 12ZM4.32001 12C4.32001 10.128 4.94401 8.44801 6.02401 7.12801L8.76001 9.86401C8.35201 10.464 8.11201 11.208 8.11201 12C8.11201 12.792 8.35201 13.536 8.76001 14.136L6.02401 16.872C4.94401 15.552 4.32001 13.872 4.32001 12ZM7.12801 6.02401C8.44801 4.94401 10.128 4.32001 12 4.32001C13.872 4.32001 15.552 4.94401 16.872 6.02401L14.136 8.76001C13.536 8.35201 12.792 8.11201 12 8.11201C11.208 8.11201 10.464 8.35201 9.86401 8.76001L7.12801 6.02401ZM7.12801 17.976L9.86401 15.24C10.464 15.648 11.208 15.888 12 15.888C12.792 15.888 13.536 15.648 14.136 15.24L16.848 17.952C15.552 19.032 13.848 19.68 12 19.68C10.128 19.68 8.44801 19.056 7.12801 17.976ZM15.24 14.136C15.648 13.536 15.888 12.792 15.888 12C15.888 11.208 15.648 10.464 15.24 9.86401L17.976 7.12801C19.056 8.44801 19.68 10.128 19.68 12C19.68 13.824 19.032 15.528 17.952 16.848L15.24 14.136Z"
        fill={color}
      />
    </svg>
  );
}

export default LifeRingRegular;
