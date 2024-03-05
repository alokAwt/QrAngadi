"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tab,
  Tabs,
  Checkbox,
  Spinner,
} from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import backgroundimage from "../../public/Auth/logo.png";
import Authgif from "../../public/Auth/authGif.gif";
import Image from "next/image";
import Link from "next/link";
import { IoCloseCircle } from "react-icons/io5";
import { OtpSend, SignInUsers, SignUpUsers } from "@/Utility/Api/Users";
import { useToast } from "../../components/ui/usetoast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { UseStatevalue } from "@/Utility/Contextfiles/StateProvider";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Loginpage() {
  const [{ token }, dispatch] = UseStatevalue();
  const { toast } = useToast();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = React.useState("LOGIN");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloding] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpOpen, setOtpOpen] = useState(false);
  const [incomingOtp, setIncomingOtp] = useState("");
  const [tokenn, Settokenn] = useState("");

  const router = useRouter();

  const SignUp = () => {
    if (!Name) {
      toast({
        variant: "",
        title: "Name is Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (!number) {
      toast({
        variant: "",
        title: "Number is Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (!email) {
      toast({
        variant: "",
        title: "Email is Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (!password) {
      toast({
        variant: "",
        title: "Password is Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    }
    setIsloding(true);
    OtpSend({
      Email: email,
    }).then((res) => {
      console.log(res);
      if (res.message === "success") {
        toast({
          variant: "",
          title: "Otp Send Successfully.",
          description: "",
        });
        setIncomingOtp(res.otp);
        setIsloding(false);
        setOtpOpen(true);
      } else {
        toast({
          variant: "",
          title: "Failed to Send Otp.",
          description: res.message,
        });
        setIsloding(false);
      }
    });
  };

  const OtpVerification = () => {
    setIsloding(true);
    if (otp === incomingOtp) {
      SignUpUsers({
        Name: Name,
        Email: email,
        ContactNumber: number,
        Password: password,
      }).then((res) => {
        if (res.message === "success") {
          setIsloding(false);
          toast({
            variant: "",
            title: "SignUp successfully.",
            description: "",
          });
          setIsloding(false);
          setSelected("LOGIN");
        } else {
          toast({
            variant: "destructive",
            title: "SignUp Failed.",
            description: res.message,
          });
          setIsloding(false);
        }
      });
    } else {
      toast({
        variant: "destructive",
        title: "Otp not Matched.",
        description: "",
      });
      setIsloding(false);
    }
  };

  const Login = () => {
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email is Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (!password) {
      toast({
        variant: "destructive",
        title: "Password is Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    }
    setIsloding(true);
    SignInUsers({
      Email: email,
      Password: password,
    }).then((res) => {
      if (res.message === "success") {
        Settokenn(res.token);
        dispatch({ type: "SET_TOKEN", tokenn });
        localStorage.setItem("token", res.token);
        toast({
          variant: "",
          title: "Successfully Loged in.",
          description: "",
        });
        setIsloding(false);
        onOpenChange();
        router.push("/");
      } else {
        setIsloding(false);
        toast({
          variant: "destructive",
          title: "Loged in faild.",
          description: res.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    });
  };

  return (
    <>
      <div className="w-full flex justify-center items-center mx-auto md:p-20 h-screen">
        <div className="bg-white rounded-xl shadow-lg  p-2 md:w-[95%] border-1 border-gray-300   flex flex-col justify-center gap-4">
          <div className=" md:w-96 lg:w-96 mx-auto">
            <Tabs
              variant="bordered"
              fullWidth
              size="lg"
              aria-label="Tabs form"
              classNames={{
                tabList: " w-full  p-0 border-2 border-buttoncolor rounded-md",
                cursor: "w-full bg-buttoncolor rounded-sm ",
                tab: "  text-white h-8 ",
                tabContent: "group-data-[selected=true]:text-white w-full",
              }}
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="LOGIN" title="LOGIN" className="w-full"></Tab>
              <Tab key="SIGNUP" title="SIGNUP"></Tab>
            </Tabs>
          </div>
          <div className="flex flex-row justify-between items-center md:px-4 lg:px-6 mt-1 w-full">
            {selected === "SIGNUP" && (
              <>
                {otpOpen ? (
                  <div className=" border-1.5 border-gray-300 rounded-2xl md:w-3/6 lg:w-3/6 w-full h-auto flex flex-col justify-start items-start gap-2 px-4 py-2">
                    <Image className="h-6 w-24" src={backgroundimage} />
                    <h6 className="text-md font-medium">Verification!</h6>
                    <p className="text-xs">Enter Otp For Verification.</p>
                    <div className=" w-full mt-2">
                      <label
                        for="email"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                      >
                        Otp<span className="text-red-500">*</span>
                      </label>
                      <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2 "
                        placeholder="Enter Your Otp"
                        required
                      />
                    </div>

                    <div className="w-full flex flex-col gap-2 items-center">
                      <Button
                        className="bg-buttoncolor rounded-sm h-9 text-white w-full"
                        onClick={OtpVerification}
                      >
                        {isloading ? (
                          <Spin spinning={isloading} fullscreen />
                        ) : (
                          "Verify Account"
                        )}
                      </Button>
                      <p className="text-xs">
                        Already a member?
                        <span
                          className="text-xs underline text-buttoncolor cursor-pointer"
                          onClick={() => setSelected("LOGIN")}
                        >
                          Login
                        </span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      style={{ borderRadius: "16px" }}
                      className=" border-1.5 border-gray-300 rounded-2xl md:w-3/6 lg:w-3/6 w-full h-auto flex flex-col justify-start items-start gap-2 px-4 py-2"
                    >
                      <Image className="h-6 w-24" src={backgroundimage} />
                      <h6 className="text-md font-medium">Get started!</h6>
                      <p className="text-xs">
                        Create your account and start generating.
                      </p>
                      <div className=" w-full mt-2">
                        <label
                          for="email"
                          className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                        >
                          Full Name
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2 "
                          placeholder="Enter Your Name"
                          required
                        />
                      </div>
                      <div className=" w-full">
                        <label
                          for="email"
                          className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                        >
                          Email<span className="text-red-500">*</span>
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2 "
                          placeholder="Enter Your Email"
                          required
                        />
                      </div>
                      <div className=" w-full">
                        <label
                          for="email"
                          className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                        >
                          Number<span className="text-red-500">*</span>
                        </label>
                        <input
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2 "
                          placeholder="Enter Your Number"
                          required
                        />
                      </div>
                      <div className=" w-full">
                        <label
                          for="email"
                          className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                        >
                          Set Password
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2 "
                          placeholder="Enter Your Password"
                          required
                        />
                      </div>
                      <div className="flex  px-1 justify-between ">
                        <Checkbox
                          color="warning"
                          classNames={{
                            label: "text-xs",
                          }}
                        >
                          I agree -
                        </Checkbox>
                        <Link color="primary" href="#" size="xs">
                          <span className="ml-auto text-xs text-buttoncolor">
                            Terms & Condition
                          </span>
                        </Link>
                      </div>

                      <div className="w-full flex flex-col gap-2 items-center">
                        <Button
                          className="bg-buttoncolor rounded-sm h-9 text-white w-full"
                          onClick={SignUp}
                        >
                          {isloading ? (
                            <Spin
                              size="large"
                              spinning={isloading}
                              fullscreen
                            />
                          ) : (
                            "Sign up"
                          )}
                        </Button>
                        <p className="text-xs">
                          Already a member?
                          <span
                            className="text-xs underline text-buttoncolor cursor-pointer"
                            onClick={() => setSelected("LOGIN")}
                          >
                            Login
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
            {selected === "LOGIN" && (
              <div
                style={{ borderRadius: "16px" }}
                className=" border-1.5 border-gray-300 rounded-2xl md:w-3/6 lg:w-3/6 md:h-[81vh] lg:h-[81vh] h-auto w-full flex flex-col justify-start items-start gap-2 px-4 py-2"
              >
                <Image className="h-10 w-24" src={backgroundimage} />
                <h6 className="text-xl font-medium">Welcome Back!</h6>
                <p className="text-md">Log In to your account to proceed.</p>
                <div className="mb-4 w-full mt-4">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email<span className="text-red-500">*</span>
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
                <div className="mb-4 w-full">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 "
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <div className="flex py-2 px-1 justify-between  items-center md:gap-24 lg:gap-24 gap-4">
                  <Checkbox
                    color="warning"
                    classNames={{
                      label: "md:text-small lg:text-small text-xs",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    <span className="ml-auto md:text-sm lg:text-sm text-xs">
                      Forgot password?
                    </span>
                  </Link>
                </div>

                <div className="w-full flex flex-col gap-2 items-center">
                  <Button
                    className="bg-buttoncolor rounded-sm text-white w-full"
                    onClick={Login}
                  >
                    {isloading ? (
                      <Spin size="large" spinning={isloading} fullscreen />
                    ) : (
                      "Log in"
                    )}
                  </Button>
                  <p className="text-sm">
                    New member?
                    <span
                      className="text-md underline text-buttoncolor cursor-pointer mt-2 mb-12"
                      onClick={() => setSelected("SIGNUP")}
                    >
                      Sign In
                    </span>
                  </p>
                </div>
              </div>
            )}

            <div className="hidden md:flex lg:flex md:w-3/6 lg:w-3/6">
              <Image
                src={Authgif}
                className="md:w-[400] md:h-[200] lg:w-[400] lg:h-[200]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
