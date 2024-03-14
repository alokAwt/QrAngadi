"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { DataContext } from "@/app/gamification/[type]/page";
import test from "./util";
import Spinwheel from "../../public/gamification/spinWheel.png";
import Scratchcard from "../../public/gamification/scratch2.png";
import Uploadimage from "../../public/QRgenerate/Upload.png";

function Header({ color, logo }) {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundColor: color ? color : "#e0bb6b",
        minHeight: "50px",
        width: "100%",
        padding: "10px",
        maxHeight: "100px",
        overflow: "hidden",
      }}
    >
      {/* 1)this is header(color)/logo */}
      {logo ? (
        <Image
          src={logo}
          height={0}
          width={100}
          style={{
            objectFit: "contain",
            height: "auto",
          }}
        />
      ) : (
        <p className="text-black text-center text-4xl uppercase font-bold">
          Your Logo
        </p>
      )}
    </div>
  );
}

function MobileScreen() {
  const data = useContext(DataContext);

  const {
    couponTitle,
    couponSubtitle,
    couponLogo,
    couponHFColor,
    appearsAs,
    buttonStyle,
    buttonColor,
    buttonTextColor,
    slotmachineimage,
    Spinnerimage,
    Scratchimage,
  } = data;

  let machineImage = undefined;

  if (data.params.type === "spin-wheel") {
    machineImage = Spinnerimage;
  }
  if (data.params.type === "slot-machine") {
    machineImage = slotmachineimage;
  }
  if (data.params.type === "scratch-card") {
    machineImage = Spinnerimage;
  }

  useEffect(() => {
    test(data.backgroundImage, "mobileContainer");
  }, [data.backgroundImage]);
  return (
    <div
      className={`relative min-h-[500px] max-w-[300px] ${styles.mobileContainer}`}
    >
      <div
        id="mobileContainer"
        className={`w-[95%] mx-auto min-h-[600px]  ${
          data.backgroundImage
            ? "bg-[transparent]"
            : "bg-[url('/gamification/sampleBg.png')]"
        } relative p-5 pt-[50px] rounded-[55px] bg-no-repeat flex flex-col`}
        style={{
          backgroundSize: "100% 100%",
        }}
      >
        <Header color={couponHFColor} logo={couponLogo} />
        {/* 3)get coupon title */}
        <p
          style={{
            textAlign: "center",
            fontSize: `${couponTitle.pixel}px`,
            fontWeight: `${couponTitle.bold ? "bold" : "normal"}`,
            fontStyle: `${couponTitle.italic ? "italic" : "normal"}`,
            color: `${couponTitle.color ? couponTitle.color : "white"}`,
            wordWrap: "break-word",
          }}
        >
          {couponTitle.title}
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: `${couponSubtitle.pixel}px`,
            fontWeight: `${couponSubtitle.bold ? "bold" : "normal"}`,
            fontStyle: `${couponSubtitle.italic ? "italic" : "normal"}`,
            color: `${couponSubtitle.color ? couponSubtitle.color : "white"}`,
            wordWrap: "break-word",
          }}
        >
          {couponSubtitle.title}
        </p>
        {/* 5)machine appeareance from prize setting */}
        {/* <Image
          src={logo}
          height={0}
          width={100}
          style={{
            objectFit: "contain",
            height: "auto",
          }}
        /> */}
        <div className="flex justify-center items-center my-auto flex-col">
          {data.params.type === "slot-machine" ? (
            slotmachineimage ? (
              <Image
                className="w-40 h-32 object-contain"
                width={160}
                height={128}
                alt="uploadslotmachine"
                src={slotmachineimage}
              />
            ) : (
              <Image
                className="w-40 h-32 object-contain"
                alt="upload image"
                src={Uploadimage}
              />
            )
          ) : null}
          {data.params.type === "spin-wheel" ? (
            Spinnerimage ? (
              <Image
                className="w-40 h-24 object-contain"
                width={160}
                height={128}
                alt="upload image"
                src={Spinnerimage}
              />
            ) : (
              <Image
                className="w-40 h-24 object-contain"
                alt="upload image"
                src={Spinwheel}
              />
            )
          ) : null}
          {data.params.type === "scratch-card" ? (
            Scratchimage ? (
              <img
                className="w-40 h-24 object-contain"
                alt="upload image"
                src={Scratchimage}
              />
            ) : (
              <Image
                className="w-40 h-24 object-contain"
                alt="upload image"
                src={Scratchcard}
              />
            )
          ) : null}
          <button
            className="border-0 text-sm font-semibold mt-2 p-2 w-full"
            style={{
              backgroundColor: buttonColor ? buttonColor : "red",
              color: buttonTextColor ? buttonTextColor : "white",
            }}
          >
            click here to play
          </button>
        </div>

        <div
          className="flex flex-col justify-center items-center"
          style={{
            backgroundColor: couponHFColor ? couponHFColor : "#e0bb6b",
            minHeight: "50px",
            marginTop: "auto",
          }}
        >
          <p className="text-center text-[red] text-sm font-semibold uppercase">
            TERMS & CONDITIONS
          </p>
          <p className="text-center text-sm font-semibold uppercase">
            {appearsAs}
          </p>
        </div>
      </div>
      <div className="absolute w-full h-full bg-transparent top-0 left-0 z-10">
        <Image
          src={"/mobile_screen.png"}
          height={0}
          width={0}
          className="h-full w-full"
          unoptimized
        />
      </div>
    </div>
  );
}

export default MobileScreen;
