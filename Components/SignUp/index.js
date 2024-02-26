"use client";
import React, { useState } from "react";
import Link from "next/link";
// import SignupForm from "./Group 6741@2x.png";
// import Logo from "./Group 6742.png";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
function Signup() {
  // const navigate = useNavigate();
  const router = useRouter();
  const [formData, setFormData] = useState({
    Name: "",
    lastName: "",
    Email: "",
    Password: "",
    ContactNumber: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log("Form submitted:", formData);
    try {
      const response = await fetch(
        "http://103.120.176.158:9100/api/v1/Users/Signup",
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
        console.log("Signup successful:", data);
        alert("Successfully Created Account");

        // localStorage.setItem('userData', JSON.stringify(formData));
        router.push("/Login");
        // You can add further logic for successful signup
      } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
        alert(errorData.message);
        // You can handle errors appropriately
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
      alert(error.message);
    }
  };

  const handleOtp = async () => {
    if (!formData.Email) {
      alert("Please provide an email address before requesting OTP.");
      return;
    }
    try {
      const response = await fetch("http://localhost:9100/api/v1/Users/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify({ Email: formData.Email }),
        // Add body if there are any request parameters
        // body: JSON.stringify({ key: 'value' }),
      });

      if (response.ok) {
        // Request was successful, you can now handle the response
        const data = await response.json(); // Assuming the response is in JSON format
        alert("OTP sent successfully!"); // Show an alert or handle the success in your desired way
      } else {
        // Handle errors
        alert("Failed to fetch OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching OTP.");
    }
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col w-full">
        <div className="text-center mt-10">
          <div className="flex flex-col text-left">
            <span className="font-semibold text-3xl">Get started!</span>
            <span className="font-semibold text-sm">
              Create your account and start generating.
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 mb-3">
          <div className="flex gap-3">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="font-semibold text-sm">
                First Name <span className="text-[#ED0000]">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="rounded-lg w-full border-[#00000040]"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="font-semibold text-sm">
                Last Name <span className="text-[#ED0000]">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="rounded-lg w-full border-[#00000040]"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mt-1">
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

          <div className="mt-1">
            <label htmlFor="password" className="font-semibold text-sm">
              Password <span className="text-[#ED0000]">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              required
              className="rounded-lg w-full border-[#00000040]"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col mt-1">
            <label htmlFor="mobileNumber" className="font-semibold text-sm">
              Mobile Number <span className="text-[#ED0000]">*</span>
            </label>
            <div className="flex rounded-lg border-[1px] border-[#00000040]  overflow-hidden items-center pe-2.5">
              <input
                type="tel"
                id="mobileNumber"
                name="ContactNumber"
                pattern="[0-9]{10}"
                value={formData.ContactNumber}
                onChange={handleChange}
                required
                className="border-0 outline-none w-[calc(100% - 60px)]"
                placeholder="Mobile Number"
                style={{ width: "calc(100% - 60px)" }}
              />
              <span
                className="text-xs flex-1 text-orange-500 font-poppins font-semibold cursor-pointer"
                onClick={handleOtp}
              >
                Send OTP
              </span>
            </div>
          </div>

          <div className="mt-1">
            <label htmlFor="otp" className="font-semibold text-sm">
              OTP <span className="text-[#ED0000]">*</span>
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
              className="rounded-lg w-full border-[#00000040]"
              placeholder="Enter OTP"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-buttoncolor text-white font-semibold text-sm py-3 rounded-lg tracking-widest w-full"
          >
            Submit
          </button>
        </form>

        <span className="text-center font-semibold text-sm my-5">
          Already a member?
          <Link href={"/Login"}>
            <span className="text-buttoncolor underline"> Login</span>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
