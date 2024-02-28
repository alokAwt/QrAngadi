import React from "react";
import {
  tableOfContents,
  termsOfService,
  scopeOfService,
  trailAccount,
  useOfServices,
  responsibilities,
  agreements,
  termination,
  fees,
  modification,
  intellectualPropertyRights,
} from "./data";

const ListTwo = ({ list }) => {
  return list.map((agreement, index) => {
    return (
      <div key={index}>
        <div className="mt-3 font-semibold underline">{agreement.head}</div>
        {agreement.text}
      </div>
    );
  });
};
const page = () => {
  return (
    <div className="px-5 md:px-20">
      <div className="text-3xl font-semibold mt-8 mb-5 text-center">
        Terms and <span className="text-buttoncolor">conditions</span>
      </div>
      <div className="text-2xl font-semibold">Table of Contents:</div>
      <ol className="list-decimal">
        {tableOfContents.map((content, index) => {
          return (
            <li className="font-semibold ml-4" key={index}>
              <span>{content.head}</span>
              <ul className="list-disc">
                {content.content &&
                  content.content.map((text, index) => {
                    return (
                      <li className="font-normal ml-5" key={index}>
                        {text}
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ol>
      <hr className="my-7" />
      {/* terms of service */}
      <div>
        <div className="text-2xl font-bold mb-3">Terms of Service</div>
        <div>
          By accessing and using the services provided by QR Angadi, you agree
          to abide by the following terms and conditions:
          <ul className="list-disc">
            {termsOfService.map((text, index) => {
              return (
                <li className="ml-9" key={index}>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* scope of service */}
      <div>
        <div className="text-2xl font-bold mb-3 mt-5">Scope of Service</div>
        <div>
          QR Angadi provides a range of services related to QR codes, including
          but not limited to:
          <ul className="list-disc">
            {scopeOfService.map((text, index) => {
              return (
                <li className="ml-9" key={index}>
                  {text}
                </li>
              );
            })}
          </ul>
          Our services are designed to help businesses and individuals leverage
          QR code technology for marketing, informational, and operational
          purposes.
        </div>
      </div>
      {/* free trail account */}
      <div>
        <div className="text-2xl font-bold mb-3 mt-5">Free Trial Account</div>
        <div>
          Customers may sign up for a free trial account to evaluate our
          services. The following conditions apply:
          <ul className="list-disc">
            {trailAccount.map((text, index) => {
              return (
                <li className="ml-9" key={index}>
                  {text}
                </li>
              );
            })}
          </ul>
          Our services are designed to help businesses and individuals leverage
          QR code technology for marketing, informational, and operational
          purposes.
          <div className="mt-3 font-semibold underline">
            Lawful Use of the Services:
          </div>
          <div>
            Customers using the free trial account must comply with all
            applicable laws and regulations. Prohibited activities include but
            are not limited to:
            <ul className="list-disc">
              {useOfServices.map((text, index) => {
                return (
                  <li className="ml-9" key={index}>
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* QR Angadi's Responsibilities, Representations, and Warranties */}
      <div>
        <div className="text-2xl font-bold mb-3 mt-5">
          QR Angadi's Responsibilities, Representations, and Warranties
        </div>
        <div>
          QR Angadi is committed to providing reliable and high-quality services
          to our customers. Our responsibilities, representations, and
          warranties include:
          <ul className="list-disc">
            {responsibilities.map((text, index) => {
              return (
                <li className="ml-9" key={index}>
                  {text}
                </li>
              );
            })}
          </ul>
          Our services are designed to help businesses and individuals leverage
          QR code technology for marketing, informational, and operational
          purposes.
          <ListTwo list={agreements} />
        </div>
      </div>
      {/* Term, Termination, and Suspension of Service */}
      <div>
        <div className="text-2xl font-bold mb-3 mt-5">
          Term, Termination, and Suspension of Service
        </div>
        <div>
          <ListTwo list={termination} />
        </div>
      </div>
      {/* Fees, Billing, Taxes, Charges */}
      <div>
        <div className="text-2xl font-bold mb-3 mt-5">
          Fees, Billing, Taxes, Charges
        </div>
        <div>
          <ListTwo list={fees} />
        </div>
      </div>
      {/* Modification of Terms and Conditions */}
      <div>
        <div className="text-2xl font-bold mb-3 mt-5">
          Modification of Terms and Conditions{" "}
        </div>
        <div>
          QR Angadi reserves the right to modify these terms and conditions at
          any time. Customers will be notified of any changes in advance, and
          continued use of our services constitutes acceptance of the modified
          terms.
          <ListTwo list={modification} />
        </div>
      </div>
      {/* Software and Intellectual Property Rights */}
      <div>
        <div className="text-2xl font-bold mb-3 mt-5">
          Software and Intellectual Property Rights{" "}
        </div>
        <div>
          QR Angadi and its licensors retain all rights to the software and
          intellectual property associated with our services. Customers are
          granted a limited, non-exclusive license to use our software and
          intellectual property solely for the purpose of accessing and using
          our services.
          <ListTwo list={intellectualPropertyRights} />
        </div>
      </div>
      {/* Get in Touch with Us */}
      <div>
        <div className="text-2xl font-bold mb-3 mt-5">Get in Touch with Us</div>
        <div>
          For further inquiries, assistance, or to report any issues, please
          contact QR Angadi using the following information:
          <ul className="list-disc">
            <li className="ml-9">
              <b>Email:</b> info@qrangadi.com
            </li>
            <li className="ml-9">
              <b>Phone:</b> +91 1234567890
            </li>
            <li className="ml-9">
              <b>Address:</b> Hyderabad
            </li>
          </ul>
        </div>
        <div className="mt-10">
          We value your feedback and are committed to providing excellent
          customer service.
        </div>
      </div>
    </div>
  );
};

export default page;
