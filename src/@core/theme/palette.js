const DefaultPalette = (mode) => {
  const lightColor = "58, 53, 65";
  const darkColor = "255, 255, 255";
  const mainColor = mode === "light" ? lightColor : darkColor;

  return {
    customColors: {
      main: `rgba(${mainColor}, 1)`,
      primaryGradient: "#012160",
      tableHeaderBg: mode === "light" ? "#F9FAFC" : "#3D3759",
    },
    common: {
      black: "#000",
      white: "#FFF",
    },
    mode,
    secondary: {
      light: "#402AA1", //
      main: "#402AA1", //
      dark: "#402AA1", //
      contrastText: "#fff",
    },
    primary: {
      light: "#402AA1", //
      main: "#402AA1", //
      dark: "#402AA1", //
      contrastText: "#fff",
    },
    info: {
      light: "#ff8811", //
      main: "#ff8811", //
      dark: "#ff8811", //
      contrastText: "#000",
    },
    success: {
      light: "#ff8811", //
      main: "#ff8811", // Darmouth Green
      dark: "#ff8811", //
      contrastText: "#000",
    },
    attention: {
      light: "#ff8811", //
      main: "#ff8811", // Canary
      dark: "#ff8811", //
      contrastText: "#000",
    },
    warning: {
      light: "#ff8811", //
      main: "#ff8811", // Fulvous
      dark: "#ff8811", //
      contrastText: "#000",
    },
    error: {
      light: "#ff8811", // Chili Red
      main: "#ff8811", // Rufous
      dark: "#ff8811", // Barn Red
      contrastText: "#000",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      250: "#E8E8E8",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#D5D5D5",
      A200: "#AAAAAA",
      A400: "#616161",
      A700: "#303030",
      light: "#D5D5D5",
      main: "#AAAAAA",
      dark: "#616161",
      contrastText: "#000",
    },
    bright: {
      light: "#FFFFFF",
      main: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#000",
    },
    text: {
      primary: `rgba(${mainColor}, 0.93)`,
      secondary: `rgba(${mainColor}, 0.74)`,
      disabled: `rgba(${mainColor}, 0.57)`,
      lightPrimary: `rgba(${lightColor}, 0.93)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === "light" ? "#ffffff" : "#232323",
      default: mode === "light" ? "#f1f2f6" : "#070707",
      light: {
        paper: "#FFEDDB",
        default: "#E8D8C8",
      },
      dark: {
        paper: "#001219",
        default: "#000405",
      },
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.30)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
  };
};

export default DefaultPalette;

// export type PaletteProps = 'light' | 'dark'

// const DefaultPalette = (mode: PaletteProps) => {
//   const lightColor = '58, 53, 65'
//   const darkColor = '255, 255, 255'
//   const mainColor = mode === 'light' ? lightColor : darkColor

//   return {
//     customColors: {
//       main: `rgba(${mainColor}, 1)`,
//       primaryGradient: '#012160',
//       tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759'
//     },
//     common: {
//       black: '#000',
//       white: '#FFF'
//     },
//     mode,
//     primary: {
//       light: '#0085A1', // Blue (Munsell)
//       main: '#005F73', // Midnight Green
//       dark: '#004A59', // Gunmetal
//       contrastText: '#FFF'
//     },
//     secondary: {
//       light: '#0ECACF', // Robin Egg Blue
//       main: '#0A9396', // Dark Cyan
//       dark: '#09787A', // Teal
//       contrastText: '#000'
//     },
//     info: {
//       light: '#ADF7DF', // Aquamarine
//       main: '#94D2BD', // Tiffany Blue
//       dark: '#669183', // Viridian
//       contrastText: '#000'
//     },
//     success: {
//       light: '#748244', // Reseda Green
//       main: '#606C38', // Dark Moss Green
//       dark: '#3B4222', // Drab Dark Brown
//       contrastText: '#FFF'
//     },
//     attention: {
//       light: '#FFA600', // Orange (web)
//       main: '#EE9B00', // Gamboge
//       dark: '#C98300', // Harvest Gold
//       contrastText: '#000'
//     },
//     warning: {
//       light: '#FA7F02', // Orange Wheel
//       main: '#CA6702', // Alloy Orange
//       dark: '#B05A02', // Burnt Orange
//       contrastText: '#FFF'
//     },
//     error: {
//       light: '#D92716', // Chili Red
//       main: '#AE2012', // Rufous
//       dark: '#82170D', // Barn Red
//       contrastText: '#FFF'
//     },
//     grey: {
//       50: '#FAFAFA',
//       100: '#F5F5F5',
//       200: '#EEEEEE',
//       250: '#E8E8E8',
//       300: '#E0E0E0',
//       400: '#BDBDBD',
//       500: '#9E9E9E',
//       600: '#757575',
//       700: '#616161',
//       800: '#424242',
//       900: '#212121',
//       A100: '#D5D5D5',
//       A200: '#AAAAAA',
//       A400: '#616161',
//       A700: '#303030',
//       light: '#D5D5D5',
//       main: '#AAAAAA',
//       dark: '#616161',
//       contrastText: '#000'
//     },
//     bright: {
//       lgiht: '#FFFFFF',
//       main: '#FFFFFF',
//       dark: '#FFFFFF',
//       contrastText: '#000'
//     },
//     text: {
//       primary: `rgba(${mainColor}, 0.93)`,
//       secondary: `rgba(${mainColor}, 0.74)`,
//       disabled: `rgba(${mainColor}, 0.57)`,
//       lightPrimary: `rgba(${lightColor}, 0.93)`
//     },
//     divider: `rgba(${mainColor}, 0.12)`,
//     background: {
//       paper: mode === 'light' ? '#FFEDDB' : '#001219',
//       default: mode === 'light' ? '#E8D8C8' : '#000405'
//     },
//     action: {
//       active: `rgba(${mainColor}, 0.54)`,
//       hover: `rgba(${mainColor}, 0.04)`,
//       selected: `rgba(${mainColor}, 0.08)`,
//       disabled: `rgba(${mainColor}, 0.30)`,
//       disabledBackground: `rgba(${mainColor}, 0.18)`,
//       focus: `rgba(${mainColor}, 0.12)`
//     }
//   }
// }

// export default DefaultPalette
