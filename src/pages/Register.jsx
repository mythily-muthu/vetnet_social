import React from "react";
import Button from "../components/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../assets/vetet_logo.png";
import sign_up from "../assets/signup.svg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
    navigate("/authentication");
  };
  return (
    <div className="w-full h-screen flex flex-col  items-center">
      <div className="w-[60%] flex flex-col justify-center items-center  h-full ">
        <div>
          <Button
            onClick={handleLogin}
            className="text-blue-500 border-btn-blue hover:text-white hover:bg-btn-blue flex gap-x-2 rounded-full items-center cursor-pointer"
          >
            <span>
              <FaArrowLeftLong />
            </span>
            Back to Login
          </Button>{" "}
        </div>
        <div className="w-full  border flex justify-center items-center my-5 flex-col p-7 gap-y-5 rounded-md bg-white">
          {/* left */}
          <div className="flex w-[50%] flex-col gap-y-5">
            <div className="flex w-[150px] h-14">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex w-[250px] h-[250px]">
              <img src={sign_up} alt="image" className="w-full h-full" />
            </div>
          </div>
          {/* right */}
          
        </div>
      </div>
    </div>
  );
};

export default Register;
