import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FullnodeErrorMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7521 20.7481H11.0401L13.0801 18.6841C12.4081 18.7801 11.6161 18.8281 10.7521 18.8281C6.9601 18.8281 4.9681 17.9881 4.9681 16.9561V15.7081C6.3121 16.4761 8.3761 16.9081 10.7521 16.9081C11.2321 16.9081 11.7121 16.8841 12.1681 16.8601L11.3521 16.0201L12.1921 15.1801C11.7361 15.2041 11.2561 15.2281 10.7521 15.2281C7.0081 15.2281 4.9681 14.3401 4.9681 13.2361V11.9881C6.3121 12.7801 8.3761 13.2121 10.7521 13.2121C13.1041 13.2121 15.1681 12.7801 16.5361 11.9881V13.5001L17.4241 14.3641L18.4561 13.3321V5.79608C18.4561 3.34808 15.1201 2.02808 10.7521 2.02808C6.5041 2.02808 3.0481 3.34808 3.0481 5.79608V16.9561C3.0481 19.4041 6.4321 20.7481 10.7521 20.7481ZM4.9681 9.51608V8.29208C6.3121 9.06008 8.3761 9.49208 10.7521 9.49208C13.0801 9.49208 15.1681 9.06008 16.5361 8.26808V9.51608C16.5361 10.6201 14.4241 11.5321 10.7521 11.5321C7.0081 11.5321 4.9681 10.6201 4.9681 9.51608ZM4.9681 5.79608C4.9681 4.78808 7.0321 3.94808 10.7521 3.94808C14.5921 3.94808 16.5361 4.76408 16.5361 5.79608C16.5361 6.92408 14.4241 7.81208 10.7521 7.81208C7.0081 7.81208 4.9681 6.92408 4.9681 5.79608ZM13.9441 20.6761L15.2401 21.9721L17.4481 19.7641L19.6561 21.9721L20.9521 20.6761L18.7441 18.4681L20.9521 16.2601L19.6561 14.9641L17.4481 17.1721L15.2401 14.9641L13.9441 16.2601L16.1521 18.4681L13.9441 20.6761Z"
        fill={color}
      />
    </svg>
  );
}

export default FullnodeErrorMedium;
