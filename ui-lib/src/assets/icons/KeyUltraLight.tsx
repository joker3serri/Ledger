import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function KeyUltraLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.20806 21.108L8.83206 20.484L6.24005 17.916L8.08806 16.068L10.6561 18.636L11.2801 18.012L8.71206 15.444L13.2481 10.908C14.0161 11.508 14.9761 11.868 16.0321 11.868C18.5521 11.868 20.5441 9.852 20.5441 7.38C20.5441 4.908 18.5521 2.892 16.0321 2.892C13.5121 2.892 11.5201 4.908 11.5201 7.38C11.5201 8.508 11.9281 9.516 12.6001 10.308L3.45605 19.452L4.08005 20.076L5.61605 18.54L8.20806 21.108ZM12.3841 7.38C12.3841 5.34 14.0161 3.732 16.0321 3.732C18.0721 3.732 19.6801 5.34 19.6801 7.38C19.6801 9.396 18.0721 11.028 16.0321 11.028C14.0161 11.028 12.3841 9.396 12.3841 7.38Z" fill={color} /></svg>;
}

export default KeyUltraLight;