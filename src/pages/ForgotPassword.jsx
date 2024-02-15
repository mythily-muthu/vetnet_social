import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import authentication from "../assets/authentication.svg";

const ForgotPassword = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-blue-100 items-center">
      <div className="w-[60%] flex flex-col justify-center items-center  h-full ">
        <Link to={"/authentication"}>
          <Button className="text-blue-500 border-btn-blue hover:text-white hover:bg-btn-blue flex gap-x-2 rounded-full items-center cursor-pointer">
            <span>
              <FaArrowLeftLong />
            </span>
            Back to Login
          </Button>{" "}
        </Link>
        <div className="w-full  border flex justify-center items-center my-5 flex-col p-7 gap-y-5 rounded-md bg-white">
          <div className="flex text-left font-semibold text-2xl">
            <p>Forgot Password</p>
          </div>
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-center">
              <img
                src={authentication}
                alt="authentication"
                className="w-[200px] h-full"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <p>Phone Number</p>
              <input
                className="w-full p-1 border rounded-md focus-none "
                type="number"
              />
            </div>
            <div className="flex items-center justify-center pt-5">
              <Button
                type="button"
                className="bg-btn-blue text-white rounded-lg cursor-pointer"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
