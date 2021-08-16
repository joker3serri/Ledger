import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function FreezeLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4719 21.36H12.5519L12.5039 17.976L14.4719 19.968L15.1919 19.248L12.5519 16.584L12.5039 13.2L17.9039 18.624L18.6239 17.904L13.1999 12.504L16.5839 12.528L19.2479 15.192L19.9679 14.472L17.9759 12.504L21.3599 12.528V11.448L17.9759 11.496L19.9679 9.52802L19.2479 8.80802L16.5839 11.448L13.1999 11.496L18.6239 6.09601L17.9039 5.37601L12.5039 10.8L12.5519 7.41602L15.1919 4.75201L14.4719 4.03201L12.5039 6.02401L12.5519 2.64001H11.4719L11.4959 6.02401L9.52789 4.03201L8.80789 4.75201L11.4719 7.41602L11.4959 10.8L6.09589 5.37601L5.37589 6.09601L10.7999 11.496L7.41589 11.448L4.75189 8.80802L4.03189 9.52802L6.02389 11.496L2.63989 11.448V12.528L6.02389 12.504L4.03189 14.472L4.75189 15.192L7.41589 12.528L10.7999 12.504L5.37589 17.904L6.09589 18.624L11.4959 13.2L11.4719 16.584L8.80789 19.248L9.52789 19.968L11.4959 17.976L11.4719 21.36Z" fill={color} /></svg>;
}

export default FreezeLight;