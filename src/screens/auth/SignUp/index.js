import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from "./styles";
import AuthNavBar from "../../../components/AuthNavBar";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AuthNavBar />
      </View>
      <View style={styles.content}>
        <Header children="Register a patient account" />
        <Input placeholder="Enter your full name" label="Full name" />
        <Input placeholder="Enter your email" label="Email Address" />
        <Input placeholder="Confirm your email" label="Confirm Email" />
        <Button
          onPress={() => navigation.navigate("SignUpContinued")}
          style={styles.nextButton}
        >
          Next
        </Button>
        <Text
          onPress={() => navigation.navigate("SignIn")}
          style={styles.footerText}
        >
          Not registered? <Text style={styles.footerLink}>Sign in!</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SignUp);
