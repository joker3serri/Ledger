import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function LinkLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2001 13.8C11.9761 15.552 14.8081 15.576 16.5601 13.8L19.9921 10.368C21.7441 8.61597 21.7441 5.75997 19.9921 4.00797C18.2401 2.25597 15.3841 2.25597 13.6321 4.00797L11.0881 6.52797L11.9761 7.41597L14.5441 4.89597C16.0081 3.40797 17.6401 3.43197 19.1041 4.89597C20.5921 6.38397 20.5921 7.99197 19.1041 9.45597L15.6721 12.888C14.1841 14.4 12.5521 14.424 11.0641 12.936L10.3201 12.24L9.48009 13.104L10.2001 13.8ZM4.00809 19.992C5.76009 21.744 8.61609 21.744 10.3681 19.992L12.9121 17.472L12.0241 16.56L9.48009 19.08C7.99209 20.592 6.38409 20.568 4.92009 19.08C3.43209 17.616 3.40809 15.984 4.92009 14.52L8.35209 11.088C9.81609 9.57597 11.4721 9.57597 12.9601 11.04L13.7041 11.76L14.5201 10.896L13.8001 10.2C12.0241 8.44797 9.19209 8.42397 7.44009 10.2L4.00809 13.632C2.25609 15.384 2.25609 18.24 4.00809 19.992Z" fill={color} /></svg>;
}

export default LinkLight;