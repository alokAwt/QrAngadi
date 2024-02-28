import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  BsChevronBarDown,
  BsChevronBarUp,
  BsChevronCompactUp,
} from "react-icons/bs";
export const AccordionItem = ({ title, children, onClick, open = false }) => {
  return (
    <article className="w-full select-none border-b-2 border-b-[#B2B2B2]  justify-center">
      <div
        onClick={onClick}
        className="flex cursor-pointer items-center justify-between h-20"
      >
        <h4
          className="text-darkPurple font-semibold lg:text-lg w-4/5 text-[#111827E5]
]"
        >
          {title}
        </h4>

        {open ? (
          <ChevronUp className="w-20" />
        ) : (
          <ChevronDown className="w-20" />
        )}
      </div>
      {open && (
        <p
          className={`text-palePurple pb-6 text-md font-normal leading-[21px]`}
        >
          {children}
        </p>
      )}
    </article>
  );
};
