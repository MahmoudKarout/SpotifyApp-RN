
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { ArtistCard } from '../../components/artistCard/ArtistCard';
import SearchBar from '../../components/searchBar/SearchBar';
import Axios from 'axios';
import { GridViewRender } from '../../components/gridView/GridList';
import { constants } from '../../assets/constants/constants';
import * as AuthAction from '../../redux/actions/Authorisation';
import Credentials from '../../utils/config';
import { useDispatch } from 'react-redux';
import ErrorButton from '../../components/errorButton/ErrorButton';
import DATA_Requests from '../../api/Data_Api';
import { useTheme } from '@react-navigation/native';
import { styles } from './Search_styles';



function SearchScreen({ navigation: { navigate } }) {

    const [query, setQuery] = useState(null);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [offset, setOffset] = useState(0);
    const dispatch = useDispatch();
    const { colors, logo } = useTheme();
    let cancel = '';
    const flatlist = useRef(null);

    useEffect(() => {


        if (query) {
            setMessage('');
            fetchSearchResults(query, offset);
            setLoading(true);
            setOffset(0);


        }
        if (query == "") {
            setOffset(0);
            setMessage('');
            setResults([]);
        }
        if (offset > 0) {
            console.log('Loading...')
            fetchSearchResults(query, offset);

        }

    }, [query, offset]);

    const handleEnd = () => {
        setOffset(offset + 15);
    };
    const fetchSearchResults = (query, offset) => {
        DATA_Requests.API_SEARCH(query, offset, cancel)
            .then(res => {
                const resultNotFoundMsg = !res.data.artists.items.length ? `NO RESULTS FOUND for ${query}` : '';
                setMessage(resultNotFoundMsg);
                if (results && offset > 0) {

                    setResults(results.concat(res.data.artists.items))

                } else {
                    setResults(res.data.artists.items)

                }

                setLoading(false);
            }).catch(
                error => {

                    if (Axios.isCancel(error) || error) {
                        setLoading(false);
                        setMessage('SOMETHING WENT WRONG');
                    }
                    console.log(error);
                }
            )
    }
    const componentToRender = (result) => (

        <View style={{ flex: 1, flexDirection: "column", marginBottom: 1 }}>
            {result ? <ArtistCard dimensions={0.3} result={result} nav={() => { navigate(constants.Navigation.Tab3, { id: result.item.id, artistName: result.item.name }) }} /> : <View></View>}
        </View>
    );

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }} >
            <StatusBar barStyle="auto" />
            <SearchBar placeholder={constants.SearchPlaceHolder} loading={loading} query={query} inputchange={(text) => {
                setQuery(text);
            }} clear={() => {
                setQuery(null);
                setResults([]);
                setOffset(0);

            }} />


            {results ?
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

                    {!message ? <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
                        {GridViewRender(results, componentToRender, loading, handleEnd, flatlist)}


                    </View> :
                        (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} ><ErrorButton message={message} pressFunction={() => { dispatch(AuthAction.RefreshTokenAction(Credentials)) }} /></View>)
                    }
                </View> : <View></View>
            }
        </View>

    );
}
export default SearchScreen;


