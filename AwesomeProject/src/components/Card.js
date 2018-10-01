import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderWidth: 1,// simple border
        borderRadius: 2,//rounds borders nicely, rounded edges
        borderColor: '#ddd',//light grey border color,
        borderBottomWidth: 0,//bottom of the border
        shadowColor: '#000', //put shadow to the card
        shadowOffset: { width: 0, height: 2 }, // what side of the border want shadow.in this case no shadow on width but on height 
        shadowOpacity: 0.1,//give darkness or light. opacity between 0 to 1.
        shadowRadius: 2,//just like border radius
        elevation: 1,
        marginLeft: 5,//to give space in left
        marginRight: 5,//to give space in right
        marginTop: 10//to give space in top
    }
}

export default Card;