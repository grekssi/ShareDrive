import clients from "../Screens/clients";
import hubView from "../Screens/hubView";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerActions } from "@react-navigation/native";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import CustomRow from "../Screens/CustomRow";
import ImagesPage from "../Screens/ImagesPage";
import ImageViewer from "../Screens/ImageViewer";

const Stack = createNativeStackNavigator();

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
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

function homeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="hub"
          component={hubView}
          options={{
            title: "Employees",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ImageViewer"
          component={ImageViewer}
          options={{
            title: "Image Viewer",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ImagesPage"
          component={ImagesPage}
          options={{
            title: "Expenses",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerRight: () => (
              <TouchableOpacity onPress={() => DrawerActions.openDrawer()}>
                <View>
                  <Image
                    style={styles.menu}
                    source={require("../assets/images/menu.png")}
                  />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default homeStack;
