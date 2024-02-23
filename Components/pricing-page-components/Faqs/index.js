"use client";
import React, { useState } from "react";
import { AccordionItem } from "../AccordionItem";
import { ArrowDown } from "lucide-react";

function Faqs() {
  const [indexopen, setIndexOpen] = useState(99999);

  const handleClick = (index) => {
    setIndexOpen(index === indexopen ? 9999 : index);
  };
  const Data = [
    {
      title: "Will I get a refund after 7 days?",
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      title: "Will I get unlimited generations?",
      content:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      title: "Can I upload linktree in the URL?",
      content:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      title: "Can I track the number of click?",
      content:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <div className="mt-5 mb-12">
      <div className="flex flex-col lg:flex-row justify-center w-3/4 mx-auto my-5">
        <div className="lg:w-1/2 flex justify-center flex-col">
          <h1 className="text-5xl font-bold leading-snug">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-lg font-500 leading-7 text-[#545867]">
            Still have some unsolved queries?
          </p>
          <button className="mt-4 bg-appThemeTwo text-white rounded-lg py-2 px-8 text-lg font-semibold w-max">
            Contact us
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          {Data.map((item, index) => (
            <>
              <AccordionItem
                key={item.title}
                open={index === indexopen}
                title={item.title}
                onClick={() => handleClick(index)}
              >
                {item.content}
              </AccordionItem>
            </>
          ))}
          <div className="text-appThemeTwo flex gap-2 mt-5 justify-end text-sm items-center">
            <span>See More Questions</span>
            <ArrowDown className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
