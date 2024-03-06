import React from "react";
import FAQ from "@/components/Homecomponents/FAQ";
import Trustedcomp from "@/components/Homecomponents/Trustedcomp";
import BenefitsOfGamification from "@/components/GamificationComponents/main/BenefitsOfGamification";
import HowItWorks from "@/components/GamificationComponents/main/HowItWorks";
import GamificationSolutions from "@/components/GamificationComponents/main/GamificationSolutions";
import Brand1 from "../../public/Brand/Brand1.png";
import Brand2 from "../../public/Brand/Brand2.png";
import Brand3 from "../../public/Brand/Brand3.png";
import Brand4 from "../../public/Brand/Brand4.png";
import Brand5 from "../../public/Brand/Brand5.png";
import Image from "next/image";
import CreateCoupons from "@/components/GamificationComponents/main/CreateCoupons";
function Page() {
  return (
    <div>
      <CreateCoupons />
      <GamificationSolutions />
      <HowItWorks />
      <BenefitsOfGamification />
      <div className="flex flex-col justify-center items-center gap-4 mt-16 mx-auto ">
        <div className="flex flex-col justify-center items-center mx-auto mt-12">
          <div className="flex justify-center items-center">
            <h6 className="font-bold text-3xl mt-8 text-center ">
              <span className="text-buttoncolor">Trusted</span> Companies.
            </h6>
          </div>
          <div className="flex justify-center mt-8 items-center gap-12 py-6 w-11/12 flex-col md:flex-row">
            <Image className="w-auto h-12" src={Brand1} alt="" />
            <Image className="w-auto h-12" src={Brand2} alt="" />
            <Image className="w-auto h-12" src={Brand3} alt="" />
            <Image className="w-auto h-8" src={Brand4} alt="" />
            <Image className="w-auto h-12" src={Brand5} alt="" />
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}

export default Page;
