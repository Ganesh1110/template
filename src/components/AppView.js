import { View, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../utility/Constant";

const AppView = ({ children, style, ...props }) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View
      style={[styles.defaultView, isDarkMode && styles.darkModeView, style]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultView: {
    backgroundColor: Colors.MilkWhite,
  },
  darkModeView: {
    backgroundColor: Colors.Black,
  },
});

export default AppView;
