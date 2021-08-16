import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function SettingsMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7119 22.2001L14.9759 19.0561C15.6239 18.792 16.1999 18.4561 16.7279 18.0721L19.6079 19.416L22.2239 14.856L19.6799 13.128C19.7279 12.7441 19.7519 12.384 19.7519 12C19.7519 11.616 19.7279 11.2561 19.6799 10.872L22.2239 9.14405L19.6079 4.60805L16.7759 5.92805C16.2239 5.52005 15.6239 5.18405 14.9759 4.94405L14.7119 1.80005H9.28788L9.02388 4.94405C8.37588 5.20805 7.79988 5.52005 7.24788 5.92805L4.41588 4.60805L1.77588 9.12005L4.36788 10.896C4.31988 11.2561 4.29588 11.616 4.29588 12C4.29588 12.384 4.31988 12.7441 4.36788 13.104L1.77588 14.88L4.41588 19.392L7.24788 18.0721C7.79988 18.4801 8.37588 18.792 9.02388 19.0561L9.28788 22.2001H14.7119ZM4.27188 15.408L6.52788 13.8481C6.28788 13.2 6.21588 12.696 6.21588 12C6.21588 11.304 6.28788 10.8 6.52788 10.1521L4.27188 8.59205L5.20788 6.98405L7.60788 8.11205C8.54388 7.12805 9.50388 6.55205 10.8479 6.28805L11.0639 3.60005H12.9359L13.1519 6.28805C14.5439 6.57605 15.4799 7.10405 16.4159 8.08805L18.7919 6.98405L19.7279 8.61605L17.5439 10.104C17.7599 10.824 17.8319 11.328 17.8319 12C17.8319 12.672 17.7599 13.1761 17.5439 13.896L19.7279 15.3841L18.7919 17.0161L16.3919 15.8881C15.4799 16.8481 14.5199 17.4001 13.1519 17.7361L12.9359 20.4001H11.0639L10.8479 17.7121C9.50388 17.4481 8.54388 16.8721 7.60788 15.8881L5.20788 17.0161L4.27188 15.408ZM8.39988 12C8.39988 13.9921 10.0079 15.6 11.9999 15.6C13.9919 15.6 15.5999 13.9921 15.5999 12C15.5999 10.008 13.9919 8.40005 11.9999 8.40005C10.0079 8.40005 8.39988 10.008 8.39988 12ZM10.0799 12C10.0799 10.944 10.9439 10.08 11.9999 10.08C13.0559 10.08 13.9199 10.944 13.9199 12C13.9199 13.056 13.0559 13.92 11.9999 13.92C10.9439 13.92 10.0799 13.056 10.0799 12Z" fill={color} /></svg>;
}

export default SettingsMedium;