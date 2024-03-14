"use client";
import { useParams } from "next/navigation";
import React, { createContext, useEffect, useMemo, useState } from "react";
const DataContext = createContext();
import { Tabs, Tab, Button } from "@nextui-org/react";

import General from "@/components/GamificationComponents/General";
import PrizeSetting from "@/components/GamificationComponents/PrizeSetting";
import ClaimAction from "@/components/GamificationComponents/ClaimAction";
import Validation from "@/components/GamificationComponents/Validation";
import MobileScreen from "@/components/MobileScreen/MobileScreen";
import ValidationProvider from "@/Utility/Contextfiles/GamificationCustomizationContext/ValidationContext";
import {sendDataToServer} from '../../../Utility/Api/Gamification'

function Page() {
  const params = useParams();

  // general settings
  const [couponName, setCouponName] = useState("");
  const [couponTitle, setCouponTitle] = useState({
    title: "win mystery prize!",
    bold: false,
    italic: false,
    pixel: 20,
    color: "",
  });
  const [couponSubtitle, setCouponSubtitle] = useState({
    title: "Here comes the subtitle",
    bold: false,
    italic: false,
    pixel: 20,
    color: "",
  });

  const [campaignLanguage, setCampaignLanguage] = useState("English");
  const [domainName, setDomainName] = useState("");
  const [timeZone, setTimeZone] = useState("Asia/Kolkata");

  const [poweredByName, setPoweredByName] = useState("");
  const [poweredByWebsite, setPoweredByWebsite] = useState("");
  const [appearsAs, setAppeasAs] = useState("powered by qr angadi");
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

  //-----------------------prize setting state ------------------------------------
  const [backgroundColorlose, setBackgroundColorlose] = useState("#FF0000");
  const [backgroundColorwin, setBackgroundColorwin] = useState("#FFFF00");
  const [StrokeColor, setStrokeColor] = useState("#FFFF00");
  const [formatHex, setFormatHex] = useState("hex");
  const [value, setValue] = React.useState(new Set([])); //controlled select example
  const [slotmachineimage, Setslotmachineimage] = useState(null);
  const [limitation, Setlimitation] = useState(Number);
  const [winnerImage, Setwinnerimage] = useState(null);
  const [winnerText, Setwinnertext] = useState("");
  const [loserImage, Setloserimage] = useState(null);
  const [loserText, Setlosertext] = useState("");
  const [Spinnerimage, Setspinnerimage] = useState(null);
  const [spinnerstrokecolor, Setspinnerstrokecolor] = useState("#FF0000");
  const [Scratchimage, Setscratchimage] = useState(null);
  const [Scratcharea, Setscratcharea] = useState(null);
  const [scratchrstrokecolor, Setscratchstrokecolor] = useState("#FF0000");
  const [retryAfterLoss, SetretryAfterLoss] = useState(Number);
  const [prizeList, SetprizeList] = useState([
    { slot: 1, prizeName: "Jackpot", amount: 200 },
  ]);

  const [personaldata, Setpersonaldata] = useState();

  //------------------------------------claim action state-----------------------------
  const [switchStates, setSwitchStates] = useState([
    { label: "First Name", isSelected: false },
    { label: "Last Name", isSelected: false },
    { label: "Email", isSelected: false },
    { label: "Mobile No.", isSelected: false },
    { label: "Address", isSelected: false },
    { label: "Custom Field", isSelected: false },
  ]);
  const [ButtonText, Setbuttontext] = useState("");
  const [personaldatavalues, setpersonaldataValues] = useState(new Set([]));

  //----------------------------prizesetting--------------------------------------------

  const backgroundHexwin = useMemo(
    () =>
      typeof backgroundColorwin === "string"
        ? backgroundColorwin
        : backgroundColorwin?.toHexString(),
    [backgroundColorwin]
  );

  const backgroundHexlose = useMemo(
    () =>
      typeof backgroundColorlose === "string"
        ? backgroundColorlose
        : backgroundColorlose?.toHexString(),
    [backgroundColorlose]
  );
  const StrokeColorstring = useMemo(
    () =>
      typeof StrokeColor === "string"
        ? StrokeColor
        : StrokeColor?.toHexString(),
    [StrokeColor]
  );

  const StrokespinnerColorstring = useMemo(
    () =>
      typeof spinnerstrokecolor === "string"
        ? spinnerstrokecolor
        : spinnerstrokecolor?.toHexString(),
    [spinnerstrokecolor]
  );

  const StrokescratchColorstring = useMemo(
    () =>
      typeof scratchrstrokecolor === "string"
        ? scratchrstrokecolor
        : scratchrstrokecolor?.toHexString(),
    [scratchrstrokecolor]
  );

  //---------------------------------------------------------------------------------------------

  // ---------------------------------claim action------------------------------------------------

  const handleSwitchChange = (index) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index].isSelected = !newSwitchStates[index].isSelected;
    setSwitchStates(newSwitchStates);
    sendDataToBackend(getSelectedLabels(newSwitchStates));
  };

  const getSelectedLabels = (data) => {
    return data
      .filter((switchData) => switchData.isSelected)
      .map((switchData) => switchData.label);
  };

  const sendDataToBackend = (labels) => {
    Setpersonaldata(labels);
  };

  useEffect(() => {
    sendDataToBackend(getSelectedLabels(switchStates));
  }, [switchStates]);
  //-------------------------------------------------------------------------------------------------

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

    //prize setting state---------------------------prizesetting state----------------------------
    setBackgroundColorlose,
    backgroundColorlose,
    setBackgroundColorwin,
    backgroundColorwin,
    setStrokeColor,
    StrokeColor,
    backgroundHexwin,
    backgroundHexlose,
    StrokeColorstring,
    slotmachineimage,
    Setslotmachineimage,
    limitation,
    Setlimitation,
    winnerImage,
    Setwinnerimage,
    winnerText,
    Setwinnertext,
    loserImage,
    Setloserimage,
    loserText,
    Setlosertext,
    Setspinnerimage,
    Spinnerimage,
    spinnerstrokecolor,
    Setspinnerstrokecolor,
    StrokespinnerColorstring,
    Scratchimage,
    Setscratchimage,
    Scratcharea,
    Setscratcharea,
    scratchrstrokecolor,
    Setscratchstrokecolor,
    StrokescratchColorstring,
    retryAfterLoss,
    SetretryAfterLoss,
    prizeList,
    SetprizeList,
    personaldata,

    // claim action state ------------------------------------claim action state
    switchStates,
    setSwitchStates,
    handleSwitchChange,
    ButtonText,
    Setbuttontext,
    personaldatavalues,
    setpersonaldataValues,
  };

  function formatDataForServer(data) {
    const formattedData = {
      GameType: data.params.type,
      General: {
        CompanyName: data.couponName,
        CouponType: data.couponTitle.title,
        CouponSubtitle: data.couponSubtitle.title,
        Language: data.campaignLanguage,
        PoweredByName: data.poweredByName,
        PoweredByWebsite: data.poweredByWebsite,
        AppearsAs: data.appearsAs,
        TermsAndCondition: data.termsAndConditions,
        Logo: data.couponLogo,
        CouponImage: data.couponImage,
        StartDate: data.startDate,
        EndDate: data.endDate,
      },
      PrizeSetting: {
        MachineImage: data.slotmachineimage,
        Limitation: data.limitation,
        Prize: data.prizeList, /// prizelist []
        Winner: {
          Images: data.winnerImage,
          Text: data.winnerText,
        },
        Loser: {
          Images: data.loserImage,
          Text: data.loserText,
        },
        RetryAfterLoss: data.retryAfterLoss,
      },
      ClaimAction: {
        PersonalData: data.personaldata,
        ButtonText: data.ButtonText,
      },
      Validation: {
        LimitationPerDevice: data.limitationPerDevice,
        Password: data.password,
        ButtonText: data.validationButtonText,
      },
    };

    return formattedData;
  }

  const handleSubmit = async () => {
    try {
      const formattedData =  formatDataForServer(data);
      console.log(formattedData)
      sendDataToServer(formattedData);
      console.log("game created successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
    } 
  };

 

  return (
    <div className={`p-16`}>
      <DataContext.Provider value={data}>
        <ValidationProvider>
          {" "}
          <div className={`text-3xl font-semibold mb-4`}>
            {data.params.type === "spin-wheel" && `Customize your Wheel.`}
            {data.params.type === "slot-machine" && `Customize your Machine.`}
            {data.params.type === "scratch-card" && `Customize your Card.`}
          </div>
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
          {selected === "validation" ? (
            <div className="w-full flex-col mx-4 mt-4 flex justify-start items-start gap-2">
              <Button onPress={handleSubmit} className="bg-buttoncolor rounded-sm text-white w-44">
                Launch Campaign
              </Button>
              <Button
                onPress={handlePrevious}
                isDisabled={selected === "general"}
                variant="light"
                className="ring-1 w-44 ring-buttoncolor text-buttoncolor rounded-sm"
              >
                Preview
              </Button>
            </div>
          ) : (
            <div className="w-full mx-4 mt-4 flex justify-between items-center">
              <Button
                onPress={handlePrevious}
                isDisabled={selected === "general"}
                variant="light"
                className="ring-1 ring-buttoncolor text-buttoncolor rounded-sm"
              >
                Previous page
              </Button>
              <Button
                onPress={handleNext}
                className="bg-buttoncolor rounded-sm text-white"
              >
                Next page
              </Button>
            </div>
          )}
        </ValidationProvider>
      </DataContext.Provider>
    </div>
  );
}

export { DataContext };
export default Page;
