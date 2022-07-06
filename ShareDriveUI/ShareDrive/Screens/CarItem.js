import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import CustomRow from "./CustomRow";
import StyledButton from "./StyledButton";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom order was pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: "baseline",
    paddingLeft: 10,
    color: "#ff8031",
  },
  button: {
    justifyContent: "center",
    height: 30,
    width: 345,
    marginLeft: 4,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  container: {
    paddingLeft: 10,
    flex: 1,
    backgroundColor: "#FFB756",
    paddingTop: 60,
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#5c5e62",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});
