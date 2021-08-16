import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function FullnodeUltraLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9999 21.192C16.3439 21.192 19.7039 19.92 19.7039 17.808V6.144C19.7039 4.08 16.4639 2.808 11.9999 2.808C7.6559 2.808 4.2959 4.056 4.2959 6.144V17.808C4.2959 19.896 7.5839 21.192 11.9999 21.192ZM5.1359 17.808V15.456C6.2639 16.608 8.8319 17.28 11.9999 17.28C15.1199 17.28 17.7119 16.584 18.8639 15.456V17.808C18.8639 19.272 16.1279 20.328 11.9999 20.328C7.7999 20.328 5.1359 19.272 5.1359 17.808ZM5.1359 13.944V11.592C6.2639 12.744 8.8319 13.416 11.9999 13.416C15.1199 13.416 17.7119 12.744 18.8639 11.568V13.944C18.8639 15.384 16.1279 16.512 11.9999 16.512C7.7999 16.512 5.1359 15.384 5.1359 13.944ZM5.1359 10.032V7.704C6.2639 8.856 8.8319 9.504 11.9999 9.504C15.1199 9.504 17.7119 8.856 18.8639 7.704V10.032C18.8639 11.52 16.1279 12.648 11.9999 12.648C7.7999 12.648 5.1359 11.52 5.1359 10.032ZM5.1359 6.144C5.1359 4.704 7.8719 3.648 11.9999 3.648C16.2479 3.648 18.8639 4.704 18.8639 6.144C18.8639 7.656 16.1279 8.736 11.9999 8.736C7.7999 8.736 5.1359 7.656 5.1359 6.144Z" fill={color} /></svg>;
}

export default FullnodeUltraLight;