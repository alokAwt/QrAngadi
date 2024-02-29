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

// const [loading,setLoading]=useState(false)


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
  setLoading ,
  lat,
  lon,
  Url,
  logo
) => {

  if(qrType){

    setLoading(true)
  }
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
          setLoading(false)
          // ChangeLoad();  //---------Lodaer off call here 
          //-----------navigate profile
          alert("qr Created Success");  //---------Toast message
         
        } else {
          setLoading(false)
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
          setLoading(false)
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          setLoading(false)
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
          setLoading(false)
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          setLoading(false)
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
          setLoading(false)
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          setLoading(false)
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
          setLoading(false)
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          setLoading(false)
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
          setLoading(false)
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          setLoading(false)
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
          setLoading(false)
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          setLoading(false)
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
          setLoading(false)
          // ChangeLoad();
          // navigate("/profile");
          alert("qr Created Success");
        } else {
          setLoading(false)
          // ChangeLoad();
          alert(res.message);
        }
      });
      break;
    }
  }
};
