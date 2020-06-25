
import React from 'react';

import { View, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import { styles } from './SearchBar_style';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { constants } from '../../assets/constants/constants';








export default SearchBar = ({ placeholder, query, inputchange, clear, loading }) => {
    const { colors } = useTheme();

    return (
        <View style={{ ...styles.Container, backgroundColor: colors.card, borderColor: colors.border }}>
            <View style={{
                ...styles.searchField, backgroundColor: colors.background, borderColor: colors.border
            }}>
                <View style={styles.iconBox}>
                    <AntDesign name="search1" size={15} color={constants.colors.skeleton} />
                </View>
                <TextInput style={styles.inputField} placeholder={placeholder} defaultValue={query} onChangeText={inputchange} />

                {query ?
                    <TouchableOpacity onPress={clear}>
                        <View style={styles.iconBox}>
                            <Feather name="x-circle" size={15} color={constants.colors.skeleton} />
                        </View>
                    </TouchableOpacity>
                    : <View></View>}
                <View style={styles.iconBox}>

                    {loading ? <ActivityIndicator size="large" size={15} /> : <View />}
                </View>
            </View>
        </View>
    );

}
