"use client";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Divider,
  CardFooter,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdRadioButtonChecked } from "react-icons/md";
import { CreateOrder, GetPlans, PayOrder } from "@/Utility/Api/Users";
import Script from "next/script";
import { useToast } from "../../components/ui/usetoast";
import { ToastAction } from "@/components/ui/toast";
const Pricingcard = () => {
  const { toast } = useToast();
  const [selected, setSelected] = React.useState("MONTHY");
  const [price, setPrice] = useState([]);
  useEffect(() => {
    GetPricing();
  }, []);

  const GetPricing = () => {
    GetPlans().then((res) => {
      console.log("alok", res);
      setPrice(res.data);
    });
  };

  const list1 = [
    `Unlimited QR Code Generation`,
    `Standard QR Code Design Templates`,
    `Static QR Codes (non-editable content)`,
    `Basic Analytics`,
    ` Email Support`,
    `Limited Customer Support`,
  ];

  const PayAmount = (selectedPrice, days) => {
    if (selected === "MONTHY") {
      CreateOrder({
        Price: selectedPrice,
      }).then((res) => {
        if (res.status === "success") {
          console.log(res);
          handlerazarpay(res.data, days, selectedPrice);
        }
      });
    } else if (selected === "YEARLY") {
      CreateOrder({
        Price: selectedPrice * 12,
      }).then((res) => {
        if (res.status === "success") {
          console.log(res);
          handlerazarpay(res.data, days * 12, selectedPrice * 12);
        }
      });
    }
  };

  const handlerazarpay = async (data, dayss, selectedPrice) => {
    const options = {
      name: data.name,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: data.amountDesc,
      handler: async function (response) {
        PayOrder({
          response: response,
          days: dayss,
          Price: selectedPrice,
        }).then((res) => {
          if (res.status === "success") {
            toast({
              variant: "",
              title: "Successfully Payment Done",
              description: "",
            });
          } else {
            toast({
              variant: "",
              title: " Payment Failed",
              description: "",
            });
          }
        });
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="flex flex-col justify-center items-center gap-4 mt-16">
        <div className="flex flex-col justify-center items-center gap-2">
          <h6 className="font-bold text-3xl mt-8 text-center">
            Choose the right plan for you!
          </h6>
          <p className="font-medium text-center">
            Choose a plan and enjoy an exceptional user experience instantly.
          </p>
          <div className="mt-12 w-11/12 mx-auto">
            <Tabs
              variant="bordered"
              fullWidth
              size="lg"
              aria-label="Tabs form"
              classNames={{
                tabList: " w-full  p-0 border-2 border-buttoncolor rounded-md",
                cursor: "w-full bg-buttoncolor rounded-sm ",
                tab: "  text-white  ",
                tabContent: "group-data-[selected=true]:text-white w-full text-buttoncolor",
              }}
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="MONTHY" title="MONTHY" className="w-full"></Tab>
              <Tab key="YEARLY" title="YEARLY"></Tab>
            </Tabs>
          </div>
        </div>

        <div className="flex w-11/12 h-auto mt-12 justify-center items-center md:items-start  mx-auto gap-4 md:flex-row flex-col">
          <Card className="max-w-80 rounded-sm h-auto">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col p-2">
                <p className="text-xs text-buttoncolor">BASIC</p>
                <p className="text-xl text-black font-semibold">Free</p>
                {/* <p className="text-xl text-black font-semibold">
                  ${price != undefined ? price[0]?.Price : null}/
                  <span className="text-sm text-gray-500">Month</span>
                </p> */}
              </div>
            </CardHeader>
            <Divider className="w-10/12 mx-auto" />
            <CardBody className="flex justify-start items-center mx-auto gap-4 h-auto">
              {list1.map((item, index) => (
                <div
                  className="flex  justify-between  items-center"
                  key={index}
                >
                  <li className="text-xs text-gray-500 w-64">{item}</li>
                  <span>
                    <IoCheckmarkCircleSharp
                      size={25}
                      className="text-[#4ed467]  bg-white rounded-full "
                    />
                  </span>
                </div>
              ))}
              <div className="py-5">
                <Button
                  className="rounded-sm uppercase text-buttoncolor border-1.5 border-buttoncolor w-60"
                  variant="bordered"
                >
                  Sign up for free
                </Button>
              </div>
            </CardBody>
            <Divider />
            <CardFooter className="bg-buttonopacitycolor rounded-none">
              <div className="flex justify-center items-center p-1 flex-col mx-auto gap-2">
                <p className="text-sm font-semibold">Free Forever</p>
                <p className="text-xs font-medium text-gray-500">
                  Recommended for personal use.
                </p>
              </div>
            </CardFooter>
          </Card>

          <Card className="max-w-80 md:mt-[-2rem] mt-0  rounded-md border-2 border-buttoncolor">
            <CardHeader className="flex gap-1 items-center justify-center bg-buttoncolor rounded-none h-10">
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg font-medium text-white">MOST POPULAR!</p>
              </div>
            </CardHeader>
            <Divider />
            <CardHeader className="flex gap-3">
              <div className="flex flex-col p-2 gap-1">
                <p className="text-xs text-buttoncolor">BUSINESS</p>
                {selected === "MONTHY" && (
                  <p className="text-xl text-black font-semibold">
                    Rs{price != undefined ? price[1]?.Price : null}/
                    <span className="text-sm text-gray-500">Month</span>
                  </p>
                )}
                {selected === "YEARLY" && (
                  <p className="text-xl text-black font-semibold">
                    Rs{price != undefined ? price[1]?.Price * 12 : null}/
                    <span className="text-sm text-gray-500">Year</span>
                  </p>
                )}
              </div>
            </CardHeader>
            <Divider className="w-10/12 mx-auto" />
            <CardBody className="flex justify-start items-center mx-auto gap-4 h-auto">
              {list1.map((item, index) => (
                <div
                  className="flex  justify-between  items-center"
                  key={index}
                >
                  <li className="text-xs text-gray-500 w-64">{item}</li>
                  <span>
                    <IoCheckmarkCircleSharp
                      size={25}
                      className="text-[#4ed467]  bg-white rounded-full "
                    />
                  </span>
                </div>
              ))}
              <div className="py-3">
                <Button
                  className="rounded-sm uppercase bg-buttoncolor text-white font-medium w-60 "
                  variant="solid"
                  onClick={() => PayAmount(price[1].Price, price[1].Duration)}
                >
                  SUBSCRIBE NOW
                </Button>
              </div>
            </CardBody>
            <Divider />
            <CardFooter className="bg-buttonopacitycolor rounded-none">
              <div className="flex justify-center items-center p-1 flex-col mx-auto gap-2">
                <p className="text-sm font-semibold">
                  Risk-Free -{" "}
                  <span className="text-xs font-medium text-gray-500">
                    7 day money-back guarantee
                  </span>
                </p>
                <p className="text-sm font-semibold">
                  Flexibility -{" "}
                  <span className="text-xs font-medium text-gray-500">
                    7Cancel anytime.
                  </span>
                </p>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-80 rounded-sm h-auto">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col p-2 gap-1">
                <p className="text-xs text-buttoncolor">BUSINESS</p>
                {selected === "MONTHY" && (
                  <p className="text-xl text-black font-semibold">
                    Rs{price != undefined ? price[2]?.Price : null}/
                    <span className="text-sm text-gray-500">Month</span>
                  </p>
                )}
                {selected === "YEARLY" && (
                  <p className="text-xl text-black font-semibold">
                    Rs
                    {price != undefined ? price[2]?.Price * 12 : null}/
                    <span className="text-sm text-gray-500">Year</span>
                  </p>
                )}
              </div>
            </CardHeader>
            <Divider className="w-10/12 mx-auto" />
            <CardBody className="flex justify-start items-center mx-auto gap-4 h-auto">
              {list1.map((item, index) => (
                <div
                  className="flex  justify-between  items-center"
                  key={index}
                >
                  <li className="text-xs text-gray-500 w-64">{item}</li>
                  <span>
                    <IoCheckmarkCircleSharp
                      size={25}
                      className="text-[#4ed467]  bg-white rounded-full "
                    />
                  </span>
                </div>
              ))}
              <div className="py-4">
                <Button
                  className="rounded-sm uppercase bg-buttoncolor text-white font-medium w-60 "
                  variant="solid"
                  onClick={() => PayAmount(price[2].Price, price[2].Duration)}
                >
                  SUBSCRIBE NOW
                </Button>
              </div>
            </CardBody>
            <Divider />
            <CardFooter className="bg-buttonopacitycolor rounded-none">
              <div className="flex justify-center items-center p-1 flex-col mx-auto gap-2">
                <p className="text-sm font-semibold">
                  Risk-Free -{" "}
                  <span className="text-xs font-medium text-gray-500">
                    7 day money-back guarantee
                  </span>
                </p>
                <p className="text-sm font-semibold">
                  Flexibility -{" "}
                  <span className="text-xs font-medium text-gray-500">
                    7Cancel anytime.
                  </span>
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Pricingcard;
