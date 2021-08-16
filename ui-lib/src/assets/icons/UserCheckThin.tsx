import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function UserCheckThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.31201 19.08V21.12H17.856V18.36L17.376 18.84V20.64H3.79201V19.08C3.79201 16.464 5.92801 14.4 8.54401 14.4H9.74401L9.26401 13.92H8.54401C6.88801 13.92 5.35201 14.736 4.39201 15.984C3.72001 16.848 3.31201 17.928 3.31201 19.08ZM6.33601 7.12801C6.33601 9.48 8.23201 11.376 10.584 11.376C12.936 11.376 14.832 9.48 14.832 7.12801C14.832 4.776 12.936 2.88 10.584 2.88C8.23201 2.88 6.33601 4.776 6.33601 7.12801ZM6.81601 7.12801C6.81601 5.04 8.49601 3.36 10.584 3.36C12.672 3.36 14.352 5.04 14.352 7.12801C14.352 9.216 12.672 10.896 10.584 10.896C8.49601 10.896 6.81601 9.216 6.81601 7.12801ZM12.12 13.92L15.24 17.04L20.688 11.592L20.352 11.256L15.24 16.368L12.456 13.584L12.12 13.92Z" fill={color} /></svg>;
}

export default UserCheckThin;