import React from "react";
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import AppText from "../components/AppText";


export default function MainScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/puerta-deposito.jpg")}
      />
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require("../assets/bitcoin-logo-2.png")}
        />
        <AppText style={styles.welcomeText}>
          Vende lo que ya no necesitas
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  btnWrapper: {
    position: "absolute"
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  loginBtn: {
    width: "70%",
    height: 70,
  },
  logoWrapper: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  welcomeText: {
    color: "rgb(247, 147, 28)",
    fontWeight: "600",
    fontSize: 25,
    paddingVertical: 20
  },
});
