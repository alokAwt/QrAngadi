"use client";
import React, { useEffect, useState } from "react";
import WheelComponent from "react-wheel-of-prizes";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import confetti from "canvas-confetti";
import Image from "next/image";
import Jackpot from "../../public/gamification/Jackpot.png";

const prizeList = [
  { slot: 1, Name: "jackpot", Amount: 200 },
  { slot: 2, Name: "lucky draw", Amount: 200 },
  { slot: 3, Name: "No luck", Amount: 200 },
  { slot: 4, Name: "Won", Amount: 200 },
  { slot: 5, Name: "jackpot", Amount: 200 },
];
const Spinwheelgame = () => {
  const [segments, setSegments] = useState(
    prizeList.map((prize) => prize.Name)
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [winnerpeize, Setwinnerprize] = useState("");

  const handleConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 120,
      origin: { y: 0.6 },
    });
  };

  useEffect(() => {
    if (prizeList && prizeList.length > 0) {
      setSegments(prizeList.map((prize) => prize.Name));
    }
  }, [prizeList]);

  const segColors = [
    "#FC4851",
    "#FFBD54",
    "#90C2F5",
    "#FFBD54",
    "#90C2F5",
    "#FC4851",
  ];

  const onFinished = (winner) => {
    onOpenChange(true);
    handleConfetti();
    Setwinnerprize(winner);
  };

  return (
    <>
      <div className='bg-[url("https://s3-alpha-sig.figma.com/img/1c26/10c3/81303dd07e54dd582d35f85ee12e298e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oaEKWLHDjCn6F~ejDjN3ensSZa0bSnG1umaDG89LQBPxjmtPXgYXbbKSUdJKZJjCAzsAZelxBrwWbAWi7dq2b9Q--FCmcd91s583s8BpmgZI3kESbBzO~cOnE77GOlMrzncR61G05eYsTq9FCAqNg5VG8wjwK3o1YimA90nOYDQOHUKgoy94N67QpVZzUmr2kzaETr2gm5FaP4ktfWkzONsSYnU7Y45tmZ6nZhdbnMR24iarYg1VuwcCn8rztpqdGyrH~mBRHB2Iyv2Q~Ku0MBVtM~ZIn7wffGoGTcQXGdXGLOiz2OcGtk6Zdu-dMZYk48ANGS-itV2dVF4G0YSdQg__")] bg-repeat-x h-screen w-full'>
        <div className="flex justify-center items-center gap-4">
          <div>
            <p>Logo</p>
          </div>
          <div className="absolute top-[-104px] bg-red-400 ">
            <div className="  justify-center items-center w-96 hidden  md:flex ">
              <div className="md:absolute top-44 right-32  md:w-96 md:h-96 w-40 h-40">
                <WheelComponent
                  segments={segments}
                  segColors={segColors}
                  winningSegment="Spin Wheel"
                  onFinished={(winner) => onFinished(winner)}
                  primaryColor="#FF7143"
                  contrastColor="white"
                  buttonText="Start"
                  isOnlyOnce={false}
                  size={180}
                  upDuration={500}
                  downDuration={600}
                  fontFamily="Poppins"
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="opaque"
        isOpen={isOpen}
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
              <ModalBody className="p-2">
                <div className="w-full p-4 h-auto gap-2 flex justify-center items-center flex-col">
                  <p className="text-lg font-semibold">YOU WON!</p>
                  <Image
                    src={Jackpot}
                    className="w-full h-40 rounded-md object-contain"
                  />
                  <Button
                    variant="light"
                    className="bg-[#FC4851] text-white w-full rounded-sm hover:file:bg-[#FC4851]"
                  >
                    PROCEED
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Spinwheelgame;
