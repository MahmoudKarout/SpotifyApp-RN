import { StyleSheet } from 'react-native';
import { constants } from '../../assets/constants/constants';

export const styles = StyleSheet.create({
    container: {
        width: constants.Dimensions.screenWidth * 0.5 - 1,
        height: constants.Dimensions.screenWidth * 0.5,
    },
    imageContainer: {
        flex: 0.75,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    infoContainer: {
        flex: 0.5,
        width: "100%",
        flexWrap: 'wrap',
        overflow: 'hidden'

    },
    innerInfoContainer: {

        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    ImageArt: {
        width: "100%",
        height: "100%"
    },
    ArtistName: {
        fontSize: 20,
        fontFamily: constants.Fonts.CCBlack
    },
    followers: {
        marginVertical: 5,
        fontSize: 15,
        fontFamily: constants.Fonts.CCBook
    }



});