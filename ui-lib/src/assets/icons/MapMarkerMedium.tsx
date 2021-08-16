import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function MapMarkerMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.48787 16.3201L11.9999 22.3681L16.5119 16.3201C18.1679 14.1361 19.5359 11.8321 19.5359 9.28808C19.5119 4.56008 15.8879 1.63208 11.9999 1.63208C8.11187 1.63208 4.48787 4.56008 4.46387 9.28808C4.46387 11.8321 5.83187 14.1361 7.48787 16.3201ZM6.38387 9.28808C6.40787 5.71208 9.09587 3.55208 11.9999 3.55208C14.9039 3.55208 17.5919 5.71208 17.6159 9.28808C17.6159 11.2321 16.5119 13.1281 14.9759 15.1681L11.9999 19.1521L9.02387 15.1681C7.48787 13.1281 6.38387 11.2321 6.38387 9.28808ZM8.39987 9.19208C8.39987 11.1841 10.0079 12.7921 11.9999 12.7921C13.9919 12.7921 15.5999 11.1841 15.5999 9.19208C15.5999 7.20008 13.9919 5.59208 11.9999 5.59208C10.0079 5.59208 8.39987 7.20008 8.39987 9.19208ZM10.0799 9.19208C10.0799 8.13608 10.9439 7.27208 11.9999 7.27208C13.0559 7.27208 13.9199 8.13608 13.9199 9.19208C13.9199 10.2481 13.0559 11.1121 11.9999 11.1121C10.9439 11.1121 10.0799 10.2481 10.0799 9.19208Z" fill={color} /></svg>;
}

export default MapMarkerMedium;