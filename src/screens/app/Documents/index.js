import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import DrawerHeader from "../../../components/DrawerHeader";
import Header from "../../../components/Header";

const Documents = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeader />
      <View style={styles.content}>
        <Header>My Documents</Header>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Documents);
