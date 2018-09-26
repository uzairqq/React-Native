import React from 'react';
import { Text, View } from 'react-native';


const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Some text UZAIR</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: 'green'
    },
    textStyle: {
        fontSize: 100
    }
};

export default Header;