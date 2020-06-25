import API from './BaseApi';
import Credentials from '../utils/config';
import { getUserInfo } from '../utils/AsyncStorageAPI';
import * as AuthSession from 'expo-auth-session';
import { AUTH_API } from './env.json'
import { constants } from '../assets/constants/constants';



export default AUTH_Requests = {

    async API_LoginAction() {
        const authorizationCode = await API.getAuthorizationCode(Credentials);
        const creds64 = API.getEncodedCredsB64(Credentials);
        console.log(AUTH_API + Api_calls.Authorization.token_request)
        if (Platform.OS == 'android') {
            body = `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${AuthSession.getRedirectUrl()}`;
        } else {
            body = `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${Credentials.redirectUri}`;
        }


        let options =
        {
            url: AUTH_API + Api_calls.Authorization.token_request,
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
            url: AUTH_API + Api_calls.Authorization.token_request,
            method: 'POST',
            headers: API.AuthHeaders(creds64),
            data: body
        }

        return API.request(options);
    },





};




