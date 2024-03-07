"use client";
import { useParams } from "next/navigation";
import React, { createContext, useState } from "react";
const DataContext = createContext();
import { Tabs, Tab } from "@nextui-org/react";

import General from "@/components/GamificationComponents/General";
import PrizeSetting from "@/components/GamificationComponents/PrizeSetting";
import ClaimAction from "@/components/GamificationComponents/ClaimAction";
import Validation from "@/components/GamificationComponents/Validation";
import MobileScreen from "@/components/MobileScreen/MobileScreen";
function Page() {
  const params = useParams();

  // general settings
  const [couponName, setCouponName] = useState("");
  const [couponTitle, setCouponTitle] = useState({
    title: "",
    bold: false,
    italic: false,
    pixel: 20,
  });
  const [couponSubtitle, setCouponSubtitle] = useState({
    title: "",
    bold: false,
    italic: false,
    pixel: 20,
  });

  const [campaignLanguage, setCampaignLanguage] = useState("English");
  const [domainName, setDomainName] = useState("");
  const [timeZone, setTimeZone] = useState("Asia/Kolkata");

  const [poweredByName, setPoweredByName] = useState("");
  const [poweredByWebsite, setPoweredByWebsite] = useState("");
  const [appearsAs, setAppeasAs] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [title, setTitle] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [couponLogo, setCouponLogo] = useState("");
  const [couponImage, setCouponImage] = useState("");
  const [couponMainColor, setCouponMainColor] = useState("");
  const [couponHFColor, setCouponHFColor] = useState("");
  const [font, setFont] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [buttonStyle, setButtonStyle] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [buttonTextColor, setButtonTextColor] = useState("");
  const [backgroundType, setBackgrountType] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  let data = {
    couponName,
    setCouponName,
    couponTitle,
    setCouponTitle,
    couponSubtitle,
    setCouponSubtitle,
    campaignLanguage,
    setCampaignLanguage,
    timeZone,
    setTimeZone,
    domainName,
    setDomainName,
    poweredByName,
    setPoweredByName,
    poweredByWebsite,
    setPoweredByWebsite,
    appearsAs,
    setAppeasAs,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    title,
    setTitle,
    couponLogo,
    setCouponLogo,
    couponImage,
    setCouponImage,
    termsAndConditions,
    setTermsAndConditions,
    couponMainColor,
    setCouponMainColor,
    couponHFColor,
    setCouponHFColor,
    font,
    setFont,
    fontColor,
    setFontColor,
    buttonStyle,
    setButtonStyle,
    buttonColor,
    setButtonColor,
    buttonTextColor,
    setButtonTextColor,
    backgroundType,
    setBackgrountType,
    backgroundImage,
    setBackgroundImage,
  };
  return (
    <div className={`p-20`}>
      <div className={`text-3xl font-semibold`}>Customize your Machine.</div>

      <DataContext.Provider value={data}>
        {/* <MobileScreen /> */}

        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "md:gap-6 w-full relative rounded-none p-0 font-medium ",
            cursor: "w-full bg-buttoncolor font-medium",
            tab: "w-full  h-12",
            tabContent: "group-data-[selected=true]:text-buttoncolor ",
          }}
        >
          <Tab
            key="general"
            title={
              <div className="flex items-center space-x-2">
                <span>General</span>
              </div>
            }
          >
            {" "}
            <General />
          </Tab>
          <Tab
            key="prizeSetting"
            title={
              <div className="flex items-center space-x-2">
                <span>Prize Setting</span>
              </div>
            }
          >
            <PrizeSetting />
          </Tab>
          <Tab
            key="claimAction"
            title={
              <div className="flex items-center space-x-2">
                <span>Claim Action</span>
              </div>
            }
          >
            <ClaimAction />
          </Tab>
          <Tab
            key="validation"
            title={
              <div className="flex items-center space-x-2">
                <span>Validation</span>
              </div>
            }
          >
            <Validation />
          </Tab>
        </Tabs>
      </DataContext.Provider>
    </div>
  );
}

export { DataContext };
export default Page;
