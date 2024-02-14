import React from "react";

const TitleContainer = ({ text, color, bg, fontSize = "text-3xl" }) => {
  return (
    <p
      className={`${color} ${bg} flex justify-center font-semibold ${fontSize} py-10`}
    >
      {text}
    </p>
  );
};

export default TitleContainer;
