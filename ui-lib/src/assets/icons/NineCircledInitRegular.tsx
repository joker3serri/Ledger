import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function NineCircledInitRegular({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4881 16.704C15.8161 16.704 17.0881 14.832 17.0641 11.904C17.0401 9.04801 15.7201 7.34401 13.4881 7.34401C11.7601 7.34401 10.2961 8.66401 10.2961 10.488C10.2961 12.216 11.5921 13.512 13.2481 13.512C14.1361 13.512 14.9281 13.128 15.3121 12.432H15.5281C15.5521 14.28 14.9761 15.336 13.4641 15.336C12.3841 15.336 11.8321 14.832 11.7361 13.848H10.2001C10.3201 15.576 11.6881 16.704 13.4881 16.704ZM4.1521 12C4.1521 17.16 8.2321 21.24 13.3921 21.24H19.8481V19.68H13.3921C9.0961 19.68 5.7121 16.296 5.7121 12C5.7121 7.80001 9.0961 4.32001 13.3921 4.32001H19.8481V2.76001H13.3921C8.2081 2.76001 4.1521 6.96001 4.1521 12ZM11.8321 10.704V10.152C11.8321 9.21601 12.3601 8.73601 13.4401 8.73601H13.6321C14.7361 8.73601 15.2641 9.24001 15.2641 10.152V10.704C15.2641 11.64 14.7361 12.12 13.6321 12.12H13.4401C12.3601 12.12 11.8321 11.64 11.8321 10.704Z" fill={color} /></svg>;
}

export default NineCircledInitRegular;