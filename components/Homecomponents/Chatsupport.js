"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Lottie from "react-lottie";
import Animatedbot from "../../Utility/Animation/Animatedbot";
import { Button } from "@nextui-org/react";
import { Contactus } from "@/Utility/Api/Users";
import { useToast } from "../../components/ui/usetoast";
import { ToastAction } from "@/components/ui/toast";
import { motion, useAnimation } from "framer-motion";

const Chatsupport = () => {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queries, setQueries] = useState("");
  const [message, setMessage] = useState("");
  const controls = useAnimation();
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      controls.start({ x: 0, transition: { duration: 0.8 }}); 
    } else {
      controls.start({ x: 200,  transition: { duration: 0.8 } }); 
    }
    setLastScrollTop(scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const SubmitButton = () => {
    if (!firstName) {
      toast({
        variant: "destructive",
        title: "Please enter first name",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (!lastName) {
      toast({
        variant: "destructive",
        title: "Please enter last name",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (!email) {
      toast({
        variant: "destructive",
        title: "Please enter email",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (!queries) {
      toast({
        variant: "destructive",
        title: "Please enter queries",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (!message) {
      toast({
        variant: "destructive",
        title: "Please enter message",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
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
        toast({
            variant: "",
            title: "Submitted  successfully ",
            description: "",
          });
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animatedbot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <motion.div className="hidden md:block fixed z-10 bottom-12 right-4  rounded-full" animate={controls}>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="solid"
            className="bg-white rounded-2xl text-buttoncolor ring-1 ring-buttoncolor font-medium"
          >
            <Lottie options={defaultOptions} height={100} width={100} />
            <p> Help?</p>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle>Contact <span className='text-buttoncolor'>us</span></SheetTitle> */}
            <SheetDescription>
              <div className="w-full justify-center items-start gap-4 ">
                <div>
                  <h6 className="font-bold text-xl ">
                    Let’s <span className="text-buttoncolor">talk!</span>
                  </h6>
                  <p className="text-xs font-medium text-gray-500">
                    Provide the necessary details.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 w-full mt-4 ">
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
                    <form className="w-full">
                      <div className="grid gap-6 mb-6 md:grid-cols-2 w-full">
                        <div className="w-full">
                          <label
                            htmlFor="first_name"
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
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="last_name"
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
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
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
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
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
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
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
                        />
                      </div>

                      <Button
                        onClick={SubmitButton}
                        className="text-white  bg-buttoncolor  font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center "
                      >
                        SEND MESSAGE
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

export default Chatsupport;
