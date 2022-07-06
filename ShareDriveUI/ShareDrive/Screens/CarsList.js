import React from "react";
import { View, FlatList, StyleSheet, Text, Dimensions } from "react-native";
import CarItem from "./CarItem";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

const CarsList = () => (
  <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => <CarItem car={item} />}
      showsVerticalScrollIndicator={false}
      snapToAlignment={"start"}
      decelerationRate={"fast"}
      snapToInterval={Dimensions.get("window").height}
    />
  </View>
);

export default CarsList;

const data = [
  {
    name: "Model S",
    tagline: "Starting at $69,420",
    image: require("../assets/images/ModelS.jpeg"),
  },
  {
    name: "Model 3",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("../assets/images/Model3.jpeg"),
  },
  {
    name: "Model X",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("../assets/images/ModelX.jpeg"),
  },
  {
    name: "Model Y",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("../assets/images/ModelY.jpeg"),
  },
];
