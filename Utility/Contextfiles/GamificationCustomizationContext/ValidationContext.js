"use client";
import React, { createContext, useState } from "react";

const ValidationContext = createContext();

function ValidationProvider({ children }) {
  const [title, setTitle] = useState({
    title: "",
    pixel: 20,
    bold: false,
    italic: false,
  });
  const [description, setDescription] = useState("");
  const [validateAtUser, setValidateAtUser] = useState(false);
  const [validateAtMerchant, setValidateAtMerchant] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [afterValidationTitle, setAfterValidationTitle] = useState({
    title: "",
    pixel: 20,
    bold: false,
    italic: false,
  });
  const [afterValidationdescription, setAfterValidationDescription] =
    useState("");
  const [showDetailedInformation, setShowDetailedInformation] = useState(false);

  const validationData = {
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
    afterValidationTitle,
    setAfterValidationTitle,
    afterValidationdescription,
    setAfterValidationDescription,
    showDetailedInformation,
    setShowDetailedInformation,
    buttonText,
    setButtonText,
  };
  return (
    <ValidationContext.Provider value={validationData}>
      {children}
    </ValidationContext.Provider>
  );
}
export { ValidationContext };

export default ValidationProvider;
