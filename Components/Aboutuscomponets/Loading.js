'use client'
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import QR from "../../public/QR.png";
import {Spinner} from "@nextui-org/react";


function Loading() {
  return (
    <div className="flex flex-col justify-start md:justify-center items-center h-screen">
      <motion.div
        initial={{ opacity: 0,}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5 }}
      >
        <Image className="md:w-80 md:h-80" src={QR} />
     
          <motion.div
            className="md:w-40  w-32 h-1 bg-buttoncolor rounded-sm absolute md:top-72 top-36 md:ml-20 ml-24"
            animate={ { y: [0, 150, 150, 50, 0] }}
            transition={{ duration: 2,repeat: Infinity }}
          />
       
      </motion.div>
      <span className="text-xl flex items-center gap-2 font-semibold  leading-7 text-buttoncolor ">
      <Spinner 
      size="sm"
        classNames={{
          label:'bg-buttoncolor'
        }}
      />Loading
      </span>
    </div>
  );
}

export default Loading;
