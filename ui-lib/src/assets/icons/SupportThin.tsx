import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function SupportThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7761 20.88H13.2241C13.8961 20.88 14.4481 20.4 14.4001 19.512C16.3441 18.816 17.7841 17.088 18.0721 15.024H18.5521C20.1361 15.024 21.3601 13.8 21.3601 12.216V11.304C21.3601 9.72 20.1361 8.496 18.5521 8.496H18.0961C17.6881 5.472 15.1201 3.12 12.0001 3.12C8.88014 3.12 6.31214 5.472 5.90414 8.496H5.44814C3.86414 8.496 2.64014 9.72 2.64014 11.304V12.216C2.64014 13.8 3.86414 15.024 5.44814 15.024H6.33614V9.312C6.33614 6.168 8.85614 3.6 12.0001 3.6C15.1441 3.6 17.6641 6.168 17.6641 9.312V14.184C17.6641 16.368 16.3201 18.24 14.4001 19.008C14.4481 18.192 13.8961 17.664 13.2241 17.664H10.7761C10.1041 17.664 9.60014 18.168 9.60014 18.84V19.704C9.60014 20.376 10.1041 20.88 10.7761 20.88ZM3.12014 12.216V11.304C3.12014 9.912 4.05614 8.976 5.44814 8.976H5.85614V14.544H5.44814C4.05614 14.544 3.12014 13.608 3.12014 12.216ZM10.0801 19.704V18.84C10.0801 18.36 10.2961 18.144 10.7761 18.144H13.2241C13.7041 18.144 13.9201 18.36 13.9201 18.84V19.704C13.9201 20.184 13.7041 20.4 13.2241 20.4H10.7761C10.2961 20.4 10.0801 20.184 10.0801 19.704ZM18.1441 14.544V8.976H18.5521C19.9441 8.976 20.8801 9.912 20.8801 11.304V12.216C20.8801 13.608 19.9441 14.544 18.5521 14.544H18.1441Z" fill={color} /></svg>;
}

export default SupportThin;