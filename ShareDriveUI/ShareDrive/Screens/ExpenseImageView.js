import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
    marginRight: 12,
  },
  bigContainer: {
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  containerMaina: {
    alignSelf: "baseline",
    justifyContent: "center",
    borderRadius: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    color: "#ff8031",
    justifyContent: "center",
  },
  container_text: {
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  description: {
    fontSize: 15,
    fontStyle: "normal",
    color: "#ff8031",
    marginLeft: 5,
  },
  photo: {
    height: 150,
    width: 150,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  bigPhoto: {
    height: "100%",
    width: "100%",
  },
});

const ExpenseImageView = (props) => {
  const { picture } = props.data;
  const a = false;
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={() => {
          navigation.navigate("ImageViewer", {
            itemId: { picture },
          });
        }}
      >
        <View style={styles.containerMaina}>
          <Image style={styles.photo} source={picture} />
          <View style={styles.container_text}>
            <Text style={styles.title}>03.01.2022</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseImageView;
