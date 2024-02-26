import {
  UpdateAudioQr,
  UpdateDocumentQr,
  UpdateImageQr,
  UpdateMapQr,
  UpdatePlayStoreQr,
  UpdateSocialQr,
  UpdateVideoQr,
  UpdateWebsiteQr,
} from "../../Api/QR";

export const UpdateProfileQr = (
  Url,
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
      UpdateWebsiteQr({
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
    case "PlayStore": {
      UpdatePlayStoreQr({
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
      UpdateAudioQr({
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
      UpdateVideoQr({
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
      UpdateImageQr({
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
      UpdateDocumentQr({
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
      UpdateMapQr({
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
      UpdateSocialQr({
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
