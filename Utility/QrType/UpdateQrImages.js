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

export const UpdateProfileQrImages = (
  type,
  Id,
  backgroundHexString,
  dotHexString,
  selectedOptions,
  cornersHexString,
  cornersDotOption,
  eyeHexString,
  cornersSquareOption,
  setLoading,
  toast,
  profie,
  close,
  logo
) => {
  switch (type) {
    case "Website": {
      UpdateWebsiteQrImage({
        UniqueId: Id,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: eyeHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: cornersHexString,
          type: cornersDotOption,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          profie();
          setLoading(false);
          toast({
            variant: "",
            title: "Updated Qr Successfully",
            description: "",
          });
          close()
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "Update Failed",
            description: res.message,
          });
        }
      });
      break;
    }
    case "PlayStore": {
      UpdatePlayStoreQrImages({
        UniqueId: Id,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: eyeHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: cornersHexString,
          type: cornersDotOption,
        },
        image: logo
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          profie();
          setLoading(false);
          toast({
            variant: "",
            title: "Updated Qr Successfully",
            description: "",
          });
          close()
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "Update Failed",
            description: res.message,
          });
        }
      });
      break;
    }
    case "Audio": {
      UpdateAudioQrImages({
        UniqueId: Id,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: eyeHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: cornersHexString,
          type: cornersDotOption,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          profie();
          setLoading(false);
          toast({
            variant: "",
            title: "Updated Qr Successfully",
            description: "",
          });
          close()
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "Update Failed",
            description: res.message,
          });
        }
      });
      break;
    }
    case "Video": {
      UpdateVideoQrImages({
        UniqueId: Id,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: eyeHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: cornersHexString,
          type: cornersDotOption,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          profie();
          setLoading(false);
          toast({
            variant: "",
            title: "Updated Qr Successfully",
            description: "",
          });
          close()
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "Update Failed",
            description: res.message,
          });
        }
      });
      break;
    }
    case "Image": {
      UpdateImageQrImages({
        UniqueId: Id,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: eyeHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: cornersHexString,
          type: cornersDotOption,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          profie();
          setLoading(false);
          toast({
            variant: "",
            title: "Updated Qr Successfully",
            description: "",
          });
          close()
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "Update Failed",
            description: res.message,
          });
        }
      });
      break;
    }
    case "Pdf": {
      UpdateDocumentQrImages({
        UniqueId: Id,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: eyeHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: cornersHexString,
          type: cornersDotOption,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          profie();
          setLoading(false);
          toast({
            variant: "",
            title: "Updated Qr Successfully",
            description: "",
          });
          close()
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "Update Failed",
            description: res.message,
          });
        }
      });
      break;
    }
    case "GoogleMap": {
      UpdateMapQrImages({
        UniqueId: Id,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: eyeHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: cornersHexString,
          type: cornersDotOption,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          profie();
          setLoading(false);
          toast({
            variant: "",
            title: "Updated Qr Successfully",
            description: "",
          });
          close()
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "Update Failed",
            description: res.message,
          });
        }
      });
      break;
    }
    case "Social": {
      UpdateSocialQrImages({
        UniqueId: Id,
        dotoption: {
          color: dotHexString,
          type: selectedOptions,
        },
        backgroundOption: {
          type: backgroundHexString,
        },
        cornersOptions: {
          color: eyeHexString,
          type: cornersSquareOption,
        },
        cornersDotOptions: {
          color: cornersHexString,
          type: cornersDotOption,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          profie();
          setLoading(false);
          toast({
            variant: "",
            title: "Updated Qr Successfully",
            description: "",
          });
          close()
        } else {
          setLoading(false);
          toast({
            variant: "",
            title: "Update Failed",
            description: res.message,
          });
        }
      });
      break;
    }
  }
};
