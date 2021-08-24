import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.24C17.184 21.24 21.24 17.04 21.24 12C21.24 6.84001 17.16 2.76001 12 2.76001C6.84001 2.76001 2.76001 6.84001 2.76001 12C2.76001 17.16 6.84001 21.24 12 21.24ZM4.32001 12C4.32001 7.68001 7.70401 4.32001 12 4.32001C16.32 4.32001 19.68 7.68001 19.68 12C19.68 16.176 16.32 19.68 12 19.68C7.70401 19.68 4.32001 16.296 4.32001 12ZM8.73601 10.464H10.272V10.2C10.272 9.24001 10.704 8.71201 11.952 8.71201H12.072C13.176 8.71201 13.68 9.14401 13.68 10.224C13.68 10.968 13.44 11.52 11.832 12.552L8.92801 14.472V16.464H15.168V15.096L10.752 15.12V14.76L13.176 13.176C14.664 12.216 15.24 11.304 15.24 10.176C15.24 8.37601 13.8 7.34401 12.024 7.34401C10.056 7.34401 8.73601 8.66401 8.73601 10.176V10.464Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledRegular;
