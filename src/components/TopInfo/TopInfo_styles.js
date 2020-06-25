import React from 'react';
import { StyleSheet } from 'react-native';
import { constants } from '../../assets/constants/constants';

export const styles = StyleSheet.create({

    categoryTitle: {
        fontFamily: constants.Fonts.CCBold,
        textDecorationLine: 'underline',
        fontSize: 17,
        marginTop: 50,
    },
    containerComponent: {
        flexDirection: 'row',
        marginRight: 20,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: constants.Dimensions.screenWidth * 0.5,
    },
    ArtComponentContainer: {
        width: 60,
        height: 60,
        flexDirection: 'row',

    },
    ImageArt: {
        width: "100%",
        height: "100%",
    },
    ArtistName: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }

});