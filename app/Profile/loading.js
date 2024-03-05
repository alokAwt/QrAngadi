'use client'
import React, { useState } from "react";
import { Spin } from "antd";

function loading() {
const [isloading,Setisloading]=useState(true)


  return <Spin size="large" spinning={isloading} fullscreen />;
}

export default loading;
