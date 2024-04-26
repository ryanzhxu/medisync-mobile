import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "50%",
    height: height,
    justifyContent: "space-between",
  },
  logo: {
    width: "80%",
    marginBottom: "1%",
  },
  subText: {
    width: "80%",
    paddingTop: "40",
    color: colors.grey,
    fontSize: 22,
    fontFamily: "Roboto",
    textAlign: "left",
  },
  subTextBold: {
    width: "80%",
    paddingTop: "40",
    color: colors.darkGreen,
    fontFamily: "RobotoBold",
    textAlign: "left",
  },
  upperContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: "10%",
  },
});

export default styles;
