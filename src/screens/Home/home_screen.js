

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { constants } from '../../assets/constants/constants';
import Api_calls from '../../assets/constants/Api_calls';
import Loader from '../../components/Loader';
import { useDispatch } from 'react-redux';
import types from '../../redux/actions/types';

import UserInfo from '../../components/userInfo/UserInfo';
import i18n from 'i18n-js';
import DATA_Requests from '../../api/Data_Api';
import TopInfo from '../../components/topInfo/TopInfo';





export default function HomeScreen() {
    const { colors } = useTheme();
    const [user, setUser] = useState(null);
    const [followedArtists, setFollowed] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    const [topArtists, setTopArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);
    const [recentlyPlayed, setRecentlyPlayed] = useState(null);
    const dispatch = useDispatch();


    const getData = async () => {
        const { user, followedArtists, playlists, topArtists, topTracks, recentlyPlayed } = await DATA_Requests.API_USER_INFO();
        setUser(user);
        setFollowed(followedArtists);
        setPlaylists(playlists);
        setTopArtists(topArtists);
        setTopTracks(topTracks);
        setRecentlyPlayed(recentlyPlayed);
        if (user && followedArtists) {
            dispatch({
                type: types.USER_DETAILS, payload: {
                    display_name: user.display_name,
                    followers: user.followers.total,
                    following: followedArtists.artists.items.length,

                },
            });
        };


    }


    useEffect(() => {
        if (!user || !followedArtists || !playlists || !topArtists || !topTracks || !recentlyPlayed) {
            getData();


        }




    }, [user, followedArtists, playlists, topTracks, topArtists, recentlyPlayed]);

    return (
        <View style={styles.container}>
            {(user && followedArtists && playlists && topArtists && topTracks && recentlyPlayed) ?
                (<ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: colors.backgroundColor }}>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: 10, backgroundColor: colors.backgroundColor
                    }}>
                        <UserInfo data={
                            {
                                playlists: playlists,
                                user: user,
                                followedArtists: followedArtists,
                                recentlyPlayed: recentlyPlayed
                            }
                        } />
                        <TopInfo data={topTracks} CategoryTitle={i18n.t('Top Songs')} track={true} />
                        <TopInfo data={topArtists} CategoryTitle={i18n.t('Top Artists')} track={false} />
                    </View>
                </ScrollView >
                ) : <Loader />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10

    },



});