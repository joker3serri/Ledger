import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ThreeCircledInitMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5602 16.6799C15.5762 16.6799 17.0882 15.5039 17.0882 13.9679C17.0882 13.0079 16.4642 12.2399 15.6482 11.9999V11.6639C16.2962 11.3999 16.7762 10.7279 16.7762 9.91189C16.7762 8.47189 15.3362 7.31989 13.5602 7.31989C11.6642 7.31989 10.2002 8.56789 10.2002 10.1279V10.2959H12.0962C12.0962 9.23989 12.3362 8.99989 13.5362 8.99989C14.6642 8.99989 14.9042 9.21589 14.9042 10.1039C14.9042 11.0159 14.7122 11.1119 13.7522 11.1119H12.7202V12.7919H13.7762C14.8562 12.7919 15.1202 12.9839 15.1202 13.8959C15.1202 14.8079 14.8322 14.9999 13.5362 14.9999C12.2402 14.9999 12.0002 14.7839 12.0002 13.5599H10.0562V13.6799C10.0562 15.4079 11.5202 16.6799 13.5602 16.6799ZM4.2002 11.9999C4.2002 17.2319 8.3282 21.3599 13.5602 21.3599H19.8002V19.4399H13.5602C9.38419 19.4399 6.1202 16.1759 6.1202 11.9999C6.1202 7.94389 9.38419 4.55989 13.5602 4.55989H19.8002V2.63989H13.5602C8.30419 2.63989 4.2002 6.91189 4.2002 11.9999Z" fill={color} /></svg>;
}

export default ThreeCircledInitMedium;