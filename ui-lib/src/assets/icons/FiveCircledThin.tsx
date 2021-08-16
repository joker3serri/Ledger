import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function FiveCircledThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0001 20.88C16.9681 20.88 20.8801 16.848 20.8801 12C20.8801 7.032 16.9681 3.12 12.0001 3.12C7.03212 3.12 3.12012 7.032 3.12012 12C3.12012 16.968 7.03212 20.88 12.0001 20.88ZM3.60012 12C3.60012 7.296 7.29612 3.6 12.0001 3.6C16.7041 3.6 20.4001 7.296 20.4001 12C20.4001 16.584 16.7041 20.4 12.0001 20.4C7.29612 20.4 3.60012 16.704 3.60012 12ZM8.92812 13.752C8.92812 15.384 10.1041 16.704 12.0001 16.704C13.8961 16.704 15.0721 15.384 15.0721 13.608C15.0721 11.784 13.8241 10.512 12.0721 10.512C11.1121 10.512 10.3201 10.944 9.84012 11.64H9.81612L10.1521 8.064H14.5681V7.584H9.72012L9.24012 12.744H9.72012C10.0321 11.688 10.8001 10.992 12.0481 10.992H12.0961C13.6321 10.992 14.5921 12 14.5921 13.584V13.632C14.5921 15.216 13.6801 16.224 12.0241 16.224H11.9761C10.3201 16.224 9.40812 15.192 9.40812 13.752H8.92812Z" fill={color} /></svg>;
}

export default FiveCircledThin;