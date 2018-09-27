// Import a library to help to create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//Create a component
const App = () => {
    return (
        <View>
            <Header headerText='Albums!!!!' />
            <AlbumList />
        </View>
    )
};




//Render that component
AppRegistry.registerComponent('AwesomeProject', () => App);