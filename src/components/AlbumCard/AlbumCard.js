
import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './AlbumCard_style'
import { useTheme } from '@react-navigation/native';


export const AlbumCard = ({ result }) => {
    const { colors, dark } = useTheme();
    return (

        <View style={{ ...styles.container, backgroundColor: colors.border, color: colors.text }} >
            <View style={styles.imageContainer}>
                {result.item.images.length ? <Image style={styles.imageArt} source={{ uri: result.item.images[1].url }} />
                    : <Image source={require("../../assets/images/placeholder.png")} style={styles.imageArt} resizeMode="cover" alt="Artist" />}
            </View>
            <View style={{ ...styles.mainInfoContainer, backgroundColor: colors.border }}>
                <View style={styles.innerMainInfoContainer}>
                    <Text numberOfLines={1} style={{ ...styles.albumName, color: colors.text }}>{result.item.name}</Text>
                    <Text style={{ ...styles.artistName, color: colors.text }}>{result.item.artists[0].name}</Text>
                    <View style={{ ...styles.extraInfoContainer }}>
                        <Text numberOfLines={1} style={{ ...styles.bottomInfo, color: colors.text }}>Release Date: {result.item.release_date}</Text>
                        <Text style={{ ...styles.bottomInfo, color: colors.text }}>Total Tracks: {result.item.total_tracks}</Text>
                    </View>
                </View>

            </View>
        </View >

    );
}
