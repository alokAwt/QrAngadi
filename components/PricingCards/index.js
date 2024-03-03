import { useState } from "react";
// import right from "../../assets/right.png";
import Image from "next/image";
const PricingCards = () => {
  const [pricingType, setPricingType] = useState("yearly");
  const features = [
    "Unlimited QR Code Generation",
    "Standard QR Code Design Templates",
    "Static QR Codes (non-editable content)",
    "Basic Analytics Email Support Limited",
    "Customer Support",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center my-8 border-2 border-appThemeTwo max-w-fit m-auto rounded-[10px] overflow-hidden">
        <button
          onClick={() => setPricingType("monthly")}
          className={`${
            pricingType === "monthly"
              ? "bg-appThemeTwo text-white"
              : "bg-white text-[#B8B8B8]"
          } uppercase font-semibold text-sm px-6 py-2 rounded-l-md focus:outline-none w-[200px]`}
        >
          Monthly
        </button>
        <button
          onClick={() => setPricingType("yearly")}
          className={`${
            pricingType === "yearly"
              ? "bg-appThemeTwo text-white"
              : "bg-white text-[#B8B8B8]"
          } uppercase font-semibold text-sm px-6 py-2 rounded-r-md focus:outline-none w-[200px]`}
        >
          Yearly
        </button>
      </div>

      <div className="flex items-end flex-wrap justify-center">
        {/* CARD 1 */}
        <div className="p-4">
          <div className="bg-white border border-gray-300 rounded-lg shadow-md flex flex-col overflow-hidden min-w-[280px] max-w-[360px]">
            <div className="p-6">
              <div className="flex flex-col mb-4 gap-1">
                <div className="text-xs font-semibold text-appThemeTwo">
                  BASIC
                </div>
                <div className="text-4xl font-semibold">Free</div>
              </div>
              <hr className="border-t border-gray-300 my-4" />
              <div className="space-y-4">
                <ul>
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>{feature}</span>
                      <Image
                        src={"/right.png"}
                        width={20}
                        height={20}
                        alt="right"
                        className="h-6 w-6"
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-6 bg-transparent border border-appThemeTwo text-appThemeTwo font-semibold py-2 px-4 rounded-md hover:bg-appThemeTwo hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appThemeTwo">
                SIGN UP FOR FREE
              </button>
            </div>
            <div className="bg-[#FFA88C4A] h-100 flex flex-col justify-center items-center p-8 text-center">
              <span className="font-semibold text-gray-800">Free Forever</span>
              <span className="block text-gray-500">
                Recommended for personal use.
              </span>
            </div>
          </div>
        </div>

        {/* card-2 */}
        <div className="p-4">
          <div className="bg-white border-5 border-appThemeTwo rounded-lg shadow-md flex flex-col overflow-hidden min-w-[280px] max-w-[360px]">
            <div
              className="bg-appThemeTwo text-center text-white font-bold flex items-center justify-center"
              style={{ height: "40px" }}
            >
              MOST POPULAR!
            </div>
            <div className="p-6 flex-1 pt-2">
              <div className="flex flex-col mb-4 gap-1">
                <div className="text-xs font-semibold text-appThemeTwo">
                  PREMIUM
                </div>
                <div className="text-4xl font-semibold">
                  $8 /<span className="text-gray-500 text-sm">Month</span>
                </div>
              </div>
              <hr className="border-t border-gray-300 my-4" />
              <div className="space-y-4">
                <ul>
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>{feature}</span>
                      <Image
                        src={"/right.png"}
                        width={20}
                        height={20}
                        alt="right"
                        className="h-6 w-6"
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-6 bg-appThemeTwo text-white font-semibold py-2 px-4 rounded-md hover:bg-appThemeTwo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appThemeTwo">
                SUBSCRIBE NOW
              </button>
            </div>
            <div className="bg-[#FFA88C4A] flex flex-col justify-center items-center py-8 text-center">
              <span className="text-md flex">
                <span className="font-semibold text-gray-800">
                  Risk-Free -{" "}
                  <span className="font-normal text-gray-500">
                    7 day money-back guarantee
                  </span>
                </span>
              </span>
              <span className="text-md flex">
                <span className="font-semibold text-gray-800">Flexibility</span>
                <span className="block text-gray-500">- Cancel anytime.</span>
              </span>
            </div>
          </div>
        </div>

        {/* card-3 */}
        <div className="p-4">
          <div className="bg-white border border-gray-300 rounded-lg shadow-md flex flex-col overflow-hidden min-w-[280px] max-w-[360px]">
            <div className="p-6 flex-1">
              <div className="flex flex-col mb-4 gap-1">
                <div className="text-xs font-semibold text-appThemeTwo">
                  BUSINESS
                </div>
                <div className="text-4xl font-semibold">
                  $16/<span className="text-gray-500 text-sm">Month</span>
                </div>
              </div>
              <hr className="border-t border-gray-300 my-4" />
              <div className="space-y-4">
                <ul>
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>{feature}</span>
                      <Image
                        src={"/right.png"}
                        width={20}
                        height={20}
                        alt="right"
                        className="h-6 w-6"
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-6 bg-appThemeTwo text-white font-semibold py-2 px-4 rounded-md hover:bg-appThemeTwo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appThemeTwo">
                SUBSCRIBE NOW
              </button>
            </div>
            <div className="bg-[#FFA88C4A] flex flex-col justify-center items-center py-8 text-center">
              <span className="text-md flex">
                <span className="font-semibold text-gray-800">
                  Risk-Free -{" "}
                  <span className="font-normal text-gray-500">
                    7 day money-back guarantee
                  </span>
                </span>
              </span>
              <span className="text-md flex">
                <span className="font-semibold text-gray-800">Flexibility</span>
                <span className="block text-gray-500">- Cancel anytime.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
