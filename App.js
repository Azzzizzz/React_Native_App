// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", // Main(primary-axis)
        alignItems: "center", // Secodnary
        alignContent: "center", //it deals with the entire content
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "teal",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gray",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
