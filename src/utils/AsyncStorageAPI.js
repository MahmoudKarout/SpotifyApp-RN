
import { AsyncStorage } from 'react-native';




export const setUserInfo = async (responseJson) => {

    const expirationTime = new Date().getTime() + responseJson.expires_in * 1000;
    try {
        await AsyncStorage.setItem(
            'accessToken', JSON.stringify(responseJson.access_token)
        );
    } catch (error) {
        console.log(error)
    }
    try {
        await AsyncStorage.setItem(
            'expirationTime', JSON.stringify(expirationTime)
        );
    } catch (error) {
        console.log(error)
    }

}

export const setUserRefresh = async (responseJson) => {
    try {
        await AsyncStorage.setItem(
            'refreshToken', JSON.stringify(responseJson.refresh_token)
        );
    } catch (error) {
        console.log(error)
    }



}
export const getUserInfo = async (key) => {

    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (error) {

    }
}

