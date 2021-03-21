import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App executed");
  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      <Text>Yooooo!!!</Text>
      <Text>Welcome to React Native Devlopment</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
});
