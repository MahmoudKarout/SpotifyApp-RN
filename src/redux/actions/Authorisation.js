
import AUTH_Requests from '../../api/Auth_Api';
import { setUserInfo, setUserRefresh } from '../../utils/AsyncStorageAPI';
import types from './types';




export const LoginAction = () => {
    return async (dispatch, _) => {
        try {
            AUTH_Requests.API_LoginAction().then((res) => {
                dispatch({
                    type: types.LOGIN_SUCCESS, payload: {
                        accessToken: res.data.access_token,
                        refreshToken: res.data.refresh_token,
                    }
                })
                setUserInfo(res.data);
                setUserRefresh(res.data);
            })
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                    dispatch({ type: types.LOGIN_FAILURE, payload: err })
                })
        } catch (error) {
            console.log(error);
            dispatch({ type: types.LOGIN_FAILURE, payload: error })

        }

    }
}
export const RefreshTokenAction = () => {
    return async (dispatch, _) => {
        try {
            AUTH_Requests.API_RefreshTokenAction()
                .then((res) => {
                    console.log(types.REFRESHING_TOKEN);
                    dispatch({
                        type: types.REFRESHING_TOKEN, payload: res.data.access_token,
                    });
                    setUserInfo(res.data);
                }).catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                    dispatch({ type: types.LOGIN_FAILURE, payload: err })
                })
        } catch (err) {
            console.error(err);
            dispatch({ type: types.LOGIN_FAILURE, payload: err })
        }
    }




}
export const LogoutAction = () => {

    return async (dispatch, _) => {
        dispatch({
            type: types.LOGOUT
        });


    }




}