"use client";
import { useParams } from "next/navigation";
import React from "react";
function page() {
  const params = useParams();
  return <div>{params.type}</div>;
}

export default page;
