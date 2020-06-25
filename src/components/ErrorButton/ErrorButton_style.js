import { StyleSheet } from 'react-native';
import { constants } from '../../assets/constants/constants';


export default styles = StyleSheet.create({

    errorMessage: {
        color: constants.colors.commonText,

    },
    reloadButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 6,
        marginTop: 10,
        borderWidth: 2,
        width: '60%',
        color: constants.colors.skeleton,
        borderColor: constants.colors.skeleton

    },
    buttonText: {
        color: constants.colors.skeleton,
        fontWeight: 'bold',
        fontSize: 15,

    }
});