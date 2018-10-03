// Import a library to help to create a component
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';



//Create a component
const App = () => {
    return (
        <View>
            <Text>React Native</Text>
        </View>
    )
};




//Render that component
AppRegistry.registerComponent('AwesomeProject', () => App);