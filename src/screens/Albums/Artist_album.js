
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { AlbumCard } from '../../components/albumCard/AlbumCard';
import DATA_Requests from '../../api/Data_Api';



export default function ArtistAlbum({ route }) {

    const [results, setResults] = useState(null);

    const fetchRequest = () => {
        DATA_Requests.API_ARTIST_ALBUM(route.params.id)
            .then(res => {
                setResults(res.data.items);
            })
            .catch(e => {
                console.log(e);

            })
    }
    const renderResults = () => {

        if (Object.keys(results).length && results.length) {
            return (
                <FlatList data={results}
                    renderItem={(result = results) => (
                        <View style={{ flex: 1, flexDirection: 'column', marginBottom: 1 }}>
                            {result ? <AlbumCard result={result} /> : <View></View>}
                        </View>
                    )}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                >
                </FlatList>
            );
        }
    };


    useEffect(() => {
        fetchRequest();
    }, []);


    return (
        <View style={{ flex: 1, flexDirection: "row" }}  >
            {results ? renderResults() : <View></View>}
        </View>


    );
}

