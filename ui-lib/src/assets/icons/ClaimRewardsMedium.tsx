import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ClaimRewardsMedium({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.18418 18.3599H18.8162V16.6799H17.2322C19.1522 15.2159 20.2802 12.9599 20.2802 10.4399C20.2802 5.87991 16.5602 2.15991 12.0002 2.15991C7.44018 2.15991 3.72018 5.87991 3.72018 10.4399C3.72018 12.9599 4.84818 15.2159 6.76818 16.6799H5.18418V18.3599ZM1.68018 21.8399H22.3202V14.7599H20.4002V20.0399H3.60018V14.7599H1.68018V21.8399ZM5.64018 10.4399C5.64018 6.93591 8.49618 4.07991 12.0002 4.07991C15.5042 4.07991 18.3602 6.93591 18.3602 10.4399C18.3602 13.5359 16.1282 16.1039 13.2242 16.6799H10.7762C7.87218 16.1039 5.64018 13.5359 5.64018 10.4399ZM8.95218 11.4959C8.90418 12.9119 9.91218 13.9919 11.4002 14.2079V15.1679H12.6002V14.2079C14.0402 13.9919 15.0722 13.0079 15.0722 11.8079C15.0722 10.6319 14.2562 9.93591 12.8882 9.74391L11.6162 9.57591C10.8962 9.47991 10.6322 9.28791 10.6322 8.73591C10.6322 8.03991 11.0882 7.82391 12.0242 7.82391C13.0802 7.82391 13.3442 8.06391 13.3202 9.02391H14.9042C14.9042 7.77591 13.9202 6.76791 12.6002 6.52791V5.56791H11.4002V6.52791C10.0562 6.74391 9.16818 7.67991 9.16818 8.85591C9.16818 10.0079 9.88818 10.6799 11.1362 10.8239L12.3602 10.9679C13.2002 11.0639 13.4882 11.2799 13.4882 11.9039C13.4882 12.6719 13.1042 12.9119 12.0002 12.9119C10.7522 12.9119 10.4642 12.6239 10.4642 11.4959H8.95218Z" fill={color} /></svg>;
}

export default ClaimRewardsMedium;