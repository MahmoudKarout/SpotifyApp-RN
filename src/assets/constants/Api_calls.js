




export default Api_calls = {


    methods: {
        GET: 'GET',
        POST: 'POST',
    },

    Authorization: {
        base_url: 'https://accounts.spotify.com',
        authentication: '/authorize',
        token_request: '/api/token',
        authorisation_type: {
            Bearer: 'Bearer',
            Basic: 'Basic',
        },
        content_type:
        {
            x_www_enc: 'application/x-www-form-urlencoded',
            json: 'application/json'
        }

    },
    Data: (query = '', id = '', offset = '') => {
        return {
            base_url: 'https://api.spotify.com/v1',
            search_artist: `/search?q=${query}&type=artist&limit=15&offset=${offset}`,
            artists_albums: `/artists/${id}/albums`,
            user: '/me',
            artist_followings: '/me/following?type=artist',
            playlists: `/me/playlists`,
            top_user_artist: '/me/top/artists?limit=50&time_range=long_term',
            top_user_tracks: '/me/top/tracks?time_range=long_term&limit=10',
            recently_played: '/me/player/recently-played?type=track&limit=1',

        }
    }
}
