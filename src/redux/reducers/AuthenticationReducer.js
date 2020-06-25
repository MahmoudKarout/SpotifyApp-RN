import types from '../actions/types';


const AuthenticationReducer = (state =
    {
        accessToken: null,
        refreshToken: null,
        isLoading: false,
        isLoggedIn: false,
        error: null
    },
    action) => {
    switch (action.type) {
        case types.RETRIEVE_TOKEN:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                isLoggedIn: true,
                isLoading: false
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                isLoggedIn: false,
            }
        case types.REFRESHING_TOKEN:
            return {
                ...state,
                accessToken: action.payload,

            }
        case types.LOGOUT:
            return {
                ...state,
                accessToken: null,
                refreshToken: null,
                isLoggedIn: false,


            }
        default:
            return state
    }
}


export default AuthenticationReducer;