import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const FlatListScreen = () => {
  const freinds = [
    { name: "Freind #1", Age: 20 },
    { name: "Freind #2", Age: 22 },
    { name: "Freind #3", Age: 24 },
    { name: "Freind #4", Age: 25 },
    { name: "Freind #5", Age: 30 },
    { name: "Freind #6", Age: 40 },
    { name: "Freind #7", Age: 35 }
  ];

  return (
    <FlatList
      alwaysBounceVertical={true}
      showsVerticalScrollIndicator={false}
      data={freinds}
      keyExtractor={freind => freind.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.list}>
            {item.name} -- {item.Age}{" "}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 50
  }
});

export default FlatListScreen;
