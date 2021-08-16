import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function UserSecretThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.72803 19.272V21.36H19.272V19.272C19.272 17.304 18.096 15.552 16.368 14.712V11.112H7.63203V14.712C5.90403 15.576 4.72803 17.304 4.72803 19.272ZM5.20803 20.88V19.272C5.20803 17.352 6.33603 15.792 8.11203 15.024V11.592H11.76V20.88H5.20803ZM5.76003 6.86402H18.24V6.38402H15.72V4.17601C15.72 3.31201 15.048 2.64001 14.184 2.64001H9.81603C8.95203 2.64001 8.28003 3.31201 8.28003 4.17601V6.38402H5.76003V6.86402ZM8.64003 8.61601C8.64003 9.40802 9.28803 10.056 10.08 10.056C10.8 10.056 11.376 9.52802 11.496 8.85602H12.48C12.6 9.52802 13.176 10.056 13.896 10.056C14.688 10.056 15.336 9.40802 15.336 8.61601C15.336 7.82402 14.688 7.17601 13.896 7.17601C13.176 7.17601 12.6 7.70402 12.48 8.37602H11.496C11.376 7.70402 10.8 7.17601 10.08 7.17601C9.28803 7.17601 8.64003 7.82402 8.64003 8.61601ZM8.76003 6.38402V4.17601C8.76003 3.50401 9.14403 3.12001 9.81603 3.12001H14.184C14.856 3.12001 15.24 3.50401 15.24 4.17601V6.38402H8.76003ZM9.12003 8.61601C9.12003 8.08802 9.55203 7.65601 10.08 7.65601C10.608 7.65601 11.04 8.08802 11.04 8.61601C11.04 9.14402 10.608 9.57602 10.08 9.57602C9.55203 9.57602 9.12003 9.14402 9.12003 8.61601ZM12.24 20.88V11.592H15.888V15.024C17.664 15.768 18.792 17.352 18.792 19.272V20.88H12.24ZM12.936 8.61601C12.936 8.08802 13.368 7.65601 13.896 7.65601C14.424 7.65601 14.856 8.08802 14.856 8.61601C14.856 9.14402 14.424 9.57602 13.896 9.57602C13.368 9.57602 12.936 9.14402 12.936 8.61601Z" fill={color} /></svg>;
}

export default UserSecretThin;