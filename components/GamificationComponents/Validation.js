"use client";
import React, { useContext, useEffect } from "react";
import { ValidationContext } from "@/Utility/Contextfiles/GamificationCustomizationContext/ValidationContext";
import TitleComponent from "./Settings/common/TitleComponent";
import RichTextEditor from "./Settings/common/RichTextEditor";
import ToggleComponent from "./Settings/common/ToggleComponent";
import InputComponent from "./Settings/common/InputComponent";
import MobileScreen from "../MobileScreen/MobileScreen";
function Validation() {
  const {
    params,
    title,
    setTitle,
    description,
    setDescription,
    validateAtUser,
    setValidateAtUser,
    validateAtMerchant,
    setValidateAtMerchant,
    password,
    setPassword,
    buttonText,
    setButtonText,
    afterValidationTitle,
    setAfterValidationTitle,
    afterValidationdescription,
    setAfterValidationDescription,
    showDetailedInformation,
    setShowDetailedInformation,
  } = useContext(ValidationContext);

  useEffect(() => {
    console.log(showDetailedInformation);
  }, [showDetailedInformation]);
  return (
    <div className="mt-5">
      <p>
        Enter the details and set up the Validation settings of your coupon.
      </p>
      <div className="min-h-[1px] bg-[#C8C8C8] my-3"></div>
      <div className="font-semibold text-lg mb-5">Validation Settings</div>
      {params.type==="slot-machine" && <div className="absolute w-[300px] right-[65px] top-[150px]">
        <MobileScreen />
      </div>}
      <TitleComponent
        name={"Page Title"}
        id={"pageTitle"}
        placeholder={"Enter page title."}
        data={title}
        setData={setTitle}
      />
      <RichTextEditor
        name={"Description"}
        id={"validationDescription"}
        placeholder={"Enter Description"}
        data={description}
        setData={setDescription}
      />
      <div className="min-h-[1px] bg-[#C8C8C8] my-3"></div>
      <div className="font-semibold text-lg mb-5">Validation Methods</div>
      <ToggleComponent
        rightText={`Validate on user’s device`}
        selected={validateAtUser}
        setSelected={setValidateAtUser}
      />{" "}
      <div className="min-h-[1px] bg-[#C8C8C8] my-1 max-w-[330px]"></div>
      <ToggleComponent
        rightText={`Validate on Merchant’s device by scanning a QR Code`}
        selected={validateAtMerchant}
        setSelected={setValidateAtMerchant}
      />
      <InputComponent
        name={"Set Password"}
        id={"validateSetPassword"}
        placeholder={"Set Password"}
        value={password}
        setValue={setPassword}
        type={"text"}
      />
      <InputComponent
        name={"Button Text"}
        id={"validateButtonText"}
        placeholder={"validate"}
        value={buttonText}
        setValue={setButtonText}
        type={"text"}
      />
      <div className="min-h-[1px] bg-[#C8C8C8] my-3"></div>
      <div className="font-semibold text-lg mb-5">After Validation</div>
      <TitleComponent
        name={"Page Title"}
        id={"afterValidationPageTitle"}
        placeholder={"Enjoy your offer."}
        data={afterValidationTitle}
        setData={setAfterValidationTitle}
      />
      <RichTextEditor
        name={"Description"}
        id={"afterValidationDescription"}
        placeholder={"Enter Description"}
        data={afterValidationdescription}
        setData={setAfterValidationDescription}
      />
      <ToggleComponent
        rightText={"Show detailed coupon information after validation"}
        selected={showDetailedInformation}
        setSelected={setShowDetailedInformation}
      />
    </div>
  );
}

export default Validation;
