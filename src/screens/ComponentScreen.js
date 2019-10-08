import React from 'react';
import {Text,StyleSheet,View} from 'react-native';


const ComponentScreen=()=>{

    const greeting='hello there! My name is Uzair'

    return( 
    <View>
        <Text style={styles.textStyle}>Hi There from Component Screen</Text>
        <Text>{greeting}</Text>
        </View>
        )
};

const styles=StyleSheet.create({
    textStyle:{
        fontSize:40,
        color:'blue'
    },
});

export default ComponentScreen;