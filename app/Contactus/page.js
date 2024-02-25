import React from "react";
import Faqs from "@/Components/Faqs";
import LetsTalk from "@/Components/contact-us-page-components/LetsTalk";
const page = () => {
  return (
    <>
      <div className="mt-0 lg:mt-10">
        <p className="text-4xl font-bold text-center mb-4">Get in Touch</p>
        <p className="md:text-lg m-auto mb-8 w-4/5 text-center text-sm max-w-[900px]">
          Use our contact form for all information requests or contact us
          directly using the contact information below. All information is
          treated with complete confidentiality and in accordance with our{" "}
          <span className="text-appThemeTwo underline">
            data protection statement.
          </span>
        </p>
      </div>
      <LetsTalk />
      <Faqs />
    </>
  );
};

export default page;
