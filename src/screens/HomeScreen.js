import React,{Fragment} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';
import { ComponentScreen } from "./ComponentScreen";

const HomeScreen = ({navigation}) => {

  return (
  
    <View>
  <Text style={styles.text}>HomeScreen and uzair</Text>
   <Button title="Go to Components Demo" onPress={()=>navigation.navigate('Components')}/>
   <Button title="Go to Excercise Demo" onPress={()=>navigation.navigate('Excercise')}/>
   <Button title="Go to FlatList Demo" onPress={()=>navigation.navigate('FlatList')}/>
   <Button title="Go to List Demo" onPress={()=>navigation.navigate('List')}/>

    <TouchableOpacity onPress={()=>{navigation.navigate('Components')}}>
      <Text>Go to Components Demo</Text>
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
