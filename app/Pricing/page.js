"use client";
import React from "react";
// import PricingCards from "../../components/pricingCards/PricingCards";
import Faqs from "@/Components/pricing-page-components/Faqs";
import GamificationAddOns from "@/Components/pricing-page-components/GamificationAddOns";
import PricingCards from "@/Components/PricingCards";

function Pricing() {
  return (
    <>
      <div className="mt-10 text-center">
        <p className="font-bold  text-4xl md:text-5xl lg:text-6xl mb-4">
          Choose the right plan for you!
        </p>
        <p className="font-medium text-xl md:text-2xl text-[#0C0C0C]">
          Choose a plan and enjoy an exceptional user experience instantly.
        </p>
      </div>
      <PricingCards />
      <Faqs />
      <GamificationAddOns />
    </>
  );
}

export default Pricing;
