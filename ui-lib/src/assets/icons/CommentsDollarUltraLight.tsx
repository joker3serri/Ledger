import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function CommentsDollarUltraLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.63989 4.8V17.472L6.62389 14.4H17.7119V4.8C17.7119 3.816 16.8719 3 15.9119 3H4.43989C3.45589 3 2.63989 3.816 2.63989 4.8ZM3.47989 15.768V4.8C3.47989 4.272 3.93589 3.816 4.48789 3.816H15.8639C16.4159 3.816 16.8719 4.272 16.8719 4.8V13.584H6.33589L3.47989 15.768ZM7.55989 16.128C7.55989 17.112 8.37589 17.928 9.35989 17.928H17.3759L21.3599 21V8.664C21.3599 7.656 20.5199 6.816 19.5359 6.816V7.656C20.0639 7.656 20.5199 8.136 20.5199 8.784V19.32L17.6639 17.136H9.50389C8.85589 17.136 8.39989 16.68 8.39989 16.128H7.55989ZM7.77589 9.504C7.77589 10.752 8.61589 11.568 9.81589 11.688V12.384H10.3919V11.712C11.5439 11.616 12.3839 10.896 12.3839 9.888C12.3839 8.976 11.7119 8.424 10.6799 8.304L10.3919 8.256V6.192C11.2079 6.264 11.6159 6.744 11.6159 7.584H12.2879C12.2879 6.456 11.5439 5.664 10.3919 5.568V4.848H9.81589V5.568C8.78389 5.688 8.01589 6.36 8.01589 7.272C8.01589 8.136 8.61589 8.664 9.57589 8.784L9.81589 8.808V11.04C8.90389 10.968 8.44789 10.464 8.42389 9.48L7.77589 9.504ZM8.66389 7.248C8.66389 6.648 9.09589 6.264 9.81589 6.192V8.184H9.71989C8.99989 8.088 8.66389 7.8 8.66389 7.248ZM10.3919 11.064V8.88L10.5359 8.904C11.3279 9 11.7119 9.312 11.7119 9.912C11.7119 10.584 11.2559 10.992 10.3919 11.064Z" fill={color} /></svg>;
}

export default CommentsDollarUltraLight;