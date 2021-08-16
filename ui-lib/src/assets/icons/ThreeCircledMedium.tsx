import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ThreeCircledMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0001 21.3599C17.2561 21.3599 21.3601 17.0879 21.3601 11.9999C21.3601 6.76789 17.2321 2.63989 12.0001 2.63989C6.76814 2.63989 2.64014 6.76789 2.64014 11.9999C2.64014 17.2319 6.76814 21.3599 12.0001 21.3599ZM4.56014 11.9999C4.56014 7.82389 7.82414 4.55989 12.0001 4.55989C16.1761 4.55989 19.4401 7.82389 19.4401 11.9999C19.4401 16.0559 16.1761 19.4399 12.0001 19.4399C7.82414 19.4399 4.56014 16.1759 4.56014 11.9999ZM8.49614 13.6799C8.49614 15.4079 9.96014 16.6799 12.0001 16.6799C14.0161 16.6799 15.5281 15.5039 15.5281 13.9679C15.5281 13.0079 14.9041 12.2399 14.0881 11.9999V11.6639C14.7361 11.3999 15.2161 10.7279 15.2161 9.91189C15.2161 8.47189 13.7761 7.31989 12.0001 7.31989C10.1041 7.31989 8.64014 8.56789 8.64014 10.1279V10.2959H10.5361C10.5361 9.23989 10.7761 8.99989 11.9761 8.99989C13.1041 8.99989 13.3441 9.21589 13.3441 10.1039C13.3441 11.0159 13.1521 11.1119 12.1921 11.1119H11.1601V12.7919H12.2161C13.2961 12.7919 13.5601 12.9839 13.5601 13.8959C13.5601 14.8079 13.2721 14.9999 11.9761 14.9999C10.6801 14.9999 10.4401 14.7839 10.4401 13.5599H8.49614V13.6799Z" fill={color} /></svg>;
}

export default ThreeCircledMedium;