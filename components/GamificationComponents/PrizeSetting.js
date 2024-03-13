"use client";
import React, { useContext, useMemo, useState } from "react";
import { DataContext } from "@/app/gamification/[type]/page";
import Uploadimage from "../../public/QRgenerate/Upload.png";
import { Button } from "@nextui-org/react";
import { MdInfo } from "react-icons/md";
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import { Col, ColorPicker, Divider, Row, Space, theme } from "antd";
import { generate, green, presetPalettes, red, cyan } from "@ant-design/colors";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import Jackpot from "../../public/gamification/Jackpot.png";
import Oops from "../../public/gamification/Oops.png";
import Preview from "../../public/gamification/Preview.png";
import Spinwheel from "../../public/gamification/spinWheel.png";
import Scratchcard from "../../public/gamification/scratch2.png";
import MobileScreen from "../MobileScreen/MobileScreen";

export const dataselect = [
  { label: "option1", value: "option1" },
  { label: "option2", value: "option2" },
  { label: "option3", value: "option3" },
];

function PrizeSetting() {
  const {
    params,
    setBackgroundColorlose,
    backgroundColorlose,
    backgroundHexlose,
    backgroundColorwin,
    setBackgroundColorwin,
    backgroundHexwin,
    StrokeColor,
    setStrokeColor,
    StrokeColorstring,
    slotmachineimage,
    Setslotmachineimage,
    limitation,
    Setlimitation,
    Setwinnerimage,
    winnerImage,
    winnerText,
    Setwinnertext,
    loserImage,
    Setloserimage,
    loserText,
    Setlosertext,
    Setspinnerimage,
    Spinnerimage,
    Setspinnerstrokecolor,
    spinnerstrokecolor,
    StrokespinnerColorstring,
    Scratchimage,
    Setscratchimage,
    Scratcharea,
    Setscratcharea,
    scratchrstrokecolor,
    Setscratchstrokecolor,
    StrokescratchColorstring,
    retryAfterLoss,
    SetretryAfterLoss,
    prizeList,
    SetprizeList,
  } = useContext(DataContext);
  const [logo, setLogo] = useState(false);
  const [formatHex, setFormatHex] = useState("hex");
  const [value, setValue] = React.useState(new Set([])); //controlled select example
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const genPresets = (presets = presetPalettes) =>
    Object.entries(presets).map(([label, colors]) => ({
      label,
      colors,
    }));

  const { token } = theme.useToken();
  const presets = genPresets({
    primary: generate(token.colorPrimary),
    red,
    green,
    cyan,
  });

  const customPanelRender = (_, { components: { Picker, Presets } }) => (
    <Row justify="space-between" wrap={false}>
      <Col span={12}>
        <Presets />
      </Col>
      <Divider
        type="vertical"
        style={{
          height: "auto",
        }}
      />
      <Col flex="auto">
        <Picker />
      </Col>
    </Row>
  );

  //slot-machine-image
  const setLogoMemoized = useMemo(() => {
    return (file) => {
      if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          Setslotmachineimage(reader.result);
        });
        reader.readAsDataURL(file);
      }
    };
  }, []);
  // winner-image
  const setwnnerinerimageMemoized = useMemo(() => {
    return (file) => {
      if (file) {
        const winnerReader = new FileReader();
        winnerReader.addEventListener("load", () => {
          Setwinnerimage(winnerReader.result);
        });
        winnerReader.readAsDataURL(file);
      }
    };
  }, []);

  //loser-image
  const setloserimageMemoized = useMemo(() => {
    return (file) => {
      if (file) {
        const loserReader = new FileReader();
        loserReader.addEventListener("load", () => {
          Setloserimage(loserReader.result);
        });
        loserReader.readAsDataURL(file);
      }
    };
  }, []);

  //spinner-image
  const setSpinnerimageMemoized = useMemo(() => {
    return (file) => {
      if (file) {
        const Spinnerreader = new FileReader();
        Spinnerreader.addEventListener("load", () => {
          Setspinnerimage(Spinnerreader.result);
        });
        Spinnerreader.readAsDataURL(file);
      }
    };
  }, []);

  //scratch-image
  const setscratchimageMemoized = useMemo(() => {
    return (file) => {
      if (file) {
        const scratchreader = new FileReader();
        scratchreader.addEventListener("load", () => {
          Setscratchimage(scratchreader.result);
        });
        scratchreader.readAsDataURL(file);
      }
    };
  }, []);

  //scratch-area
  const setscratchareaMemoized = useMemo(() => {
    return (file) => {
      if (file) {
        const scratcharea = new FileReader();
        scratcharea.addEventListener("load", () => {
          Setscratcharea(scratcharea.result);
        });
        scratcharea.readAsDataURL(file);
      }
    };
  }, []);

  const onChangePicture = (e) => {
    setLogoMemoized(e.target.files[0]);
  };
  const onChangeWinnerPicture = (e) => {
    setwnnerinerimageMemoized(e.target.files[0]);
  };
  const onChangeloserPicture = (e) => {
    setloserimageMemoized(e.target.files[0]);
  };
  const onChangeSpinnerPicture = (e) => {
    setSpinnerimageMemoized(e.target.files[0]);
  };
  const onChangescratchPicture = (e) => {
    setscratchimageMemoized(e.target.files[0]);
  };
  const onChangescratchareaPicture = (e) => {
    setscratchareaMemoized(e.target.files[0]);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <div className="flex md:flex-row flex-col-reverse justify-between   w-full items-start mt-2">
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="text-sm font-medium">
              Enter the details and set up the general settings of your coupon.
            </p>
            <Divider className="h-0.5 bg-gray-300" />

            {/* slot-machine */}
            {params.type === "slot-machine" && (
              <div className="flex-col justify-start items-start gap-4  w-full">
                <p className="font-sm font-semibold mb-2">Machine Appearance</p>
                <div className="absolute w-[300px] right-[65px] top-[150px]">
                  <MobileScreen />
                </div>
                <span className="md:text-sm text-xs font-bold flex flex-row items-center gap-1">
                  Machine<span className="text-red-500">*</span>
                </span>

                <div className="flex md:flex-row flex-col w-full items-center gap-4 mt-4 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
                  <div>
                    {slotmachineimage ? (
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
                    )}
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <Button className="md:w-60 w-full h-8 bg-buttoncolor text-white font-medium rounded-sm">
                      <label htmlFor="fileInput">Upload</label>
                      <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => onChangePicture(e)}
                      />
                    </Button>
                    <Button
                      onPress={() => Setslotmachineimage("")}
                      variant="light"
                      className="md:w-60 w-full h-8 ring-2 ring-buttoncolor rounded-sm text-buttoncolor font-medium"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* spin-wheel */}
            {params.type === "spin-wheel" && (
              <div className="mt-4 flex flex-col justify-start items-center gap-4">
                <div className="flex flex-col justify-start items-start gap-4">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    Spinner Appearance
                  </p>
                  <div className="flex-col justify-start items-start gap-2 mt-2 w-full">
                    <span className="md:text-xs text-xs  flex flex-row items-center gap-1">
                      Spinner<span className="text-red-500">*</span>
                    </span>

                    <div className="flex md:flex-row flex-col w-full items-center gap-4 mt-2 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
                      <div>
                        {Spinnerimage ? (
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
                        )}
                      </div>
                      <div className="flex flex-col justify-center items-center gap-4">
                        <Button className="md:w-60 w-full h-8 bg-buttoncolor text-white font-medium rounded-sm">
                          <label htmlFor="fileInputspinner">Upload</label>
                          <input
                            type="file"
                            id="fileInputspinner"
                            style={{ display: "none" }}
                            onChange={(e) => onChangeSpinnerPicture(e)}
                          />
                        </Button>
                        <Button
                          onPress={() => Setspinnerimage("")}
                          variant="light"
                          className="md:w-60 w-full h-8 ring-2 ring-buttoncolor rounded-sm text-buttoncolor font-medium"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4">
                  {/* <div className="flex-col justify-start items-start gap-2 mt-2 w-full">
                    <span className="md:text-xs text-xs  flex flex-row items-center gap-1">
                      Center<span className="text-red-500">*</span>
                    </span>

                    <div className="flex md:flex-row flex-col w-full items-center gap-4 mt-2 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
                      <div>
                        {logo ? (
                          <Image
                            className="w-40 h-24 object-contain"
                            alt="upload image"
                            src={logo}
                          />
                        ) : (
                          <Image
                            className="w-40 h-24 object-contain"
                            alt="upload image"
                            height={128}
                            width={160}
                            src={logo}
                          />
                        )}
                      </div>
                      <div className="flex flex-col justify-center items-center gap-4">
                        <Button className="md:w-60 w-full h-8 bg-buttoncolor text-white font-medium rounded-sm">
                          <label htmlFor="fileInput">Upload</label>
                          <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            // onChange={(e) => onChangePicture(e)}
                          />
                        </Button>
                        <Button
                          // onPress={() => (setLogo(""), setImages(""))}
                          variant="light"
                          className="md:w-60 w-full h-8 ring-2 ring-buttoncolor rounded-sm text-buttoncolor font-medium"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="flex flex-col justify-start items-start gap-4 mt-4 w-full">
                  <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                    Stroke Color<span className="text-red-500">*</span>
                  </span>
                  <ColorPicker
                    defaultValue={token?.colorPrimary}
                    format={formatHex}
                    value={spinnerstrokecolor}
                    onChange={Setspinnerstrokecolor}
                    onFormatChange={setFormatHex}
                    styles={{
                      popupOverlayInner: {
                        width: 300,
                      },
                    }}
                    presets={presets}
                    panelRender={customPanelRender}
                  >
                    <Button
                      style={{ backgroundColor: StrokespinnerColorstring }}
                      className="w-full rounded-sm  text-white text-start"
                    >
                      {StrokespinnerColorstring}
                    </Button>
                  </ColorPicker>
                </div>
              </div>
            )}

            {/* scratch-card */}
            {params.type === "scratch-card" && (
              <div className="mt-4 flex flex-col justify-start items-center gap-4">
                <div className="flex flex-col justify-start items-start gap-4">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    Scratch Card Appearance
                  </p>
                  <div className="flex-col justify-start items-start gap-2 mt-2 w-full">
                    <span className="md:text-xs text-xs  flex flex-row items-center gap-1">
                      Card<span className="text-red-500">*</span>
                    </span>

                    <div className="flex md:flex-row flex-col w-full items-center gap-4 mt-2 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
                      <div>
                        {Scratchimage ? (
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
                        )}
                      </div>
                      <div className="flex flex-col justify-center items-center gap-4">
                        <Button className="md:w-60 w-full h-8 bg-buttoncolor text-white font-medium rounded-sm">
                          <label htmlFor="fileInputscratch">Upload</label>
                          <input
                            type="file"
                            id="fileInputscratch"
                            style={{ display: "none" }}
                            onChange={(e) => onChangescratchPicture(e)}
                          />
                        </Button>
                        <Button
                          onPress={() => Setscratchimage("")}
                          variant="light"
                          className="md:w-60 w-full h-8 ring-2 ring-buttoncolor rounded-sm text-buttoncolor font-medium"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="flex-col justify-start items-start gap-2 mt-2 w-full">
                    <span className="md:text-xs text-xs  flex flex-row items-center gap-1">
                      Scratch Area<span className="text-red-500">*</span>
                    </span>

                    <div className="flex md:flex-row flex-col w-full items-center gap-4 mt-2 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
                      <div>
                        {Scratcharea ? (
                          <img
                            className="w-40 h-24 object-contain"
                            alt="upload image"
                            src={Scratcharea}
                          />
                        ) : (
                          <Image
                            className="w-40 h-24 object-contain"
                            alt="upload image"
                            src={Scratchcard}
                          />
                        )}
                      </div>
                      <div className="flex flex-col justify-center items-center gap-4">
                        <Button className="md:w-60 w-full h-8 bg-buttoncolor text-white font-medium rounded-sm">
                          <label htmlFor="fileInput">Upload</label>
                          <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => onChangescratchareaPicture(e)}
                          />
                        </Button>
                        <Button
                          onPress={() => Setscratcharea("")}
                          variant="light"
                          className="md:w-60 w-full h-8 ring-2 ring-buttoncolor rounded-sm text-buttoncolor font-medium"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4 mt-4 w-full">
                  <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                    Stroke Color<span className="text-red-500">*</span>
                  </span>
                  <ColorPicker
                    defaultValue={token?.colorPrimary}
                    format={formatHex}
                    value={scratchrstrokecolor}
                    onChange={Setscratchstrokecolor}
                    onFormatChange={setFormatHex}
                    styles={{
                      popupOverlayInner: {
                        width: 300,
                      },
                    }}
                    presets={presets}
                    panelRender={customPanelRender}
                  >
                    <Button
                      style={{ backgroundColor: StrokescratchColorstring }}
                      className="w-full rounded-sm  text-white text-start"
                    >
                      {StrokescratchColorstring}
                    </Button>
                  </ColorPicker>
                </div>
              </div>
            )}

            <Divider className="h-0.5 bg-gray-300" />
            <div className="flex flex-col justify-start items-start gap-4">
              <p className="font-semibold text-sm">Prize settings</p>
              <div className="flex flex-col justify-start items-start gap-4">
                <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                  Set Limitations<span className="text-red-500">*</span>
                  <span className="flex flex-row items-center gap-1 md:text-xs text-[0.55rem] font-normal">
                    <MdInfo className="text-blue-500 inline-block" />
                  </span>
                </span>
                <input
                  value={limitation}
                  onChange={(e) => Setlimitation(e.target.value)}
                  className="border-1 border-gray-300 rounded-md focus:ring-1 focus:border-1 focus:border-gray-100 focus:ring-buttoncolor"
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-start items-start gap-4 flex-col">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Slot
                  </th>
                  <th scope="col" className="px-6 py-3 items-center  ">
                    Prize Name
                    <MdInfo className="inline-block ml-2 items-center text-blue-600 text-sm" />
                  </th>
                  <th scope="col" className="px-6 py-3 flex items-center gap-1">
                    Amount
                    <MdInfo className="inline-block text-blue-600 text-sm" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {prizeList.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.slot}
                    </th>
                    <td className="px-6 py-4">{item.prizeName}</td>
                    <td className="px-6 py-4">
                      <p className="border-1 border-gray-300 w-16 p-1">
                        {item.amount}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-4">
            <Button
              onPress={onOpen}
              variant="light"
              className="text-sm font-bold ring-1 ring-buttoncolor text-buttoncolor "
            >
              +Add Slot
            </Button>
          </div>
        </div>
        <Divider className="h-0.5 bg-gray-300 mt-4" />

        <div className="mt-4 flex flex-col justify-start items-center gap-4">
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="flex items-center gap-2 text-sm font-semibold">
              Pop ups
              <MdInfo className="text-blue-600" />
            </p>
            <div className="flex-col justify-start items-start gap-2 mt-2 w-full">
              <span className="md:text-xs text-xs  flex flex-row items-center gap-1">
                Winner<span className="text-red-500">*</span>
              </span>

              <div className="flex md:flex-row flex-col w-full items-center gap-4 mt-2 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
                <div>
                  {winnerImage ? (
                    <Image
                      className="w-40 h-24 object-contain"
                      alt="upload image"
                      width={160}
                      height={128}
                      src={winnerImage}
                    />
                  ) : (
                    <Image
                      className="w-40 h-24 object-contain"
                      alt="upload image"
                      src={Jackpot}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <Button className="md:w-60 w-full h-8 bg-buttoncolor text-white font-medium rounded-sm">
                    <label htmlFor="fileInputforwinner">Upload</label>
                    <input
                      type="file"
                      id="fileInputforwinner"
                      style={{ display: "none" }}
                      onChange={(e) => onChangeWinnerPicture(e)}
                    />
                  </Button>
                  <Button
                    onPress={() => Setwinnerimage("")}
                    variant="light"
                    className="md:w-60 w-full h-8 ring-2 ring-buttoncolor rounded-sm text-buttoncolor font-medium"
                  >
                    Remove
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-4 mt-4">
                <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                  Text<span className="text-red-500">*</span>
                </span>
                <input
                  placeholder="Winner!"
                  className="border-1 w-full border-gray-300 rounded-md focus:ring-1 focus:border-1 focus:border-gray-100 focus:ring-buttoncolor"
                  type="text"
                  value={winnerText}
                  onChange={(e) => Setwinnertext(e.target.value)}
                />
              </div>

              <div className="flex flex-col justify-start items-start gap-4 mt-4">
                <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                  Background Color<span className="text-red-500">*</span>
                </span>
                <ColorPicker
                  defaultValue={token?.colorPrimary}
                  format={formatHex}
                  value={backgroundColorwin}
                  onChange={setBackgroundColorwin}
                  onFormatChange={setFormatHex}
                  styles={{
                    popupOverlayInner: {
                      width: 300,
                    },
                  }}
                  presets={presets}
                  panelRender={customPanelRender}
                >
                  <Button
                    style={{ backgroundColor: backgroundHexwin }}
                    className="w-full rounded-sm  text-white"
                  >
                    {backgroundHexwin}
                  </Button>
                </ColorPicker>
              </div>
            </div>
          </div>
        </div>
        <Divider className="h-0.5 bg-gray-300 mt-12" />

        <div className="mt-2 flex flex-col justify-start items-center gap-4">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex-col justify-start items-start gap-2 mt-2 w-full">
              <span className="md:text-xs text-xs  flex flex-row items-center gap-1">
                Loser<span className="text-red-500">*</span>
              </span>

              <div className="flex md:flex-row flex-col w-full items-center gap-4 mt-2 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
                <div>
                  {loserImage ? (
                    <img
                      className="w-40 h-24 object-contain"
                      alt="upload image"
                      src={loserImage}
                    />
                  ) : (
                    <Image
                      className="w-40 h-24 object-contain"
                      alt="upload image"
                      src={Oops}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <Button className="md:w-60 w-full h-8 bg-buttoncolor text-white font-medium rounded-sm">
                    <label htmlFor="fileInputloser">Upload</label>
                    <input
                      type="file"
                      id="fileInputloser"
                      style={{ display: "none" }}
                      onChange={(e) => onChangeloserPicture(e)}
                    />
                  </Button>
                  <Button
                    onPress={() => Setloserimage("")}
                    variant="light"
                    className="md:w-60 w-full h-8 ring-2 ring-buttoncolor rounded-sm text-buttoncolor font-medium"
                  >
                    Remove
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-4 mt-4">
                <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                  Text<span className="text-red-500">*</span>
                </span>
                <input
                  value={loserText}
                  onChange={(e) => Setlosertext(e.target.value)}
                  placeholder="You lost!!"
                  className="border-1 w-full border-gray-300 rounded-md focus:ring-1 focus:border-1 focus:border-gray-100 focus:ring-buttoncolor"
                  type="text"
                />
              </div>

              <div className="flex flex-col justify-start items-start gap-4 mt-4">
                <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                  Background Color<span className="text-red-500">*</span>
                </span>
                <ColorPicker
                  defaultValue={token?.colorPrimary}
                  format={formatHex}
                  value={backgroundColorlose}
                  onChange={setBackgroundColorlose}
                  onFormatChange={setFormatHex}
                  styles={{
                    popupOverlayInner: {
                      width: 300,
                    },
                  }}
                  presets={presets}
                  panelRender={customPanelRender}
                >
                  <Button
                    style={{ backgroundColor: backgroundHexlose }}
                    className="w-full rounded-sm  text-white"
                  >
                    {backgroundHexlose}
                  </Button>
                </ColorPicker>
              </div>
            </div>
          </div>
        </div>
        <Divider className="h-0.5 bg-gray-300 mt-12" />

        <div className="mt-2 flex justify-start items-start gap-4 flex-col">
          <p className="flex justify-start  gap-1 font-semibold text-sm items-center">
            After the result <MdInfo className="text-blue-600" />
          </p>
          <div className="mt-4 flex-col flex justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
              <p className="text-xs">
                Action after Winning,<span className="text-red-400">*</span>
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <p className="text-xs">
                Retries after loss<span className="text-red-400">*</span>
              </p>

              <input
                value={retryAfterLoss}
                onChange={(e) => SetretryAfterLoss(e.target.value)}
                className="border-1 w-full border-gray-300 rounded-md focus:ring-1 focus:border-1 focus:border-gray-100 focus:ring-buttoncolor"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New Row
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const newRow = {
                      slot: parseInt(e.target.slot.value),
                      prizeName: e.target.prizeName.value,
                      amount: parseInt(e.target.amount.value),
                    };
                    SetprizeList([...prizeList, newRow]);
                    onClose();
                  }}
                >
                  <div className="mb-4">
                    <label
                      htmlFor="slot"
                      className="block text-gray-700 dark:text-gray-300"
                    >
                      Slot:
                    </label>
                    <input
                      type="number"
                      id="slot"
                      name="slot"
                      className="form-input mt-1 block w-full focus:ring-1 focus:border-none rounded-sm focus:ring-buttoncolor"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="prizeName"
                      className="block text-gray-700 dark:text-gray-300"
                    >
                      Prize Name:
                    </label>
                    <input
                      type="text"
                      id="prizeName"
                      name="prizeName"
                      className="form-input mt-1 block w-full focus:ring-1 focus:border-none rounded-sm focus:ring-buttoncolor"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="amount"
                      className="block text-gray-700 dark:text-gray-300"
                    >
                      Amount:
                    </label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      className="form-input mt-1 block w-full focus:ring-1 focus:border-none rounded-sm focus:ring-buttoncolor"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button className="bg-buttoncolor text-white" type="submit">
                      Add Slot
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default PrizeSetting;
