import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function BuyCryptoAltThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0001 20.88C16.9681 20.88 20.8801 16.848 20.8801 12C20.8801 7.032 16.9681 3.12 12.0001 3.12C7.03212 3.12 3.12012 7.032 3.12012 12C3.12012 16.968 7.03212 20.88 12.0001 20.88ZM3.60012 12C3.60012 7.296 7.29612 3.6 12.0001 3.6C16.7041 3.6 20.4001 7.296 20.4001 12C20.4001 16.584 16.7041 20.4 12.0001 20.4C7.29612 20.4 3.60012 16.704 3.60012 12ZM8.40012 13.416C8.44812 15.456 9.76812 16.728 11.7601 16.824V17.976H12.2401V16.824C14.0641 16.728 15.3841 15.672 15.3841 14.112C15.3841 12.72 14.3281 11.928 12.7681 11.712L12.2401 11.64V7.608C13.8241 7.704 14.7361 8.688 14.7361 10.272H15.2161C15.2161 8.472 14.0401 7.224 12.2401 7.128V5.976H11.7601V7.128C10.1281 7.224 8.78412 8.232 8.78412 9.696C8.78412 11.016 9.72012 11.808 11.1601 12L11.7601 12.072V16.344C10.0081 16.248 8.92812 15.192 8.88012 13.416H8.40012ZM9.26412 9.696C9.26412 8.496 10.2961 7.704 11.7601 7.608V11.592L11.2081 11.52C9.93612 11.352 9.26412 10.752 9.26412 9.696ZM12.2401 16.344V12.144L12.7201 12.192C14.1121 12.384 14.9041 12.984 14.9041 14.112C14.9041 15.408 13.8481 16.272 12.2401 16.344Z" fill={color} /></svg>;
}

export default BuyCryptoAltThin;