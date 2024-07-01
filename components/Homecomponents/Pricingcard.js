"use client";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Input,
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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Lottie from "react-lottie";
import Pulse from "../../Utility/Animation/Pulse";
import Success from "../../Utility/Animation/Success";
import Failedanimation from "../../Utility/Animation/Failed";
import { motion } from "framer-motion";
import { GetProfile } from "@/Utility/Api/Users";
import { UseStatevalue } from "@/Utility/Contextfiles/StateProvider";
import Link from 'next/link'
import { sendTokenToServer } from "@/Utility/Authutils";
import {Getsubscription} from '../../Utility/Api/Subscription'
import { SubscriptIcon } from "lucide-react";
import { useRouter } from 'next/navigation'

const Pricingcard = () => {
  const router = useRouter()
  const [{ token }, dispatch] = UseStatevalue();
  const [selectedKeys, setSelectedKeys] = useState("1");
  const [selectedKeys2, setSelectedKeys2] = useState("1");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { toast } = useToast();
  const [selected, setSelected] = React.useState("MONTHLY");
  const [price, setPrice] = useState([]);
  const [Loading, Setloading] = useState(false);
  const [successfully, Setsuccessfully] = useState(false);
  const [Failed, SetFailed] = useState(false);
  const [standardPlan, setStandardPlan] = useState();
  const [proPlan, setProPlan] = useState();
  const [Islogin, setIslogin] = useState();
  const [subscription, Setsubscription] = useState();

  const getToken = () => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: "SET_TOKEN", token });
      sendTokenToServer(token);
    }
    GetProfile().then((res) => {
      setIslogin(res.data);
    });
  };
  useEffect(() => {
    getToken();
  }, [token]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Pulse,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: Success,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: Failedanimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const childVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    GetPricing();
  }, []);

  const GetPricing = () => {
    GetPlans().then((res) => {
      console.log("alok", res);
      setPrice(res.data);
    });
  };

  useEffect(() => {
    const standard = price?.find((plan) => plan?.PlanType === "Standard");
    if (standard) {
      setStandardPlan(standard);
    }

    const pro = price?.find((plan) => plan?.PlanType === "Pro");
    if (pro) {
      setProPlan(pro);
    }
  }, [price]);

  const list1 = [
    `Unlimited QR Code Generation`,
    `Standard QR Code Design Templates`,
    `Static QR Codes (non-editable content)`,
    `Basic Analytics`,
    ` Email Support`,
    `Limited Customer Support`,
  ];

  const PayAmount = (selectedPrice, days) => {
    if (!Islogin) {
      toast({
        variant: "destructive",
        title: "Please Login ",
        description: "you are not logged in please login",
        action: <ToastAction altText="Try again"><Link href="/Login">Login</Link></ToastAction>,

      });
      return;
    }
    Setloading(true);
    if (selected === "MONTHLY") {
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
        Price: selectedPrice,
      }).then((res) => {
        if (res.status === "success") {
          console.log(res);
          handlerazarpay(res.data, days * 12 + 5, selectedPrice);
        }
      });
    }
  };

  const handlerazarpay = async (data, dayss, selectedPrice) => {
    Setloading(true);
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
          console.log(res, `res`);
          if (res.status === "success") {
            Setloading(false);
            Setsuccessfully(true);
          } else {
            SetFailed(true);
          }
        });
      },
      modal: {
        ondismiss: function () {
          onOpenChange();
          Setloading(false);
        },
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };


  //Get subscription 
