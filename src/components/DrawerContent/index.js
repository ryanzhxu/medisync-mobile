import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Linking, StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from "../../constants/links";

function DrawerContent(props) {
  const { navigation } = props;
  const logout = () => {
    console.log("Clicked logout!");
  };

  return (
    <DrawerContentScrollView {...props}>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}
      >
        Privacy Policy
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}
      >
        Terms and Conditions
      </Text>
      <Text style={styles.link} onPress={logout}>
        Log out
      </Text>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  link: {
    color: colors.black,
    fontWeight: "500",
    fontSize: 13,
    margin: 8,
    marginHorizontal: 16,
    fontFamily: "Roboto",
  },
});

export default React.memo(DrawerContent);
