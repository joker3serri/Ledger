import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function CloudDownloadRegular({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9881 15.876V17.364C20.4361 17.052 22.2121 15.084 22.2121 12.66C22.2121 10.308 20.5081 8.45998 18.3001 8.05198C17.8921 5.24398 15.3721 3.20398 12.5161 3.20398C10.4041 3.20398 8.46009 4.30798 7.45209 6.10798C4.45209 6.15598 1.78809 8.55598 1.78809 11.748C1.78809 14.244 3.42009 16.38 5.82009 17.148V15.54C4.35609 14.916 3.34809 13.476 3.34809 11.748C3.34809 9.03598 5.91609 7.06798 8.48409 7.71598C8.98809 5.84398 10.6441 4.66798 12.5161 4.66798C15.0121 4.66798 17.1481 6.75598 16.7641 9.46798C18.8281 9.17998 20.6521 10.572 20.6521 12.66C20.6521 14.268 19.5481 15.588 17.9881 15.876ZM7.62009 16.452L11.9881 20.796L16.3321 16.452L15.3481 15.492L14.1001 16.74C13.6441 17.196 13.1881 17.676 12.7321 18.156V11.436H11.2441V18.18C10.7881 17.7 10.3321 17.196 9.87609 16.74L8.60409 15.492L7.62009 16.452Z" fill={color} /></svg>;
}

export default CloudDownloadRegular;