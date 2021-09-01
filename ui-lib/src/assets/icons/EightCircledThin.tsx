import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function EightCircledThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 20.88C16.9681 20.88 20.8801 16.848 20.8801 12C20.8801 7.032 16.9681 3.12 12.0001 3.12C7.03212 3.12 3.12012 7.032 3.12012 12C3.12012 16.968 7.03212 20.88 12.0001 20.88ZM3.60012 12C3.60012 7.296 7.29612 3.6 12.0001 3.6C16.7041 3.6 20.4001 7.296 20.4001 12C20.4001 16.584 16.7041 20.4 12.0001 20.4C7.29612 20.4 3.60012 16.704 3.60012 12ZM8.88012 14.112C8.88012 15.6 10.1281 16.704 11.9761 16.704H12.0241C13.8721 16.704 15.1201 15.6 15.1201 14.112C15.1201 13.08 14.4961 12.24 13.4161 11.856V11.808C14.3521 11.448 14.9041 10.704 14.9041 9.768C14.9041 8.4 13.7281 7.344 12.0241 7.344H11.9761C10.2721 7.344 9.09612 8.4 9.09612 9.768C9.09612 10.704 9.64812 11.448 10.5841 11.808V11.856C9.50412 12.24 8.88012 13.08 8.88012 14.112ZM9.36012 14.136V14.088C9.36012 12.864 10.2721 12.072 11.9761 12.072H12.0241C13.7281 12.072 14.6401 12.864 14.6401 14.088V14.136C14.6401 15.384 13.6801 16.224 12.0241 16.224H11.9761C10.3201 16.224 9.36012 15.384 9.36012 14.136ZM9.57612 9.792V9.744C9.57612 8.592 10.4641 7.824 11.9761 7.824H12.0241C13.5361 7.824 14.4241 8.592 14.4241 9.744V9.792C14.4241 10.92 13.5841 11.64 12.0241 11.64H11.9761C10.4161 11.64 9.57612 10.92 9.57612 9.792Z"
        fill={color}
      />
    </svg>
  );
}

export default EightCircledThin;
