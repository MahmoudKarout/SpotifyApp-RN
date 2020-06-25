import React from 'react';
import { StyleSheet } from 'react-native';
import { constants } from '../../assets/constants/constants';

export const styles = StyleSheet.create({

    UserInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',

    }, imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: constants.colors.skeleton,
        marginRight: 10

    },
    ImageArt: {
        width: "100%",
        height: "100%",
        borderRadius: 100
    }

});