import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CustomRow from "./CustomRow";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  imageList: {
    flex: 1,
    justifyContent: "space-evenly",
    width: "100%",
  },
});

const CustomListview = ({ itemList }) => (
  <View style={styles.container}>
    <FlatList
      data={itemList}
      numColumns={2}
      renderItem={({ item }) => <CustomRow person={item} />}
      columnWrapperStyle={styles.imageList}
    />
  </View>
);

export default CustomListview;
