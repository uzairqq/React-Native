import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetails = props => {
  return (
    <View>
      <Text>
        Name:
        {props.title}
      </Text>
      <Text>
        Rating:
        {props.rating}
      </Text>
      <Image source={props.imageToShow} />
    </View>
  );
};

export default ImageDetails;
