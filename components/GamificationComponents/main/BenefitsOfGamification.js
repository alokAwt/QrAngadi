import React from "react";
import heart from "../../../public/gamification/heart.png";
import ux from "../../../public/gamification/ux.png";
import speaker from "../../../public/gamification/speaker.png";
import people from "../../../public/gamification/people.png";
import coins from "../../../public/gamification/coins.png";
import Image from "next/image";

import styles from "./index.module.css";
function BenefitsOfGamification() {
  const data = [
    {
      img: heart,
      head: "Makes customers feel special when they win.",
      text: "Fostering a sense of appreciation and recognition among your audience when they win.",
    },
    {
      img: ux,
      head: "Delivers a delightful user experience.",
      text: "Creating a seamless and enjoyable experience for your audience.",
    },
    {
      img: speaker,
      head: "Boosts brand recognition.",
      text: "Increasing awareness and familiarity with your brand among your target audience.",
    },
    {
      img: people,
      head: "Captivates customers' attention.",
      text: "Guiding your audience towards taking action and making purchases.",
    },
    {
      img: coins,
      head: "Encourages conversions from your audience.",
      text: "Engaging and holding the interest of your customers effectively.",
    },
  ];
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center">
        <h6 className="font-bold text-3xl mt-8 text-center ">
          Benefits of our
          <span className="text-buttoncolor"> Gamifications!</span>{" "}
        </h6>
      </div>
      <div
        className={`flex flex-col mx-auto w-[55%] max-sm:w-[90%] ${styles.benefitsContainer}`}
      >
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className={`flex items-center gap-10 max-md:gap-3 py-3 relative ps-10 max-md:ps-5 ${
                index == 0 || index == 4
                  ? index == 0
                    ? styles.idfOne
                    : index == 4
                    ? styles.idfTwo
                    : ""
                  : ""
              }`}
            >
              <div className="bg-red min-h-[50%] min-w-[5px] absolute left-[-11.5px]"></div>
              <div className="bg-buttoncolor min-h-[20px] min-w-[20px]  rounded-[50%] absolute left-[-11.5px]"></div>
              <Image
                src={data.img}
                height={100}
                width={100}
                className="h-10 w-10 md:h-16 md:w-16 lg:w-[100px] lg:h-[100px]"
              />
              <div className="flex flex-col">
                <div className="font-semibold text-lg">{data.head}</div>
                <div>{data.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BenefitsOfGamification;
