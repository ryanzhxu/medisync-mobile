import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 30,
  },
  graphTitle: {
    color: "#5F636C",
    fontSize: 18,
    fontFamily: "RobotoMedium",
    textAlign: "center",
  },
  graphSubTitle: {
    color: "#A6A6A6",
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  upload: {
    width: 30,
    height: 30,
    position: "relative",
    top: 5,
  },
});

export default styles;
