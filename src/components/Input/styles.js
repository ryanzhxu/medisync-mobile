import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  label: {
    color: colors.grey,
    marginBottom: 12,
  },
  input: {
    color: colors.grey,
    backgroundColor: colors.lightGrey,
    borderColor: colors.blue,
    paddingHorizontal: 12,
    paddingVertical: 13,
    borderRadius: 10,
    marginBottom: 12,
  },
});

export default styles;
