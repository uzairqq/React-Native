// Import a library to help to create a component
import React from 'react';
import ReactNative from 'react-native';


//Create a component
const App = () => {
    return (
        <Text>Some Text</Text>
    );
}

//Render that component
ReactNative.AppRegistry.registerComponent('AwesomeProject', () => App);