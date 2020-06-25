import { StyleSheet, Platform } from 'react-native';
import { constants } from '../../assets/constants/constants';
import { colors } from 'react-native-elements';
export const styles = StyleSheet.create({
    Container: {
        width: "100%",
        alignItems: 'center',
        borderBottomWidth: 0.3
    },

    searchField: {
        flexDirection: "row",
        marginBottom: 10,
        borderWidth: 0.3,
        borderRadius: 10,
        width: "90%"
    },
    inputField: {
        flex: 1,
        marginHorizontal: 10,
        fontFamily: constants.Fonts.CCBook,
        color: Platform.OS == 'android' ? 'white' : 'white'

    },
    iconBox: {

        height: 30,
        width: 30,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',

    }

});