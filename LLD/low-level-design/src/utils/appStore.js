import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../utils/chatSlice";

const store = configureStore({
    reducer: {
        chat: chatReducer
    }
});

export default store;
