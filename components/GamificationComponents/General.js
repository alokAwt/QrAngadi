import React, { useContext } from "react";
import { DataContext } from "@/app/gamification/[type]/page";
function General() {
  const data = useContext(DataContext);

  return <div>General {data.type}</div>;
}

export default General;
