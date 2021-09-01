import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LifeRingThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 15.36C10.1281 15.36 8.64012 13.872 8.64012 12C8.64012 10.128 10.1281 8.64 12.0001 8.64C13.8721 8.64 15.3601 10.128 15.3601 12C15.3601 13.872 13.8721 15.36 12.0001 15.36ZM3.12012 12C3.12012 16.968 7.03212 20.88 12.0001 20.88C16.9681 20.88 20.8801 16.848 20.8801 12C20.8801 7.032 16.9681 3.12 12.0001 3.12C7.03212 3.12 3.12012 7.032 3.12012 12ZM3.60012 12C3.60012 9.744 4.46412 7.704 5.88012 6.216L9.12012 9.456C8.52012 10.128 8.16012 11.016 8.16012 12C8.16012 12.984 8.52012 13.872 9.12012 14.544L5.88012 17.784C4.46412 16.296 3.60012 14.256 3.60012 12ZM6.21612 18.12L9.45612 14.88C10.1281 15.48 11.0161 15.84 12.0001 15.84C12.9841 15.84 13.8721 15.48 14.5441 14.88L17.7601 18.096C16.2721 19.536 14.2561 20.4 12.0001 20.4C9.74412 20.4 7.70412 19.536 6.21612 18.12ZM6.21612 5.88C7.70412 4.464 9.74412 3.6 12.0001 3.6C14.2561 3.6 16.2961 4.464 17.7841 5.88L14.5441 9.12C13.8721 8.52 12.9841 8.16 12.0001 8.16C11.0161 8.16 10.1281 8.52 9.45612 9.12L6.21612 5.88ZM14.8801 14.544C15.4801 13.872 15.8401 12.984 15.8401 12C15.8401 11.016 15.4801 10.128 14.8801 9.456L18.1201 6.216C19.5361 7.704 20.4001 9.744 20.4001 12C20.4001 14.208 19.5361 16.248 18.0961 17.76L14.8801 14.544Z"
        fill={color}
      />
    </svg>
  );
}

export default LifeRingThin;
