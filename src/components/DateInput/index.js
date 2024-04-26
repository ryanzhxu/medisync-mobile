import moment from "moment";
import React, { useState } from "react";
import { Image, Text, Pressable } from "react-native";
import DatePicker from "react-native-date-picker";
import styles from "./styles";

const DateInput = ({ value, onChange, ...props }) => {
  const [open, setOpen] = useState(false);

  const onDateOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Pressable onPress={onDateOpen} style={styles.outlined}>
        <Text style={styles.text}>
          {moment(value).format("ll") || "Select Date..."}
        </Text>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../../assets/calendar.png")}
        />
      </Pressable>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={value}
        onConfirm={(date) => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default React.memo(DateInput);
