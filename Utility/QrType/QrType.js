import Web from "../../public/QRgenerate/Web.png";
import Videos from "../../public/QRgenerate/Videos.png";
import Media from "../../public/QRgenerate/Media.png";
import Share from "../../public/QRgenerate/Share.png";
import Textfile from "../../public/QRgenerate/Textfile.png";
import Mic from "../../public/QRgenerate/Mic.png";
import Location from "../../public/QRgenerate/Location.png";
import Pdf from "../../public/QRgenerate/Pdf.png";

export const QrType = [
  {
    name: "WebsiteUrl",
    type: "Website",
    Image: Web,
  },
  {
    name: "Location",
    type: "Map",
    Image: Location,
  },
  {
    name: "Playstore",
    type: "playstore",
    Image: Web,
  },
  {
    name: "Images",
    type: "Image",
    Image: Media,
  },
  {
    name: "Videos",
    type: "Video",
    Image: Videos,
  },
  {
    name: "Audio Files",
    type: "Audio",
    Image: Mic,
  },
  {
    name: "Social Accounts",
    type: "Social",
    Image: Share,
  },
  {
    name: "PDF Files",
    type: "document",
    Image: Pdf,
  },
  {
    name: "Text Files",
    type: "document1",
    Image: Textfile,
  },
];
