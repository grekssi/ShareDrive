import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ImageBackground,
  StatusBar,
} from "react-native";

import CustomListview from "./Screens/CustomListView";
import Navigator from "./routes/homeStack";
import CarItem from "./Screens/CarItem";
import CarsList from "./Screens/CarsList";
export default function App() {
  // return <Navigator></Navigator>;
  return (
    <View style={styles.container1}>
      <CarsList></CarsList>
      <StatusBar style="auto"></StatusBar>
    </View>
    // <Navigator></Navigator>
  );
}

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
    height: "100%",
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
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

const MoreStyles = StyleSheet.create({
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
    paddingTop: 60,
    justifyContent: "center",
  },
});
