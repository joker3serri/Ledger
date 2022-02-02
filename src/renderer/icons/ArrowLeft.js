// @flow

import i18next from "i18next";
import React from "react";

const ArrowLeft = ({
  color = "currentColor",
  ignoreRtl = false,
}: {
  color?: string,
  ignoreRtl?: boolean,
}) => (
  <svg
    width="21"
    height="12"
    viewBox="0 0 21 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={!ignoreRtl && i18next.dir() === "rtl" ? { transform: "scaleX(-1)" } : {}}
  >
    <path d="M21 6L1 6M1 6L6.5 0.5M1 6L6.5 11.5" stroke={color} strokeWidth="1.4" />
  </svg>
);

export default ArrowLeft;
