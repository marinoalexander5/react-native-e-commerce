import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="close-thick"
          size={60}
        />
      </View>
      <View style={styles.deleteIcon}>
      <MaterialCommunityIcons
          style={styles.icon}
          name="trash-can-outline"
          size={60}
        />
      </View>
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/deposito-2-lg.jpg")}
      />
      <View style={styles.buttonWrapper}>
        <AppButton style={styles.loginBtn} title="Login" onPress={() => console.log("Login")} />
        <AppButton style={styles.registerBtn} title="Register" color="secondary" onPress={() => console.log("Register")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    resizeMode: "cover",
    height: "100%",
    elevation: -1,
    zIndex: -1
  },
  container: {
    flex: 1,
    // flexDirection: "column",
  },
  closeIcon: {
    // width: 100,
    // height: 100,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 50,
    right: 50,
    elevation: 30,
    zIndex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  deleteIcon: {
    // width: 100,
    // height: 100,
    // backgroundColor: colors.dark,
    position: "absolute",
    top: 20,
    left: 50,
    elevation: 30,
    zIndex: 1,
    borderRadius: 10,
  },
  icon: {
    elevation: 40,
    position: "absolute",
    alignSelf: "center",
    color: "black",
  },
  loginBtn: {
  },
  registerBtn: {

  },
  buttonWrapper: {
    position: "absolute",
    bottom: 30,
    elevation: 2,
    zIndex: 1,
    width: "100%",
    padding: 60,
  }
});
