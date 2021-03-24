import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.backgound}
      source={require("../assets/welcomeScreen1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/slack.png")} />
        <Text>Sell What You Dont't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgound: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",

    // width: "100%",
    // height: "100%",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "tomato",
    alignItems: "flex-end",
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
});

export default WelcomeScreen;
