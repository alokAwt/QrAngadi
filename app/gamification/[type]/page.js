"use client";
import { useParams } from "next/navigation";
import React, { createContext, useState } from "react";
const DataContext = createContext();
import { Tabs, Tab, Button } from "@nextui-org/react";

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
  const [selected, setSelected] = React.useState("general");

  const handleNext = () => {
    switch (selected) {
      case "general":
        setSelected("prizeSetting");
        break;
      case "prizeSetting":
        setSelected("claimAction");
        break;
      case "claimAction":
        setSelected("validation");
        break;
      case "validation":
        // router.push("/next-page");
        break;
      default:
        break;
    }
  };

  const handlePrevious = () => {
    switch (selected) {
      case "prizeSetting":
        setSelected("general");
        break;
      case "claimAction":
        setSelected("prizeSetting");
        break;
      case "validation":
        setSelected("claimAction");
        break;
      default:
        break;
    }
  };


  let data = {
    params,
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
    <div className={`p-16`}>

      <DataContext.Provider value={data}>
      <div className={`text-3xl font-semibold mb-4`}>
      {data.params.type==='spin-wheel' && `Customize your Wheel.`}
      {data.params.type==='slot-machine' && `Customize your Machine.`}
      {data.params.type==='scratch-card' && `Customize your Card.`}
      </div>
        {/* <MobileScreen /> */}

        <Tabs
          aria-label="Options"
          color="primary"
          selectedKey={selected}
        onSelectionChange={setSelected} 
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

       {selected==='validation' ?<div className="w-full flex-col mx-4 mt-4 flex justify-start items-start gap-2">
          <Button  className="bg-buttoncolor rounded-sm text-white w-44">Launch Campaign</Button>
          <Button onPress={handlePrevious} isDisabled={selected==='general'} variant="light" className="ring-1 w-44 ring-buttoncolor text-buttoncolor rounded-sm">Preview</Button>
        </div>:
        <div className="w-full mx-4 mt-4 flex justify-between items-center">
          <Button onPress={handlePrevious} isDisabled={selected==='general'} variant="light" className="ring-1 ring-buttoncolor text-buttoncolor rounded-sm">Previous page</Button>
          <Button onPress={handleNext} className="bg-buttoncolor rounded-sm text-white">Next page</Button>
        </div>}
      </DataContext.Provider>
    </div>
  );
}

export { DataContext };
export default Page;
