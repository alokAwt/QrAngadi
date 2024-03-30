"use client";
import { useParams } from "next/navigation";
import React, { createContext, useEffect, useMemo, useState } from "react";
const DataContext = createContext();
import { Tabs, Tab, Button } from "@nextui-org/react";
import { Spin } from "antd";
import confetti from "canvas-confetti";

import General from "@/components/GamificationComponents/General";
import PrizeSetting from "@/components/GamificationComponents/PrizeSetting";
import ClaimAction from "@/components/GamificationComponents/ClaimAction";
import Validation from "@/components/GamificationComponents/Validation";
import MobileScreen from "@/components/MobileScreen/MobileScreen";
import ValidationProvider from "@/Utility/Contextfiles/GamificationCustomizationContext/ValidationContext";
import { sendDataToServer } from "../../../Utility/Api/Gamification";
import { useToast } from "../../../components/ui/usetoast";
import { ToastAction } from "@/components/ui/toast";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [Loading, Setloading] = useState(false);
  const [isloading, Setisloading] = useState(false);
  const { toast } = useToast();
  const params = useParams();

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

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
    { slot: 1, Name: "You Lose", amount: 0 },
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

  // function formatDataForServer(data) {
  //   const formattedData = {
  //     GameType: data.params.type,
  //     General: {
  //       CompanyName: data.poweredByName,
  //       CouponType: data.couponTitle.title,
  //       CouponSubtitle: data.couponSubtitle.title,
  //       Language: data.campaignLanguage,
  //       PoweredByName: data.poweredByName,
  //       PoweredByWebsite: data.poweredByWebsite,
  //       AppearsAs: data.appearsAs,
  //       TermsAndCondition: data.termsAndConditions,
  //       Logo: data.couponLogo,
  //       CouponImage: data.couponImage,
  //       StartDate: data.startDate,
  //       EndDate: data.endDate,
  //     },
  //     PrizeSetting: {
  //       MachineImage: data.slotmachineimage,
  //       Limitation: data.limitation,
  //       Prize: data.prizeList, /// prizelist []
  //       Winner: {
  //         Images: data.winnerImage,
  //         Text: data.winnerText,
  //       },
  //       Loser: {
  //         Images: data.loserImage,
  //         Text: data.loserText,
  //       },
  //       RetryAfterLoss: data.retryAfterLoss,
  //     },
  //     ClaimAction: {
  //       PersonalData: data.personaldata,
  //       ButtonText: data.ButtonText,
  //     },
  //     Validation: {
  //       LimitationPerDevice: data.limitationPerDevice,
  //       Password: data.password,
  //       ButtonText: data.validationButtonText,
  //     },
  //   };

  //   return formattedData;
  // }

  const payloadata = {
    GameType: data.params.type,
    Genderal: {
      CompanyName: data.poweredByName,
      CouponType: data.couponTitle.title,
      Couponsubtitle: data.couponSubtitle.title,
      Language: data.campaignLanguage,
      PoweredByName: data.poweredByName,
      PoweredByWebsite: data.poweredByWebsite,
      Appearsas: data.appearsAs,
      TermsAndcondition: data.termsAndConditions,
      Logo: data.couponLogo,
      CouponImage: "coupenimage.png",
      StartDate: data.startDate,
      endDate: data.endDate,
    },
    PrizeSetting: {
      MachineImage: "gameimage.png",
      Limitaion: data.limitation,
      prize: data.prizeList,
      winner: {
        Images: "winner image",
        text: data.winnerText,
      },
      Losser: {
        Images: "loser.png",
        text: data.loserText,
      },
      RetryAfterLoss: data.retryAfterLoss,
    },

    ClaimAction: {
      PersonalData: data.personaldata,
      videoLink: "Video.png",
      ButtonText: data.ButtonText,
    },
    Validation: {
      LimitaionPerDevice: data.limitationPerDevice,
      Password: data.password,
      ButtonText: "validate",
    },
  };

  const handleSubmit = async () => {
    Setisloading(true);
    try {
      const result = await sendDataToServer(payloadata);
      if (result.status === "failed") {
        Setisloading(false);
        toast({
          variant: "destructive",
          title: result.message,
          description: "",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      } else {
        Setisloading(false);
        onOpenChange(true);
        Setloading(true);
        setTimeout(() => {
          Setloading(false);
          handleConfetti();
        }, 2000);
      }
    } catch (error) {
      console.log("Error submitting data:", error.message);
    }
  };

  return (
    <div className={`md:p-16 p-1`}>
      <Spin size="large" spinning={isloading} fullscreen />
      <DataContext.Provider value={data}>
        <ValidationProvider>
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
              tabList:
                "md:gap-6 gap-1 w-full  relative  rounded-none p-0 font-medium ",
              cursor: "w-full bg-buttoncolor font-medium",
              tab: "md:w-full   h-8 md:h-12 ",
              tabContent:
                "group-data-[selected=true]:text-buttoncolor md:text-sm text-[0.68rem]",
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
              <Button
                onPress={handleSubmit}
                className="bg-buttoncolor rounded-sm text-white w-44"
              >
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
            <div className="md:w-full mx-4 mt-4 flex justify-between items-center">
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
          <Modal
            size="xl"
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                  <ModalBody>
                    {Loading ? (
                      <div className="flex justify-center items-center h-60">
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-buttoncolor"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex justify-center items-center h-60">
                        <p className="text-lg text-buttoncolor font-semibold">
                          Game created Successfully
                        </p>
                      </div>
                    )}
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </ValidationProvider>
      </DataContext.Provider>
    </div>
  );
}

export { DataContext };
export default Page;
