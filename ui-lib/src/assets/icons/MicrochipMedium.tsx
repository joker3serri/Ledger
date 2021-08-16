import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function MicrochipMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.68014 21.3599H9.36014V17.9999H11.1601V21.3599H12.8401V17.9999H14.6401V21.3599H16.3201V17.9999H18.0001V16.3199H21.3601V14.6399H18.0001V12.8399H21.3601V11.1599H18.0001V9.35989H21.3601V7.67989H18.0001V5.99989H16.3201V2.63989H14.6401V5.99989H12.8401V2.63989H11.1601V5.99989H9.36014V2.63989H7.68014V5.99989H6.00014V7.67989H2.64014V9.35989H6.00014V11.1599H2.64014V12.8399H6.00014V14.6399H2.64014V16.3199H6.00014V17.9999H7.68014V21.3599ZM7.80014 16.1999V7.79989H16.2001V16.1999H7.80014ZM10.5601 13.4399H13.4401V10.5599H10.5601V13.4399Z" fill={color} /></svg>;
}

export default MicrochipMedium;