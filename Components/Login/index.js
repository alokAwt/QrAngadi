"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import SignupForm from "../signup/Group 6741@2x.png";
// import Logo from "../signup/Group 6742.png";
// import { useNavigate } from "react-router-dom";

function Login() {
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const response = await fetch(
        `http://103.120.176.158:9100/api/v1/Users/Signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Signin successful:", data);
        alert("Successfully Logged In");
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(formData));
        router.push("/");
        window.location.reload(true);
      } else {
        const errorData = await response.json();
        console.error("Signin failed:", errorData);
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error during signin:", error.message);
      alert(error.message);
    }
  };

  // const handleNavigate = () => {
  //   navigate("/Signup");
  // };

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col w-full">
        <div className="text-center mt-10">
          <div className="flex flex-col text-left">
            <span className="font-semibold text-3xl">Welcome Back!</span>
            <span className="font-semibold text-sm">
              Log In to your account to proceed.
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mt-8 mb-3">
            <label htmlFor="email" className="font-semibold text-sm">
              Email <span className="text-[#ED0000]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              className="rounded-lg w-full border-[#00000040]"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-semibold text-sm">
              Password <span className="text-[#ED0000]">*</span>
            </label>
            <input
              className="rounded-lg border-[#00000040] w-full"
              type="password"
              id="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
          <div className="flex items-center mt-2 justify-between">
            <div>
              <input
                type="checkbox"
                id="keepSignedIn"
                name="keepSignedIn"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="h-4 w-4"
              />
              <label
                htmlFor="keepSignedIn"
                className="checkbox_text ml-2 text-[12px] font-semibold"
              >
                Keep me signed in
              </label>
            </div>
            <span className="text-[12px] font-semibold underline decoration-[#1E1E1E]">
              Forgot Password
            </span>
          </div>
          <button
            type="submit"
            className="mt-4 bg-buttoncolor text-white font-semibold text-sm py-3 rounded-lg tracking-widest"
          >
            LOG IN
          </button>
        </form>
        <span className="text-center font-semibold text-sm my-5">
          New member?{" "}
          <Link href={"/Signup"}>
            <span className="text-buttoncolor underline">Sign Up</span>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
