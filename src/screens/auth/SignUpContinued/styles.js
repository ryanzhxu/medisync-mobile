import { StyleSheet, StatusBar } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: "30px",
    marginTop: "10%",
    padding: 30,
  },
  dateInput: {
    color: colors.grey,
    backgroundColor: colors.lightGrey,
    borderColor: colors.blue,
    paddingHorizontal: 12,
    paddingVertical: 13,
    borderRadius: 10,
    marginBottom: 12,
  },
  dateTimePicker: {
    height: 120,
    marginTop: -10,
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
  signUpButton: {
    width: "100%",
    marginBottom: "4%",
  },
  footerText: {
    color: colors.grey,
    textAlign: "center",
  },
  footerLink: {
    color: colors.blue,
    fontFamily: "RobotoBold",
  },
  label: {
    color: colors.grey,
    marginBottom: 12,
  },
});

export default styles;
