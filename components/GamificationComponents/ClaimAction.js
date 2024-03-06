import React, { useContext } from "react";
import { DataContext } from "@/app/gamification/[type]/page";
function ClaimAction() {
  const data = useContext(DataContext);

  return <div>ClaimAction {data.type}</div>;
}

export default ClaimAction;
