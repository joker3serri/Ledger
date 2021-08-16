import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function LayersLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0002 12.144L21.8402 7.488L12.0002 2.88L2.16016 7.488L12.0002 12.144ZM2.16016 16.488L12.0002 21.12L21.8402 16.488L20.4962 15.84L12.0002 19.824L3.52816 15.84L2.16016 16.488ZM2.16016 12L12.0002 16.632L21.8402 12L20.4962 11.352L12.0002 15.336L3.52816 11.352L2.16016 12ZM4.89616 7.488L12.0002 4.176L19.1042 7.488L12.0002 10.848L4.89616 7.488Z" fill={color} /></svg>;
}

export default LayersLight;