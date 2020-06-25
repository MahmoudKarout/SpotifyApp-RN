import React from 'react';
import { View, FlatList, Keyboard, ActivityIndicator } from 'react-native';

const GridView = ({ renderComponent, response, colNumber = 2, loading, handleEnd }) => {
    return (
        <FlatList data={response}
            onScroll={() => { Keyboard.dismiss() }}
            renderItem={renderComponent}
            numColumns={colNumber}
            onEndReached={handleEnd}
            onEndReachedThreshold={0}
            ListFooterComponent={() =>
                loading
                    ? null
                    : <ActivityIndicator size="large" />}
            keyExtractor={(item, index) => index.toString()}
        >
        </FlatList>
    );
}

export const GridViewRender = (data, ComponentToRender, loading, handleEnd) => {

    if (Object.keys(data).length && data.length) {
        return (
            <GridView
                response={data}
                renderComponent={ComponentToRender}
                loading={loading}
                handleEnd={handleEnd}
            />
        );
    }
};
