import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function EightCircledRegular({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9998 21.24C17.1838 21.24 21.2398 17.04 21.2398 12C21.2398 6.84001 17.1598 2.76001 11.9998 2.76001C6.83977 2.76001 2.75977 6.84001 2.75977 12C2.75977 17.16 6.83977 21.24 11.9998 21.24ZM4.31977 12C4.31977 7.68001 7.70377 4.32001 11.9998 4.32001C16.3198 4.32001 19.6798 7.68001 19.6798 12C19.6798 16.176 16.3198 19.68 11.9998 19.68C7.70377 19.68 4.31977 16.296 4.31977 12ZM8.56777 14.016C8.56777 15.552 10.0318 16.704 11.9758 16.704H12.0238C13.9918 16.704 15.4558 15.552 15.4558 14.016C15.4558 13.056 14.8798 12.264 13.9438 11.976V11.736C14.6878 11.448 15.1678 10.728 15.1678 9.88801C15.1678 8.44801 13.7758 7.34401 11.9998 7.34401H11.9758C10.2238 7.34401 8.83177 8.44801 8.83177 9.88801C8.83177 10.752 9.31177 11.472 10.0798 11.76V11.976C9.14377 12.24 8.56777 13.056 8.56777 14.016ZM10.1998 14.184V13.752C10.1998 12.984 10.7518 12.6 11.9278 12.6H12.1198C13.3198 12.6 13.8478 12.984 13.8478 13.752V14.184C13.8478 14.952 13.2958 15.312 12.1198 15.312H11.9278C10.7518 15.312 10.1998 14.952 10.1998 14.184ZM10.3438 10.248V9.79201C10.3438 9.09601 10.8238 8.73601 11.9038 8.73601H12.0718C13.1518 8.73601 13.6558 9.09601 13.6558 9.79201V10.248C13.6558 10.944 13.1518 11.28 12.0718 11.28H11.9038C10.8238 11.28 10.3438 10.944 10.3438 10.248Z" fill={color} /></svg>;
}

export default EightCircledRegular;