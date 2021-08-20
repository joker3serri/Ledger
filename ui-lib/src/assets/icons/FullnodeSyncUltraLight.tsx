import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FullnodeSyncUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.776 20.604C11.136 20.604 11.472 20.58 11.808 20.58L10.968 19.74C10.728 19.74 10.488 19.74 10.248 19.716C6.38402 19.668 3.91202 18.612 3.91202 17.22V14.892C5.04002 16.02 7.60802 16.692 10.776 16.692C11.232 16.692 11.64 16.668 12.048 16.668L12.648 16.188L13.104 16.524C15.12 16.284 16.728 15.732 17.64 14.94V15.756L18.48 14.916V5.556C18.48 3.492 15.24 2.22 10.776 2.22C6.43202 2.22 3.07202 3.492 3.07202 5.556V17.22C3.07202 19.308 6.36002 20.628 10.776 20.604ZM3.91202 13.356V11.004C5.04002 12.156 7.60802 12.828 10.776 12.828C13.896 12.828 16.488 12.156 17.64 10.98V13.356C17.64 14.94 14.376 15.924 10.776 15.924C6.57602 15.924 3.91202 14.796 3.91202 13.356ZM3.91202 9.444V7.116C5.04002 8.268 7.60802 8.916 10.776 8.916C13.896 8.916 16.488 8.268 17.64 7.116V9.444C17.64 10.932 14.904 12.06 10.776 12.06C6.57602 12.06 3.91202 10.932 3.91202 9.444ZM3.91202 5.556C3.91202 4.116 6.64802 3.06 10.776 3.06C15.024 3.06 17.64 4.116 17.64 5.556C17.64 7.068 14.904 8.148 10.776 8.148C6.57602 8.148 3.91202 7.068 3.91202 5.556ZM12.264 18.588L15.432 21.78L20.928 16.26L20.352 15.684L15.432 20.604L12.84 18.012L12.264 18.588Z"
        fill={color}
      />
    </svg>
  );
}

export default FullnodeSyncUltraLight;
