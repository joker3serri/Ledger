import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FullnodeSyncLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7399 20.616C11.0519 20.616 11.3639 20.616 11.6519 20.592L10.4759 19.392C10.2119 19.392 9.92389 19.368 9.68389 19.368C6.29989 19.224 4.23589 18.312 4.23589 17.112V15.12C5.43589 16.152 7.83589 16.728 10.7399 16.728C11.1239 16.728 11.5079 16.728 11.8679 16.704L12.8759 15.768L13.6199 16.44C15.1319 16.2 16.4039 15.768 17.2439 15.168V15.456L18.4439 14.256V5.61599C18.4439 3.40799 15.1799 2.13599 10.7399 2.13599C6.41989 2.13599 3.03589 3.40799 3.03589 5.61599V17.112C3.03589 19.32 6.37189 20.688 10.7399 20.616ZM4.23589 13.272V11.304C5.43589 12.336 7.83589 12.936 10.7399 12.936C13.5959 12.936 16.0199 12.336 17.2439 11.28V13.272C17.2439 14.928 13.6439 15.648 10.7399 15.648C6.70789 15.648 4.23589 14.616 4.23589 13.272ZM4.23589 9.43199V7.48799C5.43589 8.51999 7.83589 9.07199 10.7399 9.07199C13.5959 9.07199 16.0199 8.49599 17.2439 7.46399V9.43199C17.2439 10.8 14.6999 11.856 10.7399 11.856C6.70789 11.856 4.23589 10.8 4.23589 9.43199ZM4.23589 5.61599C4.23589 4.31999 6.73189 3.33599 10.7399 3.33599C14.8439 3.33599 17.2439 4.31999 17.2439 5.61599C17.2439 6.98399 14.6999 7.99199 10.7399 7.99199C6.70789 7.99199 4.23589 7.00799 4.23589 5.61599ZM12.1559 18.6L15.3959 21.864L20.9639 16.296L20.1239 15.456L15.3959 20.16L12.9959 17.76L12.1559 18.6Z"
        fill={color}
      />
    </svg>
  );
}

export default FullnodeSyncLight;
