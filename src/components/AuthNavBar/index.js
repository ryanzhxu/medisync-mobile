import React from "react";
import { Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const AuthNavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={styles.chevronContainer}>
          <Image
            source={require("../../assets/left-chevron.png")}
            style={styles.chevron}
            resizeMode="contain"
          />
        </View>
      </Pressable>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View />
    </View>
  );
};

export default React.memo(AuthNavBar);
