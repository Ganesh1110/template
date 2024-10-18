import { Dimensions, Platform, StyleSheet } from "react-native";

export const BASE_URL = "https://localHost.appspot.com";

export const DIM = {
  deviceFont: Math.round(Dimensions.get("window").fontScale),
  deviceWidth: Math.round(Dimensions.get("window").width),
  deviceHeight: Math.round(Dimensions.get("window").height),
};

export const iconWidth = DIM.deviceWidth * 0.08;
export const iconHeight =
  Platform.OS == "android" ? DIM.deviceHeight * 0.035 : DIM.deviceHeight * 0.03;

export const Images = {
  Logo: require("../asset/images/react-native.png"),
  // Add more images here
};

export const Icons = {
  IconEyeOpen: require("../asset/icons/eye_show.png"),
  IconEyeClose: require("../asset/icons/eye_hide.png"),
  // Add more images here
};

export const Colors = {
  MilkWhite: "#FFFFFF",
  Black: "#000000",
  TRANSPARENT: "#0404045c",
};

// Predefined even-numbered margin constants (memoized)
const spacingValues = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
  42, 44, 46, 48, 50, 52, 54, 56, 58, 60,
];

// Generate spacing styles only once and store them in a constant
const generateSpacingStyles = () => {
  const styles = {};

  spacingValues.forEach((value) => {
    styles[`mb${value}`] = value; // marginBottom
    styles[`mt${value}`] = value; // marginTop
    styles[`ml${value}`] = value; // marginLeft
    styles[`mr${value}`] = value; // marginRight
    styles[`pb${value}`] = value; // paddingBottom
    styles[`p${value}`] = value; // padding
    styles[`pt${value}`] = value; // paddingTop
    styles[`pl${value}`] = value; // paddingLeft
    styles[`pr${value}`] = value; // paddingRight
    styles[`ph${value}`] = value; // paddingHorizontal
    styles[`pv${value}`] = value; // paddingVertical
    styles[`bw${value}`] = value; // borderWidth
    styles[`br${value}`] = value; // borderRadius
    styles[`fs${value}`] = value; // fontSize
  });

  return styles;
};

// Cache the generated styles in a constant
export const GlobalStyles = generateSpacingStyles();
