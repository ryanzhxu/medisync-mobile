import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";

const Landing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>
          Securely connecting patients and physicians
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button>Start Now</Button>
        <Button type={"lightBlue"}>Sign In</Button>
      </View>
    </View>
  );
};

export default React.memo(Landing);
