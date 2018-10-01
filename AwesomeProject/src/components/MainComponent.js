import React from "react";
import { View } from "react-native";
import Header from '../components/Header';
import AlbumsList from './AlbumList';

const MainComponent = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText='Albums' />
            <AlbumsList />
        </View>
    )
}

export default MainComponent;