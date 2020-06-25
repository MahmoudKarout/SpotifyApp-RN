import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import * as AuthAction from '../../redux/actions/Authorisation';
import { DrawerItem } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function DrawerContent() {
    const { colors } = useTheme();
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{
                marginBottom: 15,

            }}>


                <DrawerItem
                    icon={() => (
                        <FontAwesome name="sign-out" size={24} color={colors.text} />
                    )}
                    label="Sign Out"
                    onPress={() => { dispatch(AuthAction.LogoutAction()) }}
                />



            </View>
        </SafeAreaView>
    )
}