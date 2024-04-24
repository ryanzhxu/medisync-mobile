import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
          resizeMode="contain"
        />
        <Text style={styles.subText}>
          Securely connecting patients and physicians
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate("SignUp")}>Start Now</Button>
        <Button
          onPress={() => navigation.navigate("SignIn")}
          type={"lightBlue"}
        >
          Sign In
        </Button>
      </View>
    </View>
  );
};

export default React.memo(Landing);
