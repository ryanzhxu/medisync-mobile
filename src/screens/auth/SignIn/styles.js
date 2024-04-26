import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 30,
  },
  signInButton: {
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
});

export default styles;
