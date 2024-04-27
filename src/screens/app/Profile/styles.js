import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 30,
  },
  label: {
    color: colors.grey,
    marginBottom: 12,
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
  saveButton: {
    width: "100%",
  },
  patientIdLabel: {
    fontFamily: "RobotoBold",
    fontSize: 15,
    marginBottom: 20,
  },
});

export default styles;
