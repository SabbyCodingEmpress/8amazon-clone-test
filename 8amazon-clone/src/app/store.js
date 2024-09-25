import { configureStore } from "@redux/toolkit";
import basketReducer from "../slices/basketSliec";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});

