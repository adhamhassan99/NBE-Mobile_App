import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {BrandLarger} from "../assets/images";

const LogInHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.LangBtn}>
        <Text style={styles.BtnText}>AR</Text>
      </TouchableOpacity>
      <Image style={styles.brand} source={BrandLarger} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.07,
    flexDirection: "row",
    padding: 25,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingTop: 40,
  },
  LangBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  BtnText: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0, 114, 54, 1)",
  },
});

export default LogInHeader;
