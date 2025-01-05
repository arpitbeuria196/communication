import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: [],

    reducers: {
        addChat: (state, action) => {
            
            state.push(...action.payload);

            if (state.length > 20) {
                state.shift(); 
            }
        }
    }
});

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
