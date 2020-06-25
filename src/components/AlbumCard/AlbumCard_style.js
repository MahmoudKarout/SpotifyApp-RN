import { StyleSheet } from 'react-native';
import { constants } from '../../assets/constants/constants';



export const styles = StyleSheet.create({
    container: {

        width: constants.Dimensions.screenWidth,
        height: constants.Dimensions.screenWidth / 2,
        flexDirection: "row",
    },
    imageContainer: {
        width: constants.Dimensions.screenWidth / 2,


    },
    mainInfoContainer: {
        padding: 20,
        backgroundColor: "#222",
        width: constants.Dimensions.screenWidth / 2,

    },
    innerMainInfoContainer: {
        flex: 1,
        position: "relative",
    },
    extraInfoContainer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    imageArt: {
        width: "100%",
        height: "100%"
    },
    albumName:
    {
        fontSize: 20,
        fontFamily: constants.Fonts.CCBlack

    },
    artistName:
    {

        marginTop: 15,
        fontSize: 15,
        fontFamily: constants.Fonts.CCBold
    },
    bottomInfo: {

        fontSize: 12,
        marginTop: 10,
        fontFamily: constants.Fonts.CCBold
    },








});