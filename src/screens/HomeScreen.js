import React,{Fragment} from 'react';
import { Text, StyleSheet } from 'react-native';
import { ComponentScreen } from "./ComponentScreen";

const HomeScreen = () => {
  return (
  
    <Fragment>
  <Text style={styles.text}>HomeScreen and uzair</Text>
  {/* <ComponentScreen/> */}
  </Fragment>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontStyle:'italic'
  
  }
});

export default HomeScreen;
