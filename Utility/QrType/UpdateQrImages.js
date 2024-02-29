import {
  UpdateAudioQrImages,
  UpdateDocumentQrImages,
  UpdateImageQrImages,
  UpdateMapQrImages,
  UpdatePlayStoreQrImages,
  UpdateSocialQrImages,
  UpdateVideoQrImages,
  UpdateWebsiteQrImage,
} from "../Api/QR";

export const UpdateProfileQr = (
  Id,
  type,
  ChangeLoad,
  Profile,
  closeModal,
  lat,
  lon
) => {
  switch (type) {
    case "Website": {
      UpdateWebsiteQrImage({
        UniqueId: Id,
        dotoption: {
          color: "#4267b2",
          type: "dots",
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: "blue",
          type: "",
        },
        cornersDotOptions: {
          color: "",
          type: "",
        },
      }).then((res) => {
        console.log(res);
        if (res.message === "success") {
          ChangeLoad();
          closeModal();
          alert("Qr Updated Success");
          Profile();
        } else {
          ChangeLoad();
          closeModal();
          alert(res);
        }
      });
      break;
    }
    case "PlayStore": {
      UpdatePlayStoreQrImages({
        Url: Url,
        UniqueId: Id,
      }).then((res) => {
        console.log(res);
        if (res.message === "success") {
          ChangeLoad();
          closeModal();
          alert("Qr Updated Success");
          Profile();
        } else {
          ChangeLoad();
          closeModal();
          alert(res);
        }
      });
      break;
    }
    case "Audio": {
      UpdateAudioQrImages({
        Url: Url,
        UniqueId: Id,
      }).then((res) => {
        if (res.message === "success") {
          ChangeLoad();
          closeModal();
          alert("Qr Updated Success");
          Profile();
        } else {
          ChangeLoad();
          closeModal();
          alert(res);
        }
      });
      break;
    }
    case "Video": {
      UpdateVideoQrImages({
        Url: Url,
        UniqueId: Id,
      }).then((res) => {
        if (res.message === "success") {
          ChangeLoad();
          closeModal();
          alert("Qr Updated Success");
          Profile();
        } else {
          ChangeLoad();
          closeModal();
          alert(res);
        }
      });
      break;
    }
    case "Image": {
      UpdateImageQrImages({
        Url: Url,
        UniqueId: Id,
      }).then((res) => {
        if (res.message === "success") {
          ChangeLoad();
          closeModal();
          alert("Qr Updated Success");
          Profile();
        } else {
          ChangeLoad();
          closeModal();
          alert(res);
        }
      });
      break;
    }
    case "Pdf": {
      UpdateDocumentQrImages({
        Url: Url,
        UniqueId: Id,
      }).then((res) => {
        if (res.message === "success") {
          ChangeLoad();
          closeModal();
          alert("Qr Updated Success");
          Profile();
        } else {
          ChangeLoad();
          closeModal();
          alert(res);
        }
      });
      break;
    }
    case "GoogleMap": {
      UpdateMapQrImages({
        lat: lat,
        lon: lon,
        UniqueId: Id,
      }).then((res) => {
        if (res.message === "success") {
          ChangeLoad();
          closeModal();
          alert("Qr Updated Success");
          Profile();
        } else {
          ChangeLoad();
          closeModal();
          alert(res);
        }
      });
      break;
    }
    case "Social": {
      UpdateSocialQrImages({
        Url: Url,
        UniqueId: Id,
      }).then((res) => {
        if (res.message === "success") {
          ChangeLoad();
          closeModal();
          alert("Qr Updated Success");
          Profile();
        } else {
          ChangeLoad();
          closeModal();
          alert(res);
        }
      });
      break;
    }
  }
};
