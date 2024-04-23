import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const Landing = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/logo.svg")} />
      <Text style={styles.logoText}>Securely connecting patients</Text>
      <Text style={styles.logoText}> and physicians</Text>
    </View>
  );
};

export default React.memo(Landing);
