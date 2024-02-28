"use client";
import React, { useState } from "react";
import { Button, message, Upload } from "antd";
import Uploadimage from "../public/QRgenerate/Upload.png";
import Image from "next/image";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Uploadcomponet = () => {

  const [previewImage, setPreviewImage] = useState("");

  console.log(previewImage)


  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      try {
        const preview = await getBase64(file.originFileObj);
        file.preview = preview;
        setPreviewImage(preview);
      } catch (error) {
        console.error('Error generating preview:', error);
      }
    } else {
      setPreviewImage(file.url || file.preview);
    }
  };


  

  // uploadimage

  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="flex flex-row items-center gap-4 mt-4 border-1 border-buttoncolor border-opacity-50 rounded-sm px-4 py-2">
      <div>
        {previewImage ? (
          <img
            className="w-40 h-32 object-contain"
            alt="upload image"
            height={100}
            width={100}
            src={previewImage}
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
        <Upload {...props} 
        maxCount={1}
         onPreview={handlePreview}>
          <Button className="w-60 bg-buttoncolor text-white font-medium rounded-sm">
            Upload
          </Button>
        </Upload>
        {/* <Button
          variant="light"
          className="w-60 ring-2 ring-buttoncolor rounded-sm text-buttoncolor font-medium"
        >
          Remove
        </Button> */}
      </div>
    </div>
  );
};

export default Uploadcomponet;
