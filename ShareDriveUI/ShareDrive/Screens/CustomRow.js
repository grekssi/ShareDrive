import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomRow = (props) => {
  const { firstName, lastName } = props.person;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        console.log(props.person);
        navigation.navigate("ImagesPage");
      }}
    >
      <View style={styles.containerMaina}>
        <Image
          style={styles.photo}
          source={require("../assets/imageface.jpeg")}
        />
        <View style={styles.container_text}>
          <Text style={styles.title}>{firstName}</Text>
          <Text style={styles.description}>{lastName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
    marginRight: 12,
  },
  containerMaina: {
    alignSelf: "baseline",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    color: "#ff8031",
    marginLeft: 5,
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
    height: 120,
    width: 120,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

export default CustomRow;
