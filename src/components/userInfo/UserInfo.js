import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { constants } from '../../assets/constants/constants';
import Svg, { Path } from 'react-native-svg';
import { styles } from './UserInfo_styles';

function SvgComponent(color) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" >
            <Path d="M1 13H0v-1h1v1zm22-1h-1v1h1v-1zM3 11H2v3h1v-3zm18 0h-1v3h1v-3zM7 11H6v3h1v-3zm10-1h-1v5h1v-5zM5 10H4v5h1v-5zm14-1h-1v7h1V9zM9 9H8v7h1V9zm2-2h-1v10h1V7zm4 0h-1v10h1V7zm-2-2h-1v14h1V5z" fill={color} />
        </Svg>
    )
}

function userData(numbers, desc, color) {
    return (
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Text style={{ marginBottom: 10, fontFamily: constants.Fonts.CCBook, fontSize: 17, color: color }}>{numbers}</Text>
            <Text style={{ fontSize: 12, fontFamily: constants.Fonts.CCBook, color: constants.colors.commonText }}>{desc}</Text>
        </View>
    );
}

export default UserInfo = ({ data }) => {
    const { colors } = useTheme();
    return (
        <View>
            <View style={styles.UserInfoContainer}>
                <View style={styles.imageContainer} >
                    {(data.user && data.user.images.length > 0) ? (
                        <Image source={{ uri: data.user.images[0].url }} style={styles.ImageArt} />
                    ) : (
                            <Image source={require('../../assets/images/placeholder.png')} alt="avatar" />
                        )}
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    {userData(data.playlists.total, constants.UserInfo.PLAYLIST, colors.company)}
                    {userData(data.user.followers.total, constants.UserInfo.FOLLOWERS, colors.company)}
                    {userData(data.followedArtists.artists.items.length, constants.UserInfo.FOLLOWING, colors.company)}
                </View>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 20, }} >
                <Text style={{ fontFamily: constants.Fonts.CCBlack, fontSize: 17, color: colors.text }} >{data.user.display_name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                    <View>{SvgComponent(colors.company)}</View>
                    <Text style={{ fontFamily: constants.Fonts.CCBlack, fontSize: 15, marginLeft: 5, color: colors.text, }} >
                        <Text style={{ fontFamily: constants.Fonts.CCBook, }} >listening to</Text> {data.recentlyPlayed[0].track.artists[0].name} - {data.recentlyPlayed[0].track.name}</Text>
                </View>
            </View>
        </View>
    );
}