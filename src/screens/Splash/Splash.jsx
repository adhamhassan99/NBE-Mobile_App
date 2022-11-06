import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import {NBELogo, NBEBrand} from "../../assets/images";
const Splash = ({theme}) => {
  return (
    <View style={styles.SplashContainer}>
      <View style={styles.LogoContainer}>
        <Image style={styles.Logo} source={NBELogo} />
      </View>
      <View style={styles.BrandContainer}>
        <Image style={styles.Logo} source={NBEBrand} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SplashContainer: {
    flex: 1,
    justifyContent: "center",
  },
  LogoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.9,
  },
  BrandContainer: {
    alignItems: "center",
  },
});

export default Splash;
