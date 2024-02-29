import React from "react";
import Form from "../../public/Aboutus/Form.png";
import Linkdin from "../../public/Aboutus/Linkdin.png";
import Insta from "../../public/Aboutus/Insta.png";
import Music from "../../public/Aboutus/Music.png";
import Pintrest from "../../public/Aboutus/Pintrest.png";
import Youtube from "../../public/Aboutus/Youtube.png";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Input } from "@nextui-org/react";
import { Contactus } from "@/Utility/Api/Users";

const Formcard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queries, setQueries] = useState("");
  const [message, setMessage] = useState("");

  const SubmitButton = () => {
    if (!firstName) {
      toast("Please enter first name");
      return false;
    } else if (!lastName) {
      toast("Please enter last name");
      return false;
    } else if (!email) {
      toast("Please enter email");
      return false;
    } else if (!queries) {
      toast("Please enter queries");
      return false;
    } else if (!message) {
      toast("Please enter message");
      return false;
    }
    Contactus({
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Subject: queries,
      Message: message,
    }).then((res) => {
      if (res.status === "success") {
        toast("Queries send successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setQueries("");
        setMessage("");
      } else {
        toast(res.message);
      }
    });
  };
  return (
    <div className="w-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col justify-center items-center gap-8">
        <h6 className="font-bold text-3xl mt-8 text-center ">Get in Touch </h6>
        <p className="text-sm font-medium  text-center">
          Use our contact form for all information requests or contact us
          directly using the contact information below. All information is
          treated with complete confidentiality and in accordance with our{" "}
          <span className="text-buttoncolor underline cursor-pointer">
            data protection statement
          </span>
        </p>
      </div>

      <div className=" mt-12 shadow-2xl rounded-md h-auto mb-4 mx-auto w-full border-1 border-gray-300 p-4 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex justify-center flex-col items-center px-2 w-full">
          <div>
            <Image className="h-72 w-72" src={Form} />
          </div>
          <div className="flex flex-col justify-start items-start mt-8 gap-4">
            <div className="flex justify-between items-center gap-8">
              <FaPhoneAlt className="text-buttoncolor text-lg" />
              <span>+91 1234567890</span>
            </div>
            <div className="flex justify-between items-center gap-8">
              <IoMdMail className="text-buttoncolor text-lg" />
              <span>info@qrangadi.com</span>
            </div>
            <div className="flex justify-between items-center gap-8">
              <FaLocationDot className="text-buttoncolor text-lg" />
              <span>Bengaluru, Karnataka</span>
            </div>

            <div className="flex justify-start items-center gap-2 mt-4">
              <Image className="h-8 w-8" src={Linkdin} />
              <Image className="h-8 w-8" src={Pintrest} />
              <Image className="h-8 w-8" src={Insta} />
              <Image className="h-8 w-8" src={Music} />
              <Image className="h-8 w-8" src={Youtube} />
            </div>
          </div>
        </div>

        <div className="w-full justify-center items-start gap-4 px-8">
          <div>
            <h6 className="font-bold text-2xl ">
              Let’s <span className="text-buttoncolor">talk!</span>
            </h6>
            <p className="text-md font-medium text-gray-500">
              Provide the necessary details.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-full mt-4 ">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
              <form className="w-full">
                <div className="grid gap-6 mb-6 md:grid-cols-2 w-full">
                  <div>
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name{" "}
                    </label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5  "
                      placeholder=" First Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5  "
                      placeholder=" Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 "
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Related Subject{" "}
                  </label>
                  <input
                    value={queries}
                    onChange={(e) => setQueries(e.target.value)}
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 d "
                    placeholder=" Related Subject"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Message{" "}
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    id="email"
                    className="bg-gray-50 border items-start  border-gray-300 text-gray-900 text-sm h-24 rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5  "
                    placeholder="Type something here..."
                    required
                  />
                </div>

                <Button
                  onClick={SubmitButton}
                  type="submit"
                  className="text-white  bg-buttoncolor  font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center "
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formcard;
