import React from "react";
import { Modal, StyleSheet, ActivityIndicator, View, Text } from "react-native";
import { Colors } from "../utility/Constant";

const CustomLoader = ({ visible }) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={"large"} color={Colors.MilkWhite} />
        <Text style={styles.loaderText}>Please Wait</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E2138",
    borderRadius: 10,
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.MilkWhite,
    fontFamily: "Cairo-Regular",
  },
});

export default CustomLoader;
