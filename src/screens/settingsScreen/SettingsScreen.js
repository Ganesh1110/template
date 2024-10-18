import React from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import AppText from "../../components/AppText";

const SettingsScreen = () => {
  return (
    <AppView style={styles.container}>
      <AppText style={styles.title}>Details Screen</AppText>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SettingsScreen;
