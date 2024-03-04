"use client";
import React, { useState } from "react";
import QR from "../../public/QR.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Icon1 from "../../public/Icons/Icon11.png";
import Icon2 from "../../public/Icons/Icon12.png";
import Icon3 from "../../public/Icons/Icon13.png";
import Icon4 from "../../public/Icons/Icon14.png";
import Icon5 from "../../public/Icons/Icon15.png";
import Icon6 from "../../public/Icons/Icon16.png";
import Icon7 from "../../public/Icons/Icon17.png";
import Icon8 from "../../public/Icons/Icon18.png";

const Animateqr = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isparentAnimated, setisparentAnimated] = useState(false);
  const [isiconAnimated, seticonAnimated] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      y: [-20, 20, -20, 0],
      transition: { duration: 0.5, repeat: 1 },
    });
    setIsAnimated(true);
  };

  const startIconAnimation = async () => {
    await controls.start({
      y: [-20, 20, -20, 0],
      transition: { duration: 0.5, repeat: 1 },
    });
    seticonAnimated(true);
  };

  const handleAnimationComplete = () => {
    setIsShown(false);
    setisparentAnimated(true);
  };

  return (
    <>
      <motion.div
        animate={
          isparentAnimated ? { rotate: -15, scale: [1.0, 1.2, 1.0] } : {}
        }
        transition={{ duration: 0.3 }}
        onAnimationComplete={startIconAnimation}
      >
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onAnimationComplete={startAnimation}
        >
          <Image className="md:w-96 md:h-96" src={QR} />
          {isShown && (
            <motion.div
              className="md:w-40 w-32 h-1 bg-buttoncolor rounded-sm absolute md:top-24 top-20 md:ml-28 ml-24"
              animate={isAnimated ? { y: [0, 160, 180, 50, 0] } : {}}
              transition={{ duration: 2 }}
              onAnimationComplete={handleAnimationComplete}
            />
          )}
        </motion.div>
        {isiconAnimated && (
          <motion.div
            animate={isiconAnimated ? { rotate: 15, scale: [0, 1.2] } : {}}
            transition={{ duration: 0.2 }}
            className="absolute top-12 flex flex-col justify-center items-center gap-6 w-full"
          >
            <div className="flex justify-between items-center md:w-72 w-52">
              <motion.div
                animate={
                  isiconAnimated ? { y: [0, 2, 4, 6, 8, 6, 4, 2, 0] } : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Image className="h-10 w-10" src={Icon1} />
              </motion.div>
              <motion.div
                animate={
                  isiconAnimated ? { y: [10, 6, 4, 2, 0, 2, 4, 6, 10] } : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Image className="h-10 w-10" src={Icon2} />
              </motion.div>
            </div>
            <div className="flex justify-between items-center md:w-96 w-64">
              <motion.div
                animate={
                  isiconAnimated ? { y: [8, 6, 4, 2, 0, 2, 4, 6, 8] } : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Image className="h-10 w-10" src={Icon3} />
              </motion.div>
              <motion.div
                animate={
                  isiconAnimated ? { y: [8, 6, 4, 2, 0, 2, 4, 6, 8] } : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Image className="h-10 w-10 " src={Icon4} />
              </motion.div>
            </div>
            <div className="flex justify-between items-center md:w-96 w-64">
              <motion.div
                animate={
                  isiconAnimated ? { y: [0, 2, 4, 6, 8, 6, 4, 2, 0] } : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Image className="h-10 w-10" src={Icon5} />
              </motion.div>
              <motion.div
                animate={
                  isiconAnimated ? { y: [0, 2, 4, 6, 8, 6, 4, 2, 0] } : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Image className="h-10 w-10" src={Icon3} />
              </motion.div>
            </div>
            <div className="flex justify-between items-center md:w-72 w-52">
              <motion.div
                animate={
                  isiconAnimated ? { y: [8, 6, 4, 2, 0, 2, 4, 6, 8] } : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Image className="h-10 w-10" src={Icon7} />
              </motion.div>
              <motion.div
                animate={
                  isiconAnimated ? { y: [8, 6, 4, 2, 0, 2, 4, 6, 8] } : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Image className="h-10 w-10" src={Icon8} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Animateqr;
