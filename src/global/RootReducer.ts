import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { MangaAPI } from "./MangaAPI";
import { CartReducer } from "./CartSlice";

export const RED = configureStore({
    reducer: {
        cart: CartReducer,
        [MangaAPI.reducerPath]: MangaAPI.reducer
    },  // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(MangaAPI.middleware)
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;



