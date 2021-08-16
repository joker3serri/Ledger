import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function UnfreezeRegular({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.844 21.876L21.876 20.844L3.15602 2.12402L2.12402 3.15602L10.188 11.244L7.52402 11.22L4.93202 8.62802L4.02002 9.54002L5.77202 11.268L2.72402 11.22V12.612L5.77202 12.54L4.02002 14.292L4.93202 15.204L7.52402 12.612L10.548 12.588L5.36402 17.724L6.27602 18.636L11.412 13.452L11.388 16.476L8.79602 19.068L9.70802 19.98L11.46 18.228L11.388 21.276H12.78L12.732 18.228L14.46 19.98L15.372 19.068L12.78 16.476L12.756 13.812L20.844 21.876ZM8.79602 4.76402L12.756 8.72402L12.78 7.35602L15.372 4.76402L14.46 3.85202L12.732 5.60402L12.78 2.55602H11.388L11.46 5.60402L9.70802 3.85202L8.79602 4.76402ZM13.572 9.54002L14.46 10.428L18.804 6.10802L17.892 5.19602L13.572 9.54002ZM15.276 11.244L19.236 15.204L20.148 14.292L18.396 12.54L21.444 12.612V11.22L18.396 11.268L20.148 9.54002L19.236 8.62802L16.644 11.22L15.276 11.244Z" fill={color} /></svg>;
}

export default UnfreezeRegular;