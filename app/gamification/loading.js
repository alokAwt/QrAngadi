"use client";
import React, { useState } from "react";
import { Spin } from "antd";

function Loading() {
  const [isloading, Setisloading] = useState(true);

  return (
    <div className="bg-white w-full h-screen">
      <Spin size="large" spinning={isloading} fullscreen />;
    </div>
  );
}

export default Loading;
