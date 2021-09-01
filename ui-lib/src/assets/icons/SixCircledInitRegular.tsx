import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SixCircledInitRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3441 16.704C15.2641 16.704 16.5841 15.384 16.5841 13.608C16.5841 11.832 15.2401 10.536 13.5841 10.536C12.7201 10.536 11.9281 10.92 11.5201 11.592H11.2801C11.3041 9.79201 11.8321 8.71201 13.3921 8.71201C14.3761 8.71201 15.0001 9.12001 15.1201 9.98401H16.5601C16.3201 8.37601 15.1201 7.34401 13.3921 7.34401C11.0881 7.34401 9.7681 9.21601 9.7921 12.144C9.8161 15 11.1121 16.704 13.3441 16.704ZM4.1521 12C4.1521 17.16 8.2321 21.24 13.3921 21.24H19.8481V19.68H13.3921C9.0961 19.68 5.7121 16.296 5.7121 12C5.7121 7.80001 9.0961 4.32001 13.3921 4.32001H19.8481V2.76001H13.3921C8.2081 2.76001 4.1521 6.96001 4.1521 12ZM11.5441 13.872V13.272C11.5441 12.336 12.0961 11.832 13.2241 11.832H13.4161C14.5441 11.832 15.0721 12.336 15.0721 13.272V13.872C15.0721 14.808 14.5441 15.312 13.4161 15.312H13.2241C12.0721 15.312 11.5441 14.784 11.5441 13.872Z"
        fill={color}
      />
    </svg>
  );
}

export default SixCircledInitRegular;
