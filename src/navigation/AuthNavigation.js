
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/login_screen';


const AuthStack = createStackNavigator();

export default AuthStackScreen = () => (

    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen}
            options={{
                title: 'Login',
                headerShown: false,
                headerTitleStyle: {

                    fontWeight: 'bold',
                },
            }}
        />
    </AuthStack.Navigator >

);