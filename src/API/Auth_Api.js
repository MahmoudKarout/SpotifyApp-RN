import API from './BaseApi';
import Credentials from '../utils/config';
import { getUserInfo } from '../utils/AsyncStorageAPI';



export default AUTH_Requests = {

    async API_LoginAction() {
        const authorizationCode = await API.getAuthorizationCode(Credentials);
        const creds64 = API.getEncodedCredsB64(Credentials);

        if (Platform.OS == 'android') {
            body = `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=https://auth.expo.io/@mahmoudkarout/SpotifyAppLast`;

        } else {
            body = `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${Credentials.redirectUri}`;
        }
        let options =
        {
            url: Credentials.authTokenUrl,
            method: 'POST',
            headers: API.AuthHeaders(creds64),
            data: body
        }

        return API.request(options);
    },

    async API_RefreshTokenAction() {

        const creds64 = API.getEncodedCredsB64(Credentials);
        const refreshToken = await getUserInfo('refreshToken');
        const refreshTokenParsed = JSON.parse(refreshToken);
        let body = `grant_type=refresh_token&refresh_token=${refreshTokenParsed}`;

        let options =
        {
            url: Credentials.authTokenUrl,
            method: 'POST',
            headers: API.AuthHeaders(creds64),
            data: body
        }

        return API.request(options);
    },





};




