import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomListview from "../Screens/CustomListView";

export default function hubView({ navigation }) {
  const DATA = [
    {
      firstName: "Bedros",
      lastName: "Garabedyan",
    },
    {
      firstName: "Emil",
      lastName: "Nenchev",
    },
  ];

  const pressHandler = () => {
    navigation.navigate("clients");
  };

  const styles = StyleSheet.create({
    buttonText: {
      alignSelf: "baseline",
      paddingLeft: 10,
      color: "#ff8031",
    },
    button: {
      justifyContent: "center",
      height: 30,
      width: 370,
      marginLeft: 4,
      backgroundColor: "#FFF",
      borderRadius: 5,
    },
    container: {
      paddingLeft: 10,
      flex: 1,
      backgroundColor: "#FFB756",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <CustomListview itemList={DATA} />
    </View>
  );
}
