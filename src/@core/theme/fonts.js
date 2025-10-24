import {
  Alumni_Sans_Pinstripe,
  Cactus_Classical_Serif,
  Righteous,
  Ubuntu
} from "next/font/google";

const logo = Alumni_Sans_Pinstripe({
  weight: "400",
  subsets: ["latin"],
  display: "auto",
  style: ["normal"],
  variable: "--font-logo",
});

const header = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: "auto",
  style: ['normal'],
  variable: "--font-header"
})

const body = Ubuntu({
  weight: ["300","400","500","700"],
  subsets: ["latin"],
  display: "auto",
  style: ["normal","italic"],
  variable: "--font-body",
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
  body,
  subtitle,
};

export default fonts;
