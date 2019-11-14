import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation";

const reducer = (state, action) => {
  //state === { counter:number }
  //howToChangeState ya phr action === { type: 'increment' || 'decrement'}    , payload=1

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterIncrement = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      ></Button>
      <Button
        title="Decrement"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      ></Button>
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterIncrement;
