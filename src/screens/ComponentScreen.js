import React from 'react';
import {Text,StyleSheet} from 'react-native';


const ComponentScreen=()=>{
    return <Text style={styles.textStyle}>Hi There from Component Screen</Text>;
};

const styles=StyleSheet.create({
    textStyle:{
        fontSize:40,
        color:'blue'
    }
});

export default ComponentScreen;