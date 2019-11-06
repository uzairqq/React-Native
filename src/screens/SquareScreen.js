import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColourCounter";

const COLOR_INCREMENT = 50;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + state.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatach] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  //dispatch ==> runMyReducer
  console.log(state); //{red:0,green:0,blue:0}

  const { red, blue, green } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatach({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatach({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />

      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatach({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatach({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatach({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatach({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
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