const getsubscription=()=>{
  Getsubscription().then((res) => {
  if(res?.data){
    Setsubscription(res?.data[0])

  }
  });
}
useEffect(() => {
  getsubscription()
}, [Islogin,token])


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
                tabContent:
                  "group-data-[selected=true]:text-white w-full text-buttoncolor",
              }}
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="MONTHLY" title="MONTHLY" className="w-full"></Tab>
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
                {
                  <Button
                    className="rounded-sm uppercase text-buttoncolor border-1.5 border-buttoncolor w-60"
                    variant="bordered"
                    onPress={()=>router.push('/Login')}
                    isDisabled={Islogin?true:false}
                  >
                    {Islogin?"free":"Sign up for free"}
                  </Button>
                }
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
                <p className="text-xs text-buttoncolor uppercase">Pro</p>
                {selected === "MONTHLY" && (
                  <p className="text-xl text-black font-semibold">
                    ₹ {proPlan?.Price != undefined ? proPlan?.Price : null}/
                    <span className="text-sm text-gray-500">Month</span>
                  </p>
                )}
                {selected === "YEARLY" && (
                  <p className="text-xl text-black font-semibold flex justify-between items-center">
                    ₹{" "}
                    {proPlan?.Price != undefined
                      ? proPlan?.Price * 12 - proPlan?.Discount
                      : null}
                    /<span className="text-sm text-gray-500">Year</span>
                    <span className="line-through text-buttoncolor text-xs font-light ml-2">
                      ₹{proPlan?.Discount}off
                    </span>
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
                  onPress={onOpen}
                  isDisabled={subscription?true:false}
                  // onClick={() => PayAmount(price[0].Price, price[0].Duration)}
                >
                {subscription?'ACTIVE': 'SUBSCRIBE NOW'}
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
                    Cancel anytime.
                  </span>
                </p>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-80 rounded-sm h-auto">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col p-2 gap-1">
                <p className="text-xs text-buttoncolor uppercase">Standard</p>
                {selected === "MONTHLY" && (
                  <p className="text-xl text-black font-semibold">
                    ₹{" "}
                    {standardPlan?.Price != undefined
                      ? standardPlan?.Price
                      : null}
                    /<span className="text-sm text-gray-500">Month</span>
                  </p>
                )}
                {selected === "YEARLY" && (
                  <p className="text-xl text-black font-semibold flex justify-between items-center">
                    ₹{" "}
                    {standardPlan?.Price != undefined
                      ? standardPlan?.Price * 12 - standardPlan?.Discount
                      : null}
                    /<span className="text-sm text-gray-500">Year</span>
                    <span className="line-through text-buttoncolor text-xs font-light ml-2">
                      ₹{standardPlan?.Discount}off
                    </span>
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
                  onPress={onOpen}
                  isDisabled={subscription?true:false}
                  // onClick={() => PayAmount(price[2].Price, price[2].Duration)}
                >
                {subscription?'ACTIVE': 'SUBSCRIBE NOW'}
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
                    Cancel anytime.
                  </span>
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Modal
        backdrop="blur"
        size="4xl"
        isOpen={isOpen}
        isDismissable={false}
        hideCloseButton={true}
        onOpenChange={onOpenChange}
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
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                {Loading || successfully || Failed ? (
                  <div>
                    {Loading && (
                      <div className="flex flex-col justify-center items-center gap-4">
                        <Lottie
                          options={defaultOptions}
                          height={200}
                          width={200}
                        />
                        <div>
                          <p className="text-xs md:text-sm leading-7">
                            Do not close the window, Please Wait...
                          </p>
                        </div>
                      </div>
                    )}
                    {successfully && (
                      <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col justify-center items-center gap-4"
                      >
                        <motion.div variants={childVariants}>
                          <Lottie
                            options={defaultOptions2}
                            height={100}
                            width={100}
                          />
                        </motion.div>
                        {successfully && (
                          <motion.div
                            variants={childVariants}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="flex flex-col justify-center items-center gap-4"
                          >
                            <p className="text-green-600 text-2xl">
                              Transaction Successful!{" "}
                            </p>
                            <p className="text-xs">
                              Order number: 2017182818828182881, Thank you for
                              choosing our service
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {Failed && (
                      <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col justify-center items-center gap-4"
                      >
                        <motion.div variants={childVariants}>
                          <Lottie
                            options={defaultOptions3}
                            height={100}
                            width={100}
                          />
                        </motion.div>
                        {Failed && (
                          <motion.div
                            variants={childVariants}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="flex flex-col justify-center items-center gap-4"
                          >
                            <p className="text-red-600 text-2xl">
                              Transaction Failed!{" "}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Accordion
                    motionProps={{
                      variants: {
                        enter: {
                          y: 0,
                          opacity: 1,
                          height: "auto",
                          transition: {
                            height: {
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                              duration: 1,
                            },
                            opacity: {
                              easings: "ease",
                              duration: 1,
                            },
                          },
                        },
                        exit: {
                          y: -10,
                          opacity: 0,
                          height: 0,
                          transition: {
                            height: {
                              easings: "ease",
                              duration: 0.25,
                            },
                            opacity: {
                              easings: "ease",
                              duration: 0.3,
                            },
                          },
                        },
                      },
                    }}
                    variant="splitted"
                  >
                    {selected === "MONTHLY" && (
                      <AccordionItem
                        onPress={() => setSelectedKeys("1")}
                        key="1"
                        aria-label="Accordion 1"
                        title={`PRO ₹ ${proPlan?.Price}/${selected}- most popular`}
                        className={
                          selectedKeys === "1"
                            ? "ring-1 ring-buttoncolor  "
                            : ""
                        }
                      >
                        {list1.map((item, index) => (
                          <div
                            className="flex  justify-between  items-center"
                            key={index}
                          >
                            <li className="text-xs text-gray-500 w-64">
                              {item}
                            </li>
                            <span>
                              <IoCheckmarkCircleSharp
                                size={25}
                                className="text-[#4ed467]  bg-white rounded-full "
                              />
                            </span>
                          </div>
                        ))}
                      </AccordionItem>
                    )}
                    {selected === "MONTHLY" && (
                      <AccordionItem
                        onPress={() => setSelectedKeys("2")}
                        key="2"
                        aria-label="Accordion 1"
                        title={`Standard ₹ ${standardPlan?.Price}/${selected}`}
                        className={
                          selectedKeys === "2"
                            ? "ring-1 ring-buttoncolor  "
                            : ""
                        }
                      >
                        {list1.map((item, index) => (
                          <div
                            className="flex  justify-between  items-center"
                            key={index}
                          >
                            <li className="text-xs text-gray-500 w-64">
                              {item}
                            </li>
                            <span>
                              <IoCheckmarkCircleSharp
                                size={25}
                                className="text-[#4ed467]  bg-white rounded-full "
                              />
                            </span>
                          </div>
                        ))}
                      </AccordionItem>
                    )}

                    {selected === "YEARLY" && (
                      <AccordionItem
                        onPress={() => setSelectedKeys2("1")}
                        key="1"
                        aria-label="Accordion 2"
                        title={`PRO ₹ ${
                          proPlan?.Price * 12 - proPlan?.Discount
                        }/${selected}`}
                        className={
                          selectedKeys2 === "1"
                            ? "ring-1 ring-buttoncolor bg-buttonopacitycolor"
                            : ""
                        }
                      >
                        {list1.map((item, index) => (
                          <div
                            className="flex  justify-between  items-center"
                            key={index}
                          >
                            <li className="text-xs text-gray-500 w-64">
                              {item}
                            </li>
                            <span>
                              <IoCheckmarkCircleSharp
                                size={25}
                                className="text-[#4ed467]  bg-white rounded-full "
                              />
                            </span>
                          </div>
                        ))}
                      </AccordionItem>
                    )}
                    {selected === "YEARLY" && (
                      <AccordionItem
                        onPress={() => setSelectedKeys2("2")}
                        key="2"
                        aria-label="Accordion 2"
                        title={`Standard ₹ ${
                          standardPlan?.Price * 12 - standardPlan?.Discount
                        }/${selected}`}
                        className={
                          selectedKeys2 === "2"
                            ? "ring-1 ring-buttoncolor bg-buttonopacitycolor"
                            : ""
                        }
                      >
                        {list1.map((item, index) => (
                          <div
                            className="flex  justify-between  items-center"
                            key={index}
                          >
                            <li className="text-xs text-gray-500 w-64">
                              {item}
                            </li>
                            <span>
                              <IoCheckmarkCircleSharp
                                size={25}
                                className="text-[#4ed467]  bg-white rounded-full "
                              />
                            </span>
                          </div>
                        ))}
                      </AccordionItem>
                    )}
                  </Accordion>
                )}
              </ModalBody>
              <ModalFooter>
                {Loading ? null : (
                  <Button
                    className="text-buttoncolor"
                    variant="light"
                    onPress={() => {
                      onClose(), Setsuccessfully(false);
                    }}
                  >
                    Close
                  </Button>
                )}
                {!successfully && (
                  <Button
                    className="bg-buttoncolor text-white"
                    variant="solid"
                    // onPress={() => PayAmount(price[0].Price, price[0].Duration)}
                    onPress={() => {
                      if (selected === "MONTHLY") {
                        if (selectedKeys === "1") {
                          PayAmount(proPlan?.Price, proPlan?.Duration);
                        } else if (selectedKeys === "2") {
                          PayAmount(
                            standardPlan?.Price,
                            standardPlan?.Duration
                          );
                        }
                      } else if (selected === "YEARLY") {
                        if (selectedKeys2 === "1") {
                          PayAmount(
                            proPlan?.Price * 12 - proPlan?.Discount,
                            proPlan?.Duration * 12
                          );
                        } else if (selectedKeys2 === "2") {
                          PayAmount(
                            standardPlan?.Price * 12 - standardPlan?.Discount,
                            standardPlan?.Duration * 12
                          );
                        }
                      }
                    }}
                  >
                    {Loading ? "Wait" : "Procced"}
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Pricingcard;
