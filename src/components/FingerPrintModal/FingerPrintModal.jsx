import {View, Text, Modal, TouchableOpacity} from "react-native";
import React from "react";

const FingerPrintModal = ({toggleDialog, fingerPrintBtn, title = ""}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={fingerPrintBtn}
      onRequestClose={toggleDialog}>
      <View
        style={{
          display: "flex",
          height: "35%",
          marginTop: "auto",
          backgroundColor: "white",
          padding: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View>
          <Text>Fingerprint for NBE Mobile</Text>
        </View>
        <View>
          <Text>{title}</Text>
        </View>
        <TouchableOpacity style={{marginTop: "auto"}} onPress={toggleDialog}>
          <Text style={styles.addButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FingerPrintModal;
