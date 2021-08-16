import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function HandHoldingCoinUltraLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9078 19.9126C9.1078 20.5846 10.5958 20.5846 12.2038 19.8406L20.8198 15.7846C21.3718 15.5446 21.8038 14.9206 21.8038 14.2246C21.8038 13.2886 21.0118 12.5926 20.1718 12.5926C19.8598 12.5926 19.6918 12.6646 18.8998 13.0246L18.7798 12.8086C18.3718 11.9686 17.3878 11.6326 16.5478 11.9926L13.9078 13.1446C14.0998 13.2886 14.2678 13.5286 14.3638 13.7926L16.8598 12.7126C17.3398 12.4966 17.8918 12.6886 18.1078 13.1686L18.2038 13.4086L12.9958 15.7846C13.4038 14.9206 13.0198 13.9126 12.1798 13.5286L8.6278 11.8966C6.2278 10.7926 4.0438 11.1286 2.1958 13.1686V18.5206H3.0118V13.4806C4.5478 11.9446 6.2758 11.7046 8.2918 12.6166L11.8438 14.2486C12.1558 14.3926 12.3958 14.7526 12.3958 15.1366C12.3958 15.8086 11.6518 16.2886 11.0518 16.0006L7.6438 14.4406L7.3558 15.0886L10.7398 16.6726C11.4358 16.9846 12.1318 16.9606 13.2358 16.4566L19.7878 13.4806C20.3398 13.2406 20.9878 13.6246 20.9878 14.2246C20.9878 14.5606 20.7958 14.9206 20.5078 15.0406L11.8678 19.0966C10.5238 19.7206 9.2998 19.7686 8.3158 19.2166L5.9878 17.9206L5.5798 18.6166L7.9078 19.9126ZM9.3718 6.40061C9.3718 7.93661 10.6198 9.18461 12.1558 9.18461C13.6918 9.18461 14.9398 7.93661 14.9398 6.40061C14.9398 4.84061 13.6918 3.59261 12.1558 3.59261C10.6198 3.59261 9.3718 4.84061 9.3718 6.40061ZM10.1398 6.40061C10.1398 5.27261 11.0518 4.38461 12.1558 4.38461C13.2598 4.38461 14.1718 5.27261 14.1718 6.40061C14.1718 7.50461 13.2598 8.39261 12.1558 8.39261C11.0518 8.39261 10.1398 7.50461 10.1398 6.40061Z" fill={color} /></svg>;
}

export default HandHoldingCoinUltraLight;