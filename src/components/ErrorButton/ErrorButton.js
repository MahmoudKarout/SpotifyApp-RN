
import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { constants } from '../../assets/constants/constants';


import styles from './ErrorButton_style';


export default ErrorButton = ({ pressFunction, message }) => {
    return (

        <View style={{ alignItems: 'center' }}>
            <Text style={styles.errorMessage}>{message}</Text>
            <TouchableOpacity style={styles.reloadButton} onPress={pressFunction}>
                <Text numberOfLines={1} style={styles.buttonText}> <Foundation name="refresh" size={15} color={constants.colors.skeleton} /> {constants.Buttons.REFRESH}</Text>
            </TouchableOpacity>
        </View>

    );
}