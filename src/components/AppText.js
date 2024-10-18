import { Text, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { size } from "../utility/ResponsiveUtil";
import { Colors } from "../utility/Constant";

const AppText = ({ children, style, ...props }) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <Text
      style={[styles.defaultText, isDarkMode && styles.darkModeText, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: size(16),
    fontFamily: "Arial",
    color: Colors.Black,
  },
  darkModeText: {
    color: Colors.MilkWhite,
  },
});

export default AppText;
