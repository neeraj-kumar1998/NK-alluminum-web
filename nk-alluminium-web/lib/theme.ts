import React from "react"
import { createTheme } from "@mui/material"
import DesktopPxToVw from "../utils/DesktopFontCalc"

const primaryColor = "#45443F"
const shape = { borderRadius: 4 }
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1200,
  xl: 1536,
}
const primaryFontFamily = "Cinzel"
const secondaryFontFamily = "Inter"

const webSafeSecondaryCss = {
  fontFamily: `${secondaryFontFamily}, sans-serif`,
}
const webSafePrimaryCss = {
  fontFamily: `${primaryFontFamily}, Palatino Linotype, sans-serif`,
  textTransform: "uppercase",
}

const typography = {
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  caption: undefined,
  overline: undefined,
  subtitle1: undefined,
  subtitle2: undefined,

  "gradient-l": {
    fontWeight: 800,
    fontSize: "1.146vw",
    fontFamily: secondaryFontFamily,
    width: "fit-content",
    background: "linear-gradient(89deg, #FFA100 11.51%, #F7470F 52.88%, #EE1162 92.44%)",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  "b-10": {
    fontSize: "0.521vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "1.563vw",
    },
  },
  "b-12": {
    fontSize: "0.625vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "1.875vw",
    },
  },
  "b-14": {
    fontSize: "0.729vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "2.188vw",
    },
  },
  "b-16": {
    fontSize: "0.833vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "2.5vw",
    },
  },
  "b-18": {
    fontSize: "0.938vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "2.688vw",
    },
  },
  "b-20": {
    fontSize: "1.042vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "2.875vw",
    },
  },
  "b-22": {
    fontSize: "1.146vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "3.063vw",
    },
  },
  "b-24": {
    fontSize: "1.25vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "3.25vw",
    },
  },
  "b-26": {
    fontSize: "1.354vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "3.438vw",
    },
  },
  "b-28": {
    fontSize: "1.458vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "3.625vw",
    },
  },
  "b-30": {
    fontSize: "1.563vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "3.813vw",
    },
  },
  "b-40": {
    fontSize: "2.0833vw",
    fontFamily: secondaryFontFamily,
    color: primaryColor,
    "@media(max-width:640px)": {
      fontSize: "6.25vw",
    },
  },
  "h-32": {
    lineHeight: "100%",
    fontStyle: "normal",
    fontSize: "1.66vw",
    textTransform: "lowercase",
    fontFamily: primaryFontFamily,
    "@media(max-width:640px)": {
      fontSize: "5vw",
    },
  },
  "h-36": {
    lineHeight: "100%",
    fontStyle: "normal",
    fontSize: "1.875vw",
    fontFamily: primaryFontFamily,
    "@media(max-width:640px)": {
      fontSize: "5.625vw",
    },
  },
  "h-40": {
    lineHeight: "100%",
    fontStyle: "normal",
    fontSize: "2.083vw",
    textTransform: "lowercase",
    fontFamily: primaryFontFamily,
    "@media(max-width:640px)": {
      fontSize: "4vw",
    },
  },
  "h-60": {
    lineHeight: "100%",
    fontStyle: "normal",
    fontSize: "3.125vw",
    textTransform: "lowercase",
    fontFamily: primaryFontFamily,
    "@media(max-width:640px)": {
      fontSize: "5vw",
    },
  },
  "h-80": {
    lineHeight: "100%",
    fontStyle: "normal",
    fontSize: "4.167vw",
    textTransform: "lowercase",
    fontFamily: primaryFontFamily,
    "@media(max-width:640px)": {
      fontSize: "6vw",
    },
  },
  "h-135": {
    lineHeight: "100%",
    fontStyle: "normal",
    fontSize: "7.031vw",
    textTransform: "lowercase",
    fontFamily: primaryFontFamily,
    "@media(max-width:640px)": {
      fontSize: "9vw",
    },
  },
}



