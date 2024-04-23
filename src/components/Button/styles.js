import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 13,
    marginVertical: 8,
    width: "80%",
  },
  text: {
    color: colors.white,
    fontSize: 14,
  },
  lightBlueBg: {
    backgroundColor: colors.lightBlue,
  },
  lightBlueText: {
    color: colors.blue,
  },
});

export default styles;
