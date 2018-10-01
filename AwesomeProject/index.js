// Import a library to help to create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import MainComponent from '../AwesomeProject/src/components/MainComponent';



//Create a component
const App = () => {
    return (
        <MainComponent />
    )
};




//Render that component
AppRegistry.registerComponent('AwesomeProject', () => App);