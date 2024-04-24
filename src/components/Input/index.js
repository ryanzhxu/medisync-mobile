import React from "react";
import { Text, TextInput } from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";

const Input = ({ outlined, label, ...props }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} />
    </>
  );
};

export default React.memo(Input);
