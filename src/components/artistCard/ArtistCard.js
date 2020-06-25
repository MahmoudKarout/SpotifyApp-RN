
import React from 'react';

import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { styles } from './ArtistCard_style';
import { numFormatter } from '../../utils/utility';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StarRatings from '../StarRating';
import { useTheme } from '@react-navigation/native';



export const ArtistCard = ({ result, nav }) => {
    const { colors, dark } = useTheme();

    return (
        <TouchableOpacity onPress={nav}>
            <View style={{ ...styles.container, backgroundColor: colors.primary }} key={result.item.id}>
                <View style={{ ...styles.imageContainer, backgroundColor: colors.border }}>
                    {result.item.images.length ? <Image style={styles.ImageArt} source={{ uri: result.item.images[1].url }} />
                        : <Image source={require("../../assets/images/placeholder.png")} style={styles.ImageArt} resizeMode='contain' alt="Artist" />}
                </View>
                <View style={styles.infoContainer} >
                    <View style={{ ...styles.innerInfoContainer, backgroundColor: colors.primary, }}>
                        <Text numberOfLines={1} style={{ ...styles.ArtistName, color: colors.text }}>{result.item.name}</Text>
                        <Text style={{ ...styles.followers, color: colors.text }}>{numFormatter(result.item.followers.total)} followers </Text>
                        <StarRatings RatedStarColor={colors.company} rating={result.item.popularity} dimensions={20} />
                    </View>
                </View>
            </View >
        </TouchableOpacity>
    );
}