import API from './BaseApi';
import Axios from 'axios';
import Api_calls from '../assets/constants/Api_calls';

import { getUserInfo } from '../utils/AsyncStorageAPI';





export default DATA_Requests = {



    async API_SEARCH(query, offset, cancel) {

        const accessToken = await getUserInfo('accessToken');

        if (cancel) {
            cancel.cancel();
        }
        cancel = Axios.CancelToken.source();
        let options =
        {
            url: Api_calls.Data(query, '', offset).search_artist,
            method: Api_calls.methods.GET,
            baseURL: Api_calls.Data().base_url,
            cancelToken: cancel.token,
            headers: API.DataHeaders(accessToken),
        }
        return API.request(options);
    },

    async API_ARTIST_ALBUM(id) {

        const accessToken = await getUserInfo('accessToken');
        let options =
        {
            url: Api_calls.Data('', id, '').artists_albums,
            method: Api_calls.methods.GET,
            baseURL: Api_calls.Data().base_url,

            headers: API.DataHeaders(accessToken),
        }
        return API.request(options);
    },
    async API_USER_INFO() {

        const accessToken = await getUserInfo('accessToken');

        let Main_options =
        {
            method: Api_calls.methods.GET,
            baseURL: Api_calls.Data().base_url,
            headers: API.DataHeaders(accessToken),
        }
        let user_options = {
            ...Main_options,
            url: Api_calls.Data().user,
        }
        let following_options = {
            ...Main_options,
            url: Api_calls.Data().artist_followings,
        }
        let playlists_options = {
            ...Main_options,
            url: Api_calls.Data().playlists,
        }

        let topArtists_options = {
            ...Main_options,
            url: Api_calls.Data().top_user_artist,
        }
        let topTracking_options = {
            ...Main_options,
            url: Api_calls.Data().top_user_tracks,
        }

        let recentlyPlayed_options = {
            ...Main_options,
            url: Api_calls.Data().recently_played

        }

        return Axios.all([
            API.request(user_options),
            API.request(following_options),
            API.request(playlists_options),
            API.request(topArtists_options),
            API.request(topTracking_options),
            API.request(recentlyPlayed_options),
        ]).then(
            Axios.spread((user, followedArtists, playlists, topArtists, topTracks, recentlyPlayed) => {
                return {
                    user: user.data,
                    followedArtists: followedArtists.data,
                    playlists: playlists.data,
                    topArtists: topArtists.data.items,
                    topTracks: topTracks.data.items,
                    recentlyPlayed: recentlyPlayed.data.items
                };
            }));
    }

};
