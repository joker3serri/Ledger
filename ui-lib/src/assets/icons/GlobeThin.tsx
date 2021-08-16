import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function GlobeThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0001 20.88C17.0161 20.88 20.8801 16.824 20.8801 12C20.8801 7.032 16.9921 3.12 12.0001 3.12C7.00812 3.12 3.12012 7.032 3.12012 12C3.12012 16.968 7.00812 20.88 12.0001 20.88ZM3.60012 12.24H7.00812C7.03212 14.04 7.34412 15.696 7.87212 17.064H5.23212C4.24812 15.72 3.64812 14.064 3.60012 12.24ZM3.60012 11.76C3.64812 9.936 4.24812 8.28 5.23212 6.936H7.87212C7.34412 8.304 7.03212 9.96 7.00812 11.76H3.60012ZM5.59212 17.544H8.06412C8.59212 18.744 9.31212 19.704 10.1521 20.256C8.32812 19.872 6.74412 18.888 5.59212 17.544ZM5.59212 6.456C6.74412 5.112 8.32812 4.128 10.1521 3.744C9.31212 4.296 8.59212 5.256 8.06412 6.456H5.59212ZM7.48812 12.24H11.7601V17.064H8.37612C7.82412 15.72 7.51212 14.064 7.48812 12.24ZM7.48812 11.76C7.51212 9.936 7.82412 8.28 8.37612 6.936H11.7601V11.76H7.48812ZM8.56812 17.544H11.7601V20.448C10.4641 20.328 9.33612 19.224 8.56812 17.544ZM8.56812 6.456C9.33612 4.776 10.4641 3.672 11.7601 3.552V6.456H8.56812ZM12.2401 20.448V17.544H15.4321C14.6641 19.224 13.5361 20.328 12.2401 20.448ZM12.2401 17.064V12.24H16.5121C16.4881 14.064 16.1761 15.72 15.6241 17.064H12.2401ZM12.2401 11.76V6.936H15.6241C16.1761 8.28 16.4881 9.936 16.5121 11.76H12.2401ZM12.2401 6.456V3.552C13.5361 3.672 14.6641 4.776 15.4321 6.456H12.2401ZM13.8481 3.744C15.6721 4.128 17.2561 5.112 18.4081 6.456H15.9361C15.4081 5.256 14.6881 4.296 13.8481 3.744ZM13.8481 20.232C14.6881 19.68 15.4081 18.744 15.9361 17.544H18.3601C17.2081 18.864 15.6481 19.848 13.8481 20.232ZM16.1281 17.064C16.6561 15.696 16.9681 14.04 16.9921 12.24H20.4001C20.3521 14.04 19.7281 15.696 18.7441 17.064H16.1281ZM16.1281 6.936H18.7681C19.7521 8.28 20.3521 9.936 20.4001 11.76H16.9921C16.9681 9.96 16.6561 8.304 16.1281 6.936Z" fill={color} /></svg>;
}

export default GlobeThin;