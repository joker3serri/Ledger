import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function BatteryHalfUltraLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.93994 16.944H19.1159V14.784H21.0599V9.216H19.1159V7.056H2.93994V16.944ZM3.77994 16.128V7.848H18.2759V10.008H20.2199V13.968H18.2759V16.128H3.77994ZM5.33994 14.568H11.6279V9.408H5.33994V14.568Z" fill={color} /></svg>;
}

export default BatteryHalfUltraLight;