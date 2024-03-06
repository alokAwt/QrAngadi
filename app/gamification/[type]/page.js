"use client";
import { useParams } from "next/navigation";
import React, { createContext, useState } from "react";
const DataContext = createContext();

import General from "@/components/GamificationComponents/General";
import PrizeSetting from "@/components/GamificationComponents/PrizeSetting";
import ClaimAction from "@/components/GamificationComponents/ClaimAction";
import Validation from "@/components/GamificationComponents/Validation";

function page() {
  const [selected, setSelected] = useState("general");
  const params = useParams();
  let data = {
    type: params.type,
  };
  return (
    <div>
      {params.type}
      <div className="flex gap-10 font-[700] text-[#919191]">
        <span
          onClick={() => setSelected("general")}
          className={`${
            selected == "general"
              ? "text-buttoncolor border-b-2 border-b-buttoncolor"
              : ""
          } py-1 flex items-center`}
        >
          General
        </span>
        <span
          onClick={() => setSelected("prizeSetting")}
          className={`${
            selected == "prizeSetting"
              ? "text-buttoncolor border-b-2 border-b-buttoncolor"
              : ""
          } py-1 flex items-center`}
        >
          Prize Setting
        </span>
        <span
          onClick={() => setSelected("claimAction")}
          className={`${
            selected == "claimAction"
              ? "text-buttoncolor border-b-2 border-b-buttoncolor"
              : ""
          } py-1 flex items-center`}
        >
          Claim Action
        </span>
        <span
          onClick={() => setSelected("validation")}
          className={`${
            selected == "validation"
              ? "text-buttoncolor border-b-2 border-b-buttoncolor"
              : ""
          } py-1 flex items-center`}
        >
          Validation
        </span>
      </div>
      <DataContext.Provider value={data}>
        {selected == "general" && <General />}
        {selected == "prizeSetting" && <PrizeSetting />}
        {selected == "claimAction" && <ClaimAction />}
        {selected == "validation" && <Validation />}
      </DataContext.Provider>
    </div>
  );
}

export { DataContext };
export default page;
