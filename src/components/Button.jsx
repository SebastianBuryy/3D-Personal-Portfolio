import React from "react";

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="flex relative h-3 w-3 btn-beam">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
