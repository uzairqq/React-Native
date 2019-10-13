import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetails = props => {
  return (
    <View>
      <Image source={props.imageToShow} />
      <Text>{props.title}</Text>
    </View>
  );
};

export default ImageDetails;
