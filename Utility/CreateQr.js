import {
  CreateAudioQr,
  CreateDocumentQr,
  CreateImageQr,
  CreateMapQr,
  CreatePlayStoreQr,
  CreateSocialQr,
  CreateVideoQr,
  CreateWebsiteQr,
} from "../Api/QR";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateQr = (
  type,
  dotColor,
  dottype,
  cornersDotColor,
  cornersColor,
  cornerdottype,
  cornertype,
  logo,
  Url,
  navigate,
  ChangeLoad,
  lat,
  lon
) => {
  switch (type) {
    case "Website": {
      console.log("alok");
      CreateWebsiteQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          ChangeLoad();
          alert("qr Created Success");
          navigate("/profile");
        } else {
          ChangeLoad();
          alert(res.message);
        }
      });
      break;
    }
    case "playstore": {
      console.log("loading");
      CreatePlayStoreQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          ChangeLoad();
          navigate("/profile");
          alert("qr Created Success");
        } else {
          ChangeLoad();
          alert(res.message);
        }
      });
      break;
    }
    case "Audio": {
      CreateAudioQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          ChangeLoad();
          navigate("/profile");
          alert("qr Created Success");
        } else {
          ChangeLoad();
          alert(res.message);
        }
      });
      break;
    }
    case "Video": {
      CreateVideoQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          ChangeLoad();
          navigate("/profile");
          alert("qr Created Success");
        } else {
          ChangeLoad();
          alert(res.message);
        }
      });
      break;
    }
    case "Image": {
      CreateImageQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          ChangeLoad();
          navigate("/profile");
          alert("qr Created Success");
        } else {
          ChangeLoad();
          alert(res.message);
        }
      });
      break;
    }
    case "Pdf": {
      CreateDocumentQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          ChangeLoad();
          navigate("/profile");
          alert("qr Created Success");
        } else {
          ChangeLoad();
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
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          ChangeLoad();
          navigate("/profile");
          alert("qr Created Success");
        } else {
          ChangeLoad();
          alert(res.message);
        }
      });
      break;
    }
    case "Social": {
      CreateSocialQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          ChangeLoad();
          navigate("/profile");
          alert("qr Created Success");
        } else {
          ChangeLoad();
          alert(res.message);
        }
      });
      break;
    }
  }
};
