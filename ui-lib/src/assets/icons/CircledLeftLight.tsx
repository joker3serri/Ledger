import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function CircledLeftLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0639 16.344L11.8319 15.576L10.4399 14.184C9.91188 13.656 9.35988 13.104 8.78388 12.576H17.0399V11.424H8.75988C9.33588 10.872 9.88788 10.344 10.4399 9.79201L11.8319 8.4L11.0639 7.632L6.71988 12L11.0639 16.344ZM2.87988 12C2.87988 17.088 6.91188 21.12 11.9999 21.12C17.1119 21.12 21.1199 16.968 21.1199 12C21.1199 6.912 17.0879 2.88 11.9999 2.88C6.91188 2.88 2.87988 6.912 2.87988 12ZM4.07988 12C4.07988 7.56 7.55988 4.08 11.9999 4.08C16.4399 4.08 19.9199 7.56 19.9199 12C19.9199 16.32 16.4399 19.92 11.9999 19.92C7.55988 19.92 4.07988 16.44 4.07988 12Z" fill={color} /></svg>;
}

export default CircledLeftLight;