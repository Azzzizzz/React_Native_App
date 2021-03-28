import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.backgound}
      source={require("../assets/welcomeScreen1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/slack.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgound: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",

    width: "100%",
    height: "100%",
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "teal",
    alignItems: "flex-end",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  tagline: {
    fontSize: 22,
    fontWeight: "700",
    marginVertical: 25,
  },
});

export default WelcomeScreen;
