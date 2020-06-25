import { createStore, applyMiddleware, combineReducers } from 'redux'
import AuthenticationReducer from '../reducers/AuthenticationReducer';
import UserInfoReducer from '../reducers/UserInfoReducer';
import thunk from 'redux-thunk'

const Store = createStore(combineReducers(
    {
        AuthenticationReducer, UserInfoReducer

    }), applyMiddleware(thunk))

export default Store;

