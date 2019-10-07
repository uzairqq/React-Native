import React from 'react';
import { Text,StyleSheet } from "react-native";


const Uzair=()=>{
    return <Text style={styles.textStyle}>Uzair Component</Text>
}


const styles=StyleSheet.create({
    textStyle:{
        fontSize:40,
        backgroundColor:'blue',
    }
})


export default Uzair;