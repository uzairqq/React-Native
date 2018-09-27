import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Axios from 'axios';

class AlbumList extends Component {
    componentWillMount() {
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response));
        // debugger;
    }
    render() {
        return (
            <View>
                <Text>Classss based Album List Component</Text>
            </View>
        )
    }
}

export default AlbumList;