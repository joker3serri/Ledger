import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function FiveCircledInitMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.56 16.7039C15.504 16.7039 16.896 15.4079 16.896 13.6319C16.896 11.9279 15.648 10.5839 13.968 10.5839C13.344 10.5839 12.816 10.7759 12.456 11.1119H12.168L12.456 9.21589H16.368V7.58389H10.968L10.512 12.7439H12.192C12.408 12.3359 12.72 12.1919 13.464 12.1919H13.584C14.616 12.1919 14.976 12.4559 14.976 13.2719V13.9439C14.976 14.7839 14.64 15.0479 13.608 15.0479H13.488C12.408 15.0479 12.096 14.7359 12.048 13.7519H10.152C10.152 15.4559 11.592 16.7039 13.56 16.7039ZM4.19995 11.9999C4.19995 17.2319 8.32795 21.3599 13.56 21.3599H19.7999V19.4399H13.56C9.38395 19.4399 6.11995 16.1759 6.11995 11.9999C6.11995 7.94389 9.38395 4.55989 13.56 4.55989H19.7999V2.63989H13.56C8.30395 2.63989 4.19995 6.91189 4.19995 11.9999Z" fill={color} /></svg>;
}

export default FiveCircledInitMedium;