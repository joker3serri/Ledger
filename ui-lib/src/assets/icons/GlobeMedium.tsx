import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function GlobeMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0001 21.3599C17.3041 21.3599 21.3601 17.0879 21.3601 11.9999C21.3601 6.79189 17.2801 2.63989 12.0001 2.63989C6.72014 2.63989 2.64014 6.79189 2.64014 11.9999C2.64014 17.2079 6.72014 21.3599 12.0001 21.3599ZM4.44014 11.9999C4.44014 11.2799 4.53614 10.6079 4.70414 9.95989H7.56014C7.46414 10.6319 7.44014 11.3279 7.44014 11.9999C7.44014 12.6719 7.46414 13.3679 7.56014 14.0399H4.70414C4.53614 13.3919 4.44014 12.7199 4.44014 11.9999ZM5.28014 15.5999H7.82414C8.16014 16.9919 8.76014 18.2639 9.69614 19.3199C7.77614 18.7199 6.19214 17.3759 5.28014 15.5999ZM5.28014 8.39989C6.19214 6.62389 7.77614 5.27989 9.69614 4.67989C8.76014 5.73589 8.16014 7.00789 7.82414 8.39989H5.28014ZM9.24014 11.9999C9.24014 11.3039 9.28814 10.6319 9.36014 9.95989H14.6401C14.7121 10.6319 14.7601 11.3039 14.7601 11.9999C14.7601 12.6959 14.7121 13.3679 14.6401 14.0399H9.36014C9.28814 13.3679 9.24014 12.6959 9.24014 11.9999ZM9.67214 15.5999H14.3281C13.8961 17.4239 13.0801 18.9119 12.0001 19.6799C10.9201 18.9119 10.1041 17.4239 9.67214 15.5999ZM9.67214 8.39989C10.1041 6.57589 10.9201 5.08789 12.0001 4.31989C13.0801 5.08789 13.8961 6.57589 14.3281 8.39989H9.67214ZM14.3041 4.67989C16.2241 5.27989 17.8081 6.62389 18.7201 8.39989H16.1761C15.8401 7.00789 15.2401 5.73589 14.3041 4.67989ZM14.3281 19.3199C15.2401 18.2639 15.8401 16.9679 16.1761 15.5999H18.6961C17.7841 17.3519 16.2241 18.6959 14.3281 19.3199ZM16.4401 14.0399C16.5361 13.3679 16.5601 12.6719 16.5601 11.9999C16.5601 11.3279 16.5361 10.6319 16.4401 9.95989H19.2961C19.4641 10.6079 19.5601 11.2799 19.5601 11.9999C19.5601 12.6959 19.4641 13.3919 19.2961 14.0399H16.4401Z" fill={color} /></svg>;
}

export default GlobeMedium;