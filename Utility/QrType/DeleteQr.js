import {
  DeleteAudioQr,
  DeleteImageQr,
  DeleteMapQr,
  DeletePlayStoreQr,
  DeleteSocialQr,
  DeleteVideoQr,
  DeleteWebsiteQr,
  DeletedocumentQr,
} from "../Api/QR";

export const DeleteProfileQr = (id, type, Profile, ChangeLoad) => {
  console.log(id);
  switch (type) {
    case "Website": {
      DeleteWebsiteQr(id).then((res) => {
        console.log(res);
        if (res.message === "Success") {
          ChangeLoad();
          alert("qr Deleted Success");
          Profile();
        } else {
          ChangeLoad();
          alert(res);
        }
      });
      break;
    }
    case "PlayStore": {
      console.log("alok");
      DeletePlayStoreQr(id).then((res) => {
        console.log(res);
        if (res.message === "Success") {
          ChangeLoad();
          alert("qr Deleted Success");
          Profile();
        } else {
          ChangeLoad();
          alert(res);
        }
      });
      break;
    }
    case "Audio": {
      DeleteAudioQr(id).then((res) => {
        if (res.message === "Success") {
          ChangeLoad();
          alert("qr Deleted Success");
          Profile();
        } else {
          ChangeLoad();
          alert(res);
        }
      });
      break;
    }
    case "Video": {
      DeleteVideoQr(id).then((res) => {
        if (res.message === "Success") {
          ChangeLoad();
          alert("qr Deleted Success");
          Profile();
        } else {
          ChangeLoad();
          alert(res);
        }
      });
      break;
    }
    case "Images": {
      DeleteImageQr(id).then((res) => {
        if (res.message === "Success") {
          ChangeLoad();
          alert("qr Deleted Success");
          Profile();
        } else {
          ChangeLoad();
          alert(res);
        }
      });
      break;
    }
    case "Documents": {
      DeletedocumentQr(id).then((res) => {
        if (res.message === "Success") {
          ChangeLoad();
          alert("qr Deleted Success");
          Profile();
        } else {
          ChangeLoad();
          alert(res);
        }
      });
      break;
    }
    case "GoogleMap": {
      DeleteMapQr(id).then((res) => {
        if (res.message === "Success") {
          ChangeLoad();
          alert("qr deleted Success");
          Profile();
        } else {
          ChangeLoad();
          alert(res);
        }
      });
      break;
    }
    case "Social": {
      DeleteSocialQr(id).then((res) => {
        if (res.message === "Success") {
          ChangeLoad();
          alert("qr Deleted Success");
          Profile();
        } else {
          ChangeLoad();
          alert(res);
        }
      });
      break;
    }
  }
};
