import {
    configureStore
} from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import hoverReducer from "./slices/hoverSlice";
import apiReducer from "./slices/apiSlice";

export const store = configureStore({
    reducer: {
        api: apiReducer,
        sidebar: sidebarReducer,
        hover: hoverReducer,
    }
});