import types from '../actions/types'



const UserInfoReducer = (state = {
    displayName: null,
    followers: null,
    following: null,
    playlists: null,
    language: null,
}, action) => {

    switch (action.type) {
        case types.USER_DETAILS:
            return {
                ...state,
                displayName: action.payload.display_name,
                followers: action.payload.followers,
                following: action.payload.following,
                playlists: action.payload.playlists,

            }

        default:
            return state
    }
}


export default UserInfoReducer;