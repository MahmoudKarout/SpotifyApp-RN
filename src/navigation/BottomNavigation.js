import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/home_screen';
import SearchScreen from '../screens/Seacrch/search_screen';
import ArtistAlbum from '../screens/Albums/Artist_album';
import { useTheme } from '@react-navigation/native';
import { constants } from '../assets/constants/constants';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from 'react-native-elements';



const Tabs = createBottomTabNavigator();
const Tabs2 = createStackNavigator();
const ProfileTabs = createStackNavigator();


const SearchTab = () => (
    <Tabs2.Navigator screenOptions={{
        headerStyle: {
            shadowColor: 'transparent',
            shadowColor: 'transparent',
            elevation: 0,
        },
        headerTitleStyle: {
            fontFamily: constants.Fonts.CCBold,
        },
    }} >
        <Tabs2.Screen name={constants.Navigation.Tab2_Title} component={SearchScreen} />
        <Tabs2.Screen name="Artist Albums" component={ArtistAlbum}
            options={({ route }) => ({
                title: route.params.artistName + "'s Albums",
                headerBackTitle: null,
            })} />
    </Tabs2.Navigator >

);
const ProfileTab = () => {
    const { colors, logo } = useTheme();
    return (
        <ProfileTabs.Navigator screenOptions={{
            headerStyle: {
                shadowColor: 'transparent',
                elevation: 0, // remove shadow on Android
            },
            headerTitleStyle: {

                fontFamily: constants.Fonts.CCBold,

            },
        }} >
            <Tabs2.Screen name={constants.Navigation.Tab1} component={HomeScreen} options={{
                title: constants.Navigation.Tab1_Title,
                headerStyle: {
                    // backgroundColor: colors.background,
                    shadowColor: 'transparent',
                    elevation: 0,

                },

                headerTitleStyle: {

                    fontFamily: constants.Fonts.CCBold,

                },
            }} />

        </ProfileTabs.Navigator >
    );
}


export default BottomTabScreens = () => {

    const { colors, logo } = useTheme();
    return (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: colors.company,
                keyboardHidesTabBar: true,


            }}>
            <Tabs.Screen name={constants.Navigation.Tab1} component={ProfileTab}

                options={{
                    tabBarLabel: constants.Navigation.Tab1,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="account-circle" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name={constants.Navigation.Tab2}
                options={{
                    tabBarLabel: constants.Navigation.Tab2,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-search" color={color} size={size} />
                    ),
                }}
                component={SearchTab}

            />
        </Tabs.Navigator>

    )
};
