import React from "react";
import Logo from "../assets/vetet_logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "@react-hook/media-query";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const isLargeScreen = useMediaQuery("(min-width: 996px)");
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/authentication");
  };
  return (
    <div className="flex p-3 justify-between w-full md:w-[90%] mx-auto  ">
      <div className="h-12">
        <img src={Logo} alt="logo" className="w-full h-full" />
      </div>
      <div className="flex items-center ">
        {isLargeScreen ? (
          <Button
            onClick={handleClick}
            className="text-base text-btn-blue border border-btn-blue hover:bg-btn-blue hover:text-white rounded-md px-3 py-[6px]"
          >
            Login
          </Button>
        ) : (
          <AiOutlineMenu className="p-2 border border-gray-400 rounded-md w-full h-10 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Header;
