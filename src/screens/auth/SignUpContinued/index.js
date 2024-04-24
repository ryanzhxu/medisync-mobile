import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Platform,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import styles from "./styles";
import AuthNavBar from "../../../components/AuthNavBar";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUpContinued = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateofBirth, setDateOfBirth] = useState(date);

  const onDateChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirth(formatDate(currentDate));
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setDateOfBirth(formatDate(currentDate));
    toggleDatePicker();
  };

  const formatDate = (date) => {
    let formattedDate = new Date(date);
    let month = formattedDate.getMonth() + 1;
    let day = formattedDate.getDate();
    let year = formattedDate.getFullYear();

    let formattedMonth = month < 10 ? `0${month}` : month;
    let formattedDay = day < 10 ? `0${day}` : day;

    return `${formattedMonth}/${formattedDay}/${year}`;
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AuthNavBar />
      </View>
      <View style={styles.content}>
        <Header children="Register a patient account" />
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={onDateChange}
            style={styles.dateTimePicker}
          />
        )}
        {showDatePicker && Platform.OS === "ios" && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Pressable
              style={[
                styles.button,
                styles.pickerButton,
                { backgroundColor: "#11182711" },
              ]}
              onPress={toggleDatePicker}
            >
              <Text style={[styles.buttonText, { color: "#075985" }]}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.pickerButton]}
              onPress={confirmIOSDate}
            >
              <Text style={[styles.buttonText]}>Confirm</Text>
            </Pressable>
          </View>
        )}
        <Text style={styles.label}>Date of Birth</Text>
        <Pressable onPress={toggleDatePicker}>
          <TextInput
            style={styles.dateInput}
            value={dateofBirth}
            placeholder="Select your birthdate"
            readOnly
            onPressIn={toggleDatePicker}
          ></TextInput>
        </Pressable>
        <Input
          placeholder="Enter a password"
          label="Password"
          secureTextEntry
        />
        <Input
          placeholder="Enter the password again"
          label="Confirm Password"
          secureTextEntry
        />
        <Button style={styles.signUpButton}>Sign Up</Button>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SignUpContinued);
