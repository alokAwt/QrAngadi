'use client'
import React, { useState } from "react";
import { Spin } from "antd";

function Loading() {
const [isloading,Setisloading]=useState(true)


  return <Spin size="large" spinning={isloading} fullscreen />;
}

export default Loading;
