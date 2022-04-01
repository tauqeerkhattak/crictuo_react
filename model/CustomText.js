import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import globals from '../constants/globals';




const CustomText = (props) => {
    return (
        <Text style={{ color: globals.COLOR.TEXT, fontSize: props.textSize,}}>{props.text.toUpperCase()}</Text>
    );
};


export default CustomText;