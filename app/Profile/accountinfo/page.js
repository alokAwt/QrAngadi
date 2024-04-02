import { Avatar, Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { CiMemoPad } from "react-icons/ci";

const Accountinfo = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-4 p-2 w-full">
      <div className="flex w-full gap-4 flex-col justify-center items-start pl-4">
        <div className="flex p-2 justify-center items-center gap-8">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-32 h-32 text-large"
          />
          <div className="flex-col flex gap-2 items-center">
          <Button variant="solid" className="bg-buttoncolor text-white w-44">
            Upload profile
          </Button>
          <Button variant="solid" className="bg-buttoncolor text-white w-44">
            Edit profile
          </Button>

          </div>
        </div>
        <div className="w-11/12 border-1 p-4 gap-8 flex justify-evenly items-start border-buttoncolor rounded-md h-auto">
          <div className="flex w-full justify-start items-start flex-col gap-2 pb-2">
            <p>Personal Details</p>
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
                        // value={firstName}
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5  "
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
                        // value={lastName}
                        type="text"
                        id="last_name"
                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5  "
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Conatct Number
                    </label>
                    <input
                      // value={email}
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 "
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      // value={email}
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 "
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-start items-start flex-col gap-2 pb-2">
           <p>Subscription Details</p>
           <div className="w-full rounded-lg  bg-buttonopacitycolor h-72">
             <span className="relative text-white rounded-lg top-2   left-2 w-auto p-1 bg-green-400">Active</span>
             <div className="flex flex-col justify-center items-center gap-2 mt-4">
                <CiMemoPad  className="text-buttoncolor text-7xl"/>
                <p className="mt-4 font-medium text-sm leading-7 text-center">BUSINESS Rs1000/MONTHLY- most popular</p>
                <div className="flex flex-col justify-center items-center w-full p-4 text-xs">
                  <div className="flex justify-between items-center px-2 w-full">
                    <span>Activation Date</span>
                    <span>23/03/1997</span>
                  </div>
                  <div className="flex justify-between items-center px-2 w-full">
                    <span>Expiry Date</span>
                    <span>23/04/1997</span>
                  </div>
                </div>
             </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountinfo;
