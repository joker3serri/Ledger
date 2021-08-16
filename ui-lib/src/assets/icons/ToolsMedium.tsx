import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ToolsMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.91993 21.9599C5.68793 21.9599 6.40793 21.6719 6.95993 21.1199L15.9359 12.1199C16.3199 12.1919 16.6799 12.2399 17.0399 12.2399C19.9439 12.2399 22.3199 9.86393 22.3199 6.95993C22.3199 4.05593 19.9439 1.67993 17.0399 1.67993C14.1359 1.67993 11.7599 4.05593 11.7599 6.95993C11.7599 7.31993 11.8079 7.67993 11.8799 8.06393L2.87993 17.0399C2.32793 17.5919 2.03993 18.3119 2.03993 19.0799C2.03993 20.6639 3.33593 21.9599 4.91993 21.9599ZM1.67993 5.99993L6.52793 10.8479L8.68793 8.68793L7.94393 7.94393L6.95993 8.90393L5.90393 7.84793L6.86393 6.86393L6.09593 6.09593L5.11193 7.05593L4.05593 5.99993L5.99993 4.05593L9.67193 7.72793L9.98393 7.41593C9.93593 6.55193 9.98393 6.14393 10.0559 5.73593L5.99993 1.67993L1.67993 5.99993ZM3.83993 19.0799C3.83993 18.7919 3.93593 18.5279 4.15193 18.3119L13.9439 8.54393C13.7039 8.06393 13.5599 7.53593 13.5599 6.95993C13.5599 5.03993 15.1199 3.47993 17.0399 3.47993C17.6399 3.47993 18.2159 3.64793 18.7199 3.91193L16.1999 6.45593L17.5439 7.79993L20.0879 5.27993C20.3519 5.78393 20.5199 6.35993 20.5199 6.95993C20.5199 8.87993 18.9599 10.4399 17.0399 10.4399C16.4639 10.4399 15.9359 10.2959 15.4559 10.0559L5.68793 19.8479C5.47193 20.0639 5.20793 20.1599 4.91993 20.1599C4.31993 20.1599 3.83993 19.6799 3.83993 19.0799ZM13.1519 17.4719L17.9999 22.3199L22.3199 17.9999L18.2639 13.9439C17.8559 14.0159 17.4479 14.0639 16.5839 14.0159L16.2719 14.3279L19.9439 17.9999L17.9999 19.9439L16.9439 18.8879L17.9039 17.9039L17.1359 17.1359L16.1519 18.0959L15.0959 17.0399L16.0559 16.0559L15.3119 15.3119L13.1519 17.4719Z" fill={color} /></svg>;
}

export default ToolsMedium;