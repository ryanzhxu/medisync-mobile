import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import DrawerHeader from "../../../components/DrawerHeader";

const Documents = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeader />
      <View style={styles.content}>
        <Text>Documents</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Documents);
