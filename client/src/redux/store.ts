import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favoritesSlice";
import postsReducer from "./slices/postsSlice";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        posts: postsReducer,
        loading: loadingReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
