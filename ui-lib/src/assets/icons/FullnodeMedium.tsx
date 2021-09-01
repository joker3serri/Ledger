import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FullnodeMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 21.3599C16.2479 21.3599 19.7039 20.0159 19.7039 17.5679V6.40789C19.7039 3.95989 16.3679 2.63989 11.9999 2.63989C7.7519 2.63989 4.2959 3.95989 4.2959 6.40789V17.5679C4.2959 20.0159 7.6799 21.3599 11.9999 21.3599ZM6.2159 17.5679V16.3199C7.5599 17.0879 9.6239 17.5199 11.9999 17.5199C14.3519 17.5199 16.4159 17.0879 17.7839 16.2959V17.5679C17.7839 18.5759 15.7199 19.4399 11.9999 19.4399C8.2079 19.4399 6.2159 18.5999 6.2159 17.5679ZM6.2159 13.8479V12.5999C7.5599 13.3919 9.6239 13.8239 11.9999 13.8239C14.3519 13.8239 16.4159 13.3919 17.7839 12.5999V13.8479C17.7839 14.9519 15.6719 15.8399 11.9999 15.8399C8.2559 15.8399 6.2159 14.9519 6.2159 13.8479ZM6.2159 10.1279V8.90389C7.5599 9.67189 9.6239 10.1039 11.9999 10.1039C14.3279 10.1039 16.4159 9.67189 17.7839 8.87989V10.1279C17.7839 11.2319 15.6719 12.1439 11.9999 12.1439C8.2559 12.1439 6.2159 11.2319 6.2159 10.1279ZM6.2159 6.40789C6.2159 5.39989 8.2799 4.55989 11.9999 4.55989C15.8399 4.55989 17.7839 5.37589 17.7839 6.40789C17.7839 7.53589 15.6719 8.42389 11.9999 8.42389C8.2559 8.42389 6.2159 7.53589 6.2159 6.40789Z"
        fill={color}
      />
    </svg>
  );
}

export default FullnodeMedium;
