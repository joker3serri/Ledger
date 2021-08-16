import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function QrCodeMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3441 10.0081H20.2321V3.12012H13.3441V10.0081ZM2.64014 13.2241H21.3601V11.4241H2.64014V13.2241ZM3.76814 20.8801H10.6561V14.6641H9.04814V19.2721H5.37614V14.6641H3.76814V20.8801ZM3.76814 10.0081H10.6561V3.12012H3.76814V10.0081ZM5.37614 8.40012V4.72812H9.04814V8.40012H5.37614ZM6.45614 18.2161H7.99214V16.6561H6.45614V18.2161ZM6.45614 7.34412H7.99214V5.78412H6.45614V7.34412ZM13.3441 20.8801H14.9041V19.3201H13.3441V20.8801ZM13.3441 16.2241H16.4641V14.6641H13.3441V16.2241ZM14.9041 19.3201H18.0241V20.8801H20.2321V17.7601H18.0241V16.2241H16.4641V17.7601H14.9041V19.3201ZM14.9521 8.40012V4.72812H18.6241V8.40012H14.9521ZM16.0081 7.34412H17.5441V5.78412H16.0081V7.34412Z" fill={color} /></svg>;
}

export default QrCodeMedium;