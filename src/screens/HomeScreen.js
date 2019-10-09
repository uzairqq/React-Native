import React,{Fragment} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';
import { ComponentScreen } from "./ComponentScreen";

const HomeScreen = ({navigation: {navigate}}) => {

  return (
  
    <View>
  <Text style={styles.text}>HomeScreen and uzair</Text>
    <TouchableOpacity onPress={()=>{navigate('Components')}}>
      <Text>Go to Components Demo</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigate('Image')}}>
      <Text>Go To Image Screen</Text>
    </TouchableOpacity>

  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontStyle:'italic'
  
  }
});

export default HomeScreen;
