import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColourCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColourCounter;
