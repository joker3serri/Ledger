import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function HandHoldingCoinLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.95583 20.2708C9.10783 20.9188 10.5238 20.9668 12.1558 20.2228L20.8438 16.1668C21.5158 15.8548 21.9718 15.1588 21.9718 14.3428C21.9718 13.2628 21.0598 12.4468 20.0518 12.4468C19.7638 12.4468 19.5958 12.4948 18.9958 12.7588L18.8998 12.5668C18.4198 11.6308 17.3158 11.2708 16.3798 11.7028L14.1238 12.6868C14.3878 12.9028 14.6278 13.2148 14.7718 13.5748L16.8358 12.6868C17.2678 12.4948 17.7718 12.6628 17.9638 13.1188L18.0598 13.3588L13.4518 15.4228C13.7398 14.5108 13.2838 13.5268 12.4198 13.1428L8.72383 11.4388C6.25183 10.2868 3.94783 10.6948 2.02783 12.8548V18.6388H3.17983V13.2868C4.66783 11.7988 6.32383 11.5828 8.24383 12.4708L11.9398 14.1748C12.2518 14.3188 12.4678 14.6548 12.4678 15.0148C12.4678 15.6628 11.7478 16.1188 11.1718 15.8548L7.88383 14.3188L7.47583 15.1828L10.9078 16.7908C11.5318 17.0788 12.2278 17.0308 13.2598 16.5748L19.7158 13.6468C20.2438 13.4068 20.8438 13.7908 20.8438 14.3428C20.8438 14.6788 20.6518 14.9908 20.3638 15.1348L11.6758 19.1668C10.4518 19.7428 9.41983 19.7668 8.50783 19.2628L6.05983 17.8948L5.50783 18.9028L7.95583 20.2708ZM9.05983 6.27877C9.05983 7.98277 10.4278 9.35077 12.1078 9.35077C13.8118 9.35077 15.1798 7.98277 15.1798 6.27877C15.1798 4.59877 13.8118 3.23077 12.1078 3.23077C10.4278 3.23077 9.05983 4.59877 9.05983 6.27877ZM10.1398 6.27877C10.1398 5.19877 11.0278 4.31077 12.1078 4.31077C13.2118 4.31077 14.0998 5.19877 14.0998 6.27877C14.0998 7.38277 13.2118 8.27077 12.1078 8.27077C11.0278 8.27077 10.1398 7.38277 10.1398 6.27877Z"
        fill={color}
      />
    </svg>
  );
}

export default HandHoldingCoinLight;
