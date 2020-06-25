import React from 'react';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { constants } from '../../assets/constants/constants';
import { styles } from '../../components/topInfo/TopInfo_styles'




export default TopInfo = ({ data, CategoryTitle, track }) => {
    const { colors } = useTheme();
    return (
        <View style={{ marginBottom: 30 }}>
            <Text style={{
                ...styles.categoryTitle,
                color: colors.text,
            }}>
                {CategoryTitle}
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data ?
                    <FlatList
                        data={data}
                        scrollEnabled={false}
                        numColumns={data.length / 2}
                        renderItem={({ item }) => (
                            <View style={styles.containerComponent}>
                                <View style={styles.ArtComponentContainer}>
                                    {(track ? item.album.images.length : item.images.length)
                                        && <Image style={{ ...styles.ImageArt, borderRadius: track ? 6 : 30 }}
                                            source={track ? { uri: item.album.images[2].url } : { uri: item.images[2].url }} alt="Album Artwork" />}
                                </View>
                                <View style={styles.ArtistName}>
                                    <Text numberOfLines={1} style={{
                                        fontFamily: constants.Fonts.CCBlack,
                                        color: colors.text,
                                    }} >{item.name}</Text>
                                    <Text numberOfLines={1} style={{
                                        fontFamily: constants.Fonts.CCBook,
                                        color: constants.colors.commonText
                                    }}>{track ? item.album.name.substring(0, 12) : ""}</Text>
                                </View>
                            </View>
                        )}
                    />
                    : <Text>o</Text>}


            </ScrollView>

        </View>
    );
}