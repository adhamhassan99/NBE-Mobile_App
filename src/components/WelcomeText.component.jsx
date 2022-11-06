import React from "react";
import {Text, View, StyleSheet} from "react-native";

const WelcomeText = () => {
  return (
    <View style={styles.TextContainer}>
      <Text style={styles.textStyle}>Welcome to </Text>
      <Text style={styles.textStyle}>The National Bank</Text>
      <Text style={styles.textStyle}>of Egypt</Text>
    </View>
  );
};

export default WelcomeText;

const styles = StyleSheet.create({
  TextContainer: {
    flex: 0.42,
    justifyContent: "flex-end",
    padding: 20,
  },
  textStyle: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
});
