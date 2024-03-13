import React, { useContext, useState } from "react";
import { DataContext } from "@/app/gamification/[type]/page";
import { Divider, cn } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { RxCross1 } from "react-icons/rx";
import { TbCheck } from "react-icons/tb";
import Preview from "../../public/gamification/Preview.png";
import Image from "next/image";
import MobileScreen from "../MobileScreen/MobileScreen";
const PersonalData = [{ label: "Personal Data", value: "personaldata" }];

const classNamesforswitch = {
  base: cn("w-full "),
  wrapper:
    "p-0 h-8 w-14 overflow-visible group-data-[selected=true]:bg-buttoncolor",
  thumb: cn(
    "w-6 h-6 border-2 shadow-lg",
    "group-data-[hover=true]:border-buttonopacitycolor",
    "group-data-[selected=true]:ml-6",
    "group-data-[pressed=true]:w-7",
    "group-data-[selected]:group-data-[pressed]:ml-4"
  ),
};

function ClaimAction() {
  const {
    switchStates,
    setSwitchStates,
    handleSwitchChange,
    ButtonText,
    Setbuttontext,
    personaldatavalues,
    setpersonaldataValues,
  } = useContext(DataContext);

  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex md:flex-row flex-col-reverse justify-between   w-full items-start mt-2">
        <div className="flex flex-col justify-start items-start gap-4 ">
          <p className="text-sm font-medium mb-4">
            Enter the details and set up the general settings of your coupon.
          </p>
          <Divider className="h-0.5 bg-gray-300" />

          <div className="flex flex-col justify-start items-start mt-2">
            <p className="text-sm  font-semibold">Choose action</p>
          </div>
          <div className="absolute w-[300px] right-[65px] top-[150px]">
            <MobileScreen />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <p className="text-xs">
              Actions<span className="text-red-600">*</span>
            </p>
            <Select
              selectionMode="multiple"
              placeholder="Enter personal Data"
              variant="bordered"
              selectedKeys={personaldatavalues}
              className=""
              onSelectionChange={setpersonaldataValues}
            >
              {PersonalData.map((personal) => (
                <SelectItem key={personal.value} value={personal.value}>
                  {personal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Divider className="h-0.5 bg-gray-300 mt-2" />

          <div className="flex justify-start flex-col items-start gap-2">
            <p className="text-sm font-semibold">Personal Data</p>
            <div className="flex justify-start flex-col items-start gap-2">
              {switchStates.map((switchData, index) => (
                <div
                  key={index}
                  className="flex justify-between w-60 items-center mb-2"
                >
                  <p className="text-xs font-medium">
                    {switchData.label}
                    <span className="text-red-600">*</span>
                  </p>
                  <Switch
                    isSelected={switchData.isSelected}
                    classNames={classNamesforswitch}
                    onValueChange={() => handleSwitchChange(index)}
                    thumbIcon={({ isSelected, className }) =>
                      isSelected ? (
                        <TbCheck className="text-buttoncolor" />
                      ) : (
                        <RxCross1 className={className} />
                      )
                    }
                    endContent={<p>OFF</p>}
                  />
                </div>
              ))}
              <Divider />
            </div>

            {/* <div className="flex justify-start flex-col items-start gap-2">
              <div className="flex justify-between w-60 items-center mb-2">
                <p className="text-xs font-medium">
                  First Name<span className="text-red-600">*</span>
                </p>
                <Switch
                  classNames={classNamesforswitch}
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                      <TbCheck className="text-buttoncolor" />
                    ) : (
                      <RxCross1 className={className} />
                    )
                  }
                  endContent={<p>OFF</p>}
                />
              </div>
              <Divider />
              <div className="flex justify-between w-60 items-center mb-2">
                <p className="text-xs font-medium">
                  Last Name<span className="text-red-600">*</span>
                </p>
                <Switch
                  classNames={classNamesforswitch}
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                      <TbCheck className="text-buttoncolor" />
                    ) : (
                      <RxCross1 className={className} />
                    )
                  }
                  endContent={<p>OFF</p>}
                />
              </div>
              <Divider />
              <div className="flex justify-between w-60 items-center mb-2">
                <p className="text-xs font-medium">
                  Email<span className="text-red-600">*</span>
                </p>
                <Switch
                  classNames={classNamesforswitch}
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                      <TbCheck className="text-buttoncolor" />
                    ) : (
                      <RxCross1 className={className} />
                    )
                  }
                  endContent={<p>OFF</p>}
                />
              </div>
              <Divider />
              <div className="flex justify-between w-60 items-center mb-2">
                <p className="text-xs font-medium">
                  Mobile No.<span className="text-red-600">*</span>
                </p>
                <Switch
                  classNames={classNamesforswitch}
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                      <TbCheck className="text-buttoncolor" />
                    ) : (
                      <RxCross1 className={className} />
                    )
                  }
                  endContent={<p>OFF</p>}
                />
              </div>
              <Divider />
              <div className="flex justify-between w-60 items-center mb-2">
                <p className="text-xs font-medium">
                  Address<span className="text-red-600">*</span>
                </p>
                <Switch
                  classNames={classNamesforswitch}
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                      <TbCheck className="text-buttoncolor" />
                    ) : (
                      <RxCross1 className={className} />
                    )
                  }
                  endContent={<p>OFF</p>}
                />
              </div>
              <Divider />
              <div className="flex justify-between w-60 items-center mb-2">
                <p className="text-xs font-medium">
                  Custom Field<span className="text-red-600">*</span>
                </p>
                <Switch
                  classNames={classNamesforswitch}
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                      <TbCheck className="text-buttoncolor" />
                    ) : (
                      <RxCross1 className={className} />
                    )
                  }
                  endContent={<p>OFF</p>}
                />
              </div>
              <Divider />
            </div> */}
          </div>
          <div className="flex flex-col justify-start items-start gap-4 mt-4 w-full ">
            <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
              Button Text<span className="text-red-500">*</span>
            </span>
            <input
              value={ButtonText}
              onChange={(e) => Setbuttontext(e.target.value)}
              placeholder=""
              className="border-1 w-full border-gray-300 rounded-md focus:ring-1 focus:border-1 focus:border-gray-100 focus:ring-buttoncolor"
              type="text"
            />
          </div>
        </div>
        {/* <div>
          <Image className="h-[40rem]" src={Preview} />
        </div> */}
      </div>
      <Divider className="mt-4" />
    </div>
  );
}

export default ClaimAction;
