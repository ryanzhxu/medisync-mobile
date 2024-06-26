import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import DrawerHeader from "../../../components/DrawerHeader";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeader />
      <View style={styles.content}>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Settings);
