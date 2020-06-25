import React from 'react';
import { StyleSheet } from 'react-native';
import { constants } from '../../assets/constants/constants';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    innerContainer: {
        flex: 0.6,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sloganContainer: {
        alignItems: "flex-end",
        justifyContent: 'flex-end',

    },

    button: {
        width: 250,
        borderRadius: 10,
        paddingVertical: 12,

    },
    buttonText: {
        fontSize: 17,
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: constants.Fonts.CCBlack,
        letterSpacing: 2
    },
    logo: {
        width: 242,
        height: 73

    }

});