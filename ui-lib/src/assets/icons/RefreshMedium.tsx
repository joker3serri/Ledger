import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function RefreshMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.64014 11.8799V12.8399H4.56014V11.8799C4.56014 7.79989 7.84814 4.55989 11.9761 4.55989C14.3281 4.55989 16.3441 5.56789 17.7121 7.17589C17.0881 7.12789 16.4161 7.10389 15.7921 7.10389H14.2801V8.78389H20.4241V2.63989H18.7441V4.15189C18.7441 4.65589 18.7681 5.18389 18.7921 5.71189C16.8481 3.52789 14.3281 2.63989 11.9761 2.63989C6.79214 2.63989 2.64014 6.74389 2.64014 11.8799ZM3.60014 21.3599H5.28014V19.8479C5.28014 19.3439 5.25614 18.8159 5.23214 18.2879C7.17614 20.4719 9.69614 21.3599 12.0241 21.3599C17.2081 21.3599 21.3601 17.2559 21.3601 12.1199V11.1599H19.4401V12.1199C19.4401 16.1999 16.1521 19.4399 12.0241 19.4399C9.69614 19.4399 7.68014 18.4319 6.31214 16.8239C6.93614 16.8719 7.60814 16.8959 8.23214 16.8959H9.74414V15.2159H3.60014V21.3599Z" fill={color} /></svg>;
}

export default RefreshMedium;