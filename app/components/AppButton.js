import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import color from "../config/color";

import colors from "../config/color";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: color.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;
