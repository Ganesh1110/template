import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";

const GlobalModal = ({ visible, onClose, children, title = "Modal Title" }) => {
  // Set up fade-in animation
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose} // Android back button close
      accessible // Enables accessibility
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.modalContent}>
            {/* Title and Close Button */}
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity
                onPress={onClose}
                accessibilityLabel="Close Modal"
                style={styles.closeButton}
              >
                <Text style={styles.closeText}>X</Text>
              </TouchableOpacity>
            </View>
            {/* Modal Content */}
            <View style={styles.body}>{children}</View>
          </View>
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

export default GlobalModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 5,
  },
  closeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  body: {
    marginTop: 10,
  },
});
