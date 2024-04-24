import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import AuthNavBar from "../../../components/AuthNavBar";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AuthNavBar />
      </View>
      <View style={styles.content}>
        <Header children="Welcome back! Sign in below" />
        <Input placeholder="Enter your email" label="Email Address" />
        <Input placeholder="********" label="Password" secureTextEntry />
        <Button style={styles.signInButton}>Sign In</Button>
        <Text
          onPress={() => navigation.navigate("SignUp")}
          style={styles.footerText}
        >
          Not registered? <Text style={styles.footerLink}>Sign up!</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SignIn);
