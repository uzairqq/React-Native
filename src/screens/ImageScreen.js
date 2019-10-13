import React from "react";
import { Text, View } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageToShow={require("../../assets/forest.jpg")}
        rating="4.5"
      />
      <ImageDetails
        title="Mountain"
        imageToShow={require("../../assets/mountain.jpg")}
        rating="3.2"
      />
      <ImageDetails
        title="Beach"
        imageToShow={require("../../assets/beach.jpg")}
        rating="5.0"
      />
    </View>
  );
};

export default ImageScreen;
