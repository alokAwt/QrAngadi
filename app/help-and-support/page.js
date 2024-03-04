import FAQ from "@/components/Homecomponents/FAQ";
import { FaSearch } from "react-icons/fa";
import React from "react";
import SendQueries from "@/components/SendQueries";
function Page() {
  return (
    <div>
      <div className="bg-[url(/help-support/bg.png)] p-5 sm:p-20 md:p-32 flex flex-col justify-center items-center">
        <span className="text-4xl text-white font-semibold tracking-wide">
          {" "}
          How Can We Help?
        </span>
        <div className="flex items-center px-5 justify-center mt-5 bg-white rounded-md border-1.5 w-full max-w-[500px]  border-[#AAAAAA]">
          <FaSearch className="text-[#AAAAAA]" />
          <input
            type="text"
            placeholder="Search for Topics"
            className="border-none bg-transparent placeholder:text-[#AAAAAA] w-full focus:ring-0 border-transparent focus:border-transparent"
          />
        </div>
      </div>
      <SendQueries />
      <FAQ />
    </div>
  );
}

export default Page;
