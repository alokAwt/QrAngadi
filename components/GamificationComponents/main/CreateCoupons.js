"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import spinWheel from "../../../public/gamification/spinWheel.png";
import celeb from "../../../public/gamification/celeb.png";
import spin from "../../../public/gamification/spin2.png";
import scratch from "../../../public/gamification/scratch2.png";
import slot from "../../../public/gamification/slot2.png";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { IoCloseCircle } from "react-icons/io5";
function CreateCoupons() {
  const [game, setGame] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <div
        className={`flex justify-center items-center  mx-auto gap-20 gap-y-3 flex-wrap my-10`}
      >
        {" "}
        <div className="flex flex-col flex-1 gap-3 max-w-[360px]">
          <div className="font-semibold text-4xl">
            Create, customize, share & analyze your own{" "}
            <span className="text-buttoncolor">coupons!</span>
          </div>
          <div>
            {` Create interactive marketing games online to boost conversions
            without any coding. It's your hassle-free gamification platform!`}
          </div>
          <div className="flex gap-5 flex-wrap">
            {" "}
            <Button
              className="bg-buttoncolor max-w-[200px] py-2 px-6 text-white font-normal rounded-md"
              onPress={onOpen}
            >
              Create a game
            </Button>{" "}
            <button className="text-buttoncolor max-w-[200px] py-2 px-6 border-1 border-buttoncolor rounded-md hover:text-white hover:bg-buttoncolor">
              My Dashboard
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={celeb}
            height={500}
            width={500}
            style={{ minWidth: "280px" }}
            alt=""
          />
          <Image
            src={spinWheel}
            height={200}
            width={200}
            style={{ position: "absolute" }}
            alt=""
          />
        </div>
      </div>
      <Modal
        size="3xl"
        isOpen={isOpen}
        closeButton={
          <p>
            {" "}
            <IoCloseCircle
              className="text-white bg-buttoncolor mt-2 hover:bg-none rounded-full text-3xl"
              onClick={() => setGame("")}
            />
          </p>
        }
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
        <ModalContent className="h-auto py-4 flex justify-center items-center mx-auto w-full">
          {(onClose) => (
            <>
              <ModalBody className="w-full flex justify-center items-center mx-auto">
                <div className="bg-white rounded-md md:p-4 lg:p-4 p-2 md:w-[95%] lg:w-full flex flex-col justify-center gap-4">
                  <p className="font-semibold text-2xl">Select a Game Type</p>
                  <div className="flex justify-between">
                    <div className={``}>
                      <Image
                        alt=""
                        src={spin}
                        className={`flex-1 h-[200px] w-[200px] rounded-[50%] cursor-pointer ${
                          game == "spin-wheel"
                            ? "shadow-[0px_0px_20px_3px_#FF714340]"
                            : ""
                        }`}
                        onClick={() => setGame("spin-wheel")}
                      />
                    </div>

                    <div>
                      <Image
                        alt=""
                        src={scratch}
                        className={`flex-1 h-[200px] w-[200px] rounded-[50%] cursor-pointer ${
                          game == "scratch-card"
                            ? "shadow-[0px_0px_20px_3px_#FF714340]"
                            : ""
                        }`}
                        onClick={() => setGame("scratch-card")}
                      />
                    </div>
                    <div>
                      <Image
                        alt=""
                        src={slot}
                        className={`flex-1 h-[200px] w-[200px] rounded-[50%] cursor-pointer ${
                          game == "slot-machine"
                            ? "shadow-[0px_0px_20px_3px_#FF714340]"
                            : ""
                        }`}
                        onClick={() => setGame("slot-machine")}
                      />
                    </div>
                  </div>
                  <Button
                    className="bg-buttoncolor max-w-[200px] py-2 px-6 text-white font-normal rounded-md self-center"
                    onPress={onOpen}
                    onClick={() => router.push(`/gamification/${game}`)}
                  >
                    Confirm
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateCoupons;
