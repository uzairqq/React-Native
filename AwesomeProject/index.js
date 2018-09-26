// Import a library to help to create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


//Create a component
const App = () => (<Text>Some Text</Text>);

//Render that component
AppRegistry.registerComponent('AwesomeProject', () => App);