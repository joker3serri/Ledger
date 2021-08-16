import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ClaimRewardsThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.30414 17.688H18.6961V17.208H16.1761C18.3841 15.792 19.8001 13.392 19.8001 10.68C19.8001 6.384 16.2961 2.88 12.0001 2.88C7.70414 2.88 4.20014 6.384 4.20014 10.68C4.20014 13.392 5.59214 15.792 7.80014 17.208H5.30414V17.688ZM2.64014 21.12H21.3601V15H20.8801V20.64H3.12014V15H2.64014V21.12ZM4.68014 10.68C4.68014 6.624 7.94414 3.36 12.0001 3.36C16.0561 3.36 19.3201 6.624 19.3201 10.68C19.3201 13.536 17.6881 16.008 15.3121 17.208H8.68814C6.31214 16.008 4.68014 13.536 4.68014 10.68ZM9.16814 11.736C9.19214 13.368 10.2241 14.376 11.7601 14.496V15.408H12.2401V14.496C13.7281 14.424 14.7601 13.584 14.7601 12.312C14.7601 11.16 13.9201 10.488 12.6721 10.344L12.2401 10.296V7.20001C13.4881 7.27201 14.1601 8.01601 14.1601 9.264H14.6401C14.6401 7.8 13.7041 6.792 12.2401 6.72001V5.808H11.7601V6.72001C10.4881 6.84 9.48014 7.656 9.48014 8.83201C9.48014 9.888 10.2001 10.536 11.4001 10.68L11.7601 10.728V14.016C10.4641 13.896 9.67214 13.104 9.64814 11.736H9.16814ZM9.96014 8.83201C9.96014 7.89601 10.6801 7.296 11.7601 7.20001V10.248L11.4481 10.2C10.4401 10.08 9.96014 9.64801 9.96014 8.83201ZM12.2401 14.016V10.776L12.6241 10.824C13.7041 10.944 14.2801 11.424 14.2801 12.312C14.2801 13.32 13.5121 13.944 12.2401 14.016Z" fill={color} /></svg>;
}

export default ClaimRewardsThin;