export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: "#E1E1E1",
    },
    text: {
      primary: primaryColor,
    },
    neuPalette: {
      hexOne: "#FFFFFF",
      hexTwo: "#122932",
      hexThree: "#13130F",
      hexFour: "#292723",
      hexFive: "#13130F",
      hexSix: "#ececec",
      hexSeven: "#D9D9D9",
      hexEight: "#1E1E1E",
      hexNine: "#D9D9D9",
      hexTen: "#FF0000",
      hexEleven: "#000000",
      hexTwelve: "#8B8A84",
      hexThirteen: "#E3DBCB",
      hexFourteen: "#626260",
      hexFifteen: "#656263",
      hexSixteen: "#D7D5CF",
      hexSeventeen: "#45443F",
      hexEighteen: "#F7F3EB",
      hexNineteen: "#d7d7d6",
      hexTwenty: "#acaba8",
      hexTwentyOne: "#be3333",
      hexTwentyTwo: "#a1a1a1",
      hexTwentyThree: "#45443E",
      hexTwentyFour: "#4F9337",
      hexTwentyFive: "#DADAD9",
      hexTwentySix: "#292723",
      hexTwentySeven: "#D32F2F",
      hexTwentyEight: "#469739",
      hexTwentyNine: "#F6F5F5",
      hexThirty: "#ECEBEA",
      hexThirtyOne: "#C30F0F",
      hexThirtyTwo: "#982929",
      hexThirtyThree: "#7F7F7F",
      hexThirtyFour: "#ACBED8",

      linearGradientOne: `linear-gradient(180deg, rgba(81, 81, 81, 0) 0%, rgba(0, 0, 0, 0.9) 100%)`,
      linearGradientTwo: `linear-gradient(180deg, rgba(31, 31, 30, 0) 0%, #1A1919 65.62%)`,
      linearGradientThree: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F6F5F5 100%)`,
      linearGradientBottom: `linear-gradient(180deg, rgba(81, 81, 81, 0) 0%, rgba(0, 0, 0, 0.7) 77.08%)`,

      rgbaOne: "rgba(69, 68, 63, 0.2)",
      rgbaTwo: "rgba(0, 0, 0, 0)",
      rgbaThree: "rgba(215, 213, 207, 0.8)",
      rgbaFour: "rgba(0, 0, 0, 0.38)",
      rgbaFive: "rgba(0, 0, 0, 0.42)",
      rgbaSix: "rgba(0, 0, 0, 0.12)",
      rgbaSeven: "rgba(19, 19, 15, 0.5)",
    },
    background: {
      paper: "#F6F5F5",
      default: "#FFFFFF",
    },
    font: {
      primaryFontFamily: [primaryFontFamily, "sans-serif"].join(","),
    },
  },
  typography: {
    ...typography,
    fontFamily: ["Inter", "InterNeue", " Inter Neue", "sans-serif"].join(","),
  },
 
  shape,
})
theme.breakpoints.values = breakpoints

declare module "@mui/material/styles" {
  interface TypographyVariants {
    "primaryFontFamily-l": React.CSSProperties
    "primaryFontFamily-m": React.CSSProperties
    "primaryFontFamily-s": React.CSSProperties
    "primaryFontFamily-xs": React.CSSProperties
    "primaryFontFamily-xm": React.CSSProperties
    "m-primaryFontFamily-l": React.CSSProperties
    "m-primaryFontFamily-m": React.CSSProperties
    "m-primaryFontFamily-s": React.CSSProperties
    "m-primaryFontFamily-xs": React.CSSProperties
    "m-primaryFontFamily-xxs": React.CSSProperties
    "primaryFontFamily-xxs": React.CSSProperties
    "secondaryFontFamily-xxl": React.CSSProperties
    "secondaryFontFamily-xl": React.CSSProperties
    "secondaryFontFamily-l": React.CSSProperties
    "secondaryFontFamily-x": React.CSSProperties
    "secondaryFontFamily-ml": React.CSSProperties
    "secondaryFontFamily-m": React.CSSProperties
    "secondaryFontFamily-ms": React.CSSProperties
    "secondaryFontFamily-s": React.CSSProperties
    "m-secondaryFontFamily-xl": React.CSSProperties
    "m-secondaryFontFamily-ml": React.CSSProperties
    "m-secondaryFontFamily-l": React.CSSProperties
    "m-secondaryFontFamily-sl": React.CSSProperties
    "m-secondaryFontFamily-m": React.CSSProperties
    "m-secondaryFontFamily-s": React.CSSProperties
    "m-secondaryFontFamily-xs": React.CSSProperties
    "m-secondaryFontFamily-xxs": React.CSSProperties
    "secondaryFontFamily-xs": React.CSSProperties
    "secondaryFontFamily-xxs": React.CSSProperties
    "secondaryFontFamily-xxxs": React.CSSProperties
    "m-secondaryFontFamily-sxl": React.CSSProperties
    small: React.CSSProperties
    "x-small": React.CSSProperties
    "xx-small": React.CSSProperties
    "link-m": React.CSSProperties
    "m-link-m": React.CSSProperties
    "m-text-link": React.CSSProperties
    "secondaryFontFamily-xsl": React.CSSProperties
    "m-secondaryFontFamily-xsl": React.CSSProperties
    "m-secondaryFontFamily-xxl": React.CSSProperties
    button: React.CSSProperties
  }

  interface Palette {
    neuPalette?: any
    font?: any
  }
  interface PaletteOptions {
    neuPalette: {
      hexOne: React.CSSProperties["color"]
      hexTwo: React.CSSProperties["color"]
      hexThree: React.CSSProperties["color"]
      hexFour: React.CSSProperties["color"]
      hexFive: React.CSSProperties["color"]
      hexSix: React.CSSProperties["color"]
      hexSeven: React.CSSProperties["color"]
      hexEight: React.CSSProperties["color"]
      hexNine: React.CSSProperties["color"]
      hexTen: React.CSSProperties["color"]
      hexEleven: React.CSSProperties["color"]
      hexTwelve: React.CSSProperties["color"]
      hexThirteen: React.CSSProperties["color"]
      hexFourteen: React.CSSProperties["color"]
      hexFifteen: React.CSSProperties["color"]
      hexSixteen: React.CSSProperties["color"]
      hexSeventeen: React.CSSProperties["color"]
      hexEighteen: React.CSSProperties["color"]
      hexNineteen: React.CSSProperties["color"]
      hexTwenty: React.CSSProperties["color"]
      hexTwentyOne: React.CSSProperties["color"]
      hexTwentyTwo: React.CSSProperties["color"]
      linearGradientOne: React.CSSProperties["color"]
      linearGradientTwo: React.CSSProperties["color"]
      linearGradientThree: React.CSSProperties["color"]
      linearGradientBottom: React.CSSProperties["color"]
      rgbaOne: React.CSSProperties["color"]
      rgbaTwo: React.CSSProperties["color"]
      rgbaThree: React.CSSProperties["color"]
      rgbaFour: React.CSSProperties["color"]
      rgbaFive: React.CSSProperties["color"]
      rgbaSix: React.CSSProperties["color"]
      rgbaSeven: React.CSSProperties["color"]
      hexTwentyThree: React.CSSProperties["color"]
      hexTwentyFour: React.CSSProperties["color"]
      hexTwentyFive: React.CSSProperties["color"]
      hexTwentySix: React.CSSProperties["color"]
      hexTwentySeven: React.CSSProperties["color"]
      hexTwentyEight: React.CSSProperties["color"]
      hexTwentyNine: React.CSSProperties["color"]
      hexThirty: React.CSSProperties["color"]
      hexThirtyOne: React.CSSProperties["color"]
      hexThirtyTwo: React.CSSProperties["color"]
      hexThirtyThree: React.CSSProperties["color"]
      hexThirtyFour: React.CSSProperties["color"]
    }
    font: {
      primaryFontFamily: React.CSSProperties["fontFamily"]
    }
  }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: false
    h2: false
    h3: false
    h4: false
    h5: false
    h6: false
    body1: false
    body2: false
    button: true
    caption: false
    inherit: true
    overline: false
    subtitle1: false
    subtitle2: false

    small: true
    "b-10": true
    "b-12": true
    "b-14": true
    "b-16": true
    "b-18": true
    "b-20": true
    "b-22": true
    "b-24": true
    "b-26": true
    "b-28": true
    "b-30": true
    "h-32": true
    "b-40": true
    "h-36": true
    "h-40": true
    "h-60": true
    "h-80": true
    "h-135": true

    
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "dark-outlined": true
    "dark-contained": true
    "light-outlined": true
    "light-contained": true
  }
}

export const fonts = {
  secondaryFontFamily: "Inter",
  primaryFontFamily: primaryFontFamily,
}
