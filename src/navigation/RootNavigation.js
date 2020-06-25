import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { translate } from 'react-i18next';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import AuthStackScreen from './AuthNavigation';
import { connect, useSelector } from 'react-redux';
import DrawerScreen from './DrawerNavigation';

import { DarkTheme, LightTheme } from '../assets/constants/Themes';

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => {

    return (
        <RootStack.Navigator headerMode="none" >
            {userToken && userToken != undefined ? (
                <RootStack.Screen
                    name="App"
                    component={DrawerScreen}
                    options={{
                        animationEnabled: false
                    }}
                />
            ) : (
                    <RootStack.Screen
                        name="Auth"
                        component={AuthStackScreen}
                        options={{
                            animationEnabled: false
                        }}
                    />
                )}
        </RootStack.Navigator>
    )
};
let ColorScheme = (props) => {

    const scheme = useColorScheme();
    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
            {props.children}
        </NavigationContainer>
    )
}


class RootNavigation extends React.Component {

    render() {

        return (
            <AppearanceProvider>
                <ColorScheme >

                    <RootStackScreen userToken={this.props.accessToken} />
                </ColorScheme>
            </AppearanceProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        accessToken: state.AuthenticationReducer.accessToken,
    }
}
export default connect(mapStateToProps)(RootNavigation);
