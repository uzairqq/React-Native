import React from "react";
import { Text, View } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title="Forest" />
      <ImageDetails title="Mountain" />
      <ImageDetails title="Beach" />
    </View>
  );
};

export default ImageScreen;
