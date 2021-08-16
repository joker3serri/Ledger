import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function UsbUltraLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.988 22.32C12.924 22.32 13.692 21.552 13.692 20.616C13.692 19.824 13.14 19.152 12.42 18.96V15.024L16.764 13.656C17.532 13.416 18.012 12.792 18.012 12.024V8.25599H18.564V6.33599H16.62V8.25599H17.22V12.024C17.22 12.48 17.004 12.768 16.5 12.936L12.42 14.208V4.22399H13.524L11.964 1.67999L10.428 4.22399H11.58V15.984L7.64404 14.664C7.16404 14.52 6.94804 14.232 6.94804 13.752V9.98399C7.35604 9.83999 7.66804 9.43199 7.66804 8.95199C7.66804 8.35199 7.16404 7.84799 6.54004 7.84799C5.94004 7.84799 5.43604 8.35199 5.43604 8.95199C5.43604 9.43199 5.74804 9.83999 6.15604 9.98399V13.8C6.15604 14.568 6.63604 15.168 7.38004 15.408L11.58 16.8V18.96C10.836 19.152 10.284 19.824 10.284 20.616C10.284 21.552 11.052 22.32 11.988 22.32Z" fill={color} /></svg>;
}

export default UsbUltraLight;