import React from "react";
import Button from "../components/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../assets/vetet_logo.png";
import sign_up from "../assets/signup.svg";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const Register = () => {
  let navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
  };
  let registerFields = [
    {
      name: "firstName",
      type: "text",
      label: "Fist Name",
    },
    {
      name: "lastName",
      type: "text",
      label: "Last Name",
    },
    {
      name: "category",
      type: "radio",
      label: "Category",
      options: [
        { label: "Veteran", value: "veteran" },
        { label: "Retiring Soon", value: "retiring_soon" },
        { label: "Legacy Bearer (Spouse)", value: "legacy_bearer_spouse" },
        {
          label: "Heritage Carriers (Children)",
          value: "heritage_carriers_children",
        },
      ],
      width: "w-[90%]",
    },
    {
      name: "dateOfBirth",
      type: "date",
      label: "Date of Birth",
    },
    {
      name: "dateOfCommission",
      type: "date",
      label: "Date of Commission",
    },
    {
      name: "gender",
      type: "select",
      label: "Gender",
      options: ["Male", "Female", "Others"],
      width: "w-[90%]",
    },
    {
      name: "service",
      type: "select",
      label: "Service",
      options: ["Army", "Navy", "Air Force"],
      width: "w-[45%]",
    },
    {
      name: "rank",
      type: "select",
      label: "Rank",
      options: ["Officer", "JCO", "OR"],
      width: "w-[45%]",
    },

    {
      name: "phone",
      type: "number",
      label: "Phone",
      width: "w-[45%]",
    },
    {
      name: "email",
      type: "text",
      label: "Email",
      width: "w-[45%]",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      width: "w-[90%]",
    },
  ];

  let registerSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    dateOfBirth: Yup.string().required("Date of Birth is required"),
    dateOfCommission: Yup.string().required("Date of Commission is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    gender: Yup.string().required("Gender is required"),
    rank: Yup.string().required("Rank is required"),
    service: Yup.string().required("Service is required"),
  });

  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      dateOfCommission: "",
      phone: "",
      email: "",
      password: "",
      category: "veteran",
      service: "",
      rank: "",
    },
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
  });
  console.log(formik.errors, formik.touched);

  const handleLogin = () => {
    navigate("/authentication");
  };
  return (
    <div className="w-full min-h-screen flex flex-col  items-center">
      <div className="w-full p-5 md:w-[60%] flex flex-col justify-center items-center  h-full ">
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
        <div className="w-full  border flex justify-center  my-5 flex-col md:flex-row p-7 gap-y-5 rounded-md bg-white">
          {/* left */}
          <div className="flex w-[50%] flex-col gap-y-5 items-center justify-center">
            <div className="flex w-[120px] md:w-[150px] h-14">
              <img
                src={logo}
                alt="logo"
                className="object-contain w-full h-full "
              />
            </div>
            <div className="flex w-[250px] h-[250px]">
              <img src={sign_up} alt="sign_up_" className="w-full h-full" />
            </div>
          </div>
          {/* right */}

          <div className="flex w-full  md:w-[50%] flex-col gap-2 ">
            <div className="flex gap-2 flex-wrap">
              {registerFields.map(
                ({
                  name,
                  type,
                  label,
                  width = " w-full md:w-[45%]",
                  options,
                }) => {
                  return (
                    <div className={`flex flex-col gap-2 ${width}`}>
                      <p>{label}</p>

                      {type === "select" ? (
                        <select
                          value={formik.values[name]}
                          name={name}
                          onChange={formik.handleChange}
                          className="border p-2"
                        >
                          <option value="">Select {label}</option>
                          {options.map((option) => (
                            <option value={option}>{option}</option>
                          ))}
                        </select>
                      ) : type === "radio" ? (
                        <div className="flex flex-col gap-1">
                          {options.map(({ label, value }) => {
                            return (
                              <div className="flex gap-1 items-center">
                                <input
                                  value={formik.values[name]}
                                  checked={formik.values[name] === value}
                                  type={type}
                                  name={name}
                                />
                                <span>{label}</span>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <input
                          value={formik.values[name]}
                          name={name}
                          type={type}
                          className="border p-2"
                          onChange={formik.handleChange}
                        />
                      )}
                      {formik.errors[name] && (
                        <p className="text-red-500 ">{formik.errors[name]}</p>
                      )}
                    </div>
                  );
                }
              )}
            </div>
            <Button
              onClick={formik.handleSubmit}
              className="bg-btn-blue text-white"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
