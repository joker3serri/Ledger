import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LinkNoneThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.232 20.568L20.568 20.232L3.76804 3.43198L3.43204 3.76798L20.232 20.568ZM4.29604 19.704C5.83204 21.24 8.32804 21.24 9.88804 19.704L13.392 16.224L13.056 15.888L9.55204 19.368C8.18404 20.712 5.97604 20.712 4.63204 19.368C3.28804 18.024 3.28804 15.816 4.63204 14.448L8.11204 10.944L7.77604 10.608L4.29604 14.112C2.76004 15.672 2.76004 18.168 4.29604 19.704ZM10.608 7.77598L10.944 8.11198L14.448 4.63198C15.816 3.28798 18.024 3.28798 19.368 4.63198C20.712 5.97598 20.712 8.18398 19.368 9.55198L15.888 13.056L16.224 13.392L19.704 9.88798C21.24 8.32798 21.24 5.83198 19.704 4.29598C18.168 2.75998 15.672 2.75998 14.112 4.29598L10.608 7.77598Z"
        fill={color}
      />
    </svg>
  );
}

export default LinkNoneThin;
