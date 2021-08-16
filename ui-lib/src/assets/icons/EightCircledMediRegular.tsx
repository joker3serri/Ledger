import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function EightCircledMediRegular({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9758 16.704H12.0238C13.9918 16.704 15.4558 15.552 15.4558 14.016C15.4558 13.056 14.8798 12.264 13.9438 11.952V11.736C14.6878 11.448 15.1678 10.728 15.1678 9.88801C15.1678 8.44801 13.7758 7.34401 11.9998 7.34401H11.9758C10.2238 7.34401 8.83177 8.44801 8.83177 9.88801C8.83177 10.728 9.33577 11.472 10.0798 11.76V11.952C9.14377 12.264 8.56777 13.032 8.56777 14.016C8.56777 15.552 10.0318 16.704 11.9758 16.704ZM5.75977 21.24H18.2398V19.68H5.75977V21.24ZM5.75977 4.32001H18.2398V2.76001H5.75977V4.32001ZM10.1998 14.184V13.752C10.1998 12.984 10.7518 12.6 11.9278 12.6H12.1198C13.3198 12.6 13.8478 12.984 13.8478 13.752V14.184C13.8478 14.952 13.2958 15.312 12.1198 15.312H11.9278C10.7518 15.312 10.1998 14.952 10.1998 14.184ZM10.3438 10.248V9.79201C10.3438 9.09601 10.8238 8.73601 11.9038 8.73601H12.0718C13.1518 8.73601 13.6558 9.09601 13.6558 9.79201V10.248C13.6558 10.944 13.1518 11.28 12.0718 11.28H11.9038C10.8238 11.28 10.3438 10.944 10.3438 10.248Z" fill={color} /></svg>;
}

export default EightCircledMediRegular;