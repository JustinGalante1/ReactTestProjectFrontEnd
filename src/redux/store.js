import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import uiReducer from './reducers/uiReducer';

const initialState = {};

const middleWare = [thunk];

const reducers = combineReducers({
    user: userReducer, //everything that comes form the userReducer will be stored in the user object inside the state
    data: dataReducer,
    UI: uiReducer,
});

const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleWare), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;