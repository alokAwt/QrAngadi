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

import Jackpot from "../../public/gamification/Jackpot.png";
import Oops from "../../public/gamification/Oops.png";
import Preview from "../../public/gamification/Preview.png";
import Spinwheel from "../../public/gamification/spinWheel.png";
import Scratchcard from "../../public/gamification/scratch2.png";

export const dataselect = [
  {label: "option1", value: "option1" },
  {label: "option2", value: "option2" },
  {label: "option3", value:'option3' },
 ]


function PrizeSetting() {
  const data = useContext(DataContext);
  const [logo, setLogo] = useState(false);
  const [backgroundColorlose, setBackgroundColorlose] = useState("#FF0000");
  const [backgroundColorwin, setBackgroundColorwin] = useState("#FFFF00");
  const [StrokeColor, setStrokeColor] = useState("#FFFF00");
  const [formatHex, setFormatHex] = useState("hex");
  const [value, setValue] = React.useState(new Set([]));  //controlled select example

  

  console.log(data.params.type);

  const backgroundHexwin = useMemo(
    () =>
      typeof backgroundColorwin === "string"
        ? backgroundColorwin
        : backgroundColorwin?.toHexString(),
    [backgroundColorwin]
  );

  const backgroundHexlose = useMemo(
    () =>
      typeof backgroundColorlose === "string"
        ? backgroundColorlose
        : backgroundColorlose?.toHexString(),
    [backgroundColorlose]
  );
  const StrokeColorstring = useMemo(
    () =>
      typeof StrokeColor === "string"
        ? StrokeColor
        : StrokeColor?.toHexString(),
    [StrokeColor]
  );

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
            {data.params.type === "slot-machine" && (
              <div className="flex-col justify-start items-start gap-4  w-full">
                <p className="font-sm font-semibold mb-2">Machine Appearance</p>
                <span className="md:text-sm text-xs font-bold flex flex-row items-center gap-1">
                  Machine<span className="text-red-500">*</span>
                </span>

                <div className="flex md:flex-row flex-col w-full items-center gap-4 mt-4 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
                  <div>
                    {logo ? (
                      <img
                        className="w-40 h-32 object-contain"
                        alt="upload image"
                        src={logo}
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
              </div>
            )}

            {/* spin-wheel */}
            {data.params.type === "spin-wheel" && (
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
                        {logo ? (
                          <img
                            className="w-40 h-24 object-contain"
                            alt="upload image"
                            src={logo}
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
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="flex-col justify-start items-start gap-2 mt-2 w-full">
                    <span className="md:text-xs text-xs  flex flex-row items-center gap-1">
                      Center<span className="text-red-500">*</span>
                    </span>

                    <div className="flex md:flex-row flex-col w-full items-center gap-4 mt-2 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
                      <div>
                        {logo ? (
                          <img
                            className="w-40 h-24 object-contain"
                            alt="upload image"
                            src={logo}
                          />
                        ) : (
                          <Image
                            className="w-40 h-24 object-contain"
                            alt="upload image"
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
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4 mt-4 w-full">
                  <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                    Stroke Color*<span className="text-red-500">*</span>
                  </span>
                  <ColorPicker
                    defaultValue={token?.colorPrimary}
                    format={formatHex}
                    value={StrokeColor}
                    onChange={setStrokeColor}
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
                      style={{ backgroundColor: StrokeColorstring }}
                      className="w-full rounded-sm  text-white text-start"
                    >
                      {StrokeColorstring}
                    </Button>
                  </ColorPicker>
                </div>
              </div>
            )}

            {/* scratch-card */}
            {data.params.type === "scratch-card" && (
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
                        {logo ? (
                          <img
                            className="w-40 h-24 object-contain"
                            alt="upload image"
                            src={logo}
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
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="flex-col justify-start items-start gap-2 mt-2 w-full">
                    <span className="md:text-xs text-xs  flex flex-row items-center gap-1">
                      Scratch Area<span className="text-red-500">*</span>
                    </span>

                    <div className="flex md:flex-row flex-col w-full items-center gap-4 mt-2 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
                      <div>
                        {logo ? (
                          <img
                            className="w-40 h-24 object-contain"
                            alt="upload image"
                            src={logo}
                          />
                        ) : (
                          <Image
                            className="w-40 h-24 object-contain"
                            alt="upload image"
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
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4 mt-4 w-full">
                  <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                    Stroke Color*<span className="text-red-500">*</span>
                  </span>
                  <ColorPicker
                    defaultValue={token?.colorPrimary}
                    format={formatHex}
                    value={StrokeColor}
                    onChange={setStrokeColor}
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
                      style={{ backgroundColor: StrokeColorstring }}
                      className="w-full rounded-sm  text-white text-start"
                    >
                      {StrokeColorstring}
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
                  className="border-1 border-gray-300 rounded-md focus:ring-1 focus:border-1 focus:border-gray-100 focus:ring-buttoncolor"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div>
            <Image className="h-[40rem]" src={Preview} />
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
                    Prize Value
                    <MdInfo className="inline-block ml-2 items-center text-blue-600 text-sm" />
                  </th>
                  <th scope="col" className="px-6 py-3 flex items-center gap-1">
                    Chances %
                    <MdInfo className="inline-block text-blue-600 text-sm" />
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td className="px-6 py-4">Prize 1</td>
                  <td className="px-6 py-4">
                    <p className="border-1 border-gray-300 w-16 p-1">20/100</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-buttoncolor">
                      + Upload Image
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-4">
            <p className="text-sm font-bold text-buttoncolor">+Add Slot</p>
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
                  {logo ? (
                    <img
                      className="w-40 h-24 object-contain"
                      alt="upload image"
                      src={logo}
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

              <div className="flex flex-col justify-start items-start gap-4 mt-4">
                <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                  Text<span className="text-red-500">*</span>
                </span>
                <input
                  placeholder="Winner!"
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
                  {logo ? (
                    <img
                      className="w-40 h-24 object-contain"
                      alt="upload image"
                      src={logo}
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

              <div className="flex flex-col justify-start items-start gap-4 mt-4">
                <span className="md:text-sm text-xs font-normal flex flex-row items-center gap-1">
                  Text<span className="text-red-500">*</span>
                </span>
                <input
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

              {/* Controlled selectoption example */}
              <Select
                      selectedKeys={value}
                      onSelectionChange={setValue}

                variant="bordered"
                radius="sm"
                size="sm"
                placeholder={ "Show Proceed button" || value}

                className="w-96 bg-white rounded-none"
              >
                 {dataselect.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
              </Select>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <p className="text-xs">
                Retries after loss<span className="text-red-400">*</span>
              </p>
              <Select
                variant="bordered"
                radius="sm"
                size="sm"
                className="w-96 bg-white rounded-none hover:ring-buttoncolor"
              >
                <SelectItem>hii</SelectItem>
              </Select>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <p className="text-xs">
                Reset time after loss<span className="text-red-400">*</span>
              </p>
              <Select
                variant="bordered"
                radius="sm"
                size="sm"
                className="w-96 bg-white rounded-none"
              >
                <SelectItem>hii</SelectItem>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrizeSetting;
