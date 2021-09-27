import React from "react";

const Dots = () => {
  return (
    <svg
      width="4"
      height="18"
      viewBox="0 0 4 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="3"
        height="3"
        rx="1.5"
        fill="var(--color-main)"
        fill-opacity="0.5"
      />
      <rect
        x="0.5"
        y="7.5"
        width="3"
        height="3"
        rx="1.5"
        fill="var(--color-main)"
        fill-opacity="0.5"
      />
      <rect
        x="0.5"
        y="14.5"
        width="3"
        height="3"
        rx="1.5"
        fill="var(--color-main)"
        fill-opacity="0.5"
      />
    </svg>
  );
};

export default Dots;
