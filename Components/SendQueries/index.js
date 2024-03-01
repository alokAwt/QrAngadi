"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
// import { Contactus } from "../../Api/Users";
import "react-toastify/dist/ReactToastify.css";

function Input({ label, type, placeholder, value, setValue }) {
  console.log(label);
  return (
    <>
      <label
        className="absolute top-[-12px] left-3 bg-white text-buttoncolor font-semibold py-1 px-2 font-poppins text-[12px]"
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

function HelpTopicItem({ img, head, text }) {
  return (
    <div className="flex gap-3 items-center flex-1 min-w-[200px]">
      <Image
        src={img}
        height={60}
        width={60}
        style={{
          minHeight: "60px",
          minWidth: "60px",
          maxHeight: "60px",
          maxWidth: "60px",
        }}
      />
      <div className="flex flex-col">
        <span className="text-[12px] font-semibold">{head}</span>
        <span className="text-[12px]">{text}</span>
      </div>
    </div>
  );
}
function SendQueries() {
  const helpTopics = [
    {
      img: "/help-support/one.png",
      head: "Getting started",
      text: "Basic info. how to create account and your first QR Code.",
    },
    {
      img: "/help-support/four.png",
      head: "Copy rights & Legal",
      text: "Read our terms and conditions & Privacy policy.",
    },
    {
      img: "/help-support/five.png",
      head: "My Account",
      text: "Set up your personal profile, enter required informations.",
    },
    {
      img: "/help-support/three.png",
      head: "Billing & Payments",
      text: "See information regarding the billing and payment options.",
    },
    {
      img: "/help-support/six.png",
      head: "Deactivation Account",
      text: "Set up your personal profile, enter required informations.",
    },
    {
      img: "/help-support/two.png",
      head: "QR setup",
      text: "Set up your dashboard and learn how to create QR codes.",
    },
  ];
  const [email, setEmail] = useState("");
  const [queries, setQueries] = useState("");
  const [message, setMessage] = useState("");

  const SubmitButton = () => {
    if (!email) {
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
    <>
      <ToastContainer />
      <div className="max-sm:w-[90%] w-full  m-auto mt-5 flex gap-10 flex-wrap-reverse mb-10 pt-5 md:px-10">
        <div className="p-3 flex flex-col flex-1 min-w-[280px] w-full">
          <h2 className="text-2xl font-bold mb-3">Help Topics</h2>
          <div className="min-h-[1px] bg-buttoncolor my-5"></div>
          <div className="flex gap-3 flex-wrap">
            <HelpTopicItem
              img={helpTopics[0].img}
              head={helpTopics[0].head}
              text={helpTopics[0].text}
            />
            <HelpTopicItem
              img={helpTopics[1].img}
              head={helpTopics[1].head}
              text={helpTopics[1].text}
            />
          </div>
          <div className="min-h-[1px] bg-buttoncolor my-5"></div>
          <div className="flex gap-3 flex-wrap">
            <HelpTopicItem
              img={helpTopics[2].img}
              head={helpTopics[2].head}
              text={helpTopics[2].text}
            />
            <HelpTopicItem
              img={helpTopics[3].img}
              head={helpTopics[3].head}
              text={helpTopics[3].text}
            />
          </div>
          <div className="min-h-[1px] bg-buttoncolor my-5"></div>
          <div className="flex gap-3 flex-wrap">
            <HelpTopicItem
              img={helpTopics[4].img}
              head={helpTopics[4].head}
              text={helpTopics[4].text}
            />
            <HelpTopicItem
              img={helpTopics[5].img}
              head={helpTopics[5].head}
              text={helpTopics[5].text}
            />
          </div>
          <div className="min-h-[1px] bg-buttoncolor my-5"></div>
        </div>

        <div className="p-3 flex-1 min-w-[280px] mx-auto">
          <h2 className="text-2xl font-bold mb-3">Send us your Queries!</h2>
          <div className="p-5 border-1 border-buttoncolor rounded-md">
            <div className="flex flex-col gap-4">
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
                  className="absolute top-[-12px]  left-3 bg-white text-buttoncolor font-semibold py-1 px-2 font-poppins text-[12px]"
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
              className="submitButton bg-buttoncolor text-white w-full rounded-md py-2 px-4 mt-3"
              onClick={() => SubmitButton()}
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendQueries;
