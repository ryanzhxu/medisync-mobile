import React, { useState } from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";
import styles from "./styles";
import AuthNavBar from "../../../components/AuthNavBar";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const SignUp = ({ navigation }) => {
  const [values, setValues] = useState({});

  const onChange = (value, key) => {
    setValues((vals) => ({
      ...vals,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    if (!values.fullName) {
      Alert.alert("Please enter your full name");
      return;
    }
    if (!values.email || !values.confirmEmail) {
      Alert.alert("Please complete both email fields");
      return;
    }
    if (values.email !== values.confirmEmail) {
      Alert.alert("Emails do not match!");
      return;
    }
    navigation.navigate("SignUpContinued");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AuthNavBar />
      </View>
      <View style={styles.content}>
        <Header children="Register a patient account" />
        <Input
          placeholder="Enter your full name"
          label="Full name"
          onChangeText={(val) => onChange(val, "fullName")}
        />
        <Input
          placeholder="Enter your email"
          label="Email Address"
          onChangeText={(val) => onChange(val, "email")}
        />
        <Input
          placeholder="Confirm your email"
          label="Confirm Email"
          onChangeText={(val) => onChange(val, "confirmEmail")}
        />
        <Button onPress={onSubmit} style={styles.nextButton}>
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
