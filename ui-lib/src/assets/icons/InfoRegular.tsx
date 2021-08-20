import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function InfoRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.26377 17.04H14.9038V15.744H12.9358V10.224H9.50377V11.52H11.4478V15.744H9.26377V17.04ZM2.75977 12C2.75977 17.16 6.83977 21.24 11.9998 21.24C17.1838 21.24 21.2398 17.04 21.2398 12C21.2398 6.84001 17.1598 2.76001 11.9998 2.76001C6.83977 2.76001 2.75977 6.84001 2.75977 12ZM4.31977 12C4.31977 7.68001 7.70377 4.32001 11.9998 4.32001C16.3198 4.32001 19.6798 7.68001 19.6798 12C19.6798 16.176 16.3198 19.68 11.9998 19.68C7.70377 19.68 4.31977 16.296 4.31977 12ZM11.1118 8.61601H13.1998V6.52801H11.1118V8.61601Z"
        fill={color}
      />
    </svg>
  );
}

export default InfoRegular;
