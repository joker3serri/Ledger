import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function HelpMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0161 13.5359H12.0001C14.6881 13.5359 15.8641 11.7599 15.8641 9.95989C15.8641 8.11189 14.5921 6.21589 12.1681 6.21589C10.0321 6.21589 8.44814 7.94389 8.44814 9.69589V9.88789H10.3681V9.43189C10.3681 8.35189 10.8001 8.01589 12.0001 8.01589H12.2881C13.5121 8.01589 13.9441 8.35189 13.9441 9.43189V10.7039C13.9441 11.6159 13.6081 11.8559 12.4321 11.8559H11.0161V13.5359ZM2.64014 11.9999C2.64014 17.2319 6.76814 21.3599 12.0001 21.3599C17.2561 21.3599 21.3601 17.0879 21.3601 11.9999C21.3601 6.76789 17.2321 2.63989 12.0001 2.63989C6.76814 2.63989 2.64014 6.76789 2.64014 11.9999ZM4.56014 11.9999C4.56014 7.82389 7.82414 4.55989 12.0001 4.55989C16.1761 4.55989 19.4401 7.82389 19.4401 11.9999C19.4401 16.0559 16.1761 19.4399 12.0001 19.4399C7.82414 19.4399 4.56014 16.1759 4.56014 11.9999ZM10.8481 17.2799H13.1521V14.9759H10.8481V17.2799Z"
        fill={color}
      />
    </svg>
  );
}

export default HelpMedium;
