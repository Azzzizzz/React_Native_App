import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/color";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailedContainer}>
        <AppText style={styles.title}>Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailedContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
export default ListingDetailsScreen;
