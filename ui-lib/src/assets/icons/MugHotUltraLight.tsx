import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function MugHotUltraLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.12406 20.88H11.0761C12.6841 20.88 14.0761 20.28 15.0601 18.984C15.2521 18.768 15.3961 18.528 15.5161 18.264H16.1161C18.8761 18.264 20.9401 16.44 20.9401 13.896C20.9401 11.304 18.8761 9.48 16.1161 9.48H3.06006V15C3.06006 16.824 3.39606 18.024 4.16406 18.984C5.17206 20.28 6.51606 20.88 8.12406 20.88ZM3.92406 15.336V10.296H15.2761V15.336C15.2761 18.192 13.9801 20.04 11.1241 20.04H8.07606C5.31606 20.04 3.92406 18.264 3.92406 15.336ZM6.90006 7.92H7.78806C7.66806 6.744 8.38806 6.168 9.85206 5.976L11.5561 5.76C13.2601 5.568 14.3881 4.68 14.2921 3.12H13.4281C13.4761 4.272 12.7561 4.824 11.3641 5.016L9.63606 5.232C7.90806 5.424 6.78006 6.336 6.90006 7.92ZM15.8521 17.448C16.0441 16.776 16.1401 15.984 16.1401 15V10.296C18.6121 10.296 20.0761 11.544 20.0761 13.752V14.064C20.0761 16.2 18.6121 17.448 16.1641 17.448H15.8521Z" fill={color} /></svg>;
}

export default MugHotUltraLight;