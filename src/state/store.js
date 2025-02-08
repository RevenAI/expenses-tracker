import {
    configureStore
} from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import hoverReducer from "./slices/hoverSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        hover: hoverReducer,
    }
});