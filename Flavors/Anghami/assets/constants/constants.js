
import { Dimensions } from 'react-native';



export const constants =
{
    Dimensions: {
        screenWidth: Math.round(Dimensions.get('window').width),
        screenHeight: Math.round(Dimensions.get('window').width),
    },

    SLOGAN: 'visualize your data',
    Fonts: {


        //  Font1_Bold_dir: require('../assets/fonts/CircularStd-Bold.ttf'),
        //  Font1_Book_dir: require('../assets/fonts/CircularStd-Book.ttf'),
        CCBlack: 'CC-black',
        CCBold: 'CC-bold',
        CCBook: 'CC-book',
    },
    Navigation: {
        Tab1: 'Profile',
        Tab2: 'Search',
        Tab3: 'Artist Albums',
        Tab1_Title: 'Profile',
        Tab2_Title: 'Search Artist',
    },
    SearchPlaceHolder: "I'm looking for...",
    UserInfo: {
        PLAYLIST: 'PLAYLIST',
        FOLLOWERS: 'FOLLOWERS',
        FOLLOWING: 'FOLLOWING'
    },
    Top: {
        TOP1: 'Awsome Tracks',
        TOP2: 'Top Artists of all Time',
    },
    Buttons: {
        REFRESH: 'Refresh',
        LOGIN: 'LOGIN',
        LOGOUT: 'LOGOUT',
    },
    colors:
    {
        accent: "#1DB954",
        commonText: '#9b9b9b',
        skeleton: '#C4C4C4'
    }

}
