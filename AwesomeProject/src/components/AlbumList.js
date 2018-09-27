import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount() {
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
        // debugger;
    }
    render() {
        console.log(this.state);

        return (
            <View>
                <Text>Classss based Album List Component</Text>
            </View>
        )
    }
}

export default AlbumList;