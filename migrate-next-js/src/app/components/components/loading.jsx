import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <svg viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          stroke-width="5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Loading;
