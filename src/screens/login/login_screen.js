import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import * as AuthAction from '../../redux/actions/Authorisation';
import Credentials from '../../utils/config';
import { constants } from '../../assets/constants/constants';
import { useTheme } from '@react-navigation/native';
import i18n from 'i18n-js';
import { styles } from './login_styles';


const LoginScreen = () => {

    const dispatch = useDispatch();
    const { colors, dark } = useTheme();
    return (
        <View style={{ ...styles.container, backgroundColor: colors.primary }}>
            <View style={styles.innerContainer}>
                <View style={styles.sloganContainer}>
                    <Image source={dark ? require(`../../assets/images/DarkModeImages/Logo.png`) : require(`../../assets/images/LightModeImages/Logo.png`)} style={styles.logo} resizeMode="contain" />
                    <Text numberOfLines={1} style={{
                        fontFamily: constants.Fonts.CCBlack,
                        color: colors.text,
                        fontSize: 15,
                        letterSpacing: 1
                    }}>{i18n.t('Visualize your data')}</Text></View>
                <TouchableOpacity style={{ ...styles.button, backgroundColor: colors.text }} onPress={() => { dispatch(AuthAction.LoginAction()) }} >
                    <Text style={{ ...styles.buttonText, color: colors.primary }}>{i18n.t('Login')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}






export default LoginScreen;

