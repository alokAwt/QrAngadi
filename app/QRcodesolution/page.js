"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import Web from "../../public/QRgenerate/Web.png";
import Videos from "../../public/QRgenerate/Videos.png";
import Media from "../../public/QRgenerate/Media.png";
import Share from "../../public/QRgenerate/Share.png";
import Textfile from "../../public/QRgenerate/Textfile.png";
import Mic from "../../public/QRgenerate/Mic.png";
import Location from "../../public/QRgenerate/Location.png";
import Pdf from "../../public/QRgenerate/Pdf.png";
import Image from "next/image";
import { Tabs, Tab, Spinner } from "@nextui-org/react";
import QR from "../../public/QR.png";
import Linkdin from "../../public/Aboutus/Linkdin.png";
import Insta from "../../public/Aboutus/Insta.png";
import Music from "../../public/Aboutus/Music.png";
import Pintrest from "../../public/Aboutus/Pintrest.png";
import Youtube from "../../public/Aboutus/Youtube.png";
import { Select, SelectItem } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import Square from "../../public/QRgenerate/Dotoptions/Square.png";
import Dots from "../../public/QRgenerate/Dotoptions/Dots.png";
import Rounded from "../../public/QRgenerate/Dotoptions/Rounded.png";
import Extrarounded from "../../public/QRgenerate/Dotoptions/Extrarounded.png";
import Classy from "../../public/QRgenerate/Dotoptions/Classy.png";
import Classyrounded from "../../public/QRgenerate/Dotoptions/Classyrounded.png";
import Extraroundedcorner from "../../public/QRgenerate/Corners/Extrarounded.png";
import Squarecorner from "../../public/QRgenerate/Corners/Square.png";
import Dotscorner from "../../public/QRgenerate/Corners/Dot.png";
import Squarecorner1 from "../../public/QRgenerate/CornersDotoptions/Square.png";
import Dotscorner1 from "../../public/QRgenerate/CornersDotoptions/Dot.png";
import { MdInfo } from "react-icons/md";
import { Col, ColorPicker, Divider, Row, Space, theme } from "antd";
import { generate, green, presetPalettes, red, cyan } from "@ant-design/colors";
import Uploadimage from "../../public/QRgenerate/Upload.png";
import Nosample from "../../public/QRgenerate/Samplelogo/No sample.png";
import Apple from "../../public/QRgenerate/Samplelogo/Instagram.png";
import Kiwi from "../../public/QRgenerate/Samplelogo/Facebook.png";
import Heart from "../../public/QRgenerate/Samplelogo/Whatsapp.png";
import Sunflower from "../../public/QRgenerate/Samplelogo/Apple.png";
// import QRCodeStyling from "qr-code-styling";
import { QrType } from "@/Utility/QrType/QrType";
import { CreateQr } from "@/Utility/CreateQr";
import { useToast } from "../../components/ui/usetoast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import Dotloader from "../../public/Animation/Dotloader.gif";
import Success from "../../public/Animation/Success.gif";
import {
  Modal,
  ModalContent,
  Button,
  ModalBody,
  ModalFooter,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import Generate from "../../public/Howworks/Customize.png";
import { IoMdCloseCircle } from "react-icons/io";
import { Getsubscription } from "@/Utility/Api/Subscription";


const isBrowser = typeof window !== "undefined";
let QRCodeStyling;

if (isBrowser) {
  QRCodeStyling = require("qr-code-styling");
}

const Extension = [
  { label: "png", value: "png" },
  { label: "jpeg", value: "jpeg" },
  { label: "webp", value: "webp" },
  { label: "svg", value: "svg" },
];

const Page = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isOpentooltip, setIsOpentooltip] = useState(false);
  const { toast } = useToast();
  const [selected, setSelected] = React.useState("STATIC");
  const [image, setImages] = useState("");
  const [logo, setLogo] = useState("");
  const [dotColorHex, setDotColorHex] = useState("#000");
  const [eyeColorHex, setEyeColorHex] = useState("#000");
  const [cornersColorHex, setCornersColorHex] = useState("#000");
  const [backgroundColorHex, setBackgroundColorHex] = useState("#fff");
  const [formatHex, setFormatHex] = useState("hex");
  const [selectedOptions, setSelectedOptions] = useState([]); //dotoptins value
  const [cornersSquareOption, setCornersSquareOption] = useState([]); //cornersquareoptions
  const [cornersDotOption, setCornersDotOption] = useState([]); //cornerdotoptions
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [qrType, setQrType] = useState("");
  const [Url, setUrl] = useState("");
  const [qrName, setQrName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [hasSubscription, setHasSubscription] = useState();
  const [shortUrl, setShortUrl] = useState(
    "https://qrangadidesign.com/hd87ebsodh"
  );

  //QRIMAGE TYPE IMAGES/TEXTFILE/PDF STATE

  const [QRimage, SetQRimage] = useState("");
  const [QrData, setQrData] = useState("");
  const [video, setVideo] = useState(null);
  const [audio, setAudio] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [textFile, setTextFile] = useState(null);

  const [options, setOptions] = useState({
    width: 300,
    height: 300,
    type: "png",
    data: "https://angadiworldtech.com/",
    image: Apple,
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q",
    },
    imageOptions: {
      crossOrigin: "anonymous",
    },
    dotsOptions: {
      color: "#222222",
      type: "rounded",
    },
    backgroundOptions: {
      color: "#5FD4F3",
    },
    cornersSquareOptions: {
      color: "#222222",
      type: "extra-rounded",
    },
    cornersDotOptions: { type: "Square", color: "#000000" },
  });

  const [fileExt, setFileExt] = useState("");
  const [qrCode] = useState(new QRCodeStyling(options));
  const ref = useRef(null);


  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([option]);
    }
  };

  // squareoptions
  const handleSquareOptionSelect = (option) => {
    if (cornersSquareOption.includes(option)) {
      setCornersSquareOption(
        cornersSquareOption.filter((item) => item !== option)
      );
    } else {
      setCornersSquareOption([option]);
    }
  };

  const handleDotOptionSelect = (option) => {
    if (cornersDotOption.includes(option)) {
      setCornersDotOption(cornersDotOption.filter((item) => item !== option));
    } else {
      setCornersDotOption([option]);
    }
  };

  const selectedOptionsString = useMemo(
    () => selectedOptions.join(", "),
    [selectedOptions]
  );

  const dotHexString = useMemo(
    () =>
      typeof dotColorHex === "string"
        ? dotColorHex
        : dotColorHex?.toHexString(),
    [dotColorHex]
  );

  const eyeHexString = useMemo(
    () =>
      typeof eyeColorHex === "string"
        ? eyeColorHex
        : eyeColorHex?.toHexString(),
    [eyeColorHex]
  );

  const cornersHexString = useMemo(
    () =>
      typeof cornersColorHex === "string"
        ? cornersColorHex
        : cornersColorHex?.toHexString(),
    [cornersColorHex]
  );

  const backgroundHexString = useMemo(
    () =>
      typeof backgroundColorHex === "string"
        ? backgroundColorHex
        : backgroundColorHex?.toHexString(),
    [backgroundColorHex]
  );

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  useEffect(() => {
    setOptions((options) => ({
      ...options,
      data: `${lat} ${lon}`,
      image: logo,
      backgroundOptions: {
        ...options.backgroundOptions,
        color: backgroundHexString,
      },
      dotsOptions: {
        ...options.dotsOptions,
        color: dotHexString,
        type: selectedOptionsString,
      },
      cornersDotOptions: {
        ...options.cornersDotOptions,
        color: cornersHexString,
        type: cornersDotOption.join(", "),
      },
      cornersSquareOptions: {
        ...options.cornersSquareOptions,
        color: eyeHexString,
        type:
          cornersSquareOption.join(", ") || options.cornersSquareOptions.type,
      },
    }));
  }, [
    backgroundHexString,
    dotHexString,
    selectedOptions,
    cornersHexString,
    cornersDotOption,
    eyeHexString,
    cornersSquareOption,
    logo,
    lat,
    lon,
  ]);

  const onDataChange = (event) => {
    setUrl(event.target.value);
    setOptions((options) => ({
      ...options,
      data: event.target.value,
    }));
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: fileExt,
    });
  };

  const setLogoMemoized = useMemo(() => {
    return (file) => {
      if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setLogo(reader.result);
        });
        reader.readAsDataURL(file);
      }
    };
  }, []);

  const setQRimageMemoized = useMemo(() => {
    return (file) => {
      if (file) {
        const QRreader = new FileReader();
        QRreader.addEventListener("load", () => {
          SetQRimage(QRreader.result);
        });
        QRreader.readAsDataURL(file);
      }
    };
  }, []);

  const onChangePicture = (e) => {
    setImages(e.target.files[0]);
    setLogoMemoized(e.target.files[0]); // Use the memoized function to set the logo
  };
  const onChangeQRimage = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png"
      ) {
        setQRimageMemoized(file);
        setQrData(file);
      } else {
        toast({
          variant: "destructive",
          title: "Please select a valid image file (JPEG, JPG, PNG)",
          description: "",
        });
        e.target.value = null;
      }
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === "video/mp4") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setVideo({
            file,
            url: reader.result,
          });
        };
        setQrData(file);
      } else {
        toast({
          variant: "destructive",
          title: "Please select a valid MP4 video file",
          description: "",
        });
        e.target.value = null;
      }
    }
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (
        file.type === "audio/mp3" ||
        file.type === "audio/wav" ||
        file.type === "audio/mpeg"
      ) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setAudio({
            name: file.name,
            url: reader.result,
          });
        };
        setQrData(file);
      } else {
        toast({
          variant: "destructive",
          title: "Please select a valid MP3 or WAV audio file",
          description: "",
        });
        e.target.value = null;
      }
    }
  };

  const handlePdfFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === "application/pdf") {
        setQrData(selectedFile);
        setPdfFile(selectedFile);
      } else {
        toast({
          variant: "destructive",
          title: "Please select a valid PDF file",
          description: "",
        });
        e.target.value = null;
      }
    }
  };

  const handleTextChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === "text/plain") {
        setTextFile(selectedFile);
        setQrData(selectedFile);
      } else {
        toast({
          variant: "destructive",
          title: "Please select a valid text file",
          description: "",
        });
        e.target.value = null;
      }
    }
  };

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

  const ChangeScreen = () => {
    router.push("/Profile");
  };

  const GenerateDyamicqr = async () => {
    if (!qrType) {
      toast({
        variant: "destructive",
        title: "QR Type is Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (!qrName) {
      toast({
        variant: "destructive",
        title: "QR Name is Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (qrType != "Map" ? false : !lat || !lon) {
      toast({
        variant: "destructive",
        title: "QR Data is Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (
      (qrType === "Image" && !QrData) ||
      (qrType === "Video" && !QrData) ||
      (qrType === "Audio" && !QrData) ||
      (qrType === "document" && !QrData) ||
      (qrType === "document1" && !QrData)
    ) {
      toast({
        variant: "destructive",
        title: "Upload File Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    } else if (
      (qrType === "Website" && !Url) ||
      (qrType === "playstore" && !Url) ||
      (qrType === "Social" && !Url)
    ) {
      toast({
        variant: "destructive",
        title: "QR Data is Required.",
        description: "",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return false;
    }
    setLoading(true);

    if (
      qrType === "Image" ||
      qrType === "Video" ||
      qrType === "Audio" ||
      qrType === "document" ||
      qrType === "document1"
    ) {
      const data = new FormData();
      data.append("file", QrData);
      data.append("upload_preset", "vsqmoxq9");
      var res;
      if (qrType === "Video") {
        res = await fetch(
          "https://api.cloudinary.com/v1_1/dxlmwq61j/video/upload",
          {
            method: "post",
            body: data,
          }
        );
      } else if (qrType === "Audio") {
        res = await fetch(
          "https://api.cloudinary.com/v1_1/dxlmwq61j/video/upload",
          {
            method: "post",
            body: data,
          }
        );
      } else {
        res = await fetch(
          "https://api.cloudinary.com/v1_1/dxlmwq61j/image/upload",
          {
            method: "post",
            body: data,
          }
        );
      }

      const file1 = await res.json();
      if (file1) {
        if (image) {
          const data = new FormData();
          data.append("file", image);
          data.append("upload_preset", "vsqmoxq9");
          const res = await fetch(
            "https://api.cloudinary.com/v1_1/dxlmwq61j/image/upload",
            {
              method: "post",
              body: data,
            }
          );
          const file = await res.json();
          if (file?.secure_url.length > 10) {
            let result = CreateQr(
              qrName,
              qrType,
              backgroundHexString,
              dotHexString,
              selectedOptions,
              cornersHexString,
              cornersDotOption,
              eyeHexString,
              cornersSquareOption,
              setLoading,
              toast,
              ChangeScreen,
              lat,
              lon,
              file1.secure_url,
              file.secure_url,
              file1.public_id
            );
            setImages("");
          }
        } else {
          let result = CreateQr(
            qrName,
            qrType,
            backgroundHexString,
            dotHexString,
            selectedOptions,
            cornersHexString,
            cornersDotOption,
            eyeHexString,
            cornersSquareOption,
            setLoading,
            toast,
            ChangeScreen,
            lat,
            lon,
            file1.secure_url,
            "",
            file1.public_id
          );
        }
      }
    } else {
      if (image) {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "vsqmoxq9");
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dxlmwq61j/image/upload",
          {
            method: "post",
            body: data,
          }
        );
        const file = await res.json();
        if (file?.secure_url.length > 10) {
          let result = CreateQr(
            qrName,
            qrType,
            backgroundHexString,
            dotHexString,
            selectedOptions,
            cornersHexString,
            cornersDotOption,
            eyeHexString,
            cornersSquareOption,
            setLoading,
            toast,
            ChangeScreen,
            lat,
            lon,
            Url,
            file.secure_url
          );
          setImages("");
        }
      } else {
        let result = CreateQr(
          qrName,
          qrType,
          backgroundHexString,
          dotHexString,
          selectedOptions,
          cornersHexString,
          cornersDotOption,
          eyeHexString,
          cornersSquareOption,
          setLoading,
          toast,
          ChangeScreen,
          lat,
          lon,
          Url,
          ""
        );
      }
    }
  };

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

  // QR STYLING

  //model for plan
  console.log(selected);

  const getsubscription=()=>{
    Getsubscription().then((res) => {
    if(res?.data){
      setHasSubscription(res?.data[0])
  
    }
    });
  }
  useEffect(() => {
    getsubscription()
  }, [])

  useEffect(() => {
    if (selected === "DYNAMIC" && !hasSubscription) {
      onOpenChange(true);
    }
  }, [selected, hasSubscription]);

  //copy url
  const handleCopyLink = () => {
    const tempInput = document.createElement("input");
    tempInput.value = shortUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setIsOpentooltip(true);
    setTimeout(() => {
      setIsOpentooltip(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col w-11/12 justify-center items-start mx-auto mt-12">
        <div>
          <h6 className="text-3xl font-bold ">
            Create your <span className="text-buttoncolor">Own</span> QR Code!
          </h6>
          <p className="text-sm font-medium mt-2">
            {`Easily generate personalized QR Codes in minutes with QR Angadi's QR
          Code Generator!`}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-8 mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-9 place-content-evenly place-items-center md:gap-2 bg-[#FF71431A] border-1 border-buttoncolor w-full rounded-sm border-opacity-50 md:p-2 p-1 md:px-2 overflow-hidden">
            {QrType &&
              QrType.map((item, index) => (
                <Button
                  key={index}
                  variant="light"
                  className={
                    qrType === item?.type
                      ? "flex flex-col justify-center items-center gap-1 h-auto py-2 ring-1 ring-buttoncolor"
                      : "flex flex-col justify-center items-center gap-1 h-auto py-2"
                  }
                  onClick={() => setQrType(item.type)}
                >
                  <div>
                    <Image
                      className="h-8 w-8 object-contain"
                      alt="itemimage"
                      src={item?.Image}
                    />
                  </div>
                  <p className="text-center md:text-xs text-[0.65rem]">
                    {item?.name}
                  </p>
                </Button>
              ))}
          </div>

          <div className="flex flex-col justify-start items-start gap-2 p-4 w-full rounded-sm border-1 border-buttoncolor border-opacity-50 mt-4">
            <span className="text-xs ml-auto items-center flex gap-1">
              <MdInfo className="inline-block md:text-lg text-xl text-blue-700" />
              We Recommend you to choose the dynamic QR code if you want to
              track your performance and edit whenever you need.
            </span>
            <h6 className="text-xl font-bold">Enter QR details</h6>
            <div className="mb-6 mt-4 w-full">
              <label
                htmlFor="Enter your QR Name *"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your QR Name <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => setQrName(e.target.value)}
                value={qrName}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 "
                placeholder="Enter QR Name"
                required
              />
            </div>
            {qrType === "Map" ? (
              <div className="mb-6 w-full ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Latitute And Longitude of Location
                  <span className="text-red-500">*</span>{" "}
                  <span className="text-xs text-gray-500">
                    (eg: 10.2022,20.400)
                  </span>
                </label>
                <div>
                  <input
                    onChange={(e) => setLat(e.target.value)}
                    value={lat}
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 d "
                    placeholder="Enter Latitude of Location"
                    required
                  />
                  <input
                    onChange={(e) => setLon(e.target.value)}
                    value={lon}
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 d mt-2"
                    placeholder="Enter Lonitude of Location"
                    required
                  />
                </div>
              </div>
            ) : qrType === "Website" ? (
              <div className="mb-6 w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter URL of webpage <span className="text-red-500">*</span>{" "}
                  <span className="text-xs text-gray-500">
                    (eg: https://www.designdaddie.com/)
                  </span>
                </label>
                <input
                  onChange={(e) => onDataChange(e)}
                  value={Url}
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 d "
                  placeholder="Enter webpage URL"
                  required
                />
              </div>
            ) : qrType === "playstore" ? (
              <>
                <div className="mb-6 w-full">
                  <label
                    htmlFor="Android"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter URL for Android{" "}
                    <span className="text-red-500">*</span>{" "}
                    <span className="text-xs text-gray-500">
                      {/* (eg: https://www.designdaddie.com/) */}
                    </span>
                  </label>
                  <input
                    onChange={(e) => onDataChange(e)}
                    // value={Url}
                    type="text"
                    id="Android"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 d "
                    placeholder="Enter Android URL https://"
                    required
                  />
                </div>
                <div className="mb-6 w-full">
                  <label
                    htmlFor="Android"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter URL for Ios <span className="text-red-500">*</span>{" "}
                    <span className="text-xs text-gray-500">
                      {/* (eg: https://www.designdaddie.com/) */}
                    </span>
                  </label>
                  <input
                    onChange={(e) => onDataChange(e)}
                    // value={Url}
                    type="text"
                    id="Android"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 d "
                    placeholder="Enter Ios URL https://"
                    required
                  />
                </div>
              </>
            ) : qrType === "Image" ? (
              <div className="mb-6 w-full">
                <p className="text-start p-2 text-sm font-medium">
                  Upload image
                </p>
                <div className="flex flex-col md:flex-row  justify-between gap-12 items-center border-1 border-buttonopacitycolor p-6 rounded-lg">
                  <div className="flex  justify-center items-center gap-2 flex-col h-60 md:w-2/4 w-full border-1.5 border-dashed rounded-lg">
                    {QRimage ? (
                      <div>
                        <Image
                          src={QRimage}
                          width={400}
                          height={150}
                          className=" w-full h-60 object-contain rounded-md"
                        />
                      </div>
                    ) : (
                      <Button className="md:w-60 w-40  h-14 bg-buttoncolor text-white font-medium rounded-sm">
                        <IoIosAddCircle className="text-xl" />
                        <label htmlFor="fileInputQRimage">Upload image</label>
                        <input
                          type="file"
                          id="fileInputQRimage"
                          style={{ display: "none" }}
                          onChange={(e) => onChangeQRimage(e)}
                        />
                      </Button>
                    )}
                  </div>
                  <div className="md:h-60 h-24 w-2/4 flex flex-col gap-4 md:justify-start md:items-start ">
                    <p className="md:text-lg text-xs">Supported formats:</p>
                    <div className="flex justify-evenly items-center gap-4">
                      <span className="p-2 text-buttoncolor border border-buttoncolor rounded-md cursor-pointer">
                        JPEG
                      </span>
                      <span className="p-2 text-buttoncolor border border-buttoncolor rounded-md cursor-pointer">
                        JPG
                      </span>
                      <span className="p-2 text-buttoncolor border border-buttoncolor rounded-md cursor-pointer">
                        PNG
                      </span>
                    </div>
                    {QRimage && (
                      <div className="flex items-center gap-4">
                        <p className="text-md leading-5">Image.png</p>
                        <Button
                          onPress={() => SetQRimage("")}
                          variant="light"
                          className="text-buttoncolor"
                        >
                          <MdDelete size={24} />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : qrType === "Video" ? (
              <div className="mb-6 w-full">
                <p className="text-start p-2 text-sm font-medium">
                  Upload Video
                </p>
                <div className="flex md:flex-row flex-col justify-between gap-12 items-center border-1 border-buttonopacitycolor p-6 rounded-lg">
                  <div className="flex justify-center items-center gap-2 p-2 flex-col h-60 md:w-2/4 w-full border-1.5 border-dashed rounded-lg">
                    {video ? (
                      <div>
                        <video
                          controls
                          className="w-full h-60 object-contain rounded-md"
                        >
                          <source src={video.url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Button className="md:w-60 w-40 h-14 bg-buttoncolor text-white font-medium rounded-sm">
                        <IoIosAddCircle className="text-xl" />
                        <label htmlFor="fileInputvideo">Upload Video</label>
                        <input
                          type="file"
                          id="fileInputvideo"
                          style={{ display: "none" }}
                          onChange={(e) => handleVideoChange(e)}
                        />
                      </Button>
                    )}
                  </div>
                  <div className="md:h-60 h-24 w-2/4 flex flex-col gap-4 justify-start items-start ">
                    <p className="md:text-lg text-xs">Supported formats:</p>
                    <div className="flex justify-evenly items-center gap-4">
                      <span className="p-2 text-buttoncolor border border-buttoncolor rounded-md cursor-pointer">
                        MP4
                      </span>
                    </div>
                    {video && (
                      <div className="flex items-center gap-4">
                        <p className="text-md leading-5">{video.file.name}</p>
                        <Button
                          onPress={() => setVideo(null)}
                          variant="light"
                          className="text-buttoncolor"
                        >
                          <MdDelete size={24} />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : qrType === "Audio" ? ( //need to change
              <div className="mb-6 w-full">
                <p className="text-start p-2 text-sm font-medium">
                  Upload Audio
                </p>
                <div className="flex md:flex-row flex-col justify-between gap-12 items-center border-1 border-buttonopacitycolor p-6 rounded-lg">
                  <div className="flex justify-center items-center gap-2 flex-col h-60 md:w-2/4 w-full border-1.5 border-dashed rounded-lg">
                    {audio ? (
                      <div>
                        <audio
                          controls
                          className="w-full h-60 object-contain rounded-md"
                        >
                          <source src={audio.url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    ) : (
                      <Button className="md:w-60 w-40 h-14 bg-buttoncolor text-white font-medium rounded-sm">
                        <IoIosAddCircle className="text-xl" />
                        <label htmlFor="fileInputAudio">Upload Audio</label>
                        <input
                          type="file"
                          id="fileInputAudio"
                          style={{ display: "none" }}
                          onChange={(e) => handleAudioChange(e)}
                        />
                      </Button>
                    )}
                  </div>
                  <div className="md:h-60 h-24 w-2/4 flex flex-col gap-4 justify-start items-start ">
                    <p className="md:text-lg text-xs">Supported formats:</p>
                    <div className="flex justify-evenly items-center gap-4">
                      <span className="p-2 text-buttoncolor border border-buttoncolor rounded-md cursor-pointer">
                        MP3
                      </span>
                      <span className="p-2 text-buttoncolor border border-buttoncolor rounded-md cursor-pointer">
                        WAV
                      </span>
                    </div>
                    {audio && (
                      <div className="flex items-center gap-4">
                        <p className="text-md leading-5">{audio.name}</p>
                        <Button
                          onPress={() => setAudio(null)}
                          variant="light"
                          className="text-buttoncolor"
                        >
                          <MdDelete size={24} />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : qrType === "Social" ? (
              <div className="mb-6 w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter URL of Social Account{" "}
                  <span className="text-red-500">*</span>{" "}
                  <span className="text-xs text-gray-500">
                    (eg: https://www.facebook.com/)
                  </span>
                </label>
                <input
                  // onChange={(e) => onDataChange(e)}
                  // value={Url}
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 d "
                  placeholder="Enter  URL https://"
                  required
                />
              </div>
            ) : qrType === "document" ? (
              <div className="mb-6 w-full">
                <p className="text-start p-2 text-sm font-medium">Upload PDF</p>
                <div className="flex md:flex-row flex-col justify-between gap-12 items-center border-1 border-buttonopacitycolor p-6 rounded-lg">
                  <div className="flex justify-center items-center gap-2 flex-col h-60 md:w-2/4 w-full border-1.5 border-dashed rounded-lg">
                    {pdfFile ? (
                      <div>
                        <embed
                          src={URL.createObjectURL(pdfFile)}
                          type="application/pdf"
                          width={400}
                          height={200}
                        />
                      </div>
                    ) : (
                      <Button className="md:w-60 w-40 h-14 bg-buttoncolor text-white font-medium rounded-sm">
                        <IoIosAddCircle className="text-xl" />
                        <label htmlFor="pdfFileInput">Upload PDF</label>
                        <input
                          type="file"
                          id="pdfFileInput"
                          accept=".pdf"
                          style={{ display: "none" }}
                          onChange={(e) => handlePdfFileChange(e)}
                        />
                      </Button>
                    )}
                  </div>
                  <div className="md:h-60 h-24 w-2/4 flex flex-col gap-4 justify-start items-start ">
                    <p className="md:text-lg text-xs">Supported formats:</p>
                    <div className="flex justify-evenly items-center gap-4">
                      <span className="p-2 text-buttoncolor border border-buttoncolor rounded-md cursor-pointer">
                        PDF
                      </span>
                    </div>
                    {pdfFile && (
                      <div className="flex items-center gap-4">
                        <p className="text-md leading-5">{pdfFile.name}</p>
                        <Button
                          onPress={() => setPdfFile(null)}
                          variant="light"
                          className="text-buttoncolor"
                        >
                          <MdDelete size={24} />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : qrType === "document1" ? (
              <div className="mb-6 w-full">
                <p className="text-start p-2 text-sm font-medium">
                  Upload Textfile
                </p>
                <div className="flex flex-col md:flex-row  justify-between gap-12 items-center border-1 border-buttonopacitycolor p-6 rounded-lg">
                  <div className="flex justify-center items-center gap-2 flex-col h-60 md:w-2/4 w-full border-1.5 border-dashed rounded-lg">
                    {textFile ? (
                      <div className="flex flex-col justify-center items-center">
                        <IoDocumentTextSharp
                          size={40}
                          className="text-buttoncolor text-3xl"
                        />

                        <p className="text-xs font-medium">
                          File name: {textFile.name}
                        </p>
                      </div>
                    ) : (
                      <Button className="md:w-60 w-40 h-14 bg-buttoncolor text-white font-medium rounded-sm">
                        <IoIosAddCircle className="text-xl" />
                        <label htmlFor="fileInputText">Upload Textfile</label>
                        <input
                          type="file"
                          id="fileInputText"
                          style={{ display: "none" }}
                          onChange={(e) => handleTextChange(e)}
                        />
                      </Button>
                    )}
                  </div>
                  <div className="md:h-60 h-24 w-2/4 flex flex-col gap-4 justify-start items-start ">
                    <p className="md:text-lg text-xs">Supported formats:</p>
                    <div className="flex justify-evenly items-center gap-4">
                      <span className="p-2 text-buttoncolor border border-buttoncolor rounded-md cursor-pointer">
                        Txt
                      </span>
                    </div>
                    {textFile && (
                      <div className="flex items-center gap-4">
                        <p className="text-md leading-5">{textFile.name}</p>
                        <Button
                          onPress={() => setTextFile(null)}
                          variant="light"
                          className="text-buttoncolor"
                        >
                          <MdDelete size={24} />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <h6 className="text-sm font-medium">
              QR Code type <span className="text-red-500">*</span>
            </h6>
            <div className="mt-4 md:w-96  ">
              <Tabs
                variant="bordered"
                fullWidth
                size="lg"
                aria-label="Tabs form"
                classNames={{
                  tabList:
                    " w-full  p-0 border-2 border-buttoncolor text-buttoncolor rounded-md",
                  cursor: "w-full bg-buttoncolor rounded-sm ",
                  tab: "  text-buttoncolor  ",
                  tabContent:
                    "group-data-[selected=true]:text-white w-full text-buttoncolor",
                }}
                selectedKey={selected}
                onSelectionChange={setSelected}
              >
                <Tab key="STATIC" title="STATIC" className="w-full"></Tab>
                <Tab key="DYNAMIC" title="DYNAMIC"></Tab>
              </Tabs>
              <p className="text-xs mt-2 flex items-center gap-1">
               
                <MdInfo className="inline-block md:text-lg text-xl text-blue-700" />
                Static provide free QR code generator{" "}
              </p>
            </div>
          </div>

          {/* Customize QR */}
          <div className="flex flex-col md:flex-row  items-start mt-4 w-full gap-8">
            <div className="flex flex-col justify-center items-start  gap-2 border-1 rounded-sm border-buttoncolor border-opacity-50 p-6 md:w-3/4 w-full overflow-hidden">
              <h6 className="text-sm font-medium">Customize your QR Code</h6>
              <div className="w-full mx-auto md:mb-8">
                <Tabs
                  aria-label="Options"
                  color="primary"
                  variant="underlined"
                  classNames={{
                    tabList:
                      "md:gap-6 w-full relative rounded-none p-0 font-medium ",
                    cursor: "w-full bg-buttoncolor font-medium",
                    tab: "w-full  h-12",
                    tabContent: "group-data-[selected=true]:text-buttoncolor ",
                  }}
                >
                  <Tab
                    key="Pattern"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>Pattern</span>
                      </div>
                    }
                  >
                    {/* dot options */}
                    <Card className="rounded-sm shadow-none">
                      <CardBody>
                        <div className="grid grid-cols-3 place-content-evenly gap-4 mt-4 place-items-start">
                          {/* Mapping through options */}
                          {[
                            { label: "square", imageSrc: Square },
                            { label: "dots", imageSrc: Dots },
                            { label: "rounded", imageSrc: Rounded },
                            { label: "extra-rounded", imageSrc: Extrarounded },
                            { label: "classy", imageSrc: Classy },
                            {
                              label: "classy-rounded",
                              imageSrc: Classyrounded,
                            },
                          ].map((option) => (
                            <div
                              key={option.label}
                              className="flex flex-col items-center gap-2 w-full"
                            >
                              {/* Button with image */}
                              <Button
                                className={`flex justify-center items-center gap-2 flex-col h-auto w-auto bg-slate-100 rounded-md p-2 cursor-pointer ${
                                  selectedOptions?.includes(option?.label)
                                    ? "bg-buttonopacitycolor ring-1 ring-buttoncolor"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleOptionSelect(option?.label)
                                }
                              >
                                <Image
                                  className="md:h-20 md:w-20"
                                  alt="optionimage"
                                  src={option?.imageSrc}
                                />
                              </Button>
                              <p className="md:text-xs text-[0.55rem] font-medium">
                                {option?.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab
                    key="Eyes"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>Eyes</span>
                      </div>
                    }
                  >
                    <Card className="rounded-sm shadow-none ">
                      <CardBody>
                        <div className="flex flex-col justify-start items-center md:items-start mt-2 gap-3">
                          {/* Square Options */}
                          <div className="flex-col justify-start items-start gap-4">
                            <span className="text-xs font-medium">
                              Square Options
                            </span>
                            <div className="grid grid-cols-3 place-content-evenly gap-12 mt-4 place-items-start">
                              {/* Mapping through square options */}
                              {[
                                { label: "square", imageSrc: Squarecorner },
                                { label: "dot", imageSrc: Dotscorner },
                                {
                                  label: "extra-rounded",
                                  imageSrc: Extraroundedcorner,
                                },
                              ].map((option) => (
                                <div
                                  key={option?.label}
                                  className="flex justify-center flex-col items-center gap-2 w-full"
                                >
                                  {/* Button with image */}
                                  <Button
                                    className={`flex justify-center items-center gap-2 h-auto w-auto flex-col bg-slate-100 rounded-md p-2 cursor-pointer ${
                                      cornersSquareOption?.includes(
                                        option?.label
                                      )
                                        ? "bg-buttonopacitycolor ring-1 ring-buttoncolor"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      handleSquareOptionSelect(option?.label)
                                    }
                                  >
                                    <Image
                                      className="md:h-20 md:w-20"
                                      alt="option image"
                                      src={option?.imageSrc}
                                    />
                                  </Button>
                                  <p className="md:text-xs text-[0.55rem] font-medium">
                                    {option?.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Dot Options */}
                          <div className="flex-col justify-start items-start gap-4">
                            <span className="text-xs font-medium">
                              Dot Options
                            </span>
                            <div className="grid grid-cols-3 place-content-evenly gap-12 mt-4 place-items-start">
                              {/* Mapping through dot options */}
                              {[
                                { label: "square", imageSrc: Squarecorner1 },
                                { label: "dot", imageSrc: Dotscorner1 },
                              ].map((option) => (
                                <div
                                  key={option?.label}
                                  className="flex justify-center flex-col items-center gap-2 w-full"
                                >
                                  {/* Button with image */}
                                  <Button
                                    className={`flex h-auto w-auto justify-center items-center gap-2 flex-col bg-slate-100 rounded-md p-2 cursor-pointer ${
                                      cornersDotOption.includes(option?.label)
                                        ? "bg-buttonopacitycolor ring-1 ring-buttoncolor"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      handleDotOptionSelect(option?.label)
                                    }
                                  >
                                    <Image
                                      className="md:h-20 md:w-20"
                                      alt="opyionimage"
                                      src={option?.imageSrc}
                                    />
                                  </Button>
                                  <p className="md:text-xs text-[0.55rem] font-medium">
                                    {option?.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab
                    key="Colors"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>Colors</span>
                      </div>
                    }
                  >
                    <Card className="rounded-sm shadow-none ">
                      <CardBody>
                        <div className="flex flex-col justify-start items-start gap-4 w-full mx-auto">
                          <div className="flex flex-col justify-between items-start w-full gap-4">
                            <h6 className="text-xs font-medium">Dot Options</h6>

                            <div className=" bg-slate-100 w-full p-1 rounded-md border-1 border-gray-300 flex items-center gap-2">
                              <ColorPicker
                                defaultValue={token?.colorPrimary}
                                format={formatHex}
                                value={dotColorHex}
                                onChange={setDotColorHex}
                                onFormatChange={setFormatHex}
                                styles={{
                                  popupOverlayInner: {
                                    width: 300,
                                  },
                                }}
                                presets={presets}
                                panelRender={customPanelRender}
                              />
                              <p className="text-sm font-medium">
                                {dotHexString}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between items-start w-full gap-4">
                            <h6 className="text-xs font-medium">Eye Options</h6>
                            <div className=" bg-slate-100 w-full p-1 rounded-md border-1 border-gray-300 flex items-center gap-2">
                              <ColorPicker
                                defaultValue={token?.colorPrimary}
                                format={formatHex}
                                value={eyeColorHex}
                                onChange={setEyeColorHex}
                                onFormatChange={setFormatHex}
                                styles={{
                                  popupOverlayInner: {
                                    width: 300,
                                  },
                                }}
                                presets={presets}
                                panelRender={customPanelRender}
                              />
                              <p className="text-sm font-medium">
                                {eyeHexString}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between items-start gap-4 w-full">
                            <h6 className="text-xs font-medium">
                              Corners Options
                            </h6>
                            <div className=" bg-slate-100 w-full p-1 rounded-md border-1 border-gray-300 flex items-center gap-2">
                              <ColorPicker
                                defaultValue={token?.colorPrimary}
                                format={formatHex}
                                value={cornersColorHex}
                                onChange={setCornersColorHex}
                                onFormatChange={setFormatHex}
                                styles={{
                                  popupOverlayInner: {
                                    width: 300,
                                  },
                                }}
                                presets={presets}
                                panelRender={customPanelRender}
                              />
                              <p className="text-sm font-medium">
                                {cornersHexString}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col justify-between items-start gap-4 w-full">
                            <h6 className="text-xs font-medium">Background</h6>
                            <div className=" bg-slate-100 w-full p-1 rounded-md border-1 border-gray-300 flex items-center gap-2">
                              <ColorPicker
                                defaultValue={token?.colorPrimary}
                                format={formatHex}
                                value={backgroundColorHex}
                                onChange={setBackgroundColorHex}
                                onFormatChange={setFormatHex}
                                styles={{
                                  popupOverlayInner: {
                                    width: 300,
                                  },
                                }}
                                presets={presets}
                                panelRender={customPanelRender}
                              />
                              <p className="text-sm font-medium">
                                {backgroundHexString}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab
                    key="Logo"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>Logo</span>
                      </div>
                    }
                  >
                    <Card className="rounded-sm shadow-none p-0">
                      <CardBody>
                        <div className="flex flex-col justify-start items-start mt-2 gap-4">
                          <div className="flex-col justify-start items-start gap-4">
                            <span className="text-sm font-bold">
                              Sample Logos
                            </span>
                            <div className="grid md:grid-cols-5 grid-cols-3 place-content-evenly	md:gap-12 gap-2 mt-4 place-items-start	">
                              <div className="flex justify-center flex-col items-center gap-2">
                                <Button className="flex justify-center items-center gap-2 h-auto w-auto flex-col bg-slate-100 rounded-md p-2  cursor-pointer">
                                  <Image
                                    className="md:h-20 md:w-20 h-8 w-8 object-contain"
                                    alt="nosample"
                                    src={Nosample}
                                  />
                                </Button>
                              </div>
                              <div className="flex justify-center flex-col items-center gap-2">
                                <Button className="flex h-auto w-auto justify-center items-center gap-2 flex-col bg-slate-100 rounded-md p-2 cursor-pointer">
                                  <Image
                                    className="md:h-20 md:w-20 h-8 w-8"
                                    alt="apple"
                                    src={Apple}
                                  />
                                </Button>
                              </div>
                              <div className="flex justify-center flex-col items-center gap-2">
                                <Button className="flex md:h-24 md:w-24  h-12 w-10 justify-center items-center gap-2 flex-col bg-slate-100 rounded-md p-2 cursor-pointer">
                                  <Image
                                    alt="sunflower"
                                    className="md:h-14 md:w-14 h-6 w-6"
                                    src={Sunflower}
                                  />
                                </Button>
                              </div>
                              <div className="flex justify-center flex-col items-center gap-2">
                                <Button className="flex h-auto w-auto justify-center items-center gap-2 flex-col bg-slate-100 rounded-md p-2 cursor-pointer">
                                  <Image
                                    className="md:h-20 md:w-20 h-8 w-8"
                                    src={Kiwi}
                                  />
                                </Button>
                              </div>
                              <div className="flex justify-center flex-col items-center gap-2">
                                <Button className="flex md:h-24 md:w-24 h-12 w-10 justify-center items-center gap-2 flex-col bg-slate-100 rounded-md p-2 cursor-pointer">
                                  <Image
                                    className="md:h-14 md:w-14 w-6 h-6"
                                    src={Heart}
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="flex-col justify-start items-start gap-4 mt-2 w-full">
                            <span className="md:text-sm text-xs font-bold flex flex-row items-center gap-4">
                              Upload Your Logo{" "}
                              <span className="flex flex-row items-center gap-1 md:text-xs text-[0.55rem] font-normal">
                                <MdInfo className="text-blue-500 inline-block" />
                                Supported formats - .png, .jpeg, .pdf
                              </span>
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
                                <Button className="md:w-60 w-full bg-buttoncolor text-white font-medium rounded-sm">
                                  <label htmlFor="fileInput">Upload</label>
                                  <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: "none" }}
                                    onChange={(e) => onChangePicture(e)}
                                  />
                                </Button>
                                <Button
                                  onPress={() => (setLogo(""), setImages(""))}
                                  variant="light"
                                  className="md:w-60 w-full ring-2 ring-buttoncolor rounded-sm text-buttoncolor font-medium"
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                </Tabs>
              </div>
            </div>

            {/* qrpreview */}
            <div className="flex flex-col justify-start items-center gap-2 md:w-2/5 w-full md:p-0 p-2">
              <div className="shadow-lg md:w-96 md:h-96 flex justify-center items-center p-2 border-1 border-gray-300 rounded-sm">
                <div ref={ref} />
              </div>
              <p className="text-xs  items-center flex gap-1">
                <span>
                  <MdInfo className="inline-block text-lg text-blue-700" />
                </span>
                This is your Preview.
              </p>

              <Select
                color=""
                placeholder="Select Type"
                variant="flat"
                radius="sm"
                size="sm"
                className="text-sm mt-2 bg-white flex justify-center rounded-md border-buttoncolor border-2 items-center  w-full  text-buttoncolor"
              >
                {Extension?.map((ext) => (
                  <SelectItem
                    key={ext.value}
                    onPress={() => setFileExt(ext.value)}
                  >
                    {ext.label}
                  </SelectItem>
                ))}
              </Select>

              {selected === "STATIC" ? (
                <Button
                  onPress={onDownloadClick}
                  variant="solid"
                  className="text-white bg-buttoncolor rounded-sm w-full"
                >
                  Download
                </Button>
              ) : (
                <Button
                  className="text-white bg-buttoncolor rounded-sm w-full"
                  onClick={GenerateDyamicqr}
                >
                  {loading ? <Image src={Dotloader} /> : "GENERATE QR"}
                </Button>
              )}
            </div>
          </div>

          {/* quick share */}

          <div className=" flex md:flex-row flex-col justify-between gap-4 md:items-center items-start p-4 rounded-sm w-full border-1 border-buttoncolor border-opacity-50 mt-4 ">
            <div className="flex flex-col gap-2 justify-start items-start">
              <div>
                <p className="text-xs font-bold">Quick Share</p>
              </div>
              <div className="flex justify-start items-center gap-2 ">
                <Image
                  alt="linkdin"
                  className="h-8 w-8 cursor-pointer"
                  src={Linkdin}
                />
                <Image
                  alt="pintrest"
                  className="h-8 w-8 cursor-pointer"
                  src={Pintrest}
                />
                <Image
                  alt="insta"
                  className="h-8 w-8 cursor-pointer"
                  src={Insta}
                />
                <Image
                  alt="music"
                  className="h-8 w-8 cursor-pointer"
                  src={Music}
                />
                <Image
                  alt="youtube"
                  className="h-8 w-8 cursor-pointer"
                  src={Youtube}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start md:w-2/4 w-full">
              <p className="text-xs font-bold">Copy Short URL</p>
              <div className="w-full h-10 border-1.5 rounded-md border-gray-300 flex justify-between gap-2 items-center px-4">
                <p className="truncate w-full text-gray-400 text-sm">
                  {shortUrl}
                </p>
                <Tooltip
                  isOpen={isOpentooltip}
                  content="Link copied!"
                  placement="top"
                >
                  <Button
                    variant="light"
                    className="text-buttoncolor font-medium uppercase rounded-none"
                    onClick={handleCopyLink}
                  >
                    Copy Link
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        hideCloseButton={true}
        isDismissable={false}
        backdrop="blur"
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          <>
            <ModalBody className="w-full">
              <span
                onClick={() => {
                  onOpenChange(false), setSelected("STATIC");
                }}
                className="absolute right-2 top-2 cursor-pointer"
              >
                <IoMdCloseCircle className="text-2xl text-buttoncolor" />
              </span>
              <div className="flex md:flex-row flex-col-reverse justify-between items-center w-full p-2 h-auto">
                <div className="flex flex-col justify-start items-start md:gap-2 gap-1 md:w-2/4 w-full">
                  <h6 className="text-lg md:text-xl font-semibold leading-7">
                    What are the benefits of a dynamic QR code?
                  </h6>
                  <p className="text-xs md:text-base">
                    A dynamic QR code lets you edit data such as your URL or
                    vCard any time. This saves you time and money on printing.
                  </p>
                  <p className="text-xs md:text-base">
                    Track valuable data such as:
                  </p>
                  <li className="text-xs md:text-base">Number of scans</li>
                  <li className="text-xs md:text-base">Time of scan</li>
                  <li className="text-xs md:text-base">Location</li>
                  <li className="text-xs md:text-base">
                    Device type (Android/iPhone)
                  </li>
                  <Button
                    onPress={() => router.push("/Pricing")}
                    variant="solid"
                    className="mt-4 bg-buttoncolor text-white rounded-sm hover:bg-buttoncolor hover:text-white"
                  >
                    Checkout Plans
                  </Button>
                </div>
                <div className="md:w-2/4 w-full">
                  <Image src={Generate} />
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});
