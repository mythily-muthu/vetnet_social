import React from 'react';

const Button = ({ onClick, type, children, className }) => {
  const buttonClasses = `py-2 px-4 border rounded-md text-white font-semibold focus:outline-none focus:ring focus:border-blue-300 ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
