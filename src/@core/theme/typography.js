import fonts from "./fonts";

const Typography = (theme) => {
  return {
    h1: {
      fontWeight: 700,
      fontSize: "40pt",
      letterSpacing: "-1.5px",
      color: theme.palette.text.primary,
    },
    h2: {
      fontWeight: 500,
      fontSize: "36pt",
      letterSpacing: "-0.5px",
      color: theme.palette.text.primary,
    },
    h3: {
      fontWeight: 500,
      fontSize: "32pt",
      letterSpacing: 0,
      color: theme.palette.text.primary,
    },
    h4: {
      fontWeight: 500,
      fontSize: "28pt",
      letterSpacing: "0.25px",
      color: theme.palette.text.primary,
    },
    h5: {
      fontWeight: 500,
      fontSize: "24pt",
      letterSpacing: 0,
      color: theme.palette.text.primary,
    },
    h6: {
      letterSpacing: "0.15px",
      fontSize: "20pt",
      color: theme.palette.text.primary,
    },
    subtitle1: {
      letterSpacing: "0.15px",
      fontSize: "10pt",
      color: theme.palette.text.primary,
      fontFamily: fonts.subtitle.style.fontFamily,
    },
    subtitle2: {
      letterSpacing: "0.1px",
      fontSize: "12pt",
      color: theme.palette.text.secondary,
      fontFamily: fonts.subtitle.style.fontFamily,
    },
    body1: {
      letterSpacing: "0.15px",
      fontSize: "14pt",
      color: theme.palette.text.primary,
      fontFamily: fonts.body.style.fontFamily,
    },
    body2: {
      letterSpacing: "0.15px",
      fontSize: "14pt",
      color: theme.palette.text.secondary,
      fontWeight: 800,
      fontFamily: fonts.body.style.fontFamily,
    },
    button: {
      letterSpacing: "0.3px",
      fontSize: "14pt",
      color: theme.palette.text.primary,
      fontFamily: fonts.header.style.fontFamily,
    },
    caption: {
      letterSpacing: "0.4px",
      fontSize: "12pt",
      color: theme.palette.text.secondary,
      fontFamily: fonts.body.style.fontFamily,
    },
    overline: {
      letterSpacing: "1px",
      fontSize: "10pt",
      color: theme.palette.text.secondary,
      fontFamily: fonts.body.style.fontFamily,
    },
  };
};

export default Typography;
