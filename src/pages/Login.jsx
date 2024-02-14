import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Logo from "../assets/vetet_logo.png";
import login from "../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const LoginSchema = Yup.object().shape({
  phone: Yup.string().required("Please enter valid 10-digit phone number"),
  password: Yup.string().required("Password is required."),
});

const Login = () => {
  const handleLogin = (values) => {
    console.log("Form values:", values);
  };
  let navigate = useNavigate();

  const handleRegistration = () => {
    navigate("/authentication/sign-up");
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col w-full p-5 sm:p-14">
      <div className="flex lg:ml-[25%] ">
        <Button
          onClick={handleClick}
          className="text-blue-500 border-btn-blue hover:text-white hover:bg-btn-blue flex gap-x-2 rounded-full items-center cursor-pointer"
        >
          <span>
            <FaArrowLeftLong />
          </span>
          Back to Home
        </Button>
      </div>

      <div className="flex flex-col  w-full  lg:flex-row lg:w-[50%] my-5 border border-gray-300 rounded-2xl mx-auto p-3">
        <div className="p-5 flex w-full justify-between">
          {/* left */}
          <div className="flex flex-col w-full justify-center items-center lg:w-full">
            <div className="">
              <img
                src={Logo}
                alt="logo"
                className=" w-[200px] sm:w-[250px] lg:w-[200px]"
              />
            </div>
            <p className="font-medium text-sm py-3">
              Where valiants meet Ventures
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col w-full lg:justify-center lg:w-full ">
          <div className="flex justify-center">
            <img src={login} alt="logo" className="w-[200px]" />
          </div>
          {/* form */}
          <div className="flex flex-col justify-center my-3 w-full">
            <Formik
              initialValues={{ phone: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <div className="mb-4 flex flex-col gap-y-2 ">
                  <label htmlFor="phone">Phone</label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="border p-2 rounded-md"
                  />
                  <div className="text-red-500">
                    <ErrorMessage name="phone" />
                  </div>
                </div>

                <div className="mb-4 flex flex-col gap-y-2 ">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="border p-2"
                  />
                  <div className="text-red-500">
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 ">
                  <Button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md"
                  >
                    Login
                  </Button>

                  <Button
                    type="button"
                    onClick={() => handleRegistration()}
                    className="bg-green-500 text-white p-2 rounded-md"
                  >
                    Register
                  </Button>
                  <span>
                    Don't remember the password?
                    <Link
                      to={"/authentication/forgot-password"}
                      className="text-btn-blue underline cursor-pointer"
                    >
                      Reset Password
                    </Link>
                  </span>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
