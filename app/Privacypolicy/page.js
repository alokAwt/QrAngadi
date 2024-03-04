import React from "react";

const tableOfContents = [
  {
    head: "Summary",
    content: "",
  },
  {
    head: "Privacy policy",
    content: [
      "Introduction",
      "What type of Information we gather",
      "How do we use this information",
      "Disclosure of Information to Third Parties",
      "How we protect your personal Information",
      "Changes to this privacy policy",
    ],
  },
];
const page = () => {
  return (
    <div className="px-5 md:px-20">
      <div className="text-3xl font-semibold mt-8 mb-5 text-center">
        Privacy <span className="text-buttoncolor">Policy</span>
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
      <div>
        <div className="text-2xl font-bold mb-3 mt-5">Summary</div>
        <div>
          <span className="font-semibold">QR Angadi</span>, developed by{" "}
          <span className="text-buttoncolor font-semibold">
            Angadi World Technologies Pvt Ltd
          </span>
          {`,prioritizes the privacy and security of its users' information. This
privacy policy outlines how we collect, use, and protect your personal
information when you use our flagship product, QR Angadi. By using QR
Angadi, you agree to the practices described in this policy.`}

        </div>
      </div>
      <div>
        <div className="text-2xl font-bold mb-3 mt-5">Privacy Policy</div>
        <div>
          <ul className="list-disc marker:text-buttoncolor">
            <li className="my-5 max-sm:md-5">
              <div className="flex gap-10 flex-wrap gap-y-2 max-md:flex-col">
                <span className="text-buttoncolor flex-[0.2] font-semibold min-w-[250px]">
                  Introduction
                </span>
                <span className="flex-[0.7] max-md:flex-1">
                  QR Angadi, a flagship product of Angadi World Technologies Pvt
                  Ltd, is committed to innovation and excellence in simplifying
                  and enhancing the QR code experience for users across various
                  industries. As part of our commitment to providing a seamless
                  user experience, we recognize the importance of safeguarding
                  your privacy and ensuring the security of your personal
                  information.
                </span>
              </div>
            </li>
            <li className="my-5 max-sm:md-5">
              <div className="flex gap-10 flex-wrap gap-y-2 max-md:flex-col">
                <span className="text-buttoncolor flex-[0.2] font-semibold min-w-[250px]">
                  What type of Information we gather
                </span>
                <span className="flex-[0.7] max-md:flex-1">
                  When you use QR Angadi, we may collect certain types of
                  information, including but not limited to:
                  <ul className="list-disc marker:text-black px-8">
                    <li>
                      Personal information such as name, email address, and
                      contact details provided voluntarily by users.
                    </li>
                    <li>
                      Usage data, including IP addresses, device information,
                      and browsing history.
                    </li>
                    <li>
                      Information obtained through cookies and similar tracking
                      technologies.
                    </li>
                  </ul>
                </span>
              </div>
            </li>
            <li className="my-5 max-sm:md-5">
              <div className="flex gap-10 flex-wrap gap-y-2 max-md:flex-col">
                <span className="text-buttoncolor flex-[0.2] font-semibold min-w-[250px]">
                  How We Use This Information{" "}
                </span>
                <span className="flex-[0.7] max-md:flex-1">
                  We use the information collected for various purposes,
                  including but not limited to:
                  <ul className="list-disc marker:text-black px-8">
                    <li>Providing and improving QR Angadi services.</li>
                    <li>
                      Personalizing user experience and delivering targeted
                      content.
                    </li>
                    <li>
                      Communicating with users regarding updates, promotions,
                      and relevant information
                    </li>
                    <li>
                      Analyzing trends and usage patterns to enhance our product
                      and services.
                    </li>
                  </ul>
                </span>
              </div>
            </li>
            <li className="my-5 max-sm:md-5">
              <div className="flex gap-10 flex-wrap gap-y-2 max-md:flex-col">
                <span className="text-buttoncolor flex-[0.2] font-semibold min-w-[250px]">
                  Disclosure of Information to Third Parties
                </span>
                <span className="flex-[0.7] max-md:flex-1">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this privacy policy or as required by law.
                  However, we may share your information with trusted
                  third-party service providers who assist us in operating our
                  website, conducting business, or servicing you, as long as
                  those parties agree to keep this information confidential.
                </span>
              </div>
            </li>
            <li className="my-5 max-sm:md-5">
              <div className="flex gap-10 flex-wrap gap-y-2 max-md:flex-col">
                <span className="text-buttoncolor flex-[0.2] font-semibold min-w-[250px]">
                  How We Protect Your Personal Information{" "}
                </span>
                <span className="flex-[0.7] max-md:flex-1">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. We regularly review our security
                  practices and update them to ensure the highest level of
                  protection.
                </span>
              </div>
            </li>
            <li className="my-5 max-sm:md-5">
              <div className="flex gap-10 flex-wrap gap-y-2 max-md:flex-col">
                <span className="text-buttoncolor flex-[0.2] font-semibold min-w-[250px]">
                  Changes to This Privacy Policy
                </span>
                <span className="flex-[0.7] max-md:flex-1">
                  We reserve the right to update or modify this privacy policy
                  at any time. Any changes will be effective immediately upon
                  posting on this page. It is your responsibility to review this
                  policy periodically to stay informed about how we are
                  protecting your information and improving our services.
                </span>
              </div>
            </li>
            <li className="my-5 max-sm:md-5">
              <div className="flex gap-10 flex-wrap gap-y-2 max-md:flex-col">
                <span className="text-buttoncolor flex-[0.2] font-semibold min-w-[250px]">
                  Contact Us
                </span>
                <span className="flex-[0.7] max-md:flex-1">
                  Thank you for using QR Angadi. If you have any questions or
                  concerns about this privacy policy, please contact us at
                  info@qrangadi.com
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
