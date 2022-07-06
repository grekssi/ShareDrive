import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import CustomRow from "./CustomRow";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

const Header = ({ itemList }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Image
        style={styles.menu}
        source={require("../assets/images/menu.png")}
      />
    </View>
  );
};

export default Header;
