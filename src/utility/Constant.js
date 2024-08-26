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

export const Images = {};

export const Icons = {};

export const Colors = {
  MilkWhite: "#FFFFFF",
  Black: "#000000",
  TRANSPARENT: "#0404045c",
};

export const GlobalStyles = StyleSheet.create({});
