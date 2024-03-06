import React, { useContext } from "react";
import { DataContext } from "@/app/gamification/[type]/page";
function Validation() {
  const data = useContext(DataContext);
  return <div>Validation {data.type}</div>;
}

export default Validation;
