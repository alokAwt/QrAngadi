import React from "react";
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
} from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import backgroundimage from "../../public/Auth/logo.png";
import Authgif from "../../public/Auth/authGif.gif";
import Image from "next/image";
import Link from "next/link";
import { IoCloseCircle } from "react-icons/io5";


export default function Signinmodal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = React.useState("LOGIN");

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-buttoncolor text-white rounded-full"
      >
        Login
      </Button>
      <Modal
        size="5xl"
        isOpen={isOpen}
        closeButton={<p><IoCloseCircle className="bg-buttoncolor text-white rounded-full text-xl"/></p>}
        onOpenChange={onOpenChange}
        isKeyboardDismissDisabled={true}
        placement="center"
        isDismissable={false}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent className="h-auto py-4 flex justify-center items-center mx-auto bg-[url('/Auth/auth.png')] w-full">
          {(onClose) => (
            <>
              <ModalBody className="w-full flex justify-center items-center mx-auto">
                <div className="bg-white rounded-md md:p-4 p-2 md:w-[95%] flex flex-col justify-center gap-4">
                  <div className="mt-4 md:w-96 mx-auto">
                    <Tabs
                      variant="bordered"
                      fullWidth
                      size="lg"
                      aria-label="Tabs form"
                      classNames={{
                        tabList:
                          " w-full  p-0 border-2 border-buttoncolor rounded-md",
                        cursor: "w-full bg-buttoncolor rounded-sm ",
                        tab: "  text-white h-8 ",
                        tabContent:
                          "group-data-[selected=true]:text-white w-full",
                      }}
                      selectedKey={selected}
                      onSelectionChange={setSelected}
                    >
                      <Tab key="LOGIN" title="LOGIN" className="w-full"></Tab>
                      <Tab key="SIGNUP" title="SIGNUP"></Tab>
                    </Tabs>
                  </div>
                  <div className="flex flex-row justify-between items-center md:px-4 mt-1 w-full">
                    {selected==='SIGNUP' && <div className=" border-1.5 border-gray-300 rounded-2xl md:w-3/6 w-full h-auto flex flex-col justify-start items-start gap-2 px-4 py-2">
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
                          Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
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
                          Email<span className="text-red-500">*</span>
                        </label>
                        <input
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
                          Set Password<span className="text-red-500">*</span>
                        </label>
                        <input
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
                         <span className="ml-auto text-xs text-buttoncolor">Terms & Condition</span> 
                        </Link>
                      </div>

                      <div className="w-full flex flex-col gap-2 items-center">
                        <Button className="bg-buttoncolor rounded-sm h-9 text-white w-full">Log in</Button>
                        <p className="text-xs">Already a member?<span className="text-xs underline text-buttoncolor cursor-pointer" onClick={()=>setSelected('LOGIN')}>Login</span></p>
                      </div>
                    </div>}
                    {selected==='LOGIN' && <div className=" border-1.5 border-gray-300 rounded-2xl md:w-3/6 h-auto w-full flex flex-col justify-start items-start gap-2 px-4 py-2">
                      <Image className="h-8 w-24" src={backgroundimage} />
                      <h6 className="text-lg font-medium">Welcome Back!</h6>
                      <p className="text-xs">
                        Log In to your account to proceed.
                      </p>
                      <div className="mb-2 w-full mt-2">
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Email<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 "
                          placeholder="Enter Your Email"
                          required
                        />
                      </div>
                      <div className="mb-2 w-full">
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="password"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 "
                          placeholder="Enter Your Password"
                          required
                        />
                      </div>
                      <div className="flex py-2 px-1 justify-between  items-center md:gap-24 gap-4">
                        <Checkbox
                         color="warning"
                          classNames={{
                            label: "md:text-small text-xs",
                            
                          }}
                        >
                          Remember me
                        </Checkbox>
                        <Link color="primary" href="#" size="sm">
                         <span className="ml-auto md:text-sm text-xs">Forgot password?</span> 
                        </Link>
                      </div>

                      <div className="w-full flex flex-col gap-2 items-center">
                        <Button className="bg-buttoncolor rounded-sm text-white w-full">Log in</Button>
                        <p className="text-sm">New member?<span className="text-md underline text-buttoncolor cursor-pointer" onClick={()=>setSelected('SIGNUP')}>Sign In</span></p>
                      </div>
                    </div>}




                    <div className="hidden md:flex">
                      <Image src={Authgif} height={300} width={400} />
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
