import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function TwoCircledMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9999 21.3599C17.2559 21.3599 21.3599 17.0879 21.3599 11.9999C21.3599 6.76789 17.2319 2.63989 11.9999 2.63989C6.76789 2.63989 2.63989 6.76789 2.63989 11.9999C2.63989 17.2319 6.76789 21.3599 11.9999 21.3599ZM4.55989 11.9999C4.55989 7.82389 7.82389 4.55989 11.9999 4.55989C16.1759 4.55989 19.4399 7.82389 19.4399 11.9999C19.4399 16.0559 16.1759 19.4399 11.9999 19.4399C7.82389 19.4399 4.55989 16.1759 4.55989 11.9999ZM8.63989 10.4639H10.5359V10.1999C10.5359 9.33589 10.8239 9.02389 11.9279 9.02389H12.0959C13.1039 9.02389 13.4159 9.33589 13.4159 10.2719C13.4159 10.9439 13.2479 11.4479 11.6399 12.4559L8.85589 14.2079V16.4639H15.2159V14.8079L11.1119 14.8319V14.5199L13.3439 13.1519C14.7599 12.2879 15.3359 11.3519 15.3359 10.2239C15.3359 8.42389 13.8719 7.34389 12.0239 7.34389C10.0319 7.34389 8.63989 8.63989 8.63989 10.1519V10.4639Z" fill={color} /></svg>;
}

export default TwoCircledMedium;