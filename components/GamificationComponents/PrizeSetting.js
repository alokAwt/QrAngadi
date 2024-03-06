import React, { useContext } from "react";
import { DataContext } from "@/app/gamification/[type]/page";
function PrizeSetting() {
  const data = useContext(DataContext);

  return <div>PrizeSetting {data.type}</div>;
}

export default PrizeSetting;
