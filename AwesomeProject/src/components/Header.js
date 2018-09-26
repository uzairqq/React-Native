import React from 'react';
import { Text } from 'react-native';


const Header = () => {
    const { textStyle } = styles;


    return (
        <Text style={textStyle}>Some text UZAIR</Text>
    );
}

const styles = {
    textStyle: {
        fontSize: 100
    }
};

export default Header;