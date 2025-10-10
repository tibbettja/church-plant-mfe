import {
  Alumni_Sans_Pinstripe,
  Sulphur_Point,
  Cactus_Classical_Serif,
} from "next/font/google";

const logo = Alumni_Sans_Pinstripe({
  weight: "400",
  subsets: ["latin"],
  display: "auto",
  style: ["normal"],
  variable: "--font-logo",
});

const header = Sulphur_Point({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "auto",
  style: "normal",
  variable: "--font-header",
});

const subtitle = Cactus_Classical_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "auto",
  style: "normal",
  variable: "--font-subtitle",
});

const fonts = {
  logo,
  header,
  body: header,
  subtitle,
};

export default fonts;
