import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function NineCircledLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9999 21.12C17.1119 21.12 21.1199 16.968 21.1199 12C21.1199 6.912 17.0879 2.88 11.9999 2.88C6.91188 2.88 2.87988 6.912 2.87988 12C2.87988 17.088 6.91188 21.12 11.9999 21.12ZM4.07988 12C4.07988 7.56 7.55988 4.08 11.9999 4.08C16.4399 4.08 19.9199 7.56 19.9199 12C19.9199 16.32 16.4399 19.92 11.9999 19.92C7.55988 19.92 4.07988 16.44 4.07988 12ZM8.87988 13.896C9.04788 15.6 10.3439 16.704 12.0719 16.704C14.3279 16.704 15.5999 14.832 15.5759 11.904C15.5519 9.04801 14.2559 7.34401 12.0719 7.34401C10.3439 7.34401 8.95188 8.664 8.95188 10.464C8.95188 12.216 10.2239 13.512 11.9279 13.512C12.9839 13.512 13.8719 12.984 14.2319 12.096H14.3759C14.4479 14.16 13.8719 15.624 12.0479 15.624C10.8719 15.624 10.1999 15.048 10.0799 13.896H8.87988ZM10.1279 10.632V10.224C10.1279 9.096 10.7999 8.42401 12.0479 8.42401H12.1919C13.4639 8.42401 14.1119 9.168 14.1119 10.224V10.632C14.1119 11.76 13.4399 12.432 12.1919 12.432H12.0479C10.7999 12.432 10.1279 11.76 10.1279 10.632Z" fill={color} /></svg>;
}

export default NineCircledLight;