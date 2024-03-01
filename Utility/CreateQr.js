import {
  CreateAudioQr,
  CreateDocumentQr,
  CreateImageQr,
  CreateMapQr,
  CreatePlayStoreQr,
  CreateSocialQr,
  CreateVideoQr,
  CreateWebsiteQr,
} from "./Api/QR";
import { ToastAction } from "@/components/ui/toast";

export const CreateQr = (
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
  logo
) => {
  if (qrType) {
    setLoading(true);
  }
  switch (qrType) {
    case "Website": {
      CreateWebsiteQr({
        Url: Url,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: cornersHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: eyeHexString,
          type: cornersDotOption,
        },
        image: logo,
        QrName: qrName,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          setLoading(false);
          toast({
            variant: "",
            title: "QR Created successfully",
            description: "",
          });
          ChangeScreen();
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "failed to Create Qr",
            description: res.message,
          });
        }
      });
      break;
    }
    case "playstore": {
      CreatePlayStoreQr({
        Url: Url,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: cornersHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: eyeHexString,
          type: cornersDotOption,
        },
        image: logo,
        QrName: qrName,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          setLoading(false);
          toast({
            variant: "",
            title: "QR Created successfully",
            description: "",
          });
          ChangeScreen();
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "failed to Create Qr",
            description: res.message,
          });
        }
      });
      break;
    }
    case "Audio": {
      CreateAudioQr({
        Url: Url,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: cornersHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: eyeHexString,
          type: cornersDotOption,
        },
        image: logo,
        QrName: qrName,
      }).then((res) => {
        if (res.status === "success") {
          setLoading(false);
          toast({
            variant: "",
            title: "QR Created successfully",
            description: "",
          });
          ChangeScreen();
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "failed to Create Qr",
            description: res.message,
          });
        }
      });
      break;
    }
    case "Video": {
      CreateVideoQr({
        Url: Url,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: cornersHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: eyeHexString,
          type: cornersDotOption,
        },
        image: logo,
        QrName: qrName,
      }).then((res) => {
        if (res.status === "success") {
          setLoading(false);
          toast({
            variant: "",
            title: "QR Created successfully",
            description: "",
          });
          ChangeScreen();
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "failed to Create Qr",
            description: res.message,
          });
        }
      });
      break;
    }
    case "Image": {
      CreateImageQr({
        Url: Url,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: cornersHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: eyeHexString,
          type: cornersDotOption,
        },
        image: logo,
        QrName: qrName,
      }).then((res) => {
        if (res.status === "success") {
          setLoading(false);
          toast({
            variant: "",
            title: "QR Created successfully",
            description: "",
          });
          ChangeScreen();
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "failed to Create Qr",
            description: res.message,
          });
        }
      });
      break;
    }
    case "document": {
      CreateDocumentQr({
        Url: Url,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: cornersHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: eyeHexString,
          type: cornersDotOption,
        },
        image: logo,
        QrName: qrName,
      }).then((res) => {
        if (res.status === "success") {
          setLoading(false);
          toast({
            variant: "",
            title: "QR Created successfully",
            description: "",
          });
          ChangeScreen();
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "failed to Create Qr",
            description: res.message,
          });
        }
      });
      break;
    }
    case "document1": {
      CreateDocumentQr({
        Url: Url,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: cornersHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: eyeHexString,
          type: cornersDotOption,
        },
        image: logo,
        QrName: qrName,
      }).then((res) => {
        if (res.status === "success") {
          setLoading(false);
          toast({
            variant: "",
            title: "QR Created successfully",
            description: "",
          });
          ChangeScreen();
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "failed to Create Qr",
            description: res.message,
          });
        }
      });
      break;
    }
    case "Map": {
      CreateMapQr({
        Url: Url,
        lat: lat,
        lon: lon,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: cornersHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: eyeHexString,
          type: cornersDotOption,
        },
        image: logo,
        QrName: qrName,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          setLoading(false);
          toast({
            variant: "",
            title: "QR Created successfully",
            description: "",
          });
          ChangeScreen();
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "failed to Create Qr",
            description: res.message,
          });
        }
      });
      break;
    }
    case "Social": {
      CreateSocialQr({
        Url: Url,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: cornersHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: eyeHexString,
          type: cornersDotOption,
        },
        image: logo,
        QrName: qrName,
      }).then((res) => {
        if (res.status === "success") {
          setLoading(false);
          toast({
            variant: "",
            title: "QR Created successfully",
            description: "",
          });
          ChangeScreen();
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "failed to Create Qr",
            description: res.message,
          });
        }
      });
      break;
    }
  }
};
