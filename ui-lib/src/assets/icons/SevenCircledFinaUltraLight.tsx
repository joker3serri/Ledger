import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function SevenCircledFinaUltraLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.46787 16.44H10.4279C10.7639 13.248 12.0359 10.608 14.1479 8.76V7.584H7.66787V8.352H13.1879V8.712C11.0759 10.728 9.82787 13.392 9.46787 16.44ZM4.06787 21H10.9319C15.9719 21 19.9319 16.896 19.9319 12C19.9319 6.96 15.9719 3 10.9319 3H4.06787V3.84H10.9319C15.5159 3.84 19.0919 7.416 19.0919 12C19.0919 16.44 15.5159 20.16 10.9319 20.16H4.06787V21Z" fill={color} /></svg>;
}

export default SevenCircledFinaUltraLight;