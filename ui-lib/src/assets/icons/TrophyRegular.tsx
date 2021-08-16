import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function TrophyRegular({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.95989 20.4H17.0399V18.936H12.8159V15.936C14.3279 15.864 15.5759 15.264 16.4879 14.064C16.8959 13.56 17.1839 13.008 17.3519 12.312C18.6959 12.216 19.7039 11.64 20.4719 10.656C21.0959 9.86398 21.3599 8.85598 21.3599 7.36798V4.51198H17.5679V3.59998H6.40789V4.51198H2.63989V7.36798C2.63989 8.85598 2.90389 9.86398 3.52789 10.656C4.29589 11.64 5.30389 12.216 6.67189 12.312C6.83989 12.984 7.12789 13.56 7.53589 14.064C8.47189 15.264 9.67189 15.864 11.1839 15.936V18.936H6.95989V20.4ZM4.19989 8.18398V5.97598H6.43189V10.08C6.43189 10.344 6.43189 10.608 6.47989 10.824C4.87189 10.728 4.19989 9.88798 4.19989 8.18398ZM8.08789 11.112V5.06398H15.9119V11.088C15.9119 13.368 14.9999 14.4 12.6719 14.4H11.3519C9.04789 14.4 8.08789 13.368 8.08789 11.112ZM17.5439 10.824C17.5679 10.608 17.5679 10.344 17.5679 10.08V5.97598H19.7999V8.18398C19.7999 10.08 18.9599 10.752 17.5439 10.824Z" fill={color} /></svg>;
}

export default TrophyRegular;