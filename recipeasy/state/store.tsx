import {legacy_createStore as createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import reducer from '../redux/configstore';


export const store = createStore(
    reducer,
    {},
    applyMiddleware(thunk)
)

export type RootState =ReturnType<typeof store.getState>;