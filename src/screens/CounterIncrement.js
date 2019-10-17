import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const CounterIncrement = () => {
  let counter = 0;

  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          counter++;
          console.log(counter);
        }}
      ></Button>
      <Button
        title="Decrement"
        onPress={() => {
          counter--;
          console.log(counter);
        }}
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterIncrement;
