import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function CommentsThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.63989 5.00398V17.316L6.45589 14.364H17.7599V5.00398C17.7599 4.01998 16.9439 3.20398 15.9599 3.20398H4.43989C3.45589 3.20398 2.63989 4.01998 2.63989 5.00398ZM3.11989 16.332V5.00398C3.11989 4.28398 3.71989 3.68398 4.43989 3.68398H15.9599C16.6799 3.68398 17.2799 4.28398 17.2799 5.00398V13.884H6.28789L3.11989 16.332ZM7.43989 16.044C7.43989 17.028 8.25589 17.844 9.23989 17.844H17.5199L21.3599 20.796V8.74798C21.3599 7.76398 20.5439 6.94798 19.5599 6.94798V7.42798C20.2799 7.42798 20.8799 8.02798 20.8799 8.74798V19.812L17.6879 17.364H9.23989C8.51989 17.364 7.91989 16.764 7.91989 16.044H7.43989Z" fill={color} /></svg>;
}

export default CommentsThin;