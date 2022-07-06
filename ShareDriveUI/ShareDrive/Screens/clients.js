import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SectionList,
  SafeAreaView,
  FlatList,
} from "react-native";
import CustomRow from "./CustomRow";

export default function homeStack({ navigation }) {
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
      marginTop: 30,
      flex: 1,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 24,
    },
  });

  const ItemRender = ({ text }) => {
    return (
      <View>
        <Text>{text}</Text>
        <View
          style={{
            height: 1,
            width: 350,
            backgroundColor: "#607D8B",
          }}
        />
      </View>
    );
  };

  const sections = [
    {
      title: "A",
      key: "vegetables",
      data: [
        {
          key: "vegetables",
          list: [
            {
              name: "Carrot",
              color: "Orange",
            },
            {
              name: "Cabbage",
              color: "Purple",
            },
          ],
        },
      ],
    },
    {
      title: "B",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
    {
      title: "B",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
    {
      title: "C",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
    {
      title: "D",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
    {
      title: "",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
    {
      title: "B",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
    {
      title: "B",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
    {
      title: "B",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
    {
      title: "B",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
    {
      title: "B",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
    {
      title: "B",
      key: "fruits",
      data: [
        {
          key: "fruits",
          list: [
            {
              name: "Apple",
              color: "Green",
            },
            {
              name: "Banana",
              color: "Yellow",
            },
            {
              name: "Strawberry",
              color: "Red",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
            {
              name: "Blueberry",
              color: "Blue",
            },
          ],
        },
      ],
    },
  ];

  const _renderItem = ({ section }) => {
    return (
      <View>
        <Text>{section.title}</Text>
        <View
          style={{
            height: 1,
            width: "95%",
            backgroundColor: "#607D8B",
          }}
        />
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => {
    return <Text>{section.title}</Text>;
  };

  const renderSection = ({ item }) => {
    return (
      <FlatList
        data={item.list}
        numColumns={13}
        renderItem={({ item }) => <CustomRow item={item.name} />}
        contentContainerStyle={{ justifyContent: "space-between" }}
        keyExtractor={item.name}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        renderSectionHeader={_renderItem}
        renderItem={renderSection}
        stickyHeaderHiddenOnScroll={true}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
}
