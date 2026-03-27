import {configureStore  } from "@reduxjs/toolkit";
import searchReducer from "./Features/SearchSlice";
import collectionReducer from './Features/CollectionSlice'
export const store = configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
})
