import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabScreens from './BottomNavigation'
import { DrawerContent } from '../components/Drawer/DrawerContent';

const Drawer = createDrawerNavigator();



export default DrawerScreen = () => (
    <Drawer.Navigator initialRouteName="Profile" drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Search" component={BottomTabScreens} />
    </Drawer.Navigator>

);



