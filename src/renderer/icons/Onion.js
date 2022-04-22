// @flow

import React from "react";

const Onion = ({ size = 16, color = "currentColor" }: { size?: number, color?: string }) => (
  <svg width="16px" height="16px" viewBox="0 0 180 180">
    <g id="tor-glyph" stroke="none" stroke-width="1" fill="#ffffff" fill-rule="evenodd">
        <path d="M90.1846205,163.631147 L90.1846205,152.721073 C124.743583,152.621278 152.726063,124.581416 152.726063,89.9975051 C152.726063,55.4160892 124.743583,27.3762266 90.1846205,27.2764318 L90.1846205,16.366358 C130.768698,16.4686478 163.633642,49.3909741 163.633642,89.9975051 C163.633642,130.606531 130.768698,163.531352 90.1846205,163.631147 Z M90.1846205,125.444642 C109.677053,125.342352 125.454621,109.517381 125.454621,89.9975051 C125.454621,70.4801242 109.677053,54.6551533 90.1846205,54.5528636 L90.1846205,43.6452847 C115.704663,43.7450796 136.364695,64.4550091 136.364695,89.9975051 C136.364695,115.542496 115.704663,136.252426 90.1846205,136.35222 L90.1846205,125.444642 Z M90.1846205,70.9167267 C100.640628,71.0165216 109.090758,79.5165493 109.090758,89.9975051 C109.090758,100.480956 100.640628,108.980984 90.1846205,109.080778 L90.1846205,70.9167267 Z M0,89.9975051 C0,139.705328 40.2921772,180 90,180 C139.705328,180 180,139.705328 180,89.9975051 C180,40.2921772 139.705328,0 90,0 C40.2921772,0 0,40.2921772 0,89.9975051 Z"
          fill="#ffffff">
        </path>
    </g>
  </svg>
);

export default Onion;
