import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "../components/Card"
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Guitarra",
    price: 100,
    image: require("../assets/guitar.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 30,
        backgroundColor: colors.light
    }
});
