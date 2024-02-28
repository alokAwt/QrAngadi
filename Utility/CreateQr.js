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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  lat,
  lon,
  Url,
  logo
) => {
  console.log(
    qrName,
    qrType,
    backgroundHexString,
    dotHexString,
    selectedOptions,
    cornersHexString,
    cornersDotOption,
    eyeHexString,
    cornersSquareOption,
    lat,
    lon,
    Url,
    logo
  );
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
          // ChangeLoad();  //---------Lodaer off
          //-----------navigate profile
          alert("qr Created Success");  //---------Toast message
         
        } else {
          // ChangeLoad();  // lodaer off
          // alert(res.message); // toast
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
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          // ChangeLoad();
          alert(res.message);
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
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          // ChangeLoad();
          alert(res.message);
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
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          // ChangeLoad();
          alert(res.message);
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
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          // ChangeLoad();
          alert(res.message);
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
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          // ChangeLoad();
          alert(res.message);
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
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          // ChangeLoad();
          alert(res.message);
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
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          // ChangeLoad();
          alert(res.message);
        }
      });
      break;
    }
  }
};
