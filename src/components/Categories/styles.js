import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: colors.charcoalGrey,
    fontFamily: "RobotoMedium",
    padding: 8,
    paddingHorizontal: 8,
  },
  selectedItem: {
    color: colors.blue,
  },
  itemContainer: {
    border: 0,
    marginRight: 8,
    marginBottom: 14,
    paddingHorizontal: 8,
  },
  selectedItemContainer: {
    borderColor: colors.lightGrey,
    backgroundColor: colors.lightGrey,
    borderRadius: 8,
  },
});

export default styles;
