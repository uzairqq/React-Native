import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Excercise = () => {
  const myName = "My Name Is Uzair";

  return (
    <View>
      <Text style={styles.Header}>Getting Started With React Native!</Text>{" "}
      <Text> {myName} </Text>{" "}
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    fontSize: 45
  },
  subHeader: {
    fontSize: 20
  }
});

export default Excercise;
