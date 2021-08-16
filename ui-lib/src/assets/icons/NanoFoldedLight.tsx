import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function NanoFoldedLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.04004 21.144H18.096C20.208 21.144 21.96 19.392 21.96 17.256C21.96 16.152 21.528 15.216 20.76 14.424L9.19204 2.85602L3.81604 8.20802L9.00004 13.392H2.04004V21.144ZM3.19204 19.992V14.52H18.096C19.608 14.52 20.832 15.744 20.832 17.256C20.832 18.792 19.608 19.992 18.096 19.992H3.19204ZM5.42404 8.20802L9.19204 4.46402L18.144 13.44C17.88 13.416 17.592 13.392 17.328 13.392H10.608L5.42404 8.20802ZM16.44 17.256C16.44 18.072 17.112 18.792 17.976 18.792C18.816 18.792 19.488 18.072 19.488 17.256C19.488 16.416 18.816 15.744 17.976 15.744C17.112 15.744 16.44 16.416 16.44 17.256Z" fill={color} /></svg>;
}

export default NanoFoldedLight;