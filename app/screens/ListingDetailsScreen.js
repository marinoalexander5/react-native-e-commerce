import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/guitar.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Guitarra</AppText>
        <AppText style={styles.price}>$30.000</AppText>
        <ListItem
            image={require("../assets/user.png")}
            title="Alex Marino"
            subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
});
