import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const CounterIncrement = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title="Decrement"
        onPress={() => {
          setCounter(counter - 1);
        }}
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterIncrement;
