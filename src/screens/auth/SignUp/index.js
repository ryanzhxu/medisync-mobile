import React from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import AuthNavBar from "../../../components/AuthNavBar";
import Header from "../../../components/Header";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AuthNavBar />
      </View>
      <View style={styles.content}>
        <Header children="Register a patient account" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SignUp);
