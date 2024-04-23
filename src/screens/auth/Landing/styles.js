import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "60%",
    height: height,
    justifyContent: "space-between",
  },
  logo: {
    width: "80%",
    marginBottom: "7%",
  },
  logoText: {
    width: "70%",
    paddingTop: "40",
    color: colors.grey,
    fontSize: 18,
    fontFamily: "Roboto",
    textAlign: "center",
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
