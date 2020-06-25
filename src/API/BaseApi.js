import { Base64 } from 'js-base64';
import * as AuthSession from 'expo-auth-session';
import { Platform } from 'react-native';
import axios from 'axios';
import { AUTH_API } from './env.json';
import Api_calls from '../assets/constants/Api_calls';

const scopesArr = ['', 'user-modify-playback-state', 'user-read-currently-playing', 'user-read-playback-state', 'user-library-modify',
    'user-library-read', 'playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-public',
    'playlist-modify-private', 'user-read-recently-played', 'user-top-read', 'user-follow-read', 'user-read-private', 'user-read-email', 'user-follow-modify'];


const scopes = scopesArr.join(' ');

export default API = {

    async getAuthorizationCode(Credential) {

        let url = AUTH_API + `${Api_calls.Authorization.authentication}`;

        let result = ''
        try {

            if (Platform.OS == 'android') {
                result = await AuthSession.startAsync({
                    authUrl:
                        url +
                        '?response_type=code' +
                        '&client_id=' +
                        Credential.clientId +
                        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
                        '&redirect_uri=' +
                        encodeURIComponent(AuthSession.getRedirectUrl()),
                });

                return result.params.code;
            } else {

                result = await AuthSession.startAsync({
                    authUrl:
                        url +
                        '?response_type=code' +
                        '&client_id=' +
                        Credential.clientId +
                        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
                        '&redirect_uri=' +
                        encodeURIComponent(Credential.redirectUri),
                });
                return result.params.code;
            }


        } catch (err) {
            console.log(err)
            return err;
        }
    },

    getEncodedCredsB64(Credential) {
        return Base64.encode(`${Credential.clientId}:${Credential.clientSecret}`);
    },

    AuthHeaders(encoded) {
        return {
            Authorization: `Basic ${encoded}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        };

    },
    DataHeaders(accessToken) {

        const parsedToken = JSON.parse(accessToken);

        return {
            Authorization: `Bearer ${parsedToken}`,
            'Content-Type': 'application/json',
        }

    },

    async request(options) {

        const client = axios.create(options);


        client.interceptors.request.use(request => {
            return request
        }, error => {

            return Promise.reject(error);
        });

        let isRefreshing = false;
        let requests = [];

        client.interceptors.response.use(response => {
            return response
        }, error => {

            //     // const {
            //     //     config,
            //     //     response: { status, data }
            //     // } = error;

            //     // const originalRequest = config;

            //     // if (status == 401) {

            //     //     if (!Refreshing) {
            //     //         isRefreshing = true;
            //     //         console.log("Refreshing")
            //     //         Store.dispatch(AuthAction.RefreshTokenAction());
            //     //     }
            //     //     isRefreshing = false;
            //     //     requests = [];
            //     //     const Oldrequest = new Promise(resolve => {
            //     //         requestTokenRefresh(() => {
            //     //             resolve(axios(originalRequest));
            //     //         });
            //     //     });
            //     //     onRefreshed();
            //     //     return Oldrequest;
            //     // } else {
            return Promise.reject(error);
            //  }
        });

        // function requestTokenRefresh(cb) {
        //     requests.push(cb);

        // }
        // function onRefreshed() {
        //     requests.map(cb => cb());
        // }


        return client(options);

    }



}






