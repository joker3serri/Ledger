import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function EightCircledInitUltraLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0439 16.704H13.0919C14.9879 16.704 16.3079 15.576 16.3079 14.088C16.3079 13.08 15.6839 12.24 14.6519 11.904V11.784C15.5399 11.448 16.0679 10.704 16.0679 9.816C16.0679 8.424 14.8199 7.344 13.0919 7.344H13.0439C11.3159 7.344 10.0679 8.424 10.0679 9.816C10.0679 10.728 10.5959 11.448 11.4839 11.784V11.904C10.4519 12.24 9.85187 13.08 9.85187 14.088C9.85187 15.576 11.1719 16.704 13.0439 16.704ZM4.06787 12C4.06787 17.04 8.02787 21 13.0679 21H19.9319V20.16H13.0679C8.50787 20.16 4.90787 16.56 4.90787 12C4.90787 7.536 8.50787 3.84 13.0679 3.84H19.9319V3H13.0679C8.02787 3 4.06787 7.08 4.06787 12ZM10.7159 14.16V13.968C10.7159 12.912 11.5079 12.24 13.0199 12.24H13.1159C14.6519 12.24 15.4439 12.912 15.4439 13.968V14.16C15.4439 15.24 14.6279 15.912 13.1159 15.912H13.0199C11.5319 15.912 10.7159 15.24 10.7159 14.16ZM10.9079 9.936V9.768C10.9079 8.76 11.6519 8.136 13.0199 8.136H13.1159C14.4839 8.136 15.2279 8.76 15.2279 9.768V9.936C15.2279 10.92 14.5079 11.52 13.1159 11.52H13.0199C11.6279 11.52 10.9079 10.92 10.9079 9.936Z" fill={color} /></svg>;
}

export default EightCircledInitUltraLight;