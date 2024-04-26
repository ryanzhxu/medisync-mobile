import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: -20,
  },
  logo: {
    width: 120,
  },
  icon: {
    width: 24,
    height: 24,
    position: "relative",
    top: 3,
  },
});

export default styles;
