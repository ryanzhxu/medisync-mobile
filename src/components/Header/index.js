import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const Header = ({ children }) => {
  return <Text style={[styles.header]}>{children}</Text>;
};

export default React.memo(Header);
