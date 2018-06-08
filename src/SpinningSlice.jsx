import React from "react";

const SpinningSlice = ({ children, axis, rotation }) => {
  return (
    <div
      className="slice"
      style={{
        height: "300px",
        width: "300px",
        transformOrigin: "33% 33% -2px",
        animation: `SpinningSlice-${animDirection}-${axis} 0.3s`
      }}
    >
      {children}
    </div>
  );
};
