import React,{Fragment} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';
import { ComponentScreen } from "./ComponentScreen";

const HomeScreen = ({navigation: {navigate}}) => {

  return (
  
    <View>
  <Text style={styles.text}>HomeScreen and uzair</Text>
   <Button title="Go to Components Demo" onPress={()=>navigate('Components')}/>
   <Button title="Go to Excercise Demo" onPress={()=>navigate('Excercise')}/>
   <Button title="Go to FlatList Demo" onPress={()=>navigate('FlatList')}/>
   <Button title="Go to List Demo" onPress={()=>navigate('List')}/>

    <TouchableOpacity onPress={()=>{navigate('Components')}}>
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
