import React from "react";
import { Text, View } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageToShow={require("../../assets/forest.jpg")}
      />
      <ImageDetails
        title="Mountain"
        imageToShow={require("../../assets/mountain.jpg")}
      />
      <ImageDetails
        title="Beach"
        imageToShow={require("../../assets/beach.jpg")}
      />
    </View>
  );
};

export default ImageScreen;
