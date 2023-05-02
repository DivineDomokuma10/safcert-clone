import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Form = ({ hide }) => {
  const form = useForm();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => setSubmitted(true);

  return (
    <div className="fixed w-screen h-screen flex justify-center items-center top-0 left-0 z-50 bg-[rgba(0,0,0,0.86)] md:py-6">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full flex flex-col items-center space-y-20 bg-[#f5eddf] md:w-1/2 md:h-full md:px-28"
        >
          <div className="w-full flex justify-end p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => hide()}
              className="w-7 h-7 cursor-pointer text-3xl font-extrabold hover:text-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center space-y-5 md:items-start">
            <h1 className="text-3xl text-center p-5 md:text-left md:text-4xl">
              Sign Up for a Demo
            </h1>
            <p className="p-3 md:text-lg">
              Thank you for your interest in SAFCerts
            </p>
            <div className="flex flex-col px-3 text-center space-y-2 md:text-left md:text-lg">
              <p>We will contact you shortly.</p>
              <p className="leading-7">
                By clicking Create account, I agree that I have read and
                accepted the{" "}
                <a href="" className="text-orange-400 underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="" className="text-orange-400 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.form
          action=""
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-full h-full flex flex-col items-center overflow-auto bg-[#f5eddf] md:w-1/2 md:h-full md:items-start md:px-28 md:relative"
        >
          <div className="w-full flex justify-end p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => hide()}
              className="w-7 h-7 cursor-pointer text-3xl font-extrabold hover:text-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="space-y-2 p-3">
            <h1 className="text-3xl font-semibold">Sign Up for a Demo</h1>
            <p>
              Fields marked <span className="text-red-500">*</span> are required
            </p>
          </div>

          {/* institution and location */}
          <div className="space-y-5 p-2 md:flex md:space-y-0 md:space-x-5">
            <div className="text-sm flex flex-col space-y-2">
              <label htmlFor="name-of-institution">
                Name of Institution <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name-of-institution"
                className="w-64 h-11 rounded-xl border-2 outline-none pl-3 md:w-48"
                {...register("nameOfInstitution", {
                  required: "Please fill out this field",
                })}
              />
              <p className="md:text-xs text-red-600">
                {errors.nameOfInstitution?.message}
              </p>
            </div>
            <div className="text-sm flex flex-col space-y-2">
              <label htmlFor="state">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                className="w-64 h-11 rounded-xl border-2 outline-none pl-3 md:w-48"
                {...register("state", {
                  required: "Please fill out this field",
                })}
              />
              <p className="md:text-xs text-red-600">{errors.state?.message}</p>
            </div>
          </div>

          {/* School address */}
          <div className="text-sm flex flex-col space-y-2 p-2">
            <label htmlFor="school-address">
              School address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="school-address"
              className="w-64 h-11 rounded-xl border-2 outline-none pl-3 md:w-[405px]"
              {...register("schoolAddress", {
                required: "Please fill out this field",
              })}
            />
            <p className="md:text-xs text-red-600">
              {errors.schoolAddress?.message}
            </p>
          </div>

          {/* name and job role */}
          <div className="space-y-5 p-2 md:flex md:space-y-0 md:space-x-5">
            <div className="text-sm flex flex-col space-y-2">
              <label htmlFor="name">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-64 h-11 rounded-xl border-2 outline-none pl-3 md:w-48"
                {...register("username", {
                  required: "Please fill out this field",
                })}
              />
              <p className="md:text-xs text-red-600">
                {errors.username?.message}
              </p>
            </div>
            <div className="text-sm flex flex-col space-y-2">
              <label htmlFor="state">Job Role</label>
              <select
                name="role"
                id="role"
                className="w-64 h-11 rounded-xl border-2 outline-none pl-3 md:w-48"
                {...register("role")}
              >
                <option value="Please select"> </option>
                <option value="Director/Chairman">Director/Chairman</option>
                <option value="Proprietor">Proprietor</option>
                <option value="Principal/V.P/Head Teacher">
                  Principal/V.P/Head Teacher
                </option>
                <option value="ICT Admin">ICT Admin</option>
                <option value="Teacher/Admin Staff">Teacher/Admin Staff</option>
                <option value="Consultant">Consultant</option>
                <option value="Others">Others</option>
              </select>
              <p className="md:text-xs text-red-600">{errors.role?.message}</p>
            </div>
          </div>

          {/* email and phone number */}
          <div className="space-y-5 p-2 md:flex md:space-y-0 md:space-x-5">
            <div className="text-sm flex flex-col space-y-2">
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-64 h-11 rounded-xl border-2 outline-none pl-3 md:w-48"
                {...register("email", {
                  required: {
                    value: true,
                    message: "please fill out this field",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                })}
              />
              <p className="md:text-xs text-red-600">{errors.email?.message}</p>
            </div>
            <div className="text-sm flex flex-col space-y-2">
              <label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                className="w-64 h-11 rounded-xl border-2 outline-none pl-3 md:w-48"
                {...register("phone", {
                  maxLength: {
                    value: 14,
                    message: "enter an eleven digit number",
                  },
                  minLength: {
                    value: 11,
                    message: "enter an eleven digit number",
                  },
                  required: "Please fill out this field",
                  pattern: {
                    value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                    message: "Invalid Phone Number",
                  },
                })}
              />
              <p className="md:text-xs text-red-600">{errors.phone?.message}</p>
            </div>
          </div>

          {/* certificates */}
          <div className="space-y-5 p-2 text-sm">
            <p>
              How many certificates do you process yearly?{" "}
              <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register("certification", {
                    required: "this field is required",
                  })}
                />
                <span>{"< 50"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register("certification", {
                    required: "this field is required",
                  })}
                />
                <span>{"50 - 100"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register("certification", {
                    required: "this field is required",
                  })}
                />
                <span>{"101 - 200"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register("certification", {
                    required: "this field is required",
                  })}
                />
                <span>{"201 - 300"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register("certification", {
                    required: "this field is required",
                  })}
                />
                <span>{"> 300"}</span>
              </div>
            </div>
            <p className="md:text-xs text-red-600">
              {errors.certification?.message}
            </p>
          </div>

          {/* updates  */}
          <div className="space-y-2 p-5 text-sm md:px-2">
            <p>Subscribe to Updates?</p>
            <p className="text-xs text-gray-600">
              We'll send you occasional updates & promotional information
            </p>
            <div className="flex items-center space-x-2">
              <input type="radio" {...register("updates")} />
              <span>Yes</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" {...register("updates")} />
              <span>No</span>
            </div>
          </div>
          <div className="flex flex-col p-5 space-y-3 md:px-2">
            <button
              type="submit"
              className="w-fit px-8 text-white py-3 flex items-center justify-center rounded-full text-sm bg-purple-700"
            >
              Get Started
            </button>
            <p>
              By clicking Create account, I agree that I have read and accepted
              the{" "}
              <a href="" className="text-orange-400 underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="" className="text-orange-400 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default Form;
