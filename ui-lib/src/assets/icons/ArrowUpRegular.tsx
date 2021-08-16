import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ArrowUpRegular({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.71616 20.34L18.9962 6.03603C18.9962 6.80403 18.9722 7.59603 18.9722 8.34003V13.044H20.3402V3.66003H10.9562V5.02803H15.6602C16.4042 5.02803 17.1962 5.00403 17.9642 5.00403L3.66016 19.284L4.71616 20.34Z" fill={color} /></svg>;
}

export default ArrowUpRegular;