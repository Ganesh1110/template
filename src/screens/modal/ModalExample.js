import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import GlobalModal from "../../components/GlobalModal";

const ModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show Modal" onPress={openModal} />
      <GlobalModal visible={modalVisible} onClose={closeModal} title="Welcome!">
        <Text>This is a user-friendly modal component!</Text>
      </GlobalModal>
    </View>
  );
};

export default ModalExample;
