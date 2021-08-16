import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function CircledNorthEastLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.90388 15.912L14.7599 10.056C14.7359 10.848 14.7119 11.616 14.7119 12.408L14.7359 14.352H15.7919V8.208H9.64788V9.288H11.6159C12.3599 9.288 13.1519 9.288 13.9199 9.264L8.08788 15.096L8.90388 15.912ZM2.87988 12C2.87988 17.088 6.91188 21.12 11.9999 21.12C17.1119 21.12 21.1199 16.968 21.1199 12C21.1199 6.912 17.0879 2.88 11.9999 2.88C6.91188 2.88 2.87988 6.912 2.87988 12ZM4.07988 12C4.07988 7.56 7.55988 4.08 11.9999 4.08C16.4399 4.08 19.9199 7.56 19.9199 12C19.9199 16.32 16.4399 19.92 11.9999 19.92C7.55988 19.92 4.07988 16.44 4.07988 12Z" fill={color} /></svg>;
}

export default CircledNorthEastLight;