import { StyleSheet, StatusBar } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: "30px",
    marginTop: "40%",
    padding: 30,
  },
  signInButton: {
    width: "100%",
    marginBottom: "12",
  },
  footerText: {
    color: colors.grey,
    textAlign: "center",
  },
  footerLink: {
    color: colors.blue,
    fontFamily: "RobotoBold",
  },
});

export default styles;
