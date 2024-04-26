import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Pressable } from "react-native";
import styles from "./styles";

const DrawerHeader = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={openDrawer} hitSlop={8}>
        <Image
          style={styles.icon}
          source={require("../../assets/hamburger.png")}
        />
      </Pressable>
      <Image
        style={styles.logo}
        source={require("../../assets/logo.png")}
        resizeMode="contain"
      />
      <View style={styles.icon} />
    </View>
  );
};

export default React.memo(DrawerHeader);
