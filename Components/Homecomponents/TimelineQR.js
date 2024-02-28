"use client";
import { MdOutlineQrCode } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import { TbSquarePlus2 } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";


function TimelineQR() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-16 mx-auto">
      <div className="">
        <h6 className="font-bold text-3xl mt-8 text-center">
          Supercharge your{" "}
          <span className="text-buttoncolor">QR experience!</span>
        </h6>
      </div>
      <div className="flex justify-center items-start gap-8 md:p-12 p-4 mx-auto mt-4 flex-col md:flex-row">
        <div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="md:mb-20 mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6  bg-buttonopacitycolor rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <MdOutlineQrCode className="text-buttoncolor" />
              </span>
              <div className="border-1.5 p-2 rounded-md bg-[#fff4f1] border-gray-200 ">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Dynamic QR Codes:
                </h3>

                <p className="mb-12 text-base font-normal text-gray-500 dark:text-gray-400 ">
                  Make QR codes you can edit anytime. Perfect for updating info
                  without changing the code.
                </p>
              </div>
            </li>
            <li className="md:mb-20 mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-buttonopacitycolor rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <TbSquarePlus2 className="text-buttoncolor" />
              </span>
              <div className="border-1.5 p-2 rounded-md bg-[#fff4f1] border-gray-200">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Customization Options:
                </h3>

                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-10">
                  Customize your QR codes with logos, colors, and unique
                  designs. Let your brand shine and make your QR codes stand
                  out!
                </p>
              </div>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-buttonopacitycolor rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <RiBarChartFill className="text-buttoncolor"/>
              </span>
              <div className="border-1.5 p-2 rounded-md bg-[#fff4f1] border-gray-200">
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Comprehensive Analytics:
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-10">
                Understand how your QR codes are doing. Monitor scans,
                engagement, and locations to improve your marketing.
              </p>

              </div>
            </li>
          </ol>
        </div>
        <div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-28">
            <li className="md:mb-20 mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-buttonopacitycolor rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <GrSecure className="text-buttoncolor"/>
              </span>
              <div className="border-1.5 p-2 rounded-md bg-[#fff4f1] border-gray-200">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Secure Data Handling:
              </h3>

              <p className="mb-12 text-base font-normal text-gray-500 dark:text-gray-400 ">
                Prioritise the security of your data. QR Angadi ensures that
                your information is handled with the utmost privacy and
                protection.
              </p>

              </div>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-buttonopacitycolor rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
               <MdOutlineQrCode className="text-buttoncolor"/>
              </span>
              <div className="border-1.5 p-2 rounded-md bg-[#fff4f1] border-gray-200">

              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Versatile QR Code Types:
              </h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-12">
                Choose from a variety of QR code types, including website links,
                contact information, event details, and compliance
                documentation.
              </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TimelineQR;
