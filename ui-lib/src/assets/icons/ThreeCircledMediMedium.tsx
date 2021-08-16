import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ThreeCircledMediMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9998 16.6799C14.0158 16.6799 15.5278 15.5039 15.5278 13.9679C15.5278 13.0079 14.9038 12.2399 14.0878 11.9999V11.6639C14.7358 11.3999 15.2158 10.7279 15.2158 9.91189C15.2158 8.47189 13.7758 7.31989 11.9998 7.31989C10.1038 7.31989 8.63977 8.56789 8.63977 10.1279V10.2959H10.5358C10.5358 9.23989 10.7758 8.99989 11.9758 8.99989C13.1038 8.99989 13.3438 9.21589 13.3438 10.1039C13.3438 11.0159 13.1518 11.1119 12.1918 11.1119H11.1598V12.7919H12.2158C13.2958 12.7919 13.5598 12.9839 13.5598 13.8959C13.5598 14.8079 13.2718 14.9999 11.9758 14.9999C10.6798 14.9999 10.4398 14.7839 10.4398 13.5599H8.49577V13.6799C8.49577 15.4079 9.95977 16.6799 11.9998 16.6799ZM5.75977 21.3599H18.2398V19.4399H5.75977V21.3599ZM5.75977 4.55989H18.2398V2.63989H5.75977V4.55989Z" fill={color} /></svg>;
}

export default ThreeCircledMediMedium;