import React,{Fragment} from 'react';
import { Text, StyleSheet,View,Button } from 'react-native';
import { ComponentScreen } from "./ComponentScreen";

const HomeScreen = () => {
  return (
  
    <View>
  <Text style={styles.text}>HomeScreen and uzair</Text>
   <Button title="Go to Components Demo" onPress={()=>console.log('Components Demo Pressed')}/>
   <Button title="Go to Excercise Demo" onPress={()=>console.log('Excercise Demo Pressed')}/>
   <Button title="Go to FlatList Demo" onPress={()=>console.log('FlatList Demo Pressed')}/>
   
   
   <Button title="Go to List Demo" onPress={()=>console.log('List Demo Pressed')}/>
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
