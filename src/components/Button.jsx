import React from "react";

const Button = ({ onClick, type, children, className, color = "" }) => {
  return (
    <button
      className={`${className} ${color} py-2 px-4 border rounded-md  font-semibold focus:outline-none focus:ring focus:border-blue-50 `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
