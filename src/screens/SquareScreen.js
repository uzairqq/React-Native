import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColourCounter";

const COLOR_INCREMENT = 50;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, red: state.red + action.amount };
    case "blue":
      return { ...state, red: state.red + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatach] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  console.log(state); //{red:0,green:0,blue:0}

  return (
    <View>
      {/* <ColorCounter
        color="Red"
        onIncrease={() =>}
        onDecrease={() => }
      />
      <ColorCounter
        color="Green"
        onIncrease={() => }
        onDecrease={() => }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => }
        onDecrease={() => }
      /> */}
      <View
        style={{
          width: 150,
          height: 100,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
