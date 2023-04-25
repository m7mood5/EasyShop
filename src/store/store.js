import { configureStore, combineReducers } from "@reduxjs/toolkit";
import types from "./typeSlice";
import items from "./itemSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cart from "./cartSlice";

const persistConfig = {
    key: 'ecom',
    version: 1,
    storage,
    whitelist: ['cart'],
}
const rootReducer = combineReducers({ items, types, cart })

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

const persistor = persistStore(store)


export  {store,persistor};