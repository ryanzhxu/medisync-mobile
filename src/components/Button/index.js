import React from "react";
import { Text, Pressable } from "react-native";
import styles from "./styles";

const Button = ({ onPress, type, style, children }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        type === "lightBlue" ? styles.lightBlueBg : {},
        style,
      ]}
    >
      <Text
        style={[styles.text, type === "lightBlue" ? styles.lightBlueText : {}]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default React.memo(Button);
