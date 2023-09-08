import React from "react";

const Button = ({
  text,
  color,
  bgColor,
  borderRadius,
  size,
  icon,
  onClick,
}) => {
  return (
    <button
      style={{
        color,
        background: bgColor,
        borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
