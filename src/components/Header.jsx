import React from "react";
import Logo from "../assets/vetet_logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "@react-hook/media-query";
import { Link } from "react-router-dom";

const Header = () => {
  const isLargeScreen = useMediaQuery("(min-width: 996px)");

  return (
    <div className="flex p-3 justify-between w-full md:w-[90%]  mx-auto  ">
      <div className="h-12">
        <img src={Logo} alt="logo" className="w-full h-full" />
      </div>
      <div className="flex items-center ">
        {isLargeScreen ? (
          <Link to={"/authentication"}>
            <button className="text-base text-btn-blue border border-btn-blue rounded-md px-3 py-[6px]">
              Login
            </button>
          </Link>
        ) : (
          <AiOutlineMenu className="p-2 border border-gray-400 rounded-md w-full h-10 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Header;
