import React from "react";
import { StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import AppText from "../../components/AppText";
import AppView from "../../components/AppView";

const HomeScreen = ({ navigation }) => {
  return (
    <AppView style={styles.container}>
      <AppText style={styles.title}>Home Screen</AppText>
      <CustomButton
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
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

export default HomeScreen;
