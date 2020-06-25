import React from 'react';
import { View, Image } from 'react-native';
export default Loader = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100,
        }}>

            <Image source={require('../assets/images/placeholder.png')} resizeMode='contain' style={{
                width: '100%',
                height: '100%'
            }}></Image>


        </View>
    );
}