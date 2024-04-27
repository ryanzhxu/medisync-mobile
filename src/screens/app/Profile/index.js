import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  TextInput,
  Platform,
} from "react-native";
import styles from "./styles";
import DrawerHeader from "../../../components/DrawerHeader";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const Profile = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1995, 5, 19));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(moment(date).format("ll"));

  const onDateChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirth(moment(currentDate).format("ll"));
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setDateOfBirth(moment(currentDate).format("ll"));
    toggleDatePicker();
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeader />
      <View style={styles.content}>
        <Header>My Profile</Header>
        <Text style={styles.patientIdLabel}>Patient ID: 13870047</Text>
        <Input label="Full name" placeholder="Steven Lau" />
        <Input label="Email address" placeholder="slau9801@gmail.com" />
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
            value={dateOfBirth}
            readOnly
            onPressIn={toggleDatePicker}
            onChangeText={(val) => onChange(val, "dateOfBirth")}
          ></TextInput>
        </Pressable>
        <Button style={styles.saveButton}>Save Changes</Button>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
