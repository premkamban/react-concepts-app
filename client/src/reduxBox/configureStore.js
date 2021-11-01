import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from './configureSlice'

const reducer = combineReducers({
    counterSlice
})

const store = configureStore({
    reducer
});

export default store;