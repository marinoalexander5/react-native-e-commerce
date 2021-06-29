import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import AppIcon from "../components/AppIcon";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Alexander Marino"
          subTitle="React Developer"
          image={require("../assets/user.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log out"
        IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.grey,
  },
});
