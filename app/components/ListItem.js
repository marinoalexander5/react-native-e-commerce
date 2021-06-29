import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRigthActions,
}) {
  return (
    <Swipeable renderRigthActions={renderRigthActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 15,
    // backgroundColor: colors.light,
    marginHorizontal: 15,
  },
  image: {
    borderRadius: 40,
    height: 80,
    width: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subTitle: {
    color: colors.medium,
    marginVertical: 10,
  },
  detailsContainer: {
    marginLeft: 20,
    justifyContent: "center",
    paddingLeft: 5,

  },
});
