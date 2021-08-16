import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function UnfreezeMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7122 22.0079L22.0082 20.7119L3.28819 1.99194L1.99219 3.28794L9.79219 11.0639L7.60819 11.0399L5.06419 8.49594L3.96019 9.59994L5.47219 11.1119L2.76019 11.0399V12.7199L5.47219 12.6479L3.96019 14.1599L5.06419 15.2639L7.60819 12.7199L10.2482 12.6959L5.30419 17.5919L6.40819 18.6959L11.3042 13.7519L11.2802 16.3919L8.73619 18.9359L9.84019 20.0399L11.3522 18.5279L11.2802 21.2399H12.9602L12.8882 18.5279L14.4002 20.0399L15.5042 18.9359L12.9602 16.3919L12.9362 14.2079L20.7122 22.0079ZM8.73619 4.82394L12.9362 9.02394L12.9602 7.36794L15.5042 4.82394L14.4002 3.71994L12.8882 5.23194L12.9602 2.51994H11.2802L11.3522 5.23194L9.84019 3.71994L8.73619 4.82394ZM13.4162 9.50394L14.4962 10.5839L18.9362 6.16794L17.8322 5.06394L13.4162 9.50394ZM14.9762 11.0639L19.1762 15.2639L20.2802 14.1599L18.7682 12.6479L21.4802 12.7199V11.0399L18.7682 11.1119L20.2802 9.59994L19.1762 8.49594L16.6322 11.0399L14.9762 11.0639Z" fill={color} /></svg>;
}

export default UnfreezeMedium;