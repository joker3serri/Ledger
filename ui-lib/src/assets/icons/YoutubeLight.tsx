import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function YoutubeLight({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0002 19.248C16.3202 19.248 19.0082 19.128 20.0642 18.864C21.0482 18.552 21.6482 17.952 21.8882 17.04C22.2722 15.624 22.3202 13.176 22.3202 12C22.3202 10.872 22.2482 8.35195 21.8882 6.95995C21.6482 6.04795 21.0482 5.44795 20.0642 5.13595C19.0082 4.87195 16.3202 4.75195 12.0002 4.75195C7.68018 4.75195 4.99218 4.87195 3.93618 5.13595C2.95218 5.44795 2.35218 6.04795 2.11218 6.95995C1.75218 8.35195 1.68018 10.872 1.68018 12C1.68018 13.176 1.72818 15.624 2.11218 17.04C2.35218 17.952 2.95218 18.552 3.93618 18.864C4.99218 19.128 7.68018 19.248 12.0002 19.248ZM9.88818 15.096V8.92795L15.3122 12L9.88818 15.096Z" fill={color} /></svg>;
}

export default YoutubeLight;