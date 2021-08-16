import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function FullnodeErrorThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0519 20.628C11.6999 20.628 12.2999 20.604 12.8999 20.556L13.4279 20.028C12.6839 20.1 11.8919 20.148 11.0519 20.148C6.7079 20.148 3.8279 18.996 3.8279 17.412V14.7C4.8839 15.948 7.6199 16.716 11.0519 16.716C11.6759 16.716 12.2999 16.692 12.8999 16.644L12.6599 16.404L12.8999 16.164C12.2999 16.212 11.6759 16.236 11.0519 16.236C6.7079 16.236 3.8279 15.036 3.8279 13.476V10.764C4.8839 12.036 7.6199 12.804 11.0519 12.804C14.4359 12.804 17.1959 12.036 18.2759 10.74V14.388L18.5159 14.652L18.7559 14.412V5.58C18.7559 3.612 15.5399 2.388 11.0519 2.388C6.6839 2.388 3.3479 3.612 3.3479 5.58V17.412C3.3479 19.38 6.6119 20.628 11.0519 20.628ZM3.8279 9.516V6.828C4.8839 8.1 7.6199 8.82 11.0519 8.82C14.4359 8.82 17.1959 8.076 18.2759 6.804V9.516C18.2759 11.124 15.3239 12.324 11.0519 12.324C6.7079 12.324 3.8279 11.124 3.8279 9.516ZM3.8279 5.58C3.8279 3.996 6.7799 2.868 11.0519 2.868C15.4439 2.868 18.2759 3.996 18.2759 5.58C18.2759 7.212 15.3239 8.34 11.0519 8.34C6.7079 8.34 3.8279 7.212 3.8279 5.58ZM14.6039 21.276L14.9399 21.612L17.6279 18.924L20.3159 21.612L20.6519 21.276L17.9639 18.588L20.6519 15.9L20.3159 15.564L17.6279 18.252L14.9399 15.564L14.6039 15.9L17.2919 18.588L14.6039 21.276Z" fill={color} /></svg>;
}

export default FullnodeErrorThin;