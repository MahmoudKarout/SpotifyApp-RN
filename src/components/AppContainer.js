import React, { Component } from 'react';


import RootNavigation from '../navigation/RootNavigation';


import useCachedResources from '../utils/useCachedResources';


function AppContainer() {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <RootNavigation />
        );
    }
}



export default AppContainer;

