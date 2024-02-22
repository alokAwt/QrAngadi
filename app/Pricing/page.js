import React from "react";
// import Navbar from "../../components/navbar/Navbar";
// import PricingCards from "../../components/pricingCards/PricingCards";
// import Faqs from "../../components/faq";
import GamificationAddOns from "../../Components/GamificationAddOns/index";

function Pricing() {
  return (
    <>
      <div className="mt-10 text-center">
        <p className="font-bold  text-4xl md:text-5xl lg:text-6xl mb-4">
          Choose the right plan for you!
        </p>
        <p className="font-medium text-xl md:text-2xl">
          Choose a plan and enjoy an exceptional user experience instantly.
        </p>
      </div>
      {/* <PricingCards />
      <Faqs /> */}
      <GamificationAddOns />
    </>
  );
}

export default Pricing;
