// Import a library to help to create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';


//Create a component
const App = () => (<Header />);

//Render that component
AppRegistry.registerComponent('AwesomeProject', () => App);