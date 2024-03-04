"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
// import { Contactus } from "../../Api/Users";
import "react-toastify/dist/ReactToastify.css";

import telePic from "@/public/letsTalk/contactUs.png";
import call from "@/public/letsTalk/call.png";
import emailIcon from "@/public/letsTalk/email.png";
import location from "@/public/letsTalk/location.png";
import instagram from "@/public/letsTalk/instagram.png";
import linkedin from "@/public/letsTalk/linkedin.png";
import pintrest from "@/public/letsTalk/pintrest.png";
import youtube from "@/public/letsTalk/youtube.png";

function Input({ label, type, placeholder, value, setValue }) {
  console.log(label);
  return (
    <>
      <label
        className="absolute top-[-12px] left-3 bg-white text-appThemeTwo font-semibold py-1 px-2 font-poppins text-[12px]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-12 px-4 w-full border-2 border-gray-900 rounded-md outline-none font-poppins font-medium text-base"
      />
    </>
  );
}

function LetsTalk() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queries, setQueries] = useState("");
  const [message, setMessage] = useState("");

  const SubmitButton = () => {
    if (!firstName) {
      toast.warning("Please enter first name");
      return false;
    } else if (!lastName) {
      toast.warning("Please enter last name");
      return false;
    } else if (!email) {
      toast.warning("Please enter email");
      return false;
    } else if (!queries) {
      toast.warning("Please enter queries");
      return false;
    } else if (!message) {
      toast.warning("Please enter message");
      return false;
    }
    // Contactus({
    //   FirstName: firstName,
    //   LastName: lastName,
    //   Email: email,
    //   Subject: queries,
    //   Message: message,
    // }).then((res) => {
    //   if (res.status === "success") {
    //     toast("Queries send successfully");
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setQueries("");
    //     setMessage("");
    //   } else {
    //     toast(res.message);
    //   }
    // });
  };

  return (
    <div className="max-sm:w-[90%] w-8/12 rounded-lg shadow-[0px_0px_20px_3px_#00000040] m-auto mt-5 flex gap-5 flex-wrap-reverse mb-10 pt-5 md:px-10">
      <ToastContainer />
      <div className="xs:w-full py-4 ps-4 flex flex-col justify-center">
        <Image src={telePic} className="w-80 h-auto m-auto" alt="Telephone" />
        <div className="w-2/3 m-auto gap-2 mt-3 flex items-center">
          <Image src={call} className="h-8 w-8" alt="Call" />
          <span className="text-base font-medium text-gray-700">
            +91 1234567890
          </span>
        </div>
        <div className="xs:w-full w-2/3 m-auto gap-2 mt-1 flex items-center">
          <Image src={emailIcon} className="h-4 w-6 ml-[5px]" alt="Email" />
          <span className="text-base font-medium text-gray-700 ml-[3px]">
            info@qrangadi.com
          </span>
        </div>
        <div className="w-2/3 m-auto gap-2 mt-1 flex items-center">
          <Image src={location} className="h-8 w-8" alt="Location" />
          <span className="text-base font-medium text-gray-700">
            Bengaluru, Karnataka
          </span>
        </div>
        <div className="mb-4 flex justify-center items-center gap-2 mt-1">
          <Image src={instagram} className="h-8 w-8" alt="Instagram" />
          <Image src={linkedin} className="h-8 w-8" alt="LinkedIn" />
          <Image src={pintrest} className="h-8 w-8" alt="Pinterest" />
          <Image src={youtube} className="h-8 w-8" alt="YouTube" />
          <Image src={location} className="h-8 w-8" alt="Location" />
        </div>
      </div>
      <div className="p-3 flex-1 min-w-[280px]">
        <h2 className="text-2xl font-bold">{`Let's Talk`}</h2>
        <p className="text-[#878787] text-md">Provide the necessary details.</p>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Input
                label="First Name"
                type="text"
                placeholder="First Name"
                value={firstName}
                setValue={setFirstName}
              />
            </div>
            <div className="flex-1 relative">
              <Input
                label="Last Name"
                type="text"
                placeholder="Last Name"
                value={lastName}
                setValue={setLastName}
              />
            </div>
          </div>
          <div className="relative">
            <Input
              label="Your Email"
              type="textarea"
              placeholder="Your email"
              value={email}
              setValue={setEmail}
            />
          </div>
          <div className="relative">
            <Input
              label="Related Subject"
              type="text"
              placeholder="Queries"
              value={queries}
              setValue={setQueries}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="message"
              className="absolute top-[-12px]  left-3 bg-white text-appThemeTwo font-semibold py-1 px-2 font-poppins text-[12px]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Type something here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="pt-2 w-full min-h-[110px] max-h-[110px] px-4 border-2 border-gray-900 rounded-md outline-none font-poppins font-medium text-base"
            />
          </div>
        </div>
        <button
          className="submitButton bg-appThemeTwo text-white w-full rounded-md py-2 px-4 mt-5"
          onClick={() => SubmitButton()}
        >
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
}

export default LetsTalk;
