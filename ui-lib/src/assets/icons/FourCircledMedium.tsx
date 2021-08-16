import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function FourCircledMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9999 21.3599C17.2559 21.3599 21.3599 17.0879 21.3599 11.9999C21.3599 6.76789 17.2319 2.63989 11.9999 2.63989C6.76789 2.63989 2.63989 6.76789 2.63989 11.9999C2.63989 17.2319 6.76789 21.3599 11.9999 21.3599ZM4.55989 11.9999C4.55989 7.82389 7.82389 4.55989 11.9999 4.55989C16.1759 4.55989 19.4399 7.82389 19.4399 11.9999C19.4399 16.0559 16.1759 19.4399 11.9999 19.4399C7.82389 19.4399 4.55989 16.1759 4.55989 11.9999ZM7.89589 14.6639H11.9039V16.4639H13.7039V14.6639H15.0719V13.1039H13.7039V7.58389H11.6879L7.89589 13.2959V14.6639ZM9.67189 13.1039L11.9279 9.69589H11.9519C11.9279 10.4879 11.9039 11.4959 11.9039 12.4079V13.1039H9.67189Z" fill={color} /></svg>;
}

export default FourCircledMedium